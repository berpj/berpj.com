import {clamp} from './rules.mjs';
import {contactImpact} from './collisions.js';
import {Vector3, Euler} from 'three';

const tilt = new Euler(0,0,0,'YXZ');
const pivotOffset = new Vector3();
const blend = (a,b,t)=>a+(b-a)*t;
export const VEHICLE_TUNING = Object.freeze({
  topSpeed: 120/3.6, burstTopSpeed: 180/3.6, acceleration: 10, burstAcceleration: 50,
  brake: 60, hardBrake: 72, burstSteering: .48,
  reverseDelay: .12, reverseAcceleration: 8, reverseTopSpeed: 7,
  steeringGain: 1.5, steeringResponse: 12, steeringRampSpeed: 2.5,
});

export class Vehicle {
  constructor(world, RAPIER, model, spawn) {
    this.world = world;
    this.model = model;
    this.time = 0;
    this.body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(spawn.x, .62, spawn.z)
      .enabledRotations(false, false, false).setLinearDamping(.02).setCcdEnabled(true));
    this.collider = world.createCollider(RAPIER.ColliderDesc.cuboid(.63, .55, 1.15)
      .setMass(580).setFriction(0).setRestitution(.08), this.body);
    this.body.userData={vehicleType:'tukTuk'};
    this.reset(spawn);
  }

  reset(p) {
    this.heading = p.heading ?? this.heading;
    this.body.setTranslation({x:p.x, y:.62, z:p.z}, true);
    this.body.setRotation({x:0, y:Math.sin(this.heading/2), z:0, w:Math.cos(this.heading/2)}, true);
    this.body.setLinvel({x:0, y:0, z:0}, true);
    this.body.setAngvel({x:0, y:0, z:0}, true);
    this.speed = this.actualSpeed = this.expectedSpeed = 0;
    this.wheelie = this.visualSteer = this.wheelAngle = 0;
    this.bursting = this.gearBurst = false;
    this.driftTime = this.brakeHold = this.slide = this.turnRate = this.steer = 0;
    this.drifting=false;this.slipAngle=this.driftIntensity=0;
    this.lastDrive = this.lastReverse = -10;
    this.releaseTime = 1;
    this.previousThrottle = this.autoReverse = false;
    this.impactTime=0;this.impactRoll=0;this.impactPitch=0;this.contactTimes=new Map();this.lastImpact=null;
    this.safe = {...p, heading:this.heading};
    this.sync(0);
  }

  step(dt, input, locked=false) {
    this.previousPose = {...this.pose};
    this.time += dt;
    const wasBursting = this.bursting;
    this.driftTime = Math.max(0, this.driftTime-dt);
    this.impactTime=Math.max(0,this.impactTime-dt);
    let event = null;
    const velocity = this.body.linvel();
    let forward = {x:-Math.sin(this.heading), z:-Math.cos(this.heading)};
    let right = {x:Math.cos(this.heading), z:-Math.sin(this.heading)};
    let speed = velocity.x*forward.x + velocity.z*forward.z;
    let lateral = velocity.x*right.x + velocity.z*right.z;
    if(!input.throttle) this.releaseTime += dt;
    const rising = input.throttle && !this.previousThrottle;
    if(input.reverseEdge) this.lastReverse = this.time;
    if(input.driveEdge) {
      this.lastDrive = this.time;
      if(!locked && this.time-this.lastReverse<.22 && Math.abs(speed)>5.5) {
        if(Math.abs(input.steer)>.35) {this.driftTime=1.8; event='drift';}
        else this.gearBurst=true;
      }
    }
    const canBurst=!locked&&!input.brake&&input.gear!==-1&&speed>-.4;
    if(rising && this.releaseTime>.06 && this.time-this.lastDrive<.18 && canBurst)this.gearBurst=true;
    // Shift, touch and gamepad sustain turbo for as long as they are held.
    // Gear-combo bursts last while accelerating; neither path has a cooldown.
    if(!canBurst||!input.throttle)this.gearBurst=false;
    this.bursting=canBurst&&!!(input.dash||this.gearBurst);
    if(this.bursting&&!wasBursting)event='dash';
    if(input.throttle) this.releaseTime=0;
    this.previousThrottle=!!input.throttle;

    // A brief settled stop engages reverse once; holding brake keeps it engaged.
    // Include sideways motion so braking out of a drift still stops before reversing.
    if(!input.brake || locked || input.gear===-1) {
      this.brakeHold=0;
      this.autoReverse=false;
    } else if(!this.autoReverse && Math.hypot(speed,lateral)<.6) {
      this.brakeHold+=dt;
      if(this.brakeHold>=VEHICLE_TUNING.reverseDelay) this.autoReverse=true;
    } else if(!this.autoReverse) this.brakeHold=0;
    const reverse = input.gear===-1 || this.autoReverse;
    const throttle = this.autoReverse || this.bursting ? 1 : input.throttle;
    const braking = input.brake && !this.autoReverse;
    const drift = !locked && !braking && !reverse && (input.drift||this.driftTime>0) && speed>4.5 && Math.abs(input.steer)>.08;
    this.drifting=drift;
    this.slide += (Number(drift)-this.slide)*Math.min(1, dt*7);

    if(locked) {
      speed*=Math.max(0,1-dt*12);
      lateral*=Math.max(0,1-dt*12);
      this.turnRate=0;
    } else {
      const steerScale=clamp(Math.abs(speed)/VEHICLE_TUNING.steeringRampSpeed,0,1)*(1.55-Math.min(Math.abs(speed)/34,.78))*VEHICLE_TUNING.steeringGain;
      const burstSteer=this.bursting?VEHICLE_TUNING.burstSteering:1;
      const targetTurn=-input.steer*steerScale*(speed<0?-1:1)*(drift?1.45:1)*burstSteer;
      this.turnRate+=(targetTurn-this.turnRate)*Math.min(1,dt*VEHICLE_TUNING.steeringResponse);
      const yaw=this.turnRate*dt;
      this.heading+=yaw;
      if(drift){
        // Let the chassis rotate across its travel direction instead of rotating
        // its velocity with it. Rear grip then catches the slide progressively.
        const c=Math.cos(yaw),s=Math.sin(yaw),oldSpeed=speed;
        speed=speed*c-lateral*s;
        lateral=lateral*c+oldSpeed*s;
      }
      const acceleration=this.bursting?VEHICLE_TUNING.burstAcceleration:speed<VEHICLE_TUNING.topSpeed?VEHICLE_TUNING.acceleration:0;
      if(!braking) speed+=throttle*(reverse?(speed>-VEHICLE_TUNING.reverseTopSpeed?-VEHICLE_TUNING.reverseAcceleration:0):acceleration)*dt;
      if(braking) {
        const brake=(this.time-this.lastReverse<.15||this.slide>.3?VEHICLE_TUNING.hardBrake:VEHICLE_TUNING.brake)*dt;
        speed=Math.abs(speed)<brake?0:speed-Math.sign(speed)*brake;
      }
      if(!throttle&&!braking) speed*=Math.max(0,1-dt*.3);
      if(reverse) speed=Math.max(speed,-VEHICLE_TUNING.reverseTopSpeed);
      else if(speed>VEHICLE_TUNING.topSpeed&&!this.bursting) speed-=Math.min(speed-VEHICLE_TUNING.topSpeed,dt*4);
      speed=clamp(speed,-VEHICLE_TUNING.reverseTopSpeed,VEHICLE_TUNING.burstTopSpeed);
      lateral*=Math.exp(-dt*(this.impactTime>0?2.2:drift?1.45:12));
      if(drift) lateral=clamp(lateral,-Math.abs(speed)*.8,Math.abs(speed)*.8);
      const planarSpeed=Math.hypot(speed,lateral);
      if(planarSpeed>VEHICLE_TUNING.burstTopSpeed){const limit=VEHICLE_TUNING.burstTopSpeed/planarSpeed;speed*=limit;lateral*=limit;}
    }
    forward={x:-Math.sin(this.heading),z:-Math.cos(this.heading)};
    right={x:Math.cos(this.heading),z:-Math.sin(this.heading)};
    this.body.setRotation({x:0,y:Math.sin(this.heading/2),z:0,w:Math.cos(this.heading/2)},true);
    this.body.setLinvel({x:forward.x*speed+right.x*lateral,y:velocity.y,z:forward.z*speed+right.z*lateral},true);
    this.body.setAngvel({x:0,y:0,z:0},true);
    this.expectedSpeed=Math.hypot(speed,lateral);
    this.speed=speed;
    this.steer=input.steer;
    this.visualSteer+=(input.steer-this.visualSteer)*(1-Math.exp(-16*dt));
    const targetWheelie=this.bursting&&!reverse&&!locked&&speed>2
      ? .36*clamp(speed/9,0,1):0;
    this.wheelie+=(targetWheelie-this.wheelie)*(1-Math.exp(-(targetWheelie>this.wheelie?10:13)*dt));
    return event;
  }

  sync(dt) {
    const p=this.body.translation(),v=this.body.linvel();
    const hit=dt>0?contactImpact(this.world,this.collider):null;
    let impact=null;
    if(hit&&this.time-(this.contactTimes.get(hit.handle)??-10)>.55){
      impact=hit;this.contactTimes.set(hit.handle,this.time);this.lastImpact=hit;this.impactTime=.48;
      const side=hit.normal.x*Math.cos(this.heading)-hit.normal.z*Math.sin(this.heading);
      this.impactRoll=clamp(side*hit.deltaV*.018,-.16,.16);
      this.impactPitch=clamp(hit.deltaV*.013,0,.1);
      if(hit.serious)this.bursting=this.gearBurst=false;
    }
    this.actualSpeed=Math.hypot(v.x,v.z);
    const lateral=v.x*Math.cos(this.heading)-v.z*Math.sin(this.heading);
    const forward=-v.x*Math.sin(this.heading)-v.z*Math.cos(this.heading);
    this.slipAngle=this.actualSpeed>1?Math.atan2(lateral,Math.abs(forward)):0;
    this.driftIntensity=this.impactTime>0?0:this.slide*clamp((Math.abs(this.slipAngle)-.07)/.42,0,1)*clamp((this.actualSpeed-4)/6,0,1);
    const wobble=Math.sin((.48-this.impactTime)*23)*this.impactTime/.48;
    this.wheelAngle-=this.speed*dt/.252;
    this.pose={x:p.x,y:p.y,z:p.z,heading:this.heading,
      roll:this.visualSteer*Math.min(this.actualSpeed/95,.085)*(1+this.slide*.5)+this.impactRoll*wobble,
      pitch:this.wheelie+this.impactPitch*wobble,steer:this.visualSteer,wheel:this.wheelAngle,slide:this.slide,slip:this.slipAngle};
    if(!dt||!this.previousPose){this.previousPose={...this.pose};this.render(1);}
    return impact;
  }

  // Physics stays at 60 Hz; every display frame gets a continuous chassis pose.
  render(alpha=1) {
    const a=this.previousPose,b=this.pose,t=clamp(alpha,0,1);
    if(!a||!b)return;
    const heading=a.heading+Math.atan2(Math.sin(b.heading-a.heading),Math.cos(b.heading-a.heading))*t;
    const pitch=blend(a.pitch,b.pitch,t),roll=blend(a.roll,b.roll,t),steer=blend(a.steer,b.steer,t);
    this.renderPosition??=new Vector3();
    this.renderPosition.set(blend(a.x,b.x,t),blend(a.y,b.y,t),blend(a.z,b.z,t));
    this.renderHeading=heading;
    this.model.position.copy(this.renderPosition);this.model.position.y-=.58;
    this.model.rotation.set(pitch,heading,roll,'YXZ');
    // Rotate about the rear axle so a burst lifts the front wheel, not all three.
    const pivot=this.model.userData.rearAxlePivot||{x:0,y:.252,z:.79};
    pivotOffset.copy(pivot).applyEuler(tilt.set(pitch,0,roll,'YXZ'));
    pivotOffset.set(pivot.x-pivotOffset.x,pivot.y-pivotOffset.y,pivot.z-pivotOffset.z);
    const c=Math.cos(heading),s=Math.sin(heading),dx=pivotOffset.x*c+pivotOffset.z*s,dz=pivotOffset.z*c-pivotOffset.x*s;
    this.model.position.x+=dx;this.model.position.y+=pivotOffset.y;this.model.position.z+=dz;
    const refs=this.model.userData;
    for(const wheel of refs.wheels||[]) wheel.rotation.x=blend(a.wheel,b.wheel,t);
    if(refs.steering) refs.steering.rotation.y=-steer*.42-blend(a.slip,b.slip,t)*blend(a.slide,b.slide,t)*.65;
    for(const passenger of refs.passengers||[]) {
      if(passenger.userData.body) passenger.userData.body.rotation.z=-steer*.10*(1+blend(a.slide,b.slide,t));
    }
  }
  get position() {return this.body.translation();}
}

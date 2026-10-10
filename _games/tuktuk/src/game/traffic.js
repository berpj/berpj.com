import * as THREE from 'three';
import {createTrafficCar} from '../assets/trafficCar.js';
import {createMotorbike} from '../assets/motorbike.js';
import {distance,seeded} from './rules.mjs';
import {COLLISION_PROFILES} from './collisions.js';

const oneWay = s => ['yes','1','true','-1'].includes(s.road.tags.oneway);
export function trafficPose(car) {
  const s=car.segment, sign=car.reverse?-1:1;
  const at=car.reverse?s.len-car.progress:car.progress;
  const dir={x:s.dir.x*sign,z:s.dir.z*sign};
  const lanes=Math.max(1,parseInt(s.road.tags.lanes)||Math.round(s.road.width/3));
  const lane=car.lane%lanes;
  const spacing=Math.min(3,s.road.width/lanes);
  const offset=oneWay(s)?((lanes-1)/2-lane)*spacing:Math.min(2.2,s.road.width*.25);
  return {x:s.a.x+s.dir.x*at+dir.z*offset,z:s.a.z+s.dir.z*at-dir.x*offset,
    heading:Math.atan2(-dir.x,-dir.z),dir};
}

export class Traffic {
  constructor(scene,map,world,RAPIER,{mobile=false}={}) {
    this.map=map;
    this.world=world;
    this.random=seeded(482);
    this.cars=[];
    this.elapsed=0;
    this.spawnSegments=map.segments.filter(s=>s.len>8&&s.road.width>=6.5&&!s.road.tags.service);
    const colors=['#e9e7dd','#787c80','#ed4d91','#f2ca35','#b63027','#278364','#397c9d','#d6d9de'];
    const prototypes=new Map();
    for(let i=0;i<(mobile?44:64);i++) {
      const type=i%10<4?'motorcycle':i%12===10?'bus':i%3===0?'taxi':'car';
      const color=type==='taxi'?(i%2?'yellow-green':'#e7388a'):type==='bus'?'#c24633':colors[i%colors.length];
      const key=`${type}:${color}`;
      if(!prototypes.has(key)) prototypes.set(key,type==='motorcycle'?createMotorbike(THREE,color):createTrafficCar(THREE,color,type));
      const mesh=prototypes.get(key).clone(true);
      scene.add(mesh);
      const body=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic()
        .enabledTranslations(true,false,true).enabledRotations(false,false,false)
        .setLinearDamping(.03).setCcdEnabled(true));
      body.userData={vehicleType:type};
      const height=type==='motorcycle'?.65:type==='bus'?1.4:.7;
      const collider=world.createCollider(RAPIER.ColliderDesc.cuboid(mesh.userData.width/2,height,mesh.userData.length/2)
        .setTranslation(0,height+.1,0).setMass(COLLISION_PROFILES[type].mass).setFriction(.12).setRestitution(type==='motorcycle'?.16:.06),body);
      const car={id:i,mesh,body,collider,type,lane:i%3,progress:0,speed:0,
        cruise:1.25*(type==='bus'?9.75:type==='motorcycle'?15+this.random()*4.5:10.5+this.random()*4.5),
        segment:null,reverse:false,distance:Infinity,nearMissTime:0,position:null,dir:null,yaw:0,wheelRoll:0,
        tyres:mesh.getObjectByName('traffic-tyres'),rims:mesh.getObjectByName('traffic-rims')};
      this.cars.push(car);
    }
    this.reset(map.spawn);
  }

  reset(player) {
    for(const car of this.cars) {car.position=null;car.segment=null;}
    for(const car of this.cars) this.place(car,player,true);
  }

  place(car,player,initial=false) {
    const primary=this.map.main.filter(s=>distance(s.a,player)<310&&distance(s.b,player)>15);
    const nearby=this.spawnSegments.filter(s=>distance(s.a,player)<280&&distance(s.b,player)>25);
    const source=car.id%5<4&&primary.length?primary:nearby.length?nearby:primary;
    if(!source.length) return false;
    for(let attempt=0;attempt<100;attempt++) {
      const s=source[Math.floor(this.random()*source.length)];
      const reverse=s.road.tags.oneway==='-1'||!oneWay(s)&&this.random()<.5;
      const candidate={...car,segment:s,reverse,progress:this.random()*s.len};
      const pose=trafficPose(candidate),d=distance(pose,player);
      if(d<(initial?24:140)||d>320)continue;
      if(this.map.layout&&!this.map.layout.clearance.isRectangleClearOfBuildings({x:pose.x,z:pose.z,width:car.mesh.userData.width,depth:car.mesh.userData.length,yaw:pose.heading},.15))continue;
      if(this.cars.some(other=>other!==car&&other.position&&distance(other.position,pose)<(other.mesh.userData.length+car.mesh.userData.length)/2+5))continue;
      Object.assign(car,{segment:s,reverse,progress:candidate.progress,speed:car.cruise,position:{x:pose.x,z:pose.z},dir:pose.dir,yaw:pose.heading,distance:d,nearMissTime:0});
      // Respawns have no carried velocity or physical sweep through the district.
      car.body.setTranslation({x:pose.x,y:0,z:pose.z},true);
      car.body.setRotation({x:0,y:Math.sin(pose.heading/2),z:0,w:Math.cos(pose.heading/2)},true);
      car.body.setLinvel({x:pose.dir.x*car.cruise,y:0,z:pose.dir.z*car.cruise},true);
      car.body.setAngvel({x:0,y:0,z:0},true);
      car.wheelRoll=0;
      car.pose={x:pose.x,z:pose.z,yaw:pose.heading,lean:0,wheel:0};car.previousPose={...car.pose};
      car.mesh.position.set(pose.x,.04,pose.z);car.mesh.rotation.y=pose.heading;
      return true;
    }
    return false;
  }

  advance(car,amount) {
    car.progress+=amount;
    for(let hops=0;car.progress>car.segment.len&&hops<8;hops++) {
      const s=car.segment,end=car.reverse?s.ia:s.ib,previous=car.reverse?s.ib:s.ia;
      let candidates=(this.map.legalGraph.get(end)||[]).filter(e=>e.to!==previous&&e.segment.road.width>=5.5);
      if(!candidates.length)candidates=(this.map.legalGraph.get(end)||[]).filter(e=>e.segment.road.width>=5.5);
      if(!candidates.length)return false;
      const current={x:s.dir.x*(car.reverse?-1:1),z:s.dir.z*(car.reverse?-1:1)};
      const ranked=candidates.map(e=>{const sign=e.segment.ia===end?1:-1;return {e,score:current.x*e.segment.dir.x*sign+current.z*e.segment.dir.z*sign+(e.segment.road.id===s.road.id?.6:0)+this.random()*.4};}).sort((a,b)=>b.score-a.score);
      const next=ranked[0].e;
      car.progress-=s.len;
      car.segment=next.segment;
      car.reverse=next.segment.ib===end;
    }
    return true;
  }

  step(dt,player) {
    this.elapsed+=dt;
    for(const car of this.cars) {
      if(!car.segment||!car.position||car.distance>340) {
        this.place(car,player);
        if(!car.segment) {car.mesh.visible=false;car.body.setEnabled(false);continue;}
      }
      car.mesh.visible=true;car.body.setEnabled(true);
      car.previousPose={...car.pose};
      const actual=car.body.translation();car.position={x:actual.x,z:actual.z};
      const p=car.position,dir=car.dir,velocity=car.body.linvel();
      car.speed=Math.max(0,velocity.x*dir.x+velocity.z*dir.z);
      let desired=car.cruise;
      // Faster vehicles need to notice a queue before reaching braking distance.
      const lookAhead=Math.max(30,car.speed*1.5+car.speed*car.speed/28);
      const avoid=(other,width,length,speed=0)=>{
        const dx=other.x-p.x,dz=other.z-p.z;
        const ahead=dx*dir.x+dz*dir.z,lateral=Math.abs(dx*dir.z-dz*dir.x);
        if(ahead<=0||ahead>lookAhead||lateral>(width+car.mesh.userData.width)*.5+.35)return;
        const gap=ahead-(length+car.mesh.userData.length)*.5;
        desired=Math.min(desired,Math.max(0,(gap-2.5)*.7),speed+Math.max(0,(gap-5)*.55));
      };
      for(const other of this.cars)if(other!==car&&other.position)avoid(other.position,other.mesh.userData.width,other.mesh.userData.length,other.speed);
      avoid(player,1.35,2.5,0);
      if(!this.advance(car,car.speed*dt)) {
        car.distance=Infinity;
        car.speed=0;
        continue;
      }
      const target=trafficPose(car);
      const delta=Math.atan2(Math.sin(target.heading-car.yaw),Math.cos(target.heading-car.yaw));
      car.yaw+=delta*Math.min(1,dt*6);car.dir={x:-Math.sin(car.yaw),z:-Math.cos(car.yaw)};
      // A force-limited lane controller allows actual mass and contact impulses
      // to move traffic. Scooters yield; a bus cannot be bulldozed like a sedan.
      const ex=target.x-p.x,ez=target.z-p.z;
      const side=ex*car.dir.z-ez*car.dir.x;
      const correction=Math.max(-3,Math.min(3,side*1.8));
      const alongError=ex*car.dir.x+ez*car.dir.z;
      const drive=Math.max(0,Math.min(car.cruise+1,desired+Math.max(-2,Math.min(1,alongError))));
      const goal={x:car.dir.x*drive+car.dir.z*correction,z:car.dir.z*drive-car.dir.x*correction};
      let ax=(goal.x-velocity.x)*2.8,az=(goal.z-velocity.z)*2.8;
      const acceleration=Math.hypot(ax,az),limit=desired<car.speed?18:6.4;
      if(acceleration>limit){ax*=limit/acceleration;az*=limit/acceleration;}
      const mass=COLLISION_PROFILES[car.type].mass;
      car.body.applyImpulse({x:ax*mass*dt,y:0,z:az*mass*dt},true);
      car.body.setRotation({x:0,y:Math.sin(car.yaw/2),z:0,w:Math.cos(car.yaw/2)},true);
      car.distance=distance(p,player);
    }
  }

  sync(player,dt=1/60) {
    for(const car of this.cars){
      if(!car.segment)continue;
      const p=car.body.translation(),v=car.body.linvel();
      car.position={x:p.x,z:p.z};car.distance=distance(p,player);
      const wheel=car.mesh.userData.wheelAnimation;
      if(wheel)car.wheelRoll-=(v.x*car.dir.x+v.z*car.dir.z)*dt/wheel.radius;
      car.pose={x:p.x,z:p.z,yaw:car.yaw,wheel:car.wheelRoll,lean:car.type==='motorcycle'?Math.max(-.28,Math.min(.28,(v.x*car.dir.z-v.z*car.dir.x)*.07)):0};
    }
  }

  render(alpha=1) {
    const matrix=new THREE.Matrix4(),rotation=new THREE.Quaternion(),axle=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI/2),axis=new THREE.Vector3(1,0,0),center=new THREE.Vector3(),scale=new THREE.Vector3(1,1,1);
    const lerp=(a,b)=>a+(b-a)*alpha;
    for(const car of this.cars){
      if(!car.segment||!car.pose)continue;
      const a=car.previousPose||car.pose,b=car.pose;
      car.mesh.position.set(lerp(a.x,b.x),.04,lerp(a.z,b.z));
      car.mesh.rotation.set(0,a.yaw+Math.atan2(Math.sin(b.yaw-a.yaw),Math.cos(b.yaw-a.yaw))*alpha,lerp(a.lean,b.lean),'YXZ');
      const wheel=car.mesh.userData.wheelAnimation;
      if(wheel&&car.tyres&&car.rims){
        for(let i=0;i<wheel.centers.length;i++){
          center.fromArray(wheel.centers[i]);rotation.setFromAxisAngle(axis,lerp(a.wheel,b.wheel));
          matrix.compose(center,rotation,scale.set(1,1,1));car.rims.setMatrixAt(i,matrix);
          rotation.multiply(axle);matrix.compose(center,rotation,scale.set(1,1,wheel.tyreAxialScale));car.tyres.setMatrixAt(i,matrix);
        }
        car.tyres.instanceMatrix.needsUpdate=true;car.rims.instanceMatrix.needsUpdate=true;
      }
    }
  }
}

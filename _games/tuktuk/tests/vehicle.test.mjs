import test from 'node:test';import assert from 'node:assert/strict';import RAPIER from '@dimforge/rapier3d-compat';import * as THREE from 'three';
import {Vehicle} from '../src/game/vehicle.js';await RAPIER.init();
function setup(){const world=new RAPIER.World({x:0,y:-9.81,z:0});world.createCollider(RAPIER.ColliderDesc.cuboid(10000,.1,10000).setTranslation(0,-.1,0).setFriction(0));const v=new Vehicle(world,RAPIER,new THREE.Group(),{x:0,z:0,heading:0});return {world,v,run(seconds,input){const events=[];for(let i=0;i<seconds*60;i++){events.push(v.step(1/60,{steer:0,gear:1,throttle:0,brake:0,...input}));world.step();v.sync(1/60);}return events;}};}
test('the chassis reaches 100 km/h in three seconds, stays grounded and stops short',()=>{const s=setup();s.run(3,{throttle:1});assert.ok(s.v.actualSpeed*3.6>100&&s.v.actualSpeed*3.6<110);assert.ok(s.v.position.z<-30);assert.ok(s.v.position.y>.5&&s.v.position.y<.65);const before=s.v.position.z;let elapsed=0;while(s.v.actualSpeed>.1&&elapsed<1){s.run(1/60,{brake:1});elapsed+=1/60;}assert.ok(s.v.actualSpeed<.1);assert.ok(elapsed<.65);assert.ok(Math.abs(s.v.position.z-before)<8);s.world.free();});
test('held burst lasts indefinitely and can restart on the very next tick',()=>{
  const s=setup();
  const events=s.run(15,{dash:true});
  assert.equal(events.filter(e=>e==='dash').length,1,'one launch sound/event per hold');
  assert.equal(s.v.bursting,true);assert.ok(s.v.actualSpeed*3.6>179);assert.ok(s.v.wheelie>.3);
  for(let i=0;i<20;i++){
    s.run(1/60,{});assert.equal(s.v.bursting,false);
    assert.equal(s.run(1/60,{dash:true})[0],'dash');assert.equal(s.v.bursting,true);
  }
  s.world.free();
});
test('normal throttle holds 120 km/h and held turbo reaches 180 before returning to cruise',()=>{
  const s=setup();s.run(20,{throttle:1});assert.ok(s.v.actualSpeed*3.6<=120.5&&s.v.actualSpeed*3.6>119);
  s.run(.5,{dash:true});assert.ok(s.v.actualSpeed*3.6>179&&s.v.actualSpeed*3.6<181);
  s.run(5,{throttle:1});assert.equal(s.v.bursting,false);assert.ok(s.v.actualSpeed*3.6<=120.5);s.world.free();
});
test('burst limits steering and drift, and releasing restores tight turns',()=>{
  for(const drift of [false,true]){
    const normal=setup(),boost=setup();
    for(const s of [normal,boost])s.run(4,{throttle:1});
    normal.run(.75,{throttle:1,steer:.8,drift});boost.run(.75,{dash:true,steer:.8,drift});
    assert.ok(Math.abs(boost.v.heading)<Math.abs(normal.v.heading)*.55);
    assert.ok(Math.abs(boost.v.heading)>Math.abs(normal.v.heading)*.35);
    const boostedTurn=Math.abs(boost.v.turnRate);
    boost.run(.6,{throttle:1,steer:.8,drift});
    assert.ok(Math.abs(boost.v.turnRate)>boostedTurn*1.8);
    assert.ok(boost.v.position.y>.5&&boost.v.position.y<.65);
    normal.world.free();boost.world.free();
  }
});
test('reverse movement is controllable and bounded',()=>{const s=setup();s.run(5,{gear:-1,throttle:1});assert.ok(s.v.position.z>15);assert.ok(s.v.actualSpeed<=7.1);s.run(2,{gear:-1,brake:1});assert.ok(s.v.actualSpeed<.1);s.world.free();});
test('steering and drift turn the chassis without destabilizing roll',()=>{const s=setup();s.run(2,{throttle:1});const before=s.v.heading;s.run(1,{throttle:1,steer:.5,drift:true});assert.ok(s.v.heading<before-.2);assert.ok(s.v.slide>.7);assert.ok(s.v.position.y>.5);s.world.free();});

test('holding the brake backs away from a wall continuously, then throttle drives forward',()=>{
  const s=setup();s.world.createCollider(RAPIER.ColliderDesc.cuboid(20,4,.1).setTranslation(0,4,-2));
  s.run(2,{throttle:1});const wallPosition=s.v.position.z;assert.ok(s.v.actualSpeed<.2);
  s.run(3,{brake:1,auto:true});assert.ok(s.v.position.z>wallPosition+9);assert.ok(s.v.speed< -6);
  // Check forward recovery before the faster acceleration reaches the wall again.
  const reversePosition=s.v.position.z;
  s.run(2.2,{throttle:1,auto:true});assert.ok(s.v.speed>3);assert.ok(s.v.position.z<reversePosition);assert.equal(s.v.autoReverse,false);s.world.free();
});
test('reset clears old recovery position, slide and reverse state',()=>{
  const s=setup();s.run(3,{brake:1,auto:true});s.v.safe={x:100,z:100,heading:2};s.v.slide=1;
  s.v.reset({x:4,z:7,heading:.4});assert.deepEqual(s.v.safe,{x:4,z:7,heading:.4});assert.equal(s.v.slide,0);assert.equal(s.v.autoReverse,false);assert.equal(s.v.speed,0);s.world.free();
});

test('full-speed stops are short and a brake cancels turbo before reverse',()=>{
  for(const boost of [false,true]){
    const s=setup();s.run(7,{throttle:1});
    if(boost)s.run(.5,{dash:true});
    const start=s.v.position.z,speed=s.v.actualSpeed;
    assert.ok(speed>(boost?49:32));
    let elapsed=0;
    while(s.v.actualSpeed>.1&&elapsed<2){s.run(1/60,{brake:1,dash:boost});elapsed+=1/60;}
    const distance=start-s.v.position.z;
    assert.ok(distance<(boost?22:10),`stopping distance ${distance.toFixed(2)} m at ${(speed*3.6).toFixed(1)} km/h`);
    assert.ok(elapsed<(boost?1.1:.8));assert.equal(s.v.bursting,false);assert.equal(s.v.autoReverse,false);
    s.run(.35,{brake:1});assert.ok(s.v.speed< -1,'continuing the same brake press promptly engages reverse');assert.equal(s.v.autoReverse,true);s.world.free();
  }
});

test('rendering interpolates between fixed ticks and reset never sweeps across the map',()=>{
  const s=setup();s.run(2,{throttle:1});s.run(1/60,{throttle:1,steer:.6});
  const z=[];for(const alpha of [0,.25,.5,.75,1]){s.v.render(alpha);z.push(s.v.renderPosition.z);}
  assert.ok(z.every((value,i)=>!i||value<z[i-1]));
  for(let i=2;i<z.length;i++)assert.ok(Math.abs((z[i]-z[i-1])-(z[1]-z[0]))<1e-8);
  s.v.reset({x:100,z:200,heading:3.1});s.v.render(.2);
  assert.equal(s.v.renderPosition.x,100);assert.equal(s.v.renderPosition.z,200);
  s.v.previousPose.heading=Math.PI-.01;s.v.pose.heading=-Math.PI+.01;s.v.render(.5);
  assert.ok(Math.abs(Math.abs(s.v.renderHeading)-Math.PI)<1e-8);s.world.free();
});

test('turbo lifts the front around the rear axle and lands smoothly on braking',()=>{
  const s=setup();s.v.reset({x:0,z:0,heading:1.2});s.run(2,{throttle:1});
  s.run(.35,{dash:true});s.v.render(1);s.v.model.updateMatrixWorld(true);
  assert.ok(s.v.wheelie>.24&&s.v.wheelie<.4);
  const rear=new THREE.Vector3(0,.252,.79).applyMatrix4(s.v.model.matrixWorld);
  const front=new THREE.Vector3(0,.252,-1.1).applyMatrix4(s.v.model.matrixWorld);
  assert.ok(Math.abs(rear.y-(s.v.position.y-.58+.252))<1e-8);
  assert.ok(front.y-rear.y>.45);assert.ok(s.v.position.y<.65);
  const before=s.v.wheelie;s.run(1/60,{brake:1});assert.ok(s.v.wheelie>0&&s.v.wheelie<before);
  s.run(.6,{brake:1});assert.ok(s.v.wheelie<.001);s.world.free();
});

test('burst input launches forward but is rejected when braking, reversing or boarding',()=>{
  const s=setup();s.run(.3,{dash:true});assert.ok(s.v.actualSpeed>7);
  s.v.reset({x:0,z:0,heading:0});s.run(1/60,{dash:true,brake:1});assert.equal(s.v.bursting,false);
  s.run(1/60,{dash:true,gear:-1});assert.equal(s.v.bursting,false);
  s.v.step(1/60,{dash:true,throttle:1,steer:0,gear:1},true);assert.equal(s.v.bursting,false);s.world.free();
});

test('gear-combo burst has no time limit but releases with the accelerator',()=>{
  const s=setup();s.run(1,{throttle:1});s.run(1/60,{reverseEdge:true,throttle:1});s.run(1/60,{driveEdge:true,throttle:1});
  s.run(3,{throttle:1});assert.equal(s.v.bursting,true);assert.ok(s.v.actualSpeed*3.6>179);
  s.run(1/60,{});assert.equal(s.v.bursting,false);s.world.free();
});


test('brake-held reverse begins promptly and accelerates decisively on manual and auto throttle',()=>{
  for(const auto of [false,true]){
    const s=setup();let firstReverse=null;
    for(let i=1;i<=36;i++){
      s.run(1/60,{brake:1,auto});
      if(firstReverse===null&&s.v.speed<-.1)firstReverse=i/60;
    }
    assert.ok(firstReverse>0&&firstReverse<=.2,`reverse begins at ${firstReverse}s`);
    assert.ok(s.v.speed< -3.5,'reaches useful reverse speed within 0.6s');
    assert.ok(s.v.position.z>.75,'backs away instead of idling');
    s.run(2,{brake:1,auto});assert.ok(s.v.speed>=-7.1&&s.v.speed< -6.8);
    s.world.free();
  }
});

test('releasing a short brake tap avoids reverse and locked boarding cannot back away',()=>{
  const s=setup();s.run(.08,{brake:1});s.run(.6,{});
  assert.equal(s.v.autoReverse,false);assert.ok(Math.abs(s.v.position.z)<.01);
  for(let i=0;i<90;i++){s.v.step(1/60,{steer:1,gear:1,throttle:0,brake:1},true);s.world.step();s.v.sync(1/60);}
  assert.equal(s.v.autoReverse,false);assert.ok(Math.abs(s.v.position.z)<.01);
  s.world.free();
});

test('ordinary road-speed corners make a 90-degree turn within 1.5s and a 32m radius',()=>{
  for(const steer of [-1,1]){
    const s=setup();s.run(4,{throttle:1});const startHeading=s.v.heading;
    let elapsed=0,travel=0;
    while(Math.abs(s.v.heading-startHeading)<Math.PI/2&&elapsed<2){
      const p={...s.v.position};s.run(1/60,{throttle:1,steer});
      travel+=Math.hypot(s.v.position.x-p.x,s.v.position.z-p.z);elapsed+=1/60;
    }
    assert.ok(elapsed<=1.5,`90-degree turn takes ${elapsed}s`);
    const radius=travel/Math.abs(s.v.heading-startHeading);
    assert.ok(radius>20&&radius<32,`turn radius ${radius}m`);
    assert.ok(s.v.actualSpeed>32&&s.v.actualSpeed<34,'keeps cruise speed through normal steering');
    assert.ok(s.v.position.y>.5&&s.v.position.y<.65);s.world.free();
  }
});

test('creeping turns and reverse manoeuvres steer tightly, with no rotation while stationary',()=>{
  for(const gear of [1,-1]){
    const s=setup();s.run(.4,{throttle:1,gear});const before=s.v.heading;
    s.run(.5,{throttle:1,gear,steer:1});
    assert.ok(Math.abs(s.v.heading-before)>.8,'low-speed steering reaches a useful angle quickly');
    assert.equal(Math.sign(s.v.heading-before),gear===1?-1:1,'reverse steering changes yaw in the correct direction');
    assert.ok(s.v.position.y>.5&&s.v.position.y<.65);s.world.free();
  }
  const parked=setup();parked.run(1,{steer:1});assert.equal(parked.v.heading,0);parked.world.free();
});

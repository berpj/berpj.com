import test from 'node:test';import assert from 'node:assert/strict';import RAPIER from '@dimforge/rapier3d-compat';import * as THREE from 'three';
import {Vehicle} from '../src/game/vehicle.js';await RAPIER.init();
function setup(){const world=new RAPIER.World({x:0,y:-9.81,z:0});world.createCollider(RAPIER.ColliderDesc.cuboid(1000,.1,1000).setTranslation(0,-.1,0).setFriction(0));const v=new Vehicle(world,RAPIER,new THREE.Group(),{x:0,z:0,heading:0});return {world,v,run(seconds,input){for(let i=0;i<seconds*60;i++){v.step(1/60,{steer:0,gear:1,throttle:0,brake:0,...input});world.step();v.sync(1/60);}}};}
test('the chassis reaches 75 km/h in three seconds, stays grounded and stops short',()=>{const s=setup();s.run(3,{throttle:1});assert.ok(s.v.actualSpeed*3.6>75&&s.v.actualSpeed*3.6<85);assert.ok(s.v.position.z<-30);assert.ok(s.v.position.y>.5&&s.v.position.y<.65);const before=s.v.position.z;s.run(1,{brake:1});assert.ok(s.v.actualSpeed<.1);assert.ok(Math.abs(s.v.position.z-before)<6);s.world.free();});
test('a burst improves launch speed and its cadence cannot be spammed',()=>{const s=setup();assert.equal(s.v.burst(),true);assert.equal(s.v.burst(),false);s.run(1,{throttle:1});assert.ok(s.v.actualSpeed>15);assert.equal(s.v.burst(),true);s.world.free();});
test('normal throttle holds 100 km/h and turbo reaches 140 before returning to cruise',()=>{const s=setup();s.run(20,{throttle:1});assert.ok(s.v.actualSpeed*3.6<=100.5);assert.ok(s.v.actualSpeed*3.6>99);s.v.burst();s.run(.4,{throttle:1});assert.ok(s.v.actualSpeed*3.6>139&&s.v.actualSpeed*3.6<141);s.run(5,{throttle:1});assert.ok(s.v.actualSpeed*3.6<=100.5);s.world.free();});
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
    if(boost){s.v.burst();s.run(.4,{throttle:1});}
    const start=s.v.position.z,speed=s.v.actualSpeed;
    assert.ok(speed>(boost?38:27));
    let elapsed=0;
    while(s.v.actualSpeed>.1&&elapsed<2){s.run(1/60,{brake:1});elapsed+=1/60;}
    const distance=start-s.v.position.z;
    assert.ok(distance<(boost?19.5:10),`stopping distance ${distance.toFixed(2)} m at ${(speed*3.6).toFixed(1)} km/h`);
    assert.ok(elapsed<(boost?1.35:1));assert.equal(s.v.burstTime,0);assert.equal(s.v.autoReverse,false);
    s.run(.35,{brake:1});assert.ok(s.v.actualSpeed<.1);s.world.free();
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
  s.v.burst();s.run(.35,{throttle:1});s.v.render(1);s.v.model.updateMatrixWorld(true);
  assert.ok(s.v.wheelie>.24&&s.v.wheelie<.4);
  const rear=new THREE.Vector3(0,.252,.79).applyMatrix4(s.v.model.matrixWorld);
  const front=new THREE.Vector3(0,.252,-1.1).applyMatrix4(s.v.model.matrixWorld);
  assert.ok(Math.abs(rear.y-(s.v.position.y-.58+.252))<1e-8);
  assert.ok(front.y-rear.y>.45);assert.ok(s.v.position.y<.65);
  const before=s.v.wheelie;s.run(1/60,{brake:1});assert.ok(s.v.wheelie>0&&s.v.wheelie<before);
  s.run(.6,{brake:1});assert.ok(s.v.wheelie<.001);s.world.free();
});

test('burst input launches forward but is rejected when braking, reversing or boarding',()=>{
  const s=setup();s.run(1/60,{dash:true});s.run(.3,{});assert.ok(s.v.actualSpeed>7);
  s.v.reset({x:0,z:0,heading:0});s.run(1/60,{dash:true,brake:1});assert.equal(s.v.burstTime,0);
  s.run(1/60,{dash:true,gear:-1});assert.equal(s.v.burstTime,0);
  s.v.step(1/60,{dash:true,throttle:1,steer:0,gear:1},true);assert.equal(s.v.burstTime,0);s.world.free();
});

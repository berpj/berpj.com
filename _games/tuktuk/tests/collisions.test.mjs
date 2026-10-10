import test from 'node:test';
import assert from 'node:assert/strict';
import RAPIER from '@dimforge/rapier3d-compat';
import * as THREE from 'three';
import {Vehicle} from '../src/game/vehicle.js';
import {COLLISION_PROFILES} from '../src/game/collisions.js';

await RAPIER.init();
function collide(type,{speed=12,x=0,wall=false}={}){
  const world=new RAPIER.World({x:0,y:-9.81,z:0});
  world.createCollider(RAPIER.ColliderDesc.cuboid(100,.1,100).setTranslation(0,-.1,0).setFriction(0));
  const vehicle=new Vehicle(world,RAPIER,new THREE.Group(),{x,z:0,heading:0});
  let other=null;
  if(wall)world.createCollider(RAPIER.ColliderDesc.cuboid(20,2,.4).setTranslation(0,2,-4));
  else{
    other=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0,0,-5).enabledTranslations(true,false,true).enabledRotations(false,false,false));
    other.userData={vehicleType:type};
    world.createCollider(RAPIER.ColliderDesc.cuboid(.85,.7,1.8).setTranslation(0,.8,0).setMass(COLLISION_PROFILES[type].mass).setFriction(0),other);
  }
  vehicle.body.setLinvel({x:0,y:0,z:-speed},true);
  const impacts=[];
  for(let i=0;i<70;i++){
    vehicle.step(1/60,{steer:0,gear:1,throttle:0,brake:0});world.step();
    const impact=vehicle.sync(1/60);if(impact)impacts.push(impact);
  }
  const result={impacts,otherSpeed:other?Math.abs(other.linvel().z):0};world.free();return result;
}

test('equal-speed hits transfer momentum according to scooter, sedan and bus mass',()=>{
  const bike=collide('motorcycle'),car=collide('car'),bus=collide('bus');
  assert.equal(bike.impacts[0]?.type,'motorcycle');assert.equal(car.impacts[0]?.type,'car');assert.equal(bus.impacts[0]?.type,'bus');
  assert.ok(bike.impacts[0].deltaV<car.impacts[0].deltaV*.65);
  assert.ok(car.impacts[0].deltaV<bus.impacts[0].deltaV*.85);
  assert.ok(bike.otherSpeed>car.otherSpeed*2);assert.ok(car.otherSpeed>bus.otherSpeed*4);
  assert.ok(bus.impacts[0].strength>bike.impacts[0].strength);
});
test('ground support is ignored and gentle parking contact is not a heavy crash',()=>{
  const result=collide('car',{speed:.8});
  assert.ok(result.impacts.every(hit=>!hit.serious));
  const none=collide('car',{speed:0});assert.equal(none.impacts.length,0);
});
test('a fixed wall has its own impact profile and sustained contact is not repeated each frame',()=>{
  const result=collide('wall',{wall:true});
  assert.equal(result.impacts[0]?.type,'wall');assert.ok(result.impacts[0]?.deltaV>10);
  assert.ok(result.impacts.length<=2);
});

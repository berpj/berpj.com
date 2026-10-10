import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import {Traffic,trafficPose} from '../src/game/traffic.js';
import {prepareMap} from '../src/world/map.mjs';
import {roadRecoveryPose} from '../src/game/recovery.js';
import {prepareBuildingLayout} from '../src/world/layout.mjs';
import {COLLISION_PROFILES} from '../src/game/collisions.js';
const map=prepareMap(JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url))));
map.layout=prepareBuildingLayout(map,{mobile:true});
await RAPIER.init();
test('traffic starts around the player with separated road positions and no sweep from world origin',()=>{
  const world=new RAPIER.World({x:0,y:0,z:0});const traffic=new Traffic(new THREE.Scene(),map,world,RAPIER,{mobile:true});
  assert.ok(traffic.cars.filter(c=>c.segment&&c.distance<160).length>=15);
  for(const car of traffic.cars){if(!car.segment)continue;const p=car.body.translation();assert.ok(Math.hypot(p.x-car.mesh.position.x,p.z-car.mesh.position.z)<.001);assert.ok(car.distance>23);}
  for(let i=0;i<60;i++){traffic.step(1/60,map.spawn);world.step();traffic.sync(map.spawn);}
  for(const car of traffic.cars){if(!car.segment)continue;assert.ok(Number.isFinite(car.mesh.position.x));assert.ok(car.body.linvel().x**2+car.body.linvel().z**2<40**2);}
  world.free();
});
test('traffic uses finite vehicle masses and spawns its whole body outside buildings',()=>{
  const world=new RAPIER.World({x:0,y:0,z:0}),traffic=new Traffic(new THREE.Scene(),map,world,RAPIER,{mobile:true});
  for(const car of traffic.cars){
    if(!car.segment)continue;
    assert.ok(car.body.isDynamic());assert.ok(Math.abs(car.body.mass()-COLLISION_PROFILES[car.type].mass)<.1);
    assert.ok(map.layout.clearance.isRectangleClearOfBuildings({x:car.position.x,z:car.position.z,width:car.mesh.userData.width,depth:car.mesh.userData.length,yaw:car.yaw},.15));
  }
  for(let i=0;i<600;i++){traffic.step(1/60,map.spawn);world.step();traffic.sync(map.spawn);}
  for(const car of traffic.cars){
    if(!car.segment)continue;
    assert.ok(Math.hypot(car.position.x-car.body.translation().x,car.position.z-car.body.translation().z)<.001);
    assert.ok(car.body.linvel().x**2+car.body.linvel().z**2<40**2);
    if(car.rims)assert.ok([...car.rims.instanceMatrix.array].every(Number.isFinite));
  }
  world.free();
});
test('recovery uses a road lane and rejects a position off the road',()=>{
  const pose=roadRecoveryPose(map,map.spawn,map.spawn.heading);assert.ok(pose);const n=map.nearest(pose);assert.ok(n.distance<n.segment.road.width/2-1);
  const s={a:{x:0,z:0},b:{x:0,z:-100},dir:{x:0,z:-1},len:100,road:{width:10,tags:{oneway:'yes'}}};
  const stub={nearest:()=>({x:0,z:-20,distance:15,segment:s})};assert.equal(roadRecoveryPose(stub,{x:15,z:-20},0),null);
  const c={segment:s,reverse:false,progress:20,lane:0};const p=trafficPose(c);assert.ok(p.x<0);assert.equal(p.z,-20);
});

test('each traffic class reaches its faster cruise and brakes before a stopped player',()=>{
  const segment={a:{x:0,z:0},b:{x:0,z:-1000},dir:{x:0,z:-1},len:1000,ia:0,ib:1,road:{width:10,tags:{oneway:'yes',lanes:'1'}}};
  const straight={segments:[segment],main:[segment],spawn:{x:0,z:0},legalGraph:new Map()};
  for(const [type,minSpeed,maxSpeed] of [['bus',9.5,10],['car',10.2,15.2],['taxi',10.2,15.2],['motorcycle',14.7,19.7]]){
    const world=new RAPIER.World({x:0,y:0,z:0});
    const traffic=new Traffic(new THREE.Scene(),straight,world,RAPIER,{mobile:true});
    const car=traffic.cars.find(c=>c.type===type);
    for(const other of traffic.cars)if(other!==car)world.removeRigidBody(other.body);
    traffic.cars=[car];
    Object.assign(car,{segment,reverse:false,progress:100,lane:0,distance:100,speed:0,yaw:0,dir:{x:0,z:-1},position:{x:0,z:-100}});
    car.body.setTranslation({x:0,y:0,z:-100},true);car.body.setLinvel({x:0,y:0,z:0},true);
    const run=(seconds,player)=>{for(let i=0;i<seconds*60;i++){traffic.step(1/60,player);world.step();traffic.sync(player);}};
    run(7,{x:100,z:-150});
    const speed=Math.hypot(car.body.linvel().x,car.body.linvel().z);
    assert.ok(speed>=minSpeed&&speed<=maxSpeed,`${type}: cruise ${speed}`);
    assert.ok(Math.abs(car.position.x)<.1,`${type}: stays in its lane`);
    const stoppedPlayer={x:0,z:car.position.z-30};
    run(6,stoppedPlayer);
    const gap=car.position.z-stoppedPlayer.z-(car.mesh.userData.length+2.5)/2;
    assert.ok(gap>1,`${type}: leaves room before the player, gap ${gap}`);
    assert.ok(car.speed<.5,`${type}: brakes to a stop, speed ${car.speed}`);
    world.free();
  }
});

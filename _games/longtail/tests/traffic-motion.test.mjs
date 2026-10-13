import test from 'node:test';
import assert from 'node:assert/strict';
import {trafficMotion,TRAFFIC_SIZE_SCALE,TRAFFIC_SPEED_SCALE} from '../src/traffic.mjs';
import {boatSpecs} from '../src/boats.js';
import {cargoSpecs} from '../src/cargo.js';

const specs={...boatSpecs,...cargoSpecs};

test('boats keep slow, small vertical motion even at maximum traffic speed',()=>{
 for(const [kind,spec]of Object.entries(specs))for(const direction of[-1,1]){
  const actor={kind,variation:7,distance:2000,direction,actualSpeed:spec.maxSpeed*TRAFFIC_SPEED_SCALE*1.16,towed:kind==='barge'};
  const dt=1/120;let previous=trafficMotion(actor,0),fastestHeave=0,fastestRock=0;
  for(let frame=1;frame<=120*25;frame++){
   actor.distance+=actor.actualSpeed*direction*dt;
   const now=trafficMotion(actor,frame*dt);
   assert(Object.values(now).every(Number.isFinite));
   fastestHeave=Math.max(fastestHeave,Math.abs(now.y-previous.y)/dt);
   const endMotion=(Math.abs(now.pitch-previous.pitch)*spec.length+Math.abs(now.roll-previous.roll)*spec.width)*TRAFFIC_SIZE_SCALE/2;
   fastestRock=Math.max(fastestRock,endMotion/dt);
   assert(Math.abs(now.y)<=.04,`${kind} rises too far from its waterline`);
   previous=now;
  }
  assert(fastestHeave<.045,`${kind} bobs at ${fastestHeave} m/s`);
  assert(fastestRock<.035,`${kind} bow or side rocks at ${fastestRock} m/s`);
 }
});

test('river position, direction and route recycling cannot change the water-motion phase',()=>{
 for(const kind of Object.keys(specs)){
  const actor={kind,variation:11,actualSpeed:specs[kind].maxSpeed,towed:kind==='barge'};
  for(const time of[0,1.8,43.5,3600]){
   const pose=trafficMotion(actor,time);
   for(const distance of[-900,0,1523.4,6500])for(const direction of[-1,1])
    assert.deepEqual(trafficMotion({...actor,distance,direction,x:distance*.5,z:-distance},time),pose);
  }
 }
});

test('big ships move less while small boats retain independent gentle motion',()=>{
 const span=kind=>{
  const heights=Array.from({length:600},(_,i)=>trafficMotion({kind,variation:4,actualSpeed:9},i/20).y);
  return Math.max(...heights)-Math.min(...heights);
 };
 for(const kind of['barge','cruise'])assert(span(kind)<.025,`${kind} should barely bob`);
 for(const kind of['ferry','electric','tug'])assert(span(kind)<.045,`${kind} moves too much`);
 assert(span('longtail')>.06,'small boats should retain some water motion');
 assert.notDeepEqual(trafficMotion({kind:'fishing',variation:1},2),trafficMotion({kind:'fishing',variation:2},2),'neighbouring boats should not bob in unison');
});

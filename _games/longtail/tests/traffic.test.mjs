import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {River,angleDelta} from '../src/river.mjs';
import {boatSpecs} from '../src/boats.js';
import {cargoSpecs} from '../src/cargo.js';
import {createFleet,advanceFleet,convoyOffsets,trafficPose,TRAFFIC_SPEED_SCALE} from '../src/traffic.mjs';
import {capsuleContact,BoatPhysics,TUNING} from '../src/simulation.mjs';
const source=JSON.parse(fs.readFileSync(new URL('../public/data/river-course.json',import.meta.url))).points;
const raw=new River(source),curve=new THREE.CatmullRomCurve3(raw.points.map(p=>new THREE.Vector3(p.x,0,p.z)));
const river=new River(curve.getSpacedPoints(320).map(p=>[p.x/108140+100.502,13.733-p.z/111320,raw.nearest(p.x,p.z).width]));
const specs={...boatSpecs,...cargoSpecs};

test('denser fleets include both three and four barge convoys on desktop and mobile',()=>{
 for(const mobile of[false,true]){
  const fleet=createFleet(river,specs,mobile);
  assert.equal(fleet.traffic.length,mobile?53:77);
  assert.deepEqual(fleet.convoys.map(c=>c.barges.length),mobile?[3,4]:[3,4,3]);
  for(const c of fleet.convoys){assert(c.tug.speed<=cargoSpecs.tug.maxSpeed);assert(c.tug.speed<4);for(const b of c.barges)assert.equal(b.speed,c.tug.speed);}
  assert.equal(TRAFFIC_SPEED_SCALE,1.14);
 }
});
test('every barge follows the actual river bend, keeping tow gaps clear',()=>{
 const fleet=createFleet(river,specs),convoy=fleet.convoys[1];
 for(const direction of[-1,1])for(let distance=500;distance<river.length-500;distance+=73){
  convoy.tug.direction=direction;convoy.barges.forEach(b=>b.direction=direction);convoy.tug.distance=distance;advanceFleet(fleet,river,0);
  let previous=convoy.tug;
  for(const [i,b]of convoy.barges.entries()){
   assert(Math.abs(b.distance-(distance-direction*convoy.offsets[i]))<1e-8);
   assert(Math.abs(river.nearest(b.x,b.z).offset)<20);
   assert(capsuleContact(previous,b).gap>3,'individual hulls may not overlap through bends');
   const ax=previous.x+Math.sin(previous.heading)*previous.length/2,az=previous.z+Math.cos(previous.heading)*previous.length/2;
   const bx=b.x-Math.sin(b.heading)*b.length/2,bz=b.z-Math.cos(b.heading)*b.length/2;
   const gap=Math.hypot(bx-ax,bz-az);
   assert(gap>5&&gap<40,`towline gap ${gap}`);previous=b;
  }
 }
});
test('convoys articulate through bends instead of one rigid train',()=>{
 let largest=0;for(let d=300;d<river.length-300;d+=35){const a=trafficPose(river,d,-13.5,1,48),b=trafficPose(river,d-180,-13.5,1,48);largest=Math.max(largest,Math.abs(angleDelta(a.heading,b.heading)));}
 assert(largest>.15);
});
test('convoy members wrap together entirely outside the playable reach',()=>{
 const fleet=createFleet(river,specs),c=fleet.convoys[0];
 c.tug.distance=river.length+899.99;advanceFleet(fleet,river,1);
 assert(c.tug.distance<0);for(const b of c.barges){assert(b.distance<c.tug.distance);assert(c.tug.distance-b.distance<300);}
 c.tug.direction=-1;c.barges.forEach(b=>b.direction=-1);c.tug.distance=-899.99;advanceFleet(fleet,river,1);
 assert(c.tug.distance>river.length);for(const b of c.barges){assert(b.distance>c.tug.distance);assert(b.distance-c.tug.distance<300);}
});
test('tow-line gaps are not solid collision obstacles',()=>{
 const fleet=createFleet(river,specs),c=fleet.convoys[0],a=c.tug,b=c.barges[0];
 const ax=a.x+Math.sin(a.heading)*a.length/2,az=a.z+Math.cos(a.heading)*a.length/2;
 const bx=b.x-Math.sin(b.heading)*b.length/2,bz=b.z-Math.cos(b.heading)*b.length/2;
 const player={x:(ax+bx)/2,z:(az+bz)/2,heading:a.heading+Math.PI/2,width:2.5,length:12};
 assert(capsuleContact(player,a).gap>0);assert(capsuleContact(player,b).gap>0);
});
test('following craft slow for barge hulls and convoys do not block themselves',()=>{
 const fleet=createFleet(river,specs),c=fleet.convoys[0];
 fleet.traffic=[c.tug,...c.barges];fleet.convoys=[c];advanceFleet(fleet,river,1);assert(c.tug.actualSpeed>2.5);
 const last=c.barges.at(-1),follower={...fleet.traffic[0],kind:'ferry',convoy:null,towed:false,...boatSpecs.ferry,distance:last.distance-(last.length+boatSpecs.ferry.length)/2-20,speed:15,actualSpeed:15};
 fleet.traffic.push(follower);advanceFleet(fleet,river,.1);assert(follower.actualSpeed<6);assert(c.tug.actualSpeed>2.5);
});
test('new top speeds retain reliable brakes and continuous collision sampling',()=>{
 const boat=new BoatPhysics();for(let i=0;i<600;i++)boat.update(1/60,{gas:true,boost:true});
 assert(Math.abs(boat.speed-53)<.1);assert(boat.speed/60<1,'each physics step travels less than a hull width');
 let stopTime=0,stopped=false;for(let i=0;i<180;i++){boat.update(1/60,{brake:true});stopTime+=1/60;if(boat.speed<0){stopped=true;break;}}
 assert(stopped&&stopTime<1.5);assert(TUNING.speed===34);
});

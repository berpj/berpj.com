import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {River,buildPiers} from '../src/river.mjs';
import {boatSpecs} from '../src/boats.js';
import {cargoSpecs} from '../src/cargo.js';
import {createFleet,advanceFleet,trafficPose} from '../src/traffic.mjs';
import {planPatrol,updatePatrols,resetPatrols,patrolFlash,patrolLightFixtures,updatePatrolLamps} from '../src/patrols.mjs';
import {capsuleContact} from '../src/simulation.mjs';
import {createTrafficBoat,updateTrafficDetail} from '../src/traffic-visuals.js';
import {VisibleLights} from '../src/visible-lights.js';
const raw=new River(JSON.parse(fs.readFileSync(new URL('../public/data/river-course.json',import.meta.url))).points);
const curve=new THREE.CatmullRomCurve3(raw.points.map(p=>new THREE.Vector3(p.x,0,p.z)));
const river=new River(curve.getSpacedPoints(320).map(p=>[p.x/108140+100.502,13.733-p.z/111320,raw.nearest(p.x,p.z).width]));
const specs={...boatSpecs,...cargoSpecs};
const playerAt=(d,lane=0,direction=1)=>({...trafficPose(river,d,lane,direction),length:12,width:2.5,vx:0,vz:0});

test('patrols overtake and approach in fixed close lanes without touching a steady player',()=>{
 for(const direction of [-1,1])for(const speed of[0,34,53])for(const serial of[0,1,2]){
  const start=2000,player=playerAt(start,0,direction),route=planPatrol(river,player,[],serial);
  assert(route);let gap=Infinity;
  const duration=route.pass==='overtake'?180/Math.max(1,route.speed-speed)+2:7;
  for(let time=0;time<duration;time+=1/60){
   const p={...player,...trafficPose(river,start+direction*speed*time,0,direction,12)};
   const t={length:13.8*1.18,width:3.8*1.18,...trafficPose(river,route.distance+route.direction*route.speed*time,route.lane,route.direction,13.8*1.18)};
   gap=Math.min(gap,capsuleContact(p,t).gap);
  }
  assert(gap>4&&gap<20,`speed ${speed}, direction ${direction}, pass ${route.pass}: hull gap ${gap}`);
 }
});
test('dispatch respects river edges, bridge columns and existing traffic corridors',()=>{
 const player=playerAt(1600,85),route=planPatrol(river,player,[],0);assert(route);assert(route.lane<85);
 const d=1600-160+61*3,blocker={...trafficPose(river,d,route.lane),width:14,length:18};
 const alternate=planPatrol(river,player,[],0,[blocker]);
 assert(!alternate||Math.abs(alternate.lane-route.lane)>10);
 const wall={...blocker,width:400,length:80};assert.equal(planPatrol(river,player,[],0,[wall]),null);
});
test('live dense fleet dispatches close patrols and resets them on replay',()=>{
 for(const mobile of[false,true]){
  const fleet=createFleet(river,specs,mobile),pier=buildPiers(river)[0];
  const player=playerAt(pier.distance);let passes=0,closest=Infinity,largestStep=0;
  for(let frame=0;frame<60*48;frame++){
   const before=new Map(fleet.patrols.filter(t=>t.active).map(t=>[t,{x:t.x,z:t.z}]));
   updatePatrols(fleet,river,1/60,player);advanceFleet(fleet,river,1/60);
   for(const t of fleet.patrols.filter(t=>t.active)){
    if(!before.has(t))passes++;closest=Math.min(closest,capsuleContact(player,t).gap);
    if(before.has(t))largestStep=Math.max(largestStep,Math.hypot(t.x-before.get(t).x,t.z-before.get(t).z));
    assert(Math.abs(river.nearest(t.x,t.z).offset)<river.nearest(t.x,t.z).width*.36);
   }
  }
  assert(passes>=2,'repeat patrol passes should occur during a run');
  assert(closest>4&&closest<26,`close hull gap ${closest}`);assert(largestStep<1.4,`no teleporting ${largestStep}`);
  resetPatrols(fleet);assert(fleet.patrols.every(t=>!t.active));assert.equal(fleet.patrolClock,4);
 }
});
test('patrol beacons alternate, follow both LODs and turn off on recycled boats',()=>{
 const mesh=createTrafficBoat('patrol'),scene=new THREE.Scene();scene.add(mesh);
 const t={active:true,variation:0,mesh};const lights=new VisibleLights(scene,patrolLightFixtures(t),{dynamic:true,replacePhysical:true});
 updatePatrolLamps(t,.25);lights.update();assert(patrolFlash(.25,0)>.99);assert(patrolFlash(.25,1)<.07);
 const colors=Array.from(lights.geometry.attributes.lightColor.array);assert(colors[0]>3);assert(colors[5]<.25);
 updateTrafficDetail(mesh,800);updatePatrolLamps(t,.75);lights.update();assert(lights.geometry.attributes.lightColor.getZ(1)>3);
 mesh.visible=false;lights.update();assert(lights.geometry.attributes.lightColor.array.every(v=>v===0));
 assert.equal(lights.geometry.instanceCount,2);assert(!mesh.children.some(n=>n.isLight));
});

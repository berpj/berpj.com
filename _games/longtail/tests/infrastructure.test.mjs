import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildBridge,buildPier} from '../src/infrastructure.js';
import {buildLandmark} from '../src/landmarks.js';

function geometryBudget(model){
 let triangles=0,draws=0;model.traverse(o=>{
  if(!o.isMesh)return;draws++;
  for(const name of['position','normal','uv'])assert(o.geometry.attributes[name].array.every(Number.isFinite),`${model.name}: invalid ${name}`);
  triangles+=o.geometry.attributes.position.count/3;
 });return {triangles,draws};
}
function surfaceY(model,x,z,from=1000){
 model.updateMatrixWorld(true);const ray=new THREE.Raycaster(new THREE.Vector3(x,from,z),new THREE.Vector3(0,-1,0));return ray.intersectObject(model,true)[0]?.point.y;
}

test('each bridge has complete driving lanes, supported piers and an open central navigation channel',()=>{
 for(const id of['memorial','pokklao','taksin']){
  const bridge=buildBridge(id,{span:450,riverWidth:250});
  for(const lane of bridge.lanes)for(const x of[-210,-120,0,120,210])assert(Math.abs(surfaceY(bridge.group,x,lane,bridge.roadY+.4)-(bridge.roadY+.13))<.08,`${id}: a car lane leaves its deck`);
  for(const pier of bridge.colliders){
   assert(surfaceY(bridge.group,pier.x,pier.z,5)>1.5,`${id}: collider lacks a physical footing`);
   assert(Math.abs(pier.x)-pier.width/2>50,`${id}: centre channel is blocked`);
  }
  for(const x of[-35,0,35]){
   const ray=new THREE.Raycaster(new THREE.Vector3(x,11,-45),new THREE.Vector3(0,0,1),0,90);
   assert.equal(ray.intersectObject(bridge.group,true).length,0,`${id}: low geometry blocks the central boat channel`);
  }
  const budget=geometryBudget(bridge.group);assert(budget.draws<=11);assert(budget.triangles<42000,`${id}: ${budget.triangles} triangles`);
 }
});

test('bridge lights remain separate narrow emitters with finite world-sized endpoints',()=>{
 for(const id of['memorial','pokklao','taksin']){
  const bridge=buildBridge(id,{span:450,riverWidth:250});assert(bridge.fixtures.length<60);
  for(const f of bridge.fixtures){assert([...f.a,...f.b,...f.color,f.width].every(Number.isFinite));assert(f.width<=.34);}
  const strips=bridge.fixtures.filter(f=>Math.abs(f.a[0]-f.b[0])>100);assert.equal(strips.length,2);
  for(const strip of strips){assert.equal(strip.a[1],strip.b[1]);assert.equal(strip.a[2],strip.b[2]);}
 }
});

test('modern, temple and commuter piers connect their pontoon to the raised riverbank',()=>{
 for(const id of['icon','arun','sathorn'])for(const shoreDistance of[11,13,17]){
  const {group,fixtures}=buildPier(id,{shoreDistance}),ramp=group.userData.gangway;
  assert(ramp.end[2]>shoreDistance);assert.equal(ramp.end[1],3.15);
  for(let i=0;i<=10;i++){
   const t=i/10,z=THREE.MathUtils.lerp(ramp.start[2],ramp.end[2],t),height=THREE.MathUtils.lerp(ramp.start[1],ramp.end[1],t);
   assert(Math.abs(surfaceY(group,0,z,4.5)-height)<.08,`${id}: discontinuous gangway at ${t}`);
  }
  const bounds=new THREE.Box3().setFromObject(group);assert(bounds.min.z>-6.3,'keep water-side boarding berth open');
  const budget=geometryBudget(group);assert(budget.draws<=11);assert(budget.triangles<7000);assert.equal(fixtures.length,2);
 }
});

test('new landmark facades stay finite and detailed models remain batched',()=>{
 for(const id of['icon-siam','the-river','wat-arun','wat-pho','wat-kalayanamit','mandarin-oriental']){
  const group=buildLandmark(id),{draws,triangles}=geometryBudget(group);assert(draws<=18,`${id}: ${draws} draws`);assert(triangles<145000,`${id}: ${triangles} triangles`);
  const bounds=new THREE.Box3().setFromObject(group);assert(bounds.min.y>-.1);assert(bounds.max.y<260);
 }
 const river=new THREE.Box3().setFromObject(buildLandmark('the-river'));assert(river.max.y>240&&river.max.y<255);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {facadeLayout,facadeMaterial,FACADE_PROFILES} from '../src/facade-materials.js';
import {addCityBuilding} from '../src/city-buildings.js';

test('condo lights are sparse, larger apartment windows remain legible, and empty rooms emit nothing',()=>{
 const ratios={};
 for(const style of Object.keys(FACADE_PROFILES)){
  const p=FACADE_PROFILES[style],rooms=Array.from({length:8},(_,seed)=>facadeLayout({columns:12,rows:60,style,seed:seed*101})).flat();
  ratios[style]=rooms.filter(r=>r.lit).length/rooms.length;
  assert(ratios[style]<.48);assert(rooms.every(r=>r.lit?r.level>0:r.level===0));
  assert(rooms.every(r=>r.x>=0&&r.y>=0&&r.x+r.w<=1&&r.y+r.h<=1));
  assert(p.windowWidth*p.bayWidth>3.4);assert(p.windowHeight*p.floorHeight>2.7);
 }
 assert(ratios.condo>.09&&ratios.condo<.18);assert(ratios.hotel>ratios.condo&&ratios.hotel<.35);
 assert(ratios.city>ratios.condo&&ratios.city<.26);
 assert.deepEqual(facadeLayout({seed:71}),facadeLayout({seed:71}),'room lights must not reshuffle or blink between loads');
});
test('city blocks have four outward walls with metre-scaled windows, bounded details and shared materials',()=>{
 for(const style of['city','condo'])for(const height of[14.4,69,172.5]){
  const faces=[],parts=[],material=facadeMaterial('test-city-'+style,{style,rows:8,columns:6}),neutral=new THREE.MeshStandardMaterial();
  const batch={add(g,m,x,y,z,sx,sy,sz,ry){faces.push({g:g.clone(),m,x,y,z,ry});},box(m,x,y,z,w,h,d,ry){parts.push({m,x,y,z,w,h,d,ry});}};
  addCityBuilding(batch,{x:0,z:0,width:30,depth:25,height,heading:0,variant:1,material,wall:neutral,trim:neutral,roof:neutral,glass:neutral,detail:true});
  const walls=faces.filter(f=>f.m===material);assert.equal(walls.length,4);assert(new Set(walls.map(f=>f.m)).size===1);
  let tris=faces.length*2+parts.length*12;assert(tris<3300,`city block has ${tris} triangles`);
  for(const f of walls){
   for(const name of['position','normal','uv'])assert(f.g.attributes[name].array.every(Number.isFinite));
   const normal=new THREE.Vector3(0,0,1).applyAxisAngle(new THREE.Vector3(0,1,0),f.ry);
   assert(normal.dot(new THREE.Vector3(f.x,0,f.z))>0,'wall points inward');
   const uv=f.g.attributes.uv,span=Math.abs(uv.getX(1)-uv.getX(0));
   assert(Math.abs(f.g.parameters.width/(span*6)-FACADE_PROFILES[style].bayWidth)<1e-5);
   f.g.dispose();
  }
  for(const f of faces)if(f.m!==material)f.g.dispose();
  for(const part of parts){assert([part.x,part.y,part.z,part.w,part.h,part.d].every(Number.isFinite));assert(part.w>0&&part.h>0&&part.d>0);assert(Math.abs(part.x)+part.w/2<17);assert(Math.abs(part.z)+part.d/2<15);}
  assert.equal(facadeMaterial('test-city-'+style),material);
  neutral.dispose();
 }
});

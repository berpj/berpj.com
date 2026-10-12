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

test('facade shells remain opaque from all sides, above and below without a competing backing wall',()=>{
 const material=facadeMaterial('enclosure-test',{style:'city',rows:8,columns:6}),neutral=new THREE.MeshStandardMaterial();
 const x=1460,z=-1730,depth=32,height=72,base=3,unit=new THREE.BoxGeometry();
 for(const width of[18,21,38])for(const heading of[0,.37,1.9,Math.PI])for(const detail of[true,false]){
  const group=new THREE.Group(),transform=new THREE.Object3D();
  const batch={add(g,m,px,py,pz,sx=1,sy=1,sz=1,ry=0){
   transform.position.set(px,py,pz);transform.rotation.set(0,ry,0);transform.scale.set(sx,sy,sz);transform.updateMatrix();
   group.add(new THREE.Mesh(g.clone().applyMatrix4(transform.matrix),m));
  },box(m,px,py,pz,w,h,d,ry){this.add(unit,m,px,py,pz,w,h,d,ry);}};
  addCityBuilding(batch,{x,z,width,depth,height,heading,variant:1,material,wall:neutral,trim:neutral,roof:neutral,glass:neutral,detail});
  group.updateMatrixWorld(true);
  const ry=new THREE.Matrix4().makeRotationY(heading),center=new THREE.Vector3(x,base+height*.53,z);
  for(const normal of[new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1),new THREE.Vector3(1,0,0),new THREE.Vector3(-1,0,0)]){
   const direction=normal.applyMatrix4(ry),origin=center.clone().addScaledVector(direction,2500);
   const hits=new THREE.Raycaster(origin,direction.clone().negate()).intersectObject(group);
   assert(hits.length>0,'open side exposes the background');
   assert.equal(hits[0].object.material,material,'solid wall covers the windows');
   // Ignore duplicate triangle hits at an edge; no second surface may sit just behind a wall.
   assert(hits.filter(h=>h.object!==hits[0].object).every(h=>h.distance-hits[0].distance>.5),'near-coplanar backing surface remains');
  }
  for(const sign of[-1,1]){
   const origin=new THREE.Vector3(-width*.35,height/2+sign*2500,-depth*.35).applyMatrix4(ry).add(new THREE.Vector3(x,base,z));
   assert(new THREE.Raycaster(origin,new THREE.Vector3(0,-sign,0)).intersectObject(group).length>0,'building cap is open');
  }
  group.traverse(o=>o.geometry?.dispose());
 }
 unit.dispose();neutral.dispose();
});

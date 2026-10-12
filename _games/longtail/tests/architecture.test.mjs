import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildLandmark} from '../src/landmarks.js';
import {mappedBuildings} from '../src/mapped-architecture.js';

test('mapped hotels and condos preserve metre footprints with finite, bounded geometry',()=>{
 for(const record of mappedBuildings){
  const model=buildLandmark(record.id),bounds=new THREE.Box3().setFromObject(model);
  const xs=record.footprint.map(p=>p[0]),zs=record.footprint.map(p=>p[1]);
  assert(Math.abs(bounds.min.x-Math.min(...xs))<2,`${record.id}: western facade shifted`);
  assert(Math.abs(bounds.max.x-Math.max(...xs))<2,`${record.id}: eastern facade shifted`);
  assert(Math.abs(bounds.min.z-Math.min(...zs))<2,`${record.id}: northern facade shifted`);
  assert(Math.abs(bounds.max.z-Math.max(...zs))<2,`${record.id}: southern facade shifted`);
  assert(Math.abs(bounds.max.y-record.height)<7,`${record.id}: roof height`);
  let triangles=0,draws=0;
  model.traverse(o=>{if(!o.isMesh)return;draws++;for(const attr of['position','normal','uv'])assert(o.geometry.attributes[attr].array.every(Number.isFinite),`${record.id}: nonfinite ${attr}`);triangles+=o.geometry.attributes.position.count/3;});
  assert(draws<=9,`${record.id}: ${draws} draws`);assert(triangles<26000,`${record.id}: ${triangles} triangles`);
 }
});

test('condo heights come from OSM and towers are not duplicated inside the mall model',()=>{
 for(const record of mappedBuildings.filter(b=>b.style==='magnolias'||b.style==='residences'))assert.equal(record.height,Number(record.tags.height));
 assert(new THREE.Box3().setFromObject(buildLandmark('icon-siam')).max.y<45);
});

test('architectural clones share geometry but retain independent transforms',()=>{
 for(const record of mappedBuildings){const a=buildLandmark(record.id),b=buildLandmark(record.id);a.position.x=100;assert.equal(b.position.x,0);assert.equal(a.children[0].geometry,b.children[0].geometry);assert.equal(a.children[0].material,b.children[0].material);}
});

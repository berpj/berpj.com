import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createDroneFormations,createDroneShow,droneCue,DRONE_CUE,DRONE_HOLD} from '../src/drone-show.js';

test('five drone formations keep every light finite, coloured and above the mall',()=>{
 for(const count of[300,480]){
  const formations=createDroneFormations(count);
  assert.deepEqual(formations.map(f=>f.name),['Thai flag','Lotus','Elephant','Wat Arun','Long-tail boat']);
  for(const formation of formations){
   assert.equal(formation.positions.length,count*3);assert.equal(formation.colors.length,count*3);
   assert(formation.positions.every(Number.isFinite));assert(formation.colors.every(n=>Number.isFinite(n)&&n>=0&&n<=1));
   for(let i=0;i<count;i++){
    assert(Math.abs(formation.positions[i*3])<160);
    assert(205+formation.positions[i*3+1]>100,'formation drops too close to the mall roof');
    assert(formation.colors[i*3]+formation.colors[i*3+1]+formation.colors[i*3+2]>.3,'unlit drone');
   }
  }
 }
});
test('the show holds each shape, morphs, and loops without a position discontinuity',()=>{
 for(let cue=0;cue<5;cue++){
  const start=droneCue(cue*DRONE_CUE),held=droneCue(cue*DRONE_CUE+DRONE_HOLD-1);
  assert.equal(start.cue,cue);assert.equal(start.blend,0);assert.equal(held.blend,0);
  const end=droneCue((cue+1)*DRONE_CUE-1e-5),next=droneCue((cue+1)*DRONE_CUE);
  assert(end.blend>.99999);assert.equal(end.next,next.cue);assert.equal(next.blend,0);
 }
});
test('animated drones share one draw object, preserve buffers and reflect in the river',()=>{
 const scene=new THREE.Scene(),river={sample:(_distance,offset=0)=>({x:offset,z:0,width:300,nx:1,nz:0})};
 const show=createDroneShow(scene,river,[{kind:'icon-siam',distance:100,side:1}],true);
 assert.equal(scene.children.length,1);assert(show.points.isPoints);assert.equal(show.points.geometry.attributes.position.count,300);
 assert.equal(show.points.layers.mask,1,'include the display in the default water reflection layer');
 assert.equal(show.points.material.depthTest,true);assert.equal(show.points.material.depthWrite,false);
 const buffers=Object.values(show.points.geometry.attributes).map(a=>a.array);
 for(let i=0;i<3500;i++)show.update(i/30);
 Object.values(show.points.geometry.attributes).forEach((a,i)=>assert.equal(a.array,buffers[i]));
 assert.equal(show.currentName,'Thai flag');
 show.points.geometry.dispose();show.points.material.dispose();
});

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {prepareMap} from '../src/world/map.mjs';
import {prepareBuildingLayout} from '../src/world/layout.mjs';
import {planBtsStations,createBtsStation,stationRectangle,BTS_LEVELS} from '../src/world/btsStations.js';

const map=prepareMap(JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url))));
for(const mobile of [false,true])test(`${mobile?'mobile':'desktop'} BTS entrances and supports clear roads and buildings`,()=>{
  const layout=prepareBuildingLayout(map,{mobile}),stations=planBtsStations(map,layout);
  assert.equal(stations.length,2);
  for(const station of stations){
    assert.equal(station.entrances.length,4,`${station.en}: four connected entrances`);
    assert.ok(station.supports.length>=2,`${station.en}: supported concourse`);
    for(const e of station.entrances){
      assert.ok(layout.clearance.isRectangleClear(e.footprint),`${station.en} exit ${e.number}: road clearance`);
      assert.ok(layout.clearance.isRectangleClearOfBuildings(e.footprint,.25),`${station.en} exit ${e.number}: building clearance`);
      const bridge=stationRectangle(station,(e.x+e.side*8)/2,e.z,Math.abs(e.x)-8+2.8,3);
      assert.ok(layout.clearance.isRectangleClearOfBuildings(bridge,.25),'bridge does not cross a building');
    }
    for(const p of station.supports)assert.ok(layout.clearance.isRectangleClear(stationRectangle(station,p.x,p.z,.9,1.5)));
  }
  assert.deepEqual(planBtsStations(map,layout),stations,'placement is deterministic');
});

test('rendered station stairs and access bridges have continuous floors and bounded geometry',()=>{
  const stations=planBtsStations(map,prepareBuildingLayout(map));
  for(const station of stations){
    const {group,collision}=createBtsStation(station,{concrete:new THREE.MeshStandardMaterial()},()=>new THREE.Texture());
    const inverse=group.matrixWorld.clone().invert(),positions=collision.attributes.position;
    // Test actual collision vertices against the footprints checked by the planner.
    for(let i=0;i<positions.count;i++){
      const p=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(inverse);
      const inEntrance=station.entrances.some(e=>Math.abs(p.x-e.x)<=1.401&&Math.abs(p.z-e.z-e.direction*6.5)<=8.001);
      const inPier=station.supports.some(s=>Math.abs(p.x-s.x)<=.451&&Math.abs(p.z-s.z)<=.751);
      assert.ok(inEntrance||inPier,`collision extends outside validated footprint: ${p.toArray()}`);
    }
    group.position.set(0,0,0);group.rotation.set(0,0,0);group.updateMatrixWorld(true);
    const floorAt=(x,y,z)=>new THREE.Raycaster(new THREE.Vector3(x,y+.04,z),new THREE.Vector3(0,-1,0),0,.3).intersectObject(group,true)[0];
    for(const e of station.entrances){
      for(let i=0;i<=36;i++){
        const progress=i*.3+(i>=18?1.4:0),z=e.z+e.direction*(13.5-progress),height=.2+i*(6.35/36);
        assert.ok(floorAt(e.x,height,z),`${station.en}: stair ${i} connects at ${z}`);
      }
      for(let x=Math.min(0,e.x);x<=Math.max(0,e.x);x+=.25)assert.ok(floorAt(x,BTS_LEVELS.concourse,e.z),`${station.en}: bridge is missing floor at x=${x}`);
      assert.ok(floorAt(e.x,BTS_LEVELS.concourse,e.z+e.direction*1.3),'top flight joins landing');
    }
    for(const side of [-1,1])for(const end of [-1,1]){
      const x=side*6.3,top=end*26,low=end*15.6;
      assert.ok(floorAt(x,BTS_LEVELS.platform,top+end*.03),'upper flight joins platform');
      assert.ok(floorAt(x,BTS_LEVELS.concourse,low),'lower flight joins concourse');
      // There must be an opening above each stair, not a slab across passengers' heads.
      const hit=new THREE.Raycaster(new THREE.Vector3(x,11.5,end*20),new THREE.Vector3(0,-1,0),0,6).intersectObject(group,true)[0];
      assert.ok(hit&&hit.point.y<10,'platform opening reaches the stairs below');
    }
    let triangles=0;group.traverse(mesh=>{if(mesh.isMesh){triangles+=mesh.geometry.index.count/3;assert.ok([...mesh.geometry.attributes.position.array].every(Number.isFinite));}});
    assert.ok(group.children.length<=16,'station stays batched for mobile');assert.ok(triangles<25000);
    collision.dispose();group.traverse(mesh=>{if(mesh.isMesh){mesh.geometry.dispose();mesh.material.dispose();}});
  }
});

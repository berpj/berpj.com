import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {prepareMap} from '../src/world/map.mjs';
import {prepareBuildingLayout} from '../src/world/layout.mjs';
import {planBtsStations} from '../src/world/btsStations.js';
import {segmentIntersectsBuilding,createUtilityVolumeIndex,planUtilityLines,createUtilityLines,stationUtilityVolumes} from '../src/world/utilityLines.mjs';

const rectangle = (id,x,z,w,d,baseHeight=0,topHeight=12) => ({id,baseHeight,topHeight,polygons:[{outer:[{x,z},{x:x+w,z},{x:x+w,z:z+d},{x,z:z+d},{x,z}],holes:[]}]});

test('complete segment testing detects a thin wall between two outside endpoints', () => {
  const building=rectangle('thin-wall',8.2,-1,.4,2);
  assert.equal(segmentIntersectsBuilding({x:0,y:6,z:0},{x:20,y:6,z:0},building,{margin:0}),true);
  assert.equal(segmentIntersectsBuilding({x:0,y:13,z:0},{x:20,y:13,z:0},building,{margin:0}),false);
  assert.equal(segmentIntersectsBuilding({x:0,y:6,z:1.6},{x:20,y:6,z:1.6},building,{margin:.75}),true,'architectural projections are reserved');
});

test('sagging wires are validated at every actual rendered segment, not just supports', () => {
  const index=createUtilityVolumeIndex([rectangle('low-building',8,-2,4,4,0,7)]);
  assert.equal(index.isSegmentClear({x:0,y:9,z:0},{x:20,y:9,z:0}),true);
  assert.equal(index.isPolylineClear([{x:0,y:9,z:0},{x:7,y:7.1,z:0},{x:10,y:6.5,z:0},{x:14,y:7.1,z:0},{x:20,y:9,z:0}]),false);
});

test('courtyards and raised building bases are respected by 3D wire tests', () => {
  const courtyard=rectangle('courtyard',0,0,20,20);
  courtyard.polygons[0].holes.push([{x:3,z:3},{x:17,z:3},{x:17,z:17},{x:3,z:17},{x:3,z:3}]);
  assert.equal(segmentIntersectsBuilding({x:5,y:6,z:10},{x:15,y:6,z:10},courtyard),false);
  assert.equal(segmentIntersectsBuilding({x:5,y:6,z:10},{x:25,y:6,z:10},courtyard),true);
  const elevated=rectangle('elevated',0,0,10,10,8,20);
  assert.equal(segmentIntersectsBuilding({x:-5,y:5,z:5},{x:15,y:5,z:5},elevated),false);
  assert.equal(segmentIntersectsBuilding({x:-5,y:10,z:5},{x:15,y:10,z:5},elevated),true);
  assert.equal(segmentIntersectsBuilding({x:-5,y:30,z:5},{x:15,y:0,z:5},elevated),true,'height changes along a segment are clipped correctly');
});

const source=JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url),'utf8'));
const map=prepareMap(source);

for(const mobile of [false,true])test(`all ${mobile?'mobile':'desktop'} utility spans clear the selected district's rendered building volumes`,()=>{
  const layout=prepareBuildingLayout(map,{mobile}), extraVolumes=stationUtilityVolumes(map,planBtsStations(map,layout));
  const before=JSON.stringify(layout.buildings);
  const plan=planUtilityLines(map,layout.buildings,{mobile,clearance:layout.clearance,extraVolumes});
  assert.equal(JSON.stringify(layout.buildings),before,'planning does not mutate the building layout');
  assert.ok(plan.poles.length>150);assert.ok(plan.stats.denseSpans>15);assert.ok(plan.stats.sparseSpans>30);
  assert.ok(plan.spans.some(s=>s.cables.length>=(mobile?12:24)));
  assert.ok(plan.spans.some(s=>s.cables.length<=7),'some streets remain sparse');
  const index=createUtilityVolumeIndex([...layout.buildings,...extraVolumes]);
  for(const pole of plan.poles){
    assert.equal(layout.clearance.isCircleClear({...pole,radius:.30}),true,`pole ${pole.id} intrudes into a road`);
    assert.equal(index.isSegmentClear({...pole,y:0},{...pole,y:pole.height},.50),true,`pole ${pole.id} intersects a building`);
  }
  for(const span of plan.spans)for(const cable of span.cables){
    assert.equal(index.isPolylineClear(cable.points),true,`span ${span.a}/${span.b} intersects a building`);
    assert.ok(cable.points.every(p=>[p.x,p.y,p.z].every(Number.isFinite)));
    assert.ok(Math.min(...cable.points.map(p=>p.y))>4.5,'bundles retain usable driving clearance');
  }
  for(const detail of plan.detailLines)assert.equal(index.isPolylineClear(detail.points),true);
  const repeated=planUtilityLines(map,layout.buildings,{mobile,clearance:layout.clearance,extraVolumes});
  assert.deepEqual(repeated,plan,'busy blocks and cable sag are deterministic');
  const group=createUtilityLines(THREE,plan,{mobile});
  assert.ok(group.userData.drawCallMaximum<=(mobile?90:140));
  const materials=new Set();group.traverse(part=>{if(part.isMesh||part.isLineSegments){materials.add(part.material);assert.equal(part.frustumCulled,true);assert.ok(part.geometry.boundingSphere.radius>0);assert.ok(Array.from(part.geometry.attributes.position.array).every(Number.isFinite));}});
  assert.equal(materials.size,3,'all repeated blocks share the same three materials');
});

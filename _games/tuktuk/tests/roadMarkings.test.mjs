import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import * as THREE from 'three';
import {prepareMap} from '../src/world/map.mjs';
import {planRoadMarkings as bakedPlan,createRoadMarkings} from '../src/world/roadMarkings.mjs';
import {roadMapSignature} from '../src/world/roadMarkingsSignature.mjs';
import {planRoadMarkings,roadGeometryArea,roadPolygonOperations as polygon} from '../tools/world/roadMarkingsPlan.mjs';

function fixture(points,extra=[]){
  const tags={highway:'primary','name:en':'Fixture Road',oneway:'yes',lanes:'3'};
  const segments=points.slice(1).map((b,i)=>{const a=points[i],len=Math.hypot(b.x-a.x,b.z-a.z);return {id:`way/${i}:1`,ia:i,ib:i+1,a,b,len,dir:{x:(b.x-a.x)/len,z:(b.z-a.z)/len},road:{id:`way/${i}`,tags,width:9.1}};});
  const graph=new Map(),nodes=new Map();for(const s of [...segments,...extra])for(const [id,p,to]of [[s.ia,s.a,s.ib],[s.ib,s.b,s.ia]]){nodes.set(id,p);if(!graph.has(id))graph.set(id,[]);graph.get(id).push({segment:s,to});}
  return {segments:[...segments,...extra],main:segments,graph,nodes,spawn:points[0]};
}
const sumCurbs=plan=>plan.curbs.reduce((sum,c)=>sum+roadGeometryArea(c.geometry),0);

test('red-white phase continues across source way seams instead of restarting at each OSM node',()=>{
  const plan=planRoadMarkings(fixture([{x:0,z:0},{x:5,z:0},{x:14,z:0}]));
  assert.equal(plan.paths.length,1);assert.equal(plan.paths[0].segments.length,2);
  assert.ok(plan.curbs.some(c=>Math.abs(c.end-5)<.001&&c.color==='red'));
  assert.ok(plan.curbs.some(c=>Math.abs(c.start-5)<.001&&c.color==='red'));
  assert.ok(roadGeometryArea(plan.white)>1,'9.1m three-lane carriageways receive lane marks');
});

test('joined bends and crossing sois contain no overlapping colored curb faces',()=>{
  const crossing={id:'way/cross:1',ia:99,ib:100,a:{x:10,z:-10},b:{x:10,z:16},len:26,dir:{x:0,z:1},road:{id:'way/cross',width:7.2,tags:{highway:'residential','name:en':'Crossing Soi'}}};
  const plan=planRoadMarkings(fixture([{x:0,z:0},{x:8,z:0},{x:10,z:5},{x:19,z:5}],[crossing]));
  const union=polygon.union(plan.curbs.flatMap(c=>c.geometry));
  assert.ok(Math.abs(sumCurbs(plan)-roadGeometryArea(union))<1e-5,'shared colored seams have zero positive-area overlap');
  assert.ok(roadGeometryArea(polygon.intersection(union,plan.asphalt))<1e-6,'all crossroads cut the curb strip, even without shared node IDs');
  assert.ok(roadGeometryArea(polygon.intersection(plan.sidewalk,plan.asphalt))<1e-6,'sidewalk/asphalt surfaces are disjoint');
});

test('the baked selected district is finite, matches its source and clears all road junctions',()=>{
  const source=fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url));
  const map=prepareMap(JSON.parse(source)),plan=bakedPlan(map);
  assert.equal(plan.sourceSha256,createHash('sha256').update(source).digest('hex'));
  assert.equal(plan.mapSignature,roadMapSignature(map));assert.equal(plan.stats.clipFailures,0);
  const regenerated=planRoadMarkings(map);
  for(const field of ['asphalt','sidewalk','curbs','white','yellow','stats'])assert.deepEqual(plan[field],regenerated[field],`baked ${field} matches the reproducible source generator`);
  assert.ok(plan.curbs.length>4000);assert.ok(roadGeometryArea(plan.white)>100);
  const union=polygon.union(plan.curbs.flatMap(c=>c.geometry));
  assert.ok(Math.abs(sumCurbs(plan)-roadGeometryArea(union))<.025,'district curb faces are mutually disjoint to the millimetre bake precision');
  assert.ok(roadGeometryArea(polygon.intersection(union,plan.asphalt))<.01,'no curb obstructs a rendered carriageway or junction');
  assert.ok(roadGeometryArea(polygon.difference(plan.white,plan.asphalt))<.01,'white paint never floats outside asphalt');
  assert.ok(roadGeometryArea(polygon.difference(plan.yellow,plan.asphalt))<.01,'yellow paint never floats outside asphalt');
  const material=new THREE.MeshStandardMaterial(),group=createRoadMarkings(THREE,plan,{road:material,sidewalk:material});
  assert.equal(group.children.length,4,'one curb mesh and one paint mesh replace overlapping color batches');
  for(const part of group.children)assert.ok(Array.from(part.geometry.attributes.position.array).every(Number.isFinite));
  const curb=group.children.find(m=>m.name.includes('kerb')),paint=group.children.find(m=>m.name.includes('paint'));
  assert.ok(curb.geometry.attributes.color);assert.equal(paint.material.polygonOffset,true);
  assert.equal(paint.material.depthWrite,false);assert.ok(paint.material.polygonOffsetFactor<0);
});

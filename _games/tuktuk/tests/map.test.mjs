import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {prepareMap} from '../src/world/map.mjs';
const map=prepareMap(JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url),'utf8')));
test('all mission anchors have finite in-district positions',()=>{assert.ok(map.anchors.length>=30);assert.equal(map.destinations.length,15);for(const a of [...map.anchors,...map.destinations]){assert.ok(Number.isFinite(a.x)&&Number.isFinite(a.z),a.name);assert.ok(map.inside(a),a.name);}});
test('every destination is reachable from the starter passenger',()=>{for(const d of map.destinations){const r=map.route(map.anchors[0],d);assert.ok(r&&Number.isFinite(r.length)&&r.length>0,d.name);assert.ok(r.points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.z)),d.name);}});
test('source road IDs and elevated BTS tags are preserved',()=>{assert.ok(map.main.length>20);assert.ok(map.data.railways.some(r=>r.tags.bridge==='viaduct'&&r.tags['name:en']==='BTS Sukhumvit Line'));assert.ok(map.roads.every(r=>r.id.startsWith('way/')));});
test('routing forward inside one segment does not send the player back to its first node',()=>{
  const s=map.main.find(s=>s.len>30&&s.road.tags.oneway==='yes');
  const a={x:s.a.x+s.dir.x*s.len*.3,z:s.a.z+s.dir.z*s.len*.3};
  const b={x:s.a.x+s.dir.x*s.len*.7,z:s.a.z+s.dir.z*s.len*.7};
  const r=map.route(a,b);assert.ok(r);assert.ok(Math.abs(r.length-s.len*.4)<.01);
  assert.ok(r.points.every(p=>(p.x-a.x)*s.dir.x+(p.z-a.z)*s.dir.z>=-.01));
});

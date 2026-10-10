import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import polygonClipping from 'polygon-clipping';
import {prepareMap} from '../src/world/map.mjs';
import {createRoadClearance, prepareBuildingLayout} from '../src/world/layout.mjs';

function area(geometry) {
  const ringArea = ring => { let sum = 0; for (let i = 1; i < ring.length; i++) sum += ring[i - 1][0] * ring[i][1] - ring[i][0] * ring[i - 1][1]; return Math.abs(sum) / 2; };
  return geometry.reduce((sum, polygon) => sum + ringArea(polygon[0]) - polygon.slice(1).reduce((n, ring) => n + ringArea(ring), 0), 0);
}
const source = JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json', import.meta.url), 'utf8'));
const map = prepareMap(source);

test('every selected ground-building polygon clears every intersecting road corridor', () => {
  const layout = prepareBuildingLayout(map);
  const asphalt = createRoadClearance(map, { margin: 0 });
  assert.equal(layout.stats.rejectedInvalid, 0);
  assert.ok(layout.buildings.length > 2800, 'retain the district instead of removing buildings');
  assert.ok(layout.stats.clipped > 400, 'the source district contains real overlap cases');
  for (const building of layout.buildings) {
    assert.ok(building.renderArea <= building.sourceArea + .001, building.id);
    if (building.baseHeight > .01) continue;
    for (const polygon of building.polygons) {
      const geometry = [polygon.outer, ...polygon.holes].map(ring => ring.map(p => [p.x, p.z]));
      const xs = polygon.outer.map(p => p.x), zs = polygon.outer.map(p => p.z);
      const candidates = asphalt.candidates({ minX: Math.min(...xs), maxX: Math.max(...xs), minZ: Math.min(...zs), maxZ: Math.max(...zs) });
      for (const corridor of candidates) assert.ok(area(polygonClipping.intersection(geometry, corridor.geometry)) < 1e-6, `${building.id} overlaps ${corridor.segment.id}`);
    }
  }
  assert.equal(prepareBuildingLayout(map), layout, 'unchanged layout is cached');
});

test('elevated BTS station source footprints are excluded from ground extrusion', () => {
  const layout = prepareBuildingLayout(map);
  assert.ok(layout.stats.skippedBts >= 2);
  assert.ok(!layout.buildings.some(b => ['way/157656702', 'way/1234791533'].includes(b.id)));
  const sofitel = layout.buildings.find(b => b.id === 'way/209346218');
  assert.equal(sofitel.baseHeight, 4);
  assert.equal(sofitel.topHeight, 120);
  assert.equal(sofitel.collisionHeight, 0, 'no collider is invented below an elevated base');
  const terminal = layout.buildings.find(b => b.id === 'way/157656710');
  assert.equal(terminal.topHeight, 177, 'building:height retains the mapped landmark height');
});

test('full rectangles reject edge crossings even when all corners and centre miss the road', () => {
  const s = { a: { x: -20, z: 2 }, b: { x: 20, z: 2 }, len: 40, dir: { x: 1, z: 0 }, road: { width: 1 } };
  const clearance = createRoadClearance({ segments: [s] }, { margin: 0 });
  // Corners have z=±5, centre z=0; the road cuts the body at z=2.
  assert.equal(clearance.isRectangleClear({ x: 0, z: 0, width: 10, depth: 10 }), false);
  assert.equal(clearance.isRectangleClear({ x: 0, z: -10, width: 10, depth: 3, yaw: .3 }), true);
  assert.equal(clearance.isCircleClear({ x: 0, z: 0, radius: 2 }), false);
  assert.equal(clearance.isCircleClear({ x: 0, z: -4, radius: 1 }), true);
});

test('concave footprints, courtyards and multiple exteriors survive layout preparation', () => {
  const outer = [[0, 0], [20, 0], [20, 8], [8, 8], [8, 20], [0, 20], [0, 0]];
  const hole = [[2, 2], [5, 2], [5, 5], [2, 5], [2, 2]];
  const other = [[30, 0], [35, 0], [35, 5], [30, 5], [30, 0]];
  const synthetic = { segments: [], data: { buildings: [{ id: 'relation/courtyard', tags: { 'building:levels': '2' }, coordinates: outer, outerRings: [outer, other], innerRings: [hole] }] }, project: p => ({ x: p[0], z: p[1] }), inside: () => true, spawn: { x: 0, z: 0 } };
  const layout = prepareBuildingLayout(synthetic), building = layout.buildings[0];
  assert.equal(building.polygons.length, 2);
  assert.equal(building.polygons.reduce((sum, p) => sum + p.holes.length, 0), 1);
  assert.equal(building.renderArea, 272);
  assert.equal(layout.clearance.isPointInBuilding({ x: 3, z: 3 }), false, 'courtyard remains empty');
  assert.equal(layout.clearance.isPointInBuilding({ x: 12, z: 12 }), false, 'concavity is not filled');
  assert.equal(layout.clearance.isPointInBuilding({ x: 3, z: 10 }), true);
  assert.equal(layout.clearance.isRectangleClearOfBuildings({ x: 3, z: 10, width: 1, depth: 1 }), false);
  assert.equal(layout.clearance.isRectangleClearOfBuildings({ x: 3, z: 10, width: 1, depth: 1 }, 0, building.id), true);
});

test('min_height and minimum storey tags define the actual elevated wall span', () => {
  const square = [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]];
  const data = [{ id: 'way/min-height', tags: { height: '20 m', min_height: '6 m' }, coordinates: square }, { id: 'way/min-level', tags: { 'building:levels': '5', 'building:min_level': '2' }, coordinates: square }];
  const synthetic = { segments: [], data: { buildings: data }, project: p => ({ x: p[0], z: p[1] }), inside: () => true, spawn: { x: 0, z: 0 } };
  const layout = prepareBuildingLayout(synthetic);
  assert.equal(layout.buildings[0].baseHeight, 6); assert.equal(layout.buildings[0].topHeight, 20);
  assert.equal(layout.buildings[1].baseHeight, 6.5); assert.equal(layout.buildings[1].topHeight, 16.25);
  assert.ok(layout.buildings.every(b => b.collisionHeight === 0));
});

test('clipping discards long thin scraps even when their area exceeds three square metres', () => {
  const s = { a: { x: 0, z: -5 }, b: { x: 0, z: 105 }, len: 110, dir: { x: 0, z: 1 }, road: { width: 9.1 } };
  const square = [[-5, 0], [5, 0], [5, 100], [-5, 100], [-5, 0]];
  const synthetic = { segments: [s], data: { buildings: [{ id: 'way/thin-fragments', tags: {}, coordinates: square }] }, project: p => ({ x: p[0], z: p[1] }), inside: () => true, spawn: { x: 0, z: 0 } };
  const layout = prepareBuildingLayout(synthetic);
  assert.equal(layout.buildings.length, 0); assert.equal(layout.stats.discardedFragments, 2);
  assert.equal(layout.stats.removedArea, 1000);
});

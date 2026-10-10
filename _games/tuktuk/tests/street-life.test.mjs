import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import { createStreetLife, sampleSidewalkMotion } from '../src/assets/streetLife.js';
import { prepareMap } from '../src/world/map.mjs';

test('sidewalk shuttles brake and turn continuously without leaving their validated span', () => {
  const actor = { range: 3, pace: 1, phase: 0, segment: { dir: { x: .6, z: -.8 } } };
  let previous = sampleSidewalkMotion(actor, 0), stationaryTurn = false;
  for (let step = 1; step <= 30000; step++) {
    const current = sampleSidewalkMotion(actor, step * .001);
    assert.ok(Math.abs(current.offset) <= actor.range + 1e-6);
    assert.ok(current.speed >= -1e-6 && current.speed <= actor.pace + 1e-6);
    assert.ok(Math.abs(current.offset - previous.offset) <= .00101);
    const turn = Math.atan2(Math.sin(current.yaw - previous.yaw), Math.cos(current.yaw - previous.yaw));
    assert.ok(Math.abs(turn) < .005, 'endpoint turns must not flip 180 degrees in one frame');
    if (Math.abs(turn) > .001 && current.speed === 0) stationaryTurn = true;
    previous = current;
  }
  assert.ok(stationaryTurn, 'actors turn in place while stopped at an endpoint');
});

function syntheticMap() {
  const segment = { a: { x: 0, z: -80 }, b: { x: 0, z: 80 }, len: 160, dir: { x: 0, z: 1 }, ia: 1, ib: 2,
    road: { width: 8, tags: { oneway: 'yes' } } };
  return { main: [segment], segments: [segment], graph: new Map(), spawn: { x: 0, z: 0 },
    inside: p => Math.abs(p.x) < 20 && Math.abs(p.z) < 100,
    nearest: p => ({ x: 0, z: p.z, distance: Math.abs(p.x), segment }),
    project: p => ({ x: p[0], z: p[1] }),
    data: { buildings: [{ coordinates: [[7.5, 19], [9, 19], [9, 21], [7.5, 21]] }] },
  };
}

test('sleeping cats use only safe supplied shop thresholds and respect the mobile cat cap', () => {
  const sites = [
    { sleepingCatSite: { x: 0, z: -35 } }, // Asphalt must reject this site.
    { sleepingCatSite: { x: 8, z: 20 } }, // Building interior must reject this site.
    ...[-30, 0, 30].map(z => ({ type: 'shuttered', yaw: 0, sleepingCatSite: { x: 6.5, z, yaw: Math.PI / 2 } })),
  ];
  for (const mobile of [false, true]) {
    const life = createStreetLife(THREE, syntheticMap(), { mobile, shopfronts: sites });
    assert.equal(life.group.userData.sleepingCats, mobile ? 2 : 3);
    assert.equal(life.group.userData.rejectedSleepingSites, 2);
    for (let frame = 0; frame < 1000; frame++) life.update(.1, { x: 0, z: 0 });
    assert.equal(life.group.userData.visibleSleepingCats, mobile ? 2 : 3);
    assert.equal(life.group.userData.capacityOverflows, 0);
  }
});

test('actual Bangkok crowd and animal animation remain finite and inside instance/triangle budgets', () => {
  const map = prepareMap(JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json', import.meta.url))));
  for (const mobile of [false, true]) {
    const life = createStreetLife(THREE, map, { mobile });
    const batches = life.group.children.filter(object => object.isInstancedMesh);
    assert.equal(batches.length, 4, 'crowds and animals stay in four shared primitive batches');
    const places = [map.spawn, ...map.anchors.slice(0, 10)];
    for (let frame = 0; frame < 1500; frame++) {
      life.update(.1, places[Math.floor(frame / 150) % places.length]);
      const stats = life.group.userData;
      assert.equal(stats.capacityOverflows, 0);
      assert.ok(stats.visiblePedestrians + stats.visibleVendors <= stats.peopleBudget);
      assert.ok(stats.visibleAnimals <= stats.animalBudget);
      assert.ok(stats.actorTriangles < (mobile ? 80000 : 150000));
      if (frame % 50 === 0) for (const mesh of batches) {
        assert.ok(mesh.count <= mesh.instanceMatrix.count);
        assert.ok([...mesh.instanceMatrix.array.subarray(0, mesh.count * 16)].every(Number.isFinite));
      }
    }
    const torso = batches.find(mesh => mesh.name === 'Shoulders chest and waist profiles').geometry;
    const points = torso.attributes.position, normals = torso.attributes.normal;
    for (let i = 0; i < 40; i++) assert.ok(points.getX(i) * normals.getX(i) + points.getZ(i) * normals.getZ(i) > -.01, 'torso side normals point outward');
  }
});

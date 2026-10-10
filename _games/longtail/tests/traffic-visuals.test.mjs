import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createTrafficBoat, updateTrafficDetail } from '../src/traffic-visuals.js';
import { boatSpecs } from '../src/boats.js';

function renderables(group) { const result = []; group.traverse(object => { if (object.isMesh) result.push(object); }); return result; }

test('traffic clones share immutable buffers but own transforms and engine references', () => {
  const a = createTrafficBoat('longtail', 1), b = createTrafficBoat('longtail', 4);
  const ma = renderables(a.levels[0].object), mb = renderables(b.levels[0].object);
  assert.equal(ma.length, mb.length);
  for (let i = 0; i < ma.length; i++) {
    assert.notEqual(ma[i], mb[i]);
    assert.equal(ma[i].geometry, mb[i].geometry);
    assert.equal(ma[i].material, mb[i].material);
  }
  assert.notEqual(a.userData.motor, b.userData.motor);
  assert.notEqual(a.userData.propeller, b.userData.propeller);
  assert.equal(a.userData.motor.parent, a.levels[0].object);
  assert.equal(a.userData.propeller.parent, a.userData.motor);
  a.userData.motor.rotation.y = .2;
  assert.equal(b.userData.motor.rotation.y, 0);
  a.position.x = 10;
  assert.equal(b.position.x, 0);
  a.userData.lightSources[0].position[0] = 9;
  assert.equal(b.userData.lightSources[0].position[0], 0);
});

test('traffic LOD chooses exactly one model with hysteresis and a shorter mobile range', () => {
  const desktop = createTrafficBoat('cruise'), mobile = createTrafficBoat('cruise', 0, true);
  assert.equal(desktop.autoUpdate, false);
  updateTrafficDetail(desktop, 225);
  assert.equal(desktop.userData.detail, 'near');
  updateTrafficDetail(desktop, 240);
  assert.equal(desktop.userData.detail, 'far');
  updateTrafficDetail(desktop, 215);
  assert.equal(desktop.userData.detail, 'far');
  desktop.userData.setDetail(200);
  assert.equal(desktop.userData.detail, 'near');
  updateTrafficDetail(mobile, 180);
  assert.equal(mobile.userData.detail, 'far');
  for (const mesh of [desktop, mobile]) assert.equal(mesh.levels.filter(level => level.object.visible).length, 1);
  assert.doesNotThrow(() => updateTrafficDetail(new THREE.Group(), 300));
});

test('distant fleet retains collision scale, valid geometry and a small render budget', () => {
  for (const [kind, spec] of Object.entries(boatSpecs)) {
    const vessel = createTrafficBoat(kind), proxy = vessel.levels[1].object, parts = renderables(proxy);
    assert.equal(vessel.userData.spec, spec);
    assert.equal(vessel.userData.kind, kind);
    assert(vessel.userData.lightSources.length > 0);
    assert(parts.length <= 4, `${kind} draw-call budget`);
    let triangles = 0;
    for (const mesh of parts) {
      triangles += mesh.geometry.attributes.position.count / 3;
      assert(mesh.geometry.attributes.position.array.every(Number.isFinite));
      assert(mesh.geometry.attributes.normal.array.every(Number.isFinite));
      assert(mesh.geometry.boundingSphere.radius > 0);
      assert.equal(mesh.frustumCulled, true);
    }
    assert(triangles < 1600, `${kind}: ${triangles} triangles`);
    const bounds = new THREE.Box3().setFromObject(proxy), size = bounds.getSize(new THREE.Vector3());
    assert(size.z >= spec.length, `${kind} does not shrink when distant`);
    assert(size.z < spec.length + 4, `${kind} reasonable silhouette`);
    assert(size.x >= spec.width * .94, `${kind} hull width`);
  }
});

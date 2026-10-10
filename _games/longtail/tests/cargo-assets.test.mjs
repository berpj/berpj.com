import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { cargoSpecs, createCargoBoat } from '../src/cargo.js';

test('cargo hulls are complete, finite, dimensioned assets with a low rendering budget', () => {
  for (const kind of ['tug', 'barge']) for (let variant = 0; variant < 3; variant++) {
    const model = createCargoBoat(kind, variant), spec = cargoSpecs[kind];
    let calls = 0, triangles = 0;
    model.traverse(mesh => {
      if (!mesh.isMesh) return;
      calls++;
      const { position, normal, uv, color } = mesh.geometry.attributes;
      for (const attribute of [position, normal, uv, color]) {
        assert(attribute, `${kind} has complete material inputs`);
        assert.equal(attribute.count, position.count);
        assert(attribute.array.every(Number.isFinite));
      }
      assert.equal(mesh.geometry.groups.length, 0, 'materials must remain merged');
      assert.equal(mesh.material.transparent, false, 'no sorting-dependent transparent hulls');
      triangles += position.count / 3;
    });
    assert(calls <= 6, `${kind} stays inside six draw calls`);
    assert(triangles < 9000, `${kind} stays inside its triangle budget`);
    const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3());
    assert(size.z >= spec.length * .99 && size.z < spec.length + .6);
    assert(size.x >= spec.width * .99 && size.x < spec.width + .6);
    assert(bounds.min.y < 0 && bounds.max.y > 2, 'loaded hull crosses the waterline');
    for (const side of ['bow', 'stern']) {
      const point = new THREE.Vector3(...model.userData.towPoints[side]);
      assert(bounds.containsPoint(point), `${kind} ${side} towing hardware is on the vessel`);
      assert(side === 'bow' ? point.z < 0 : point.z > 0);
    }
  }
});

test('repeated cargo boats share GPU resources and have independent transform and metadata state', () => {
  const a = createCargoBoat('barge', 1), b = createCargoBoat('barge', 1);
  assert.notEqual(a, b);
  for (let i = 0; i < a.children.length; i++) {
    assert.notEqual(a.children[i], b.children[i]);
    assert.equal(a.children[i].geometry, b.children[i].geometry);
    assert.equal(a.children[i].material, b.children[i].material);
  }
  a.position.x = 87;
  a.rotation.y = 1.3;
  a.userData.lightSources[0].position[0] = 999;
  a.userData.towPoints.stern[2] = 999;
  assert.equal(b.position.x, 0);
  assert.equal(b.rotation.y, 0);
  assert.notEqual(b.userData.lightSources[0].position[0], 999);
  assert.notEqual(b.userData.towPoints.stern[2], 999);
  assert.equal(b.userData.spec, cargoSpecs.barge);
  assert(Object.isFrozen(cargoSpecs.barge));
});

test('cargo lights and every paint variation remain usable by the pooled lighting system', () => {
  for (const kind of ['tug', 'barge']) for (const variation of [-1, 0, 1, 2, 3]) {
    const model = createCargoBoat(kind, variation);
    assert.equal(model.userData.kind, kind);
    assert(model.userData.lightSources.length > 0 && model.userData.lightSources.length <= 2);
    for (const light of model.userData.lightSources) {
      assert(light.position.every(Number.isFinite));
      assert(light.intensity > 0 && light.intensity < 20, 'working boats have restrained lamps');
      assert(light.distance > 0 && light.distance < 10);
      assert(Number.isInteger(light.color));
    }
  }
});

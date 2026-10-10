import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createBangkokShop} from '../src/assets/bangkokShops.js';

// Ray tests only need the authored geometry, not rasterized sign lettering.
const context = new Proxy({}, {get: (target, key) => target[key] ?? (() => {})});
globalThis.document = {createElement: () => ({getContext: () => context})};

for (const variant of [0, 1]) {
  const label = variant === 0 ? '7-Eleven' : 'pharmacy';
  test(`${label} has no see-through seams at the building opening`, () => {
    const shop = createBangkokShop(THREE, variant);
    shop.updateMatrixWorld(true);
    const opaque = shop.children.filter(mesh => !mesh.material.transparent);
    // Sample the full cutout, including both narrow jambs and the top seam.
    for (const x of [-4.99, -4.9, -4.7, -2, 0, 2, 4.7, 4.9, 4.99]) {
      for (const y of [.2, 1.6, 3.3, 3.8, 4.2, 6, 7.7, 7.79]) {
        for (const slope of [-1.5, 0, 1.5]) {
          const entry = new THREE.Vector3(x, y, 3.04);
          const direction = new THREE.Vector3(slope, 0, -1).normalize();
          const origin = entry.clone().addScaledVector(direction, -10);
          const ray = new THREE.Raycaster(origin, direction, 0, 20);
          const hit = ray.intersectObjects(opaque, false)[0];
          assert.ok(hit, `open seam at x=${x}, y=${y}, slope=${slope}`);
          assert.ok(hit.point.z >= -3.05, 'view should stop inside the shop');
          assert.ok(Math.abs(hit.point.x) <= 5.03, 'view should stop before leaving its side wall');
        }
      }
    }
  });

  test(`${label} still has a visible interior behind the entrance glass`, () => {
    const shop = createBangkokShop(THREE, variant);
    shop.updateMatrixWorld(true);
    const ray = new THREE.Raycaster(new THREE.Vector3(.7, 2.35, 8), new THREE.Vector3(0, 0, -1));
    const hits = ray.intersectObject(shop, true);
    assert.ok(hits.some(hit => hit.object.material.transparent), 'entrance glazing remains');
    const solid = hits.find(hit => !hit.object.material.transparent);
    assert.ok(solid, 'opaque interior stops the view');
    assert.ok(solid.point.z < 1, 'the facade has not been filled over the shop interior');
  });
}

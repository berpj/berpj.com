import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const V=new THREE.Vector3(), E=new THREE.Euler(), Q=new THREE.Quaternion();
const S=new THREE.Vector3(), T=new THREE.Matrix4();

export class Building {
  constructor(kind) { this.kind = kind; this.parts = new Map(); }
  add(geometry, material, x = 0, y = 0, z = 0, rotation = [0, 0, 0], scale = [1, 1, 1]) {
    V.set(x, y, z); E.set(...rotation); Q.setFromEuler(E); S.set(...scale); T.compose(V, Q, S);
    geometry.applyMatrix4(T);
    if (geometry.index) { const old = geometry; geometry = old.toNonIndexed(); old.dispose(); }
    geometry.deleteAttribute('tangent');
    if (!this.parts.has(material)) this.parts.set(material, []);
    this.parts.get(material).push(geometry);
  }
  box(w, h, d, x, y, z, material, rotation = [0, 0, 0]) { this.add(new THREE.BoxGeometry(w, h, d), material, x, y, z, rotation); }
  cylinder(rt, rb, h, x, y, z, material, sides = 16, scale = [1, 1, 1]) { this.add(new THREE.CylinderGeometry(rt, rb, h, sides), material, x, y, z, [0, 0, 0], scale); }
  sphere(r, x, y, z, material, scale = [1, 1, 1]) { this.add(new THREE.SphereGeometry(r, 16, 10), material, x, y, z, [0, 0, 0], scale); }
  line(a, b, radius = .12, material, sides = 6) {
    const delta = new THREE.Vector3(...b).sub(new THREE.Vector3(...a));
    const geo = new THREE.CylinderGeometry(radius, radius, delta.length(), sides);
    geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()));
    this.add(geo, material, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
  }
  finish() {
    const group = new THREE.Group(); group.name = `landmark:${this.kind}`;
    for (const [material, geometries] of this.parts) {
      const merged = mergeGeometries(geometries, false);
      for (const g of geometries) g.dispose();
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, material); mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
    }
    group.userData.landmark = this.kind;
    return group;
  }
}

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { createBoat, boatSpecs } from './boats.js';

// Traffic shares immutable geometry and textures. Only transforms and animation
// references belong to each vessel; no Object3D is serialized through userData.
const templates = new Map();
const variants = { longtail: 3, cruise: 2, ferry: 3, electric: 1, fishing: 2, patrol: 2 };
const lowMaterials = {
  body: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .75 }),
  dark: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .55, metalness: .1 }),
  window: new THREE.MeshBasicMaterial({ vertexColors: true }),
  lamp: new THREE.MeshBasicMaterial({ vertexColors: true }),
};
const WHITE = 0xd9d7cb, WOOD = 0x9b653e, DARK = 0x17282c, ORANGE = 0xcd6428;

function cloneVessel(source) {
  const copies = new Map();
  const copyTree = node => {
    const copy = node.isMesh ? new THREE.Mesh(node.geometry, node.material) : new THREE.Group();
    copies.set(node, copy);
    copy.name = node.name;
    copy.position.copy(node.position);
    copy.quaternion.copy(node.quaternion);
    copy.scale.copy(node.scale);
    copy.visible = node.visible;
    copy.layers.mask = node.layers.mask;
    copy.renderOrder = node.renderOrder;
    copy.castShadow = node.castShadow;
    copy.receiveShadow = node.receiveShadow;
    copy.frustumCulled = node.frustumCulled;
    for (const child of node.children) copy.add(copyTree(child));
    copy.updateMatrix();
    copy.matrixAutoUpdate = false;
    return copy;
  };
  const result = copyTree(source);
  const remap = value => {
    if (value?.isObject3D) return copies.get(value);
    if (Array.isArray(value)) return value.map(remap);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, remap(item)]));
    return value;
  };
  for (const [original, copy] of copies) copy.userData = remap(original.userData);
  // These two parts are optional animation targets. The rest of a traffic boat
  // is rigid relative to its LOD parent and need not rebuild local matrices.
  if (result.userData.motor) result.userData.motor.matrixAutoUpdate = true;
  if (result.userData.propeller) result.userData.propeller.matrixAutoUpdate = true;
  return result;
}

class Silhouette {
  constructor() { this.parts = new Map(); }
  add(geometry, material, color, position = [0, 0, 0], rotation = [0, 0, 0]) {
    const transform = new THREE.Matrix4().compose(new THREE.Vector3(...position), new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)), new THREE.Vector3(1, 1, 1));
    geometry.applyMatrix4(transform);
    const flat = geometry.index ? geometry.toNonIndexed() : geometry;
    if (flat !== geometry) geometry.dispose();
    const tint = new THREE.Color(color).multiplyScalar(material === 'lamp' ? 1.6 : 1), colors = new Float32Array(flat.attributes.position.count * 3);
    for (let i = 0; i < colors.length; i += 3) { colors[i] = tint.r; colors[i + 1] = tint.g; colors[i + 2] = tint.b; }
    flat.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    // All proxy parts use only position, normal and colour. Texture coordinates
    // from primitive geometries would otherwise prevent merging with the hull.
    flat.deleteAttribute('uv');
    if (!flat.attributes.normal) flat.computeVertexNormals();
    if (!this.parts.has(material)) this.parts.set(material, []);
    this.parts.get(material).push(flat);
  }
  box(size, position, color = WHITE, material = 'body', rotation) { this.add(new THREE.BoxGeometry(...size), material, color, position, rotation); }
  beam(a, b, radius, color = DARK, material = 'dark') {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), delta = end.clone().sub(start);
    const geometry = new THREE.CylinderGeometry(radius, radius, delta.length(), 4);
    geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()));
    this.add(geometry, material, color, start.add(end).multiplyScalar(.5).toArray());
  }
  hull(length, width, rim, draft, color, offsetX = 0, open = false) {
    const rings = [[0, .035], [.10, .58], [.25, .94], [.47, 1], [.73, .97], [.9, .83], [1, .52]];
    const positions = [], indices = [];
    for (const [t, beam] of rings) {
      const w = beam * width / 2, top = rim + (t < .1 ? .22 : 0), z = (t - .5) * length;
      positions.push(-w + offsetX, top, z, -w * .68 + offsetX, -draft, z, w * .68 + offsetX, -draft, z, w + offsetX, top, z);
    }
    for (let i = 0; i < rings.length - 1; i++) for (let side = 0; side < (open ? 3 : 4); side++) {
      const a = i * 4 + side, b = i * 4 + (side + 1) % 4, c = (i + 1) * 4 + side, d = (i + 1) * 4 + (side + 1) % 4;
      indices.push(a, b, c, b, d, c);
    }
    indices.push(0, 2, 1, 0, 3, 2);
    const last = (rings.length - 1) * 4;
    indices.push(last, last + 1, last + 2, last, last + 2, last + 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    this.add(geometry, 'body', color);
    if (open) {
      // The visible inside is shallow and dark, without an expensive second hull.
      this.box([width * .69, .10, length * .74], [offsetX, .05, length * .03], 0x4d3523);
      for (const side of [-1, 1]) this.beam([offsetX + side * width * .42, rim, -length * .34], [offsetX + side * width * .43, rim, length * .40], .065, color, 'body');
    }
  }
  nav(width, y, z, stern) {
    this.box([.16, .19, .22], [-width, y, z], 0xff3926, 'lamp');
    this.box([.16, .19, .22], [width, y, z], 0x35dd87, 'lamp');
    this.box([.17, .21, .17], [0, y + .2, stern], 0xffdf9a, 'lamp');
  }
  person(x, floor, z, color = 0x277677) {
    this.box([.38, .57, .30], [x, floor + .71, z], color);
    this.box([.35, .18, .58], [x, floor + .40, z - .10], DARK, 'dark');
    this.add(new THREE.OctahedronGeometry(.18), 'body', 0xb88b67, [x, floor + 1.1, z]);
  }
  finish(name) {
    const group = new THREE.Group(); group.name = name;
    for (const [key, pieces] of this.parts) {
      const geometry = mergeGeometries(pieces, false);
      for (const piece of pieces) piece.dispose();
      geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, lowMaterials[key]);
      mesh.name = `${name}-${key}`;
      group.add(mesh);
    }
    return group;
  }
}

function distantBoat(kind, variation) {
  const b = new Silhouette();
  if (kind === 'cruise') {
    b.hull(55, 13, 1.45, 1.6, WHITE);
    for (const [y, w, length, z] of [[1.48, 11.65, 44, 1], [4.08, 11.55, 43, 1.4], [6.54, 10.25, 39.5, 1.8]]) b.box([w, .24, length], [0, y, z]);
    for (const y of [2.8, 5.4]) {
      b.box([10.5, 2, 39.8], [0, y, 1.3], DARK, 'dark');
      for (const side of [-1, 1]) for (let i = 0; i < 15; i++) b.box([.07, 1.40, 2.28], [side * 5.29, y, -17.1 + i * 2.62], i % 4 ? 0x8b6334 : 0x4e3e2d, 'window');
      b.box([8.9, 1.25, .06], [0, y, 21.24], 0x8b6334, 'window');
    }
    for (const side of [-1, 1]) {
      for (const y of [1.68, 4.3, 6.8]) b.box([.09, .10, 40], [side * (y > 6 ? 4.95 : 5.76), y, 1.5], 0xffca81, 'lamp');
      b.beam([side * 4.2, 6.7, -15.5], [side * 4.2, 9, -15.5], .045, WHITE, 'body');
      b.beam([side * 4.2, 9, -15.5], [side * 4.2, 8.8, 19.5], .025, 0xdfae72, 'lamp');
    }
    b.box([5.1, 1.9, 3.25], [0, 7.6, -16.45]);
    b.box([4.5, .98, .06], [0, 7.8, -18.11], 0x20343c, 'dark');
    b.box([5.4, .18, 3.6], [0, 8.65, -16.45]);
    b.box([8.8, .18, 6.0], [0, 9.12, 16.7]);
    b.beam([0, 8.7, -15.9], [0, 10.25, -15.9], .06, WHITE, 'body');
    b.nav(5.3, 6.25, -16.8, 22);
  } else if (kind === 'ferry') {
    b.hull(30, 5.5, .97, .70, WHITE);
    for (const side of [-1, 1]) {
      b.box([.15, .38, 23.2], [side * 2.60, 1.18, .7], ORANGE);
      b.box([.10, .23, 22.5], [side * 2.53, 3.37, .7], ORANGE);
      b.box([.05, .08, 20], [side * 2.36, 3.24, .7], 0xa7834c, 'window');
      for (let z = -9.8; z < 12; z += 4.2) b.box([.09, 2.15, .09], [side * 2.44, 2.2, z]);
    }
    b.box([5.11, .19, 22.5], [0, 3.45, .7]);
    b.box([3.5, 1.55, 2.67], [0, 1.94, -10.49]);
    b.box([3.1, .99, .06], [0, 2.08, -11.85], 0x24383c, 'dark');
    b.box([3.85, .14, 3], [0, 2.84, -10.49], ORANGE);
    for (const z of [-5, 1, 7]) b.person(z % 2 ? -.8 : .8, 1.04, z);
    b.beam([0, 1.3, -13.5], [0, 4.1, -13.5], .035, DARK);
    b.box([.04, .6, 1.3], [0, 3.7, -12.9], variation % 3 === 1 ? 0xd3ad45 : ORANGE);
    b.nav(2.28, 3.32, -9.1, 12.6);
  } else if (kind === 'electric') {
    for (const side of [-1, 1]) b.hull(24, 2.1, 1.03, .63, WHITE, side * 2.36);
    b.box([6.8, .30, 20.4], [0, 1.18, 0]);
    b.box([5.8, 1.8, 17.8], [0, 2.58, 0], 0x213538, 'dark');
    b.box([6.39, .24, 18.82], [0, 3.69, 0]);
    b.box([5.8, .05, 17.6], [0, 3.84, 0], 0x182c39, 'dark');
    for (const side of [-1, 1]) {
      for (let z = -7; z <= 7; z += 2) b.box([.06, 1.48, 1.72], [side * 2.93, 2.55, z], 0x638b8e, 'window');
      b.box([.12, .09, 18.5], [side * 3.18, 3.65, 0], 0x79c6df, 'lamp');
    }
    b.nav(3.04, 3.6, -7.2, 9);
  } else if (kind === 'longtail') {
    b.hull(12.4, 2.35, .78, .38, WOOD, 0, true);
    b.box([2.17, .18, 6.2], [0, 2.08, .15], variation % 3 === 1 ? 0x9d3229 : 0x126c69);
    for (const side of [-1, 1]) for (const z of [-2.6, 2.9]) b.box([.055, 1.4, .055], [side * 1.02, 1.42, z], 0xaab3ae);
    for (const z of [-1.2, 1.9]) b.person(-.35, .20, z, 0xb4b9ac);
    b.person(-.16, .40, 4.21, 0x26494f);
    b.box([.74, .57, .9], [0, 1.21, 5.40], 0x1c2928, 'dark');
    b.beam([0, 1.07, 5.4], [0, -.15, 8.9], .045, 0x859596);
    b.beam([0, .75, -5.5], [0, 1.78, -6.22], .085, WOOD, 'body');
    b.box([.25, .48, .16], [0, 1.36, -6.13], 0xc76e29);
    b.nav(1.08, 2.06, -2.66, 4.7);
  } else if (kind === 'patrol') {
    const paint=variation%2?0x29352f:0x202c38;
    b.hull(13.8,3.8,.92,.55,paint);
    b.box([2.9,.26,5.8],[0,1.09,.3],paint);
    b.box([2.66,1.48,3.85],[0,1.88,.9],paint);
    b.box([2.32,1.05,.08],[0,2.0,-1.12],0x152633,'dark',[.40,0,0]);
    for(const side of [-1,1]) {
      b.box([.045,.91,2.8],[side*1.345,2.08,.65],0x152633,'dark');
      b.box([.84,1,.78],[side*.91,.94,6.63],paint);
    }
    b.box([3.04,.16,4.7],[0,2.72,.65],paint);
    b.box([2.10,.13,.39],[0,2.87,.65],0x111818,'dark');
    b.beam([.63,2.8,1.95],[.63,4.1,1.95],.022,paint);
    b.nav(1.40,2.75,-1.15,2.2);
  } else {
    b.hull(6.5, 1.55, .4, .27, variation % 2 ? 0x503221 : WOOD, 0, true);
    for (const z of [-1.86, .3, 2.08]) b.box([1.07, .08, .30], [0, .36, z], 0xb89260);
    b.person(0, -.02, .32);
    b.box([.48, .38, .55], [.20, .27, 1.45], WHITE);
    b.beam([.12, .7, -.02], [1.4, 1.82, -2.5], .023, 0x543c25);
    b.box([.12, .18, .12], [0, .96, 2.55], 0xffc580, 'lamp');
  }
  return b.finish(`${kind}-distant`);
}

export function updateTrafficDetail(mesh, distance, mobile = mesh?.userData?.mobile ?? false) {
  if (!mesh?.isLOD || mesh.levels.length !== 2 || typeof mesh.userData.setDetail !== 'function') return;
  const boundary = mobile ? 160 : 220;
  // A small hysteresis band prevents toggling as the chase camera bobs.
  const near = distance < boundary * (mesh.userData.detail === 'near' ? 1.06 : .94);
  mesh.levels[0].object.visible = near;
  mesh.levels[1].object.visible = !near;
  mesh.userData.detail = near ? 'near' : 'far';
}

export function createTrafficBoat(kind, variation = 0, mobile = false) {
  const resolved = Object.hasOwn(boatSpecs, kind) ? kind : 'longtail';
  const variant = ((Math.trunc(variation) % variants[resolved]) + variants[resolved]) % variants[resolved];
  const key = `${resolved}:${variant}`;
  if (!templates.has(key)) templates.set(key, { near: createBoat(resolved, variant), far: distantBoat(resolved, variant) });
  const template = templates.get(key), near = cloneVessel(template.near), far = cloneVessel(template.far);
  const lod = new THREE.LOD();
  lod.name = `${resolved}-traffic`;
  lod.autoUpdate = false;
  lod.addLevel(near, 0);
  lod.addLevel(far, mobile ? 160 : 220);
  lod.userData = { ...near.userData, kind: resolved, spec: boatSpecs[resolved], mobile, detail: 'near' };
  lod.userData.setDetail = distance => updateTrafficDetail(lod, distance);
  updateTrafficDetail(lod, 0);
  return lod;
}

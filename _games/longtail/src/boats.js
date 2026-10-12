import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Dimensions describe the hull, excluding flags and the long-tail propeller shaft.
// Metres, y=0 at the waterline; the bow always faces local -Z.
export const boatSpecs = Object.freeze({
  longtail: Object.freeze({ length: 12.4, width: 2.35, mass: 1, maxSpeed: 25 }),
  cruise: Object.freeze({ length: 55, width: 13, mass: 24, maxSpeed: 5.1 }),
  ferry: Object.freeze({ length: 30, width: 5.5, mass: 5.5, maxSpeed: 12 }),
  electric: Object.freeze({ length: 24, width: 7, mass: 7, maxSpeed: 9 }),
  patrol: Object.freeze({ length: 13.8, width: 3.8, mass: 2.8, maxSpeed: 61 }),
  fishing: Object.freeze({ length: 6.5, width: 1.55, mass: .45, maxSpeed: 3.8 }),
});

const C = { wood: 0x9b653e, woodLight: 0xb89260, darkWood: 0x402b1f, white: 0xdbd9cd, paintWhite: 0xd7d9d2, red: 0x9d3229, teal: 0x126c69, orange: 0xcd6428, gold: 0xbe9452, navy: 0x162c39, steel: 0xa1b0b4, rubber: 0x141716, warm: 0xffdd91, cyan: 0x77e7e5 };
const materials = new Map();
const textures = new Map();
const noise = (x, y, seed = 0) => {
  const a = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return a - Math.floor(a);
};
function dataMap(name, pixel, size = 256, color = true) {
  if (textures.has(name)) return textures.get(name);
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const value = pixel(x, y, size), at = (y * size + x) * 4;
    data[at] = value[0]; data[at + 1] = value[1]; data[at + 2] = value[2]; data[at + 3] = 255;
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  if (color) texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 4;
  texture.needsUpdate = true;
  textures.set(name, texture);
  return texture;
}
function woodMap() {
  return dataMap('wood', (x, y) => {
    const plank = Math.floor(y / 32), at = y % 32;
    const grain = Math.sin(y * .73 + Math.sin(x * .022) * 3.4) * 12 + Math.sin(y * 2.2 + x * .009) * 5;
    const knot = Math.sin(Math.hypot((x - 94) * .13, (y - 113) * 1.4)) * 9 * Math.max(0, 1 - Math.abs(y - 113) / 18);
    const v = 173 + grain + knot + noise(x, y) * 15 + noise(plank, 0) * 26 - (at < 1 ? 66 : at > 29 ? 17 : 0);
    return [v, v * .88, v * .69];
  });
}
function surfaceMap(type) {
  return dataMap(type, (x, y) => {
    const n = noise(x, y), coarse = noise(Math.floor(x / 8), Math.floor(y / 8));
    const grain = type === 'cloth' ? ((x % 3 === 0 ? -18 : 0) + (y % 3 === 0 ? -12 : 0)) : 0;
    const v = type === 'metal' ? 164 + n * 60 : 216 + n * 19 + coarse * 9 + grain;
    return [v, v, v];
  }, 128, type !== 'metal');
}
function woodBump() {
  return dataMap('wood-bump', (x, y) => {
    const v = y % 32 < 2 ? 44 : 144 + Math.sin(y * .73 + Math.sin(x * .022) * 3.4) * 20 + noise(x, y) * 23;
    return [v, v, v];
  }, 256, false);
}
// A shallow saloon interior is baked into each pane: lit ceiling, curtains,
// table tops and passenger silhouettes, rather than uniform luminous rectangles.
function windowMap(kind = 'warm') {
  return dataMap(`saloon-${kind}`, (x, y, size) => {
    const u = x / size, v = y / size;
    const light = Math.exp(-((u - .34) ** 2 * 11 + (v - .82) ** 2 * 18));
    let shade = .34 + light * .56;
    if (v > .87) shade *= .48;
    if (v < .23) shade *= .29;
    if (u < .11 || u > .91) shade *= .65 + .11 * Math.sin(u * 230);
    const people = [[.23, .49, .083], [.70, .43, .070]];
    for (const [px, py, r] of people) {
      const head = ((u - px) / r) ** 2 + ((v - py) / (r * 1.06)) ** 2 < 1;
      const torso = v < py - r * .5 && v > .15 && Math.abs(u - px) < r * (1.2 + (py - v) * 2);
      if (head || torso) shade *= .27;
    }
    if (v > .27 && v < .29 && u > .34 && u < .82) shade = .8;
    if (Math.abs(u - .575) < .012 && v > .17 && v < .275) shade = .17;
    // Gentle streaks and one reflected light soften the flat pane at a distance.
    shade += Math.exp(-((u - .83) ** 2 * 1400)) * .10;
    const rgb = kind === 'cool' ? [149, 197, 206] : kind === 'dim' ? [230, 174, 105] : [255, 209, 141];
    return rgb.map(c => c * Math.min(1, shade + noise(x, y) * .025));
  });
}
function mat(name) {
  if (materials.has(name)) return materials.get(name);
  let options = { color: C[name] ?? name, roughness: .72, metalness: .02 };
  if (['wood', 'woodLight', 'darkWood'].includes(name)) options = { ...options, map: woodMap(), bumpMap: woodBump(), bumpScale: .018, roughness: .48, metalness: .035 };
  if (name === 'paintWhite') options = { ...options, map: surfaceMap('paint'), roughness: .43, metalness: .11 };
  if (name.startsWith?.('cloth')) options = { color: C[name.slice(5).toLowerCase()] ?? C.teal, map: surfaceMap('cloth'), roughness: .94, metalness: 0 };
  if (name === 'steel') options = { ...options, roughnessMap: surfaceMap('metal'), metalness: .82, roughness: .38 };
  if (name === 'gold') options = { ...options, metalness: .63, roughness: .39 };
  if (name === 'glass') options = { color: 0x14303c, metalness: .61, roughness: .16, emissive: 0x16313a, emissiveIntensity: .13 };
  if (['window', 'windowDim', 'windowCool'].includes(name)) {
    const map = windowMap(name === 'windowDim' ? 'dim' : name === 'windowCool' ? 'cool' : 'warm');
    options = { color: 0xd8c3a3, map, roughness: .22, metalness: .16, emissiveMap: map, emissive: 0xffe9be, emissiveIntensity: name === 'windowDim' ? .55 : 1.2 };
  }
  if (name === 'warm') options = { color: 0xffedcc, emissive: 0xffcf89, emissiveIntensity: 3.4, roughness: .24 };
  if (name === 'cyan') options = { color: 0xc4e7e9, emissive: 0x79c6df, emissiveIntensity: 1.45, roughness: .28 };
  if (name === 'navRed') options = { color: 0xff5d49, emissive: 0xff1406, emissiveIntensity: 3.1 };
  if (name === 'navGreen') options = { color: 0x60e293, emissive: 0x04e849, emissiveIntensity: 3.1 };
  const value = new THREE.MeshStandardMaterial({ ...options, side: THREE.DoubleSide });
  materials.set(name, value);
  return value;
}

class BoatBuilder {
  constructor() { this.batches = new Map(); this.frame = new THREE.Matrix4(); }
  add(geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
    geometry.clearGroups();
    const transform = new THREE.Matrix4().compose(new THREE.Vector3(...position), new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)), new THREE.Vector3(...scale));
    geometry.applyMatrix4(new THREE.Matrix4().multiplyMatrices(this.frame, transform));
    const m = typeof material === 'string' || typeof material === 'number' ? mat(material) : material;
    if (!this.batches.has(m)) this.batches.set(m, []);
    this.batches.get(m).push(geometry.index ? geometry.toNonIndexed() : geometry);
    if (geometry.index) geometry.dispose();
  }
  box(size, position, material, rotation = [0, 0, 0]) { this.add(new THREE.BoxGeometry(...size), material, position, rotation); }
  ball(radius, position, material, scale = [1, 1, 1], detail = 8) { this.add(new THREE.SphereGeometry(radius, detail, 6), material, position, [0, 0, 0], scale); }
  cylinder(a, b, radius, material, endRadius = radius, segments = 7) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), d = end.clone().sub(start), mid = start.add(end).multiplyScalar(.5);
    const geometry = new THREE.CylinderGeometry(endRadius, radius, d.length(), segments);
    geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
    this.add(geometry, material, mid.toArray());
  }
  curve(points, radius, material, segments = 30, radial = 5) {
    this.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), segments, radius, radial, false), material);
  }
  inFrame(position, heading, fn) {
    const old = this.frame;
    const local = new THREE.Matrix4().makeRotationY(heading);
    local.setPosition(...position);
    this.frame = new THREE.Matrix4().multiplyMatrices(old, local);
    fn(); this.frame = old;
  }
  finish(name) {
    const group = new THREE.Group(); group.name = name;
    for (const [material, geometries] of this.batches) {
      const combined = mergeGeometries(geometries, false);
      for (const g of geometries) g.dispose();
      combined.computeBoundingSphere();
      const mesh = new THREE.Mesh(combined, material);
      mesh.castShadow = true; mesh.receiveShadow = true;
      group.add(mesh);
    }
    return group;
  }
}

function meshGrid(rows, columns, vertex) {
  const pos = [], uv = [], idx = [];
  for (let r = 0; r <= rows; r++) for (let c = 0; c <= columns; c++) {
    pos.push(...vertex(r / rows, c / columns)); uv.push(r / rows * 4, c / columns);
    if (r < rows && c < columns) {
      const i = r * (columns + 1) + c;
      idx.push(i, i + 1, i + columns + 2, i, i + columns + 2, i + columns + 1);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(idx); geometry.computeVertexNormals();
  return geometry;
}
const lerp = (a, b, t) => a + (b - a) * t;
function profile(t, points) {
  for (let i = 1; i < points.length; i++) if (t <= points[i][0]) {
    const a = points[i - 1], b = points[i];
    const f = Math.max(0, Math.min(1, (t - a[0]) / (b[0] - a[0])));
    return lerp(a[1], b[1], f * f * (3 - 2 * f));
  }
  return points.at(-1)[1];
}
function woodenHull(b, { length, width, rim = .78, draft = .38, fishing = false, color = 'wood' }) {
  const beam = t => width * .5 * profile(t, [[0, .018], [.12, .54], [.3, .88], [.53, 1], [.78, .86], [1, fishing ? .07 : .49]]);
  const rail = t => rim + Math.pow(Math.max(0, 1 - t * 4.2), 2) * (fishing ? .33 : .83) + Math.pow(Math.max(0, (t - .82) / .18), 2) * .1;
  const keel = t => -draft + Math.pow(Math.abs(t - .5) * 2, 4) * .33;
  b.add(meshGrid(40, 12, (t, s) => [beam(t) * (s * 2 - 1), lerp(keel(t), rail(t), Math.pow(Math.abs(s * 2 - 1), 2.8)), (t - .5) * length]), color);
  // Solid stern transom closes the otherwise open hull section.
  const end = [[-beam(1), rail(1), length * .5], [beam(1), rail(1), length * .5], [beam(1) * .5, -.05, length * .5], [-beam(1) * .5, -.05, length * .5]];
  b.add(quad(end), color);
  const floorY = fishing ? .09 : .2;
  b.add(meshGrid(20, 1, (t, s) => {
    const p = .12 + t * .84;
    return [beam(p) * .82 * (s * 2 - 1), floorY + .10 * Math.pow(Math.abs(t - .5) * 2, 4), (p - .5) * length];
  }), 'woodLight');
  for (let z = -length * .36; z < length * .46; z += fishing ? .42 : .5) {
    const t = z / length + .5;
    b.box([beam(t) * 1.63, .025, .025], [0, floorY + .035, z], 'darkWood');
  }
  for (const side of [-1, 1]) {
    const points = Array.from({ length: 34 }, (_, i) => { const t = i / 33; return [side * beam(t), rail(t), (t - .5) * length]; });
    b.curve(points, fishing ? .045 : .075, fishing ? 'darkWood' : 'red', 40);
    if (!fishing) {
      b.curve(points.map(([x, y, z]) => [x, y - .14, z]), .048, 'gold', 40);
      b.curve(points.map(([x, y, z]) => [x * .97, y - .24, z]), .055, 'teal', 40);
      b.curve(points.map(([x, y, z]) => [x * .86, y - .40, z]), .022, 'darkWood', 40);
    }
    for (let i = 0; i < 14; i++) {
      const t = .15 + i / 14 * .78;
      b.curve([[side * beam(t) * .55, .1, (t - .5) * length], [side * beam(t) * .90, rail(t) * .52, (t - .5) * length], [side * beam(t) * .98, rail(t) - .015, (t - .5) * length]], .025, 'darkWood', 5, 4);
    }
  }
  return { beam, rail };
}
function quad(points, uvRepeat = [1, 1]) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, uvRepeat[0], 0, uvRepeat[0], uvRepeat[1], 0, uvRepeat[1]], 2));
  g.setIndex([0, 1, 2, 0, 2, 3]); g.computeVertexNormals(); return g;
}
function tire(b, x, y, z, radius = .28, side = 1) {
  b.add(new THREE.TorusGeometry(radius, radius * .32, 6, 12), 'rubber', [x, y, z], [0, Math.PI / 2, 0]);
  b.curve([[x - side * .06, y + radius * 1.7, z], [x + side * .06, y + radius * .6, z], [x, y - radius * .3, z]], .012, 'woodLight', 7, 4);
}
function lifeRing(b, x, y, z, side = 1, radius = .29) {
  b.add(new THREE.TorusGeometry(radius, .065, 6, 14), 'orange', [x, y, z], [0, Math.PI / 2, 0]);
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    b.add(new THREE.TorusGeometry(radius, .069, 5, 3, .25), 'white', [x, y, z], [0, Math.PI / 2, a]);
  }
  b.curve([[x - side * .02, y + .42, z - .21], [x + side * .04, y - .37, z - .31], [x + side * .04, y - .43, z + .28], [x - side * .02, y + .4, z + .21]], .012, 'woodLight', 13, 4);
}
function cleat(b, x, y, z, scale = 1) {
  b.box([.30 * scale, .07 * scale, .19 * scale], [x, y, z], 'steel');
  b.cylinder([x, y, z], [x, y + .13 * scale, z], .045 * scale, 'steel');
  b.cylinder([x - .22 * scale, y + .16 * scale, z], [x + .22 * scale, y + .16 * scale, z], .045 * scale, 'steel');
}
function ropeCoil(b, x, y, z, radius = .3) {
  for (let i = 0; i < 4; i++) {
    const r = radius - i * radius * .17;
    b.curve(Array.from({ length: 19 }, (_, j) => { const a = j / 18 * Math.PI * 2; return [x + Math.cos(a) * r, y + i * .008, z + Math.sin(a) * r * .72]; }), .018, 'woodLight', 19, 4);
  }
}
function navLamp(b, x, y, z, side) {
  b.box([.12, .18, .18], [x, y - .02, z], 'steel');
  b.ball(.068, [x + side * .055, y, z - .035], side < 0 ? 'navRed' : 'navGreen', [.7, 1, .85]);
  b.box([.15, .045, .22], [x, y + .09, z], 'rubber');
}
function thaiFlag(b, x, y, z, scale = 1) {
  b.cylinder([x, y, z], [x, y + 1.3 * scale, z], .017 * scale, 'steel');
  const bands = [[0, 1 / 6, 'red'], [1 / 6, 2 / 6, 'white'], [2 / 6, 4 / 6, 'navy'], [4 / 6, 5 / 6, 'white'], [5 / 6, 1, 'red']];
  for (const [top, bottom, color] of bands) b.add(meshGrid(8, 1, (t, v) => [x + t * .68 * scale, y + (1.25 - (.45 * (top + v * (bottom - top)))) * scale, z + Math.sin(t * 8) * .08 * scale]), color);
}
function person(b, x, y, z, { seated = false, heading = 0, shirt = 'teal', skin = 0xb68259, hat = false, scale = 1, lifeVest = false } = {}) {
  b.inFrame([x, y, z], heading, () => {
    const oldFrame = b.frame;
    b.frame = oldFrame.clone().scale(new THREE.Vector3(scale, scale, scale));
    const hips = seated ? .47 : .86, shoulders = hips + .48, head = shoulders + .23;
    b.add(new THREE.LatheGeometry([new THREE.Vector2(.155, 0), new THREE.Vector2(.16, .10), new THREE.Vector2(.185, .28), new THREE.Vector2(.222, .37), new THREE.Vector2(.162, .43)], 10), shirt, [0, hips, 0], [0, 0, 0], [1, 1, .67]);
    if (lifeVest) {
      for (const side of [-1, 1]) b.box([.14, .35, .065], [side * .095, hips + .26, -.14], 'orange', [0, 0, side * .035]);
      b.box([.34, .025, .07], [0, hips + .16, -.176], 'rubber');
    }
    b.ball(.18, [0, hips, 0], 'navy', [1, .63, .76]);
    b.cylinder([0, shoulders - .02, 0], [0, shoulders + .08, 0], .065, skin);
    b.ball(.12, [0, head, -.015], skin, [.82, 1.15, .87]);
    b.ball(.112, [0, head + .059, .013], 'rubber', [.94, .71, .97]);
    b.ball(.023, [0, head - .005, -.117], skin, [.8, .9, 1]);
    for (const side of [-1, 1]) {
      b.ball(.021, [side * .098, head - .002, -.006], skin, [.53, 1.20, .65], 6);
      b.ball(.010, [side * .037, head + .017, -.111], 'rubber', [1, .65, .45], 6);
    }
    for (const side of [-1, 1]) {
      const hip = [side * .105, hips - .02, 0];
      const knee = seated ? [side * .16, .43, -.36] : [side * .1, .43, side * .018];
      const foot = seated ? [side * .16, .09, -.37] : [side * .13, .09, -.035];
      b.cylinder(hip, knee, .075, 'navy', .087);
      b.ball(.071, knee, 'navy');
      b.cylinder(knee, foot, .052, 'navy', .066);
      b.box([.135, .08, .24], [foot[0], .055, foot[2] - .035], 'rubber');
      const shoulder = [side * .22, shoulders - .075, 0];
      const elbow = seated ? [side * .25, hips + .20, -.16] : [side * .25, hips + .21, .03];
      const hand = seated ? [side * .16, hips + .03, -.36] : [side * .26, hips - .05, -.035];
      b.cylinder(shoulder, elbow, .068, shirt, .087);
      b.cylinder(elbow, hand, .044, skin, .054);
      b.ball(.058, hand, skin, [.75, 1, .7]);
    }
    if (hat) {
      b.add(new THREE.ConeGeometry(.24, .13, 14), 'woodLight', [0, head + .16, -.012]);
      b.cylinder([0, head + .105, -.012], [0, head + .123, -.012], .26, 'woodLight', .26, 16);
      b.cylinder([-.1, head + .10, 0], [-.06, head - .08, -.05], .008, 'darkWood', .008, 4);
    }
    b.frame = oldFrame;
  });
}
function canopy(b, { length, width, y, z = 0, color = 'teal', posts = 3, stripe = 'gold' }) {
  b.add(meshGrid(24, 16, (t, s) => [(s - .5) * width, y + .24 * (1 - Math.pow(s * 2 - 1, 2)) - Math.sin(t * Math.PI * (posts - 1)) ** 2 * .035 + Math.sin(t * Math.PI * 24) * .006, z + (t - .5) * length]), `cloth${color[0].toUpperCase()}${color.slice(1)}`);
  for (const side of [-1, 1]) {
    b.add(meshGrid(24, 1, (t, v) => [side * width / 2, y - v * (.13 + .025 * Math.sin(t * Math.PI * 20)), z + (t - .5) * length]), `cloth${color[0].toUpperCase()}${color.slice(1)}`);
    b.box([.035, .029, length], [side * width / 2, y - .022, z], stripe);
    b.cylinder([side * width / 2, y, z - length / 2], [side * width / 2, y, z + length / 2], .028, 'steel');
  }
  for (let i = 0; i < posts; i++) {
    const p = z - length * .46 + i / Math.max(1, posts - 1) * length * .92;
    for (const side of [-1, 1]) b.cylinder([side * (width / 2 - .045), .6, p], [side * (width / 2 - .045), y, p], .028, 'steel');
    b.curve([[-width / 2, y - .008, p], [-width * .25, y + .17, p], [0, y + .23, p], [width * .25, y + .17, p], [width / 2, y - .008, p]], .025, 'steel', 12);
  }
  b.add(quad([[-.075, y + .246, z - length / 2], [.075, y + .246, z - length / 2], [.075, y + .246, z + length / 2], [-.075, y + .246, z + length / 2]]), stripe);
}
function bench(b, x, y, z, width, color = 'red') {
  b.box([width, .12, .42], [x, y, z], 'woodLight');
  b.box([width - .045, .055, .38], [x, y + .078, z], color);
  b.box([width, .33, .075], [x, y + .26, z + .19], color);
  for (const side of [-1, 1]) b.box([.055, .39, .055], [x + side * width * .38, y - .20, z], 'steel');
}
function engine(large = true) {
  const b = new BoatBuilder();
  b.box([.64, .49, .88], [0, .12, 0], 'rubber');
  b.box([.70, .12, .68], [0, .40, -.035], 'steel');
  for (let i = 0; i < 4; i++) {
    b.cylinder([.30, .12, -.29 + i * .18], [.45, .24, -.29 + i * .18], .056, 'steel', .056, 7);
    b.box([.43, .042, .10], [0, .485, -.29 + i * .18], 'rubber');
  }
  b.cylinder([-.16, .26, -.47], [-.16, .36, -.68], .09, 'steel', .09, 7);
  b.cylinder([-.16, .36, -.68], [-.16, .75, -.68], .06, 'steel', .06, 7);
  b.cylinder([0, .15, .35], [0, .15, .58], .27, 'rubber', .27, 10);
  b.cylinder([0, .15, .57], [0, .15, .60], .13, 'steel', .13, 10);
  b.cylinder([-.35, .32, .04], [-.82, .34, -.80], .027, 'steel');
  b.cylinder([-.82, .34, -.80], [-.84, .35, -1.03], .045, 'rubber');
  b.cylinder([0, .04, .55], [0, -1.13, 3.52], .047, 'steel', .036, 7);
  b.cylinder([0, -.01, .51], [0, -.40, 1.51], .081, 'rubber', .055, 7);
  b.box([.55, .28, .38], [.58, -.19, -.12], 'red');
  b.cylinder([.58, -.06, -.12], [.58, .025, -.12], .055, 'rubber');
  // Open diesel conversion: finned radiator, paired belts, exhaust manifold,
  // fuel hoses and an oil-stained mounting frame visible from the chase camera.
  b.box([.63, .56, .10], [0, .13, -.50], 'rubber');
  for (let i = 0; i < 11; i++) b.box([.48, .013, .12], [0, -.10 + i * .045, -.535], 'steel');
  for (let i = 0; i < 5; i++) {
    b.cylinder([.30, .26, -.28 + i * .13], [.37, .48, -.28 + i * .13], .014, 'gold', .014, 5);
    b.ball(.026, [.31, .45, -.28 + i * .13], 'steel', [1, .7, 1], 6);
  }
  b.curve([[.49, .12, -.22], [.62, .14, .1], [.51, .42, .38], [.29, .46, .28]], .049, 'steel', 12, 6);
  b.curve([[-.31, .34, -.32], [-.50, .40, -.06], [-.47, -.07, .37], [-.14, -.19, .43]], .029, 'rubber', 12, 5);
  b.curve([[.62, -.05, -.1], [.71, .29, -.19], [.34, .43, -.26], [.15, .39, .02]], .016, 'rubber', 14, 4);
  for (const x of [-.21, .21]) {
    b.cylinder([x, .15, .62], [x, .15, .645], .15, 'steel', .15, 12);
    b.cylinder([x, .15, .648], [x, .15, .66], .11, 'rubber', .11, 10);
    b.cylinder([x, .15, .666], [x, .15, .67], .035, 'gold', .035, 7);
  }
  b.curve([[-.21, .285, .66], [.21, .285, .66], [.34, .15, .66], [.21, .015, .66], [-.21, .015, .66], [-.34, .15, .66], [-.21, .285, .66]], .016, 'rubber', 26, 4);
  for (const side of [-1, 1]) {
    b.cylinder([side * .4, -.17, -.36], [side * .4, -.17, .40], .035, 'steel');
    b.cylinder([side * .4, -.17, .02], [0, -.47, .02], .038, 'steel');
  }
  const group = b.finish('exposed long-tail engine');
  const prop = new BoatBuilder();
  prop.cylinder([0, 0, -.045], [0, 0, .045], .085, 'gold', .075, 9);
  for (let i = 0; i < 3; i++) {
    const a = i * Math.PI * 2 / 3;
    prop.box([.13, .37, .043], [Math.sin(a) * .16, Math.cos(a) * .16, 0], 'gold', [0, .25, -a + .19]);
  }
  const propeller = prop.finish('propeller');
  propeller.position.set(0, -1.13, 3.52); propeller.rotation.x = .375;
  group.add(propeller); group.userData.propeller = propeller;
  if (!large) group.scale.setScalar(.55);
  return group;
}
function longtail(variation) {
  const b = new BoatBuilder();
  woodenHull(b, { length: 12.4, width: 2.35 });
  // Foredeck and sculpted, ribbon-wrapped upturned prow.
  b.add(quad([[-.54, .83, -4.45], [.54, .83, -4.45], [.07, 1.47, -6.15], [-.07, 1.47, -6.15]]), 'woodLight');
  b.curve([[0, .68, -5.35], [0, 1.0, -6.01], [0, 1.67, -6.33], [0, 1.79, -6.26]], .105, 'wood', 15, 6);
  for (let i = 0; i < 5; i++) {
    b.box([.26, .065, .15], [0, 1.25 + i * .075, -6.17 - i * .02], i % 2 ? 'gold' : 'red', [-.26, 0, 0]);
  }
  for (let i = 0; i < 3; i++) {
    const x = (i - 1) * .09, y = 1.54, z = -6.22;
    b.add(quad([[x - .055, y, z], [x + .055, y, z], [x + .09, y - .66 + i * .10, z + .22], [x - .025, y - .68 + i * .10, z + .18]]), ['red', 'gold', 'teal'][i]);
  }
  for (let i = 0; i <= 12; i++) {
    const a = Math.PI * i / 12;
    b.ball(.046, [.18 * Math.cos(a), 1.20 - .32 * Math.sin(a), -6.06], i % 3 === 0 ? 'warm' : 'gold', [1, 1, 1], 6);
  }
  canopy(b, { length: 6.2, width: 2.17, y: 2.02, z: .15, color: variation % 3 === 1 ? 'red' : 'teal', posts: 4 });
  for (let i = 0; i < 5; i++) bench(b, 0, .52, -2.28 + i * 1.06, 1.79);
  // A little cabin lighting helps the passengers read against the dark river.
  b.cylinder([-.83, 1.99, -2.74], [.83, 1.99, -2.74], .024, 'warm');
  b.cylinder([-.83, 1.99, 2.91], [.83, 1.99, 2.91], .024, 'warm');
  person(b, -.43, .21, -1.18, { seated: true, shirt: 'white' });
  person(b, .42, .21, -.13, { seated: true, shirt: 'red', skin: 0xd8aa84 });
  person(b, -.43, .21, 1.99, { seated: true, shirt: 'orange' });
  b.box([1.27, .14, .63], [0, .73, 4.20], 'woodLight');
  person(b, -.16, .40, 4.21, { seated: true, shirt: 'navy', hat: true, lifeVest: true });
  b.box([.48, .36, .56], [.59, .37, 3.81], 'navy');
  b.cylinder([-.47, .41, 4.88], [0, 1.0, 5.24], .06, 'steel');
  b.cylinder([.47, .41, 4.88], [0, 1.0, 5.24], .06, 'steel');
  for (const side of [-1, 1]) {
    tire(b, side * 1.04, .55, 2.89, .21, side);
    navLamp(b, side * 1.08, 2.06, -2.66, side);
    cleat(b, side * .79, .89, 3.31, .75);
    lifeRing(b, side * 1.06, 1.30, 2.65, side, .22);
    b.add(new THREE.PlaneGeometry(3.8, .24), signMaterial('เรือหางยาว  BANGKOK'), [side * 1.137, .59, -.35], [0, side * Math.PI / 2, 0]);
    // A rolled rain curtain and small hanging grab loops under the fabric roof.
    b.cylinder([side * 1.025, 1.87, -2.90], [side * 1.025, 1.87, 3.16], .035, 'clothWhite');
    for (let z = -2.5; z < 2.9; z += 1.2) b.curve([[side * .96, 1.89, z - .045], [side * .96, 1.63, z], [side * .96, 1.89, z + .045]], .014, 'rubber', 8, 4);
  }
  ropeCoil(b, .03, .87, -4.62, .23);
  thaiFlag(b, .61, .90, 4.04, .67);
  b.box([.30, .15, .14], [-.83, 1.56, 3.34], 'rubber');
  b.box([.24, .10, .008], [-.83, 1.57, 3.418], 'cyan');
  // Warm fluorescent housings shield the bare bulbs from above.
  for (const z of [-2.74, 2.91]) b.box([1.8, .07, .11], [0, 2.045, z], 'paintWhite');
  const boat = b.finish('Thai wooden long-tail');
  const motor = engine(); motor.position.set(0, 1.00, 5.22);
  boat.add(motor); boat.userData.motor = motor; boat.userData.propeller = motor.userData.propeller;
  boat.userData.passengerSeats = [[-.43, .73, -2.28], [.43, .73, -2.28], [-.43, .73, -.16], [.43, .73, .9]];
  return boat;
}

function shipHull(b, { length, width, height = 1.5, draft = 1.1, color = 'paintWhite', x = 0, stern = .82, deck = 'woodLight', trim = 'gold' }) {
  const beam = t => width * .5 * profile(t, [[0, .025], [.065, .39], [.18, .87], [.3, 1], [.78, 1], [1, stern]]);
  b.add(meshGrid(32, 12, (t, s) => [x + beam(t) * (s * 2 - 1), -draft + (height + draft) * Math.pow(Math.abs(s * 2 - 1), 3), (t - .5) * length]), color);
  b.add(meshGrid(32, 1, (t, s) => [x + beam(t) * (s * 2 - 1), height, (t - .5) * length]), deck);
  b.add(quad([[x - beam(1), height, length / 2], [x + beam(1), height, length / 2], [x + beam(1) * .75, -draft * .45, length / 2], [x - beam(1) * .75, -draft * .45, length / 2]]), color);
  for (const side of [-1, 1]) {
    const points = Array.from({ length: 28 }, (_, i) => { const t = i / 27; return [x + beam(t) * side, height - .27, (t - .5) * length]; });
    b.curve(points, .065, trim, 36);
    b.curve(points.map(([a, y, z]) => [a * .999, y - .38, z]), .08, 'navy', 36);
  }
  return beam;
}
function railing(b, x, y, z1, z2, { material = 'steel', height = .94, step = 1.6, lights = false } = {}) {
  b.cylinder([x, y + height, z1], [x, y + height, z2], .035, material);
  b.cylinder([x, y + height * .49, z1], [x, y + height * .49, z2], .021, material);
  for (let z = z1; z <= z2 + .01; z += step) {
    b.cylinder([x, y, z], [x, y + height, z], .027, material);
    if (lights) b.ball(.054, [x, y + height + .028, z], 'warm', [1, 1, 1], 6);
  }
}
function table(b, x, y, z) {
  b.cylinder([x, y, z], [x, y + .71, z], .055, 'steel');
  b.cylinder([x, y + .71, z], [x, y + .765, z], .55, 'white', .55, 10);
  b.cylinder([x, y + .768, z], [x, y + .90, z], .048, 'gold');
  b.ball(.043, [x, y + .92, z], 'warm', [.72, 1.20, .72], 6);
  for (const side of [-1, 1]) {
    b.cylinder([x + side * .30, y + .768, z], [x + side * .30, y + .785, z], .13, 'white', .13, 10);
    b.cylinder([x + side * .23, y + .77, z + .20], [x + side * .23, y + .87, z + .20], .009, 'steel', .009, 5);
    b.ball(.043, [x + side * .23, y + .90, z + .20], 'glass', [.8, 1.17, .8], 6);
  }
  for (const side of [-1, 1]) {
    b.box([.44, .08, .44], [x + side * .81, y + .43, z], 'red');
    b.box([.10, .45, .44], [x + side * 1.01, y + .69, z], 'white');
    for (const dz of [-.15, .15]) b.cylinder([x + side * .83, y, z + dz], [x + side * .83, y + .42, z + dz], .025, 'steel');
  }
}
function signMaterial(text) {
  const key = `sign:${text}`;
  if (materials.has(key)) return materials.get(key);
  if (typeof document === 'undefined') return mat('warm');
  const c = document.createElement('canvas'); c.width = 1024; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#133c43'; ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = '#d6b25c'; ctx.lineWidth = 5; ctx.strokeRect(8, 8, c.width - 16, c.height - 16);
  ctx.fillStyle = '#ffe2a0'; ctx.font = 'bold 64px Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 512, 67, 980);
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.MeshStandardMaterial({ map: texture, emissiveMap: texture, emissive: 0xffffff, emissiveIntensity: .6, roughness: .65, side: THREE.DoubleSide });
  materials.set(key, m); return m;
}
function cruise(variation) {
  const b = new BoatBuilder();
  shipHull(b, { length: 55, width: 13, height: 1.45, draft: 1.6 });
  // Broad lower dining saloon, narrower promenade deck, then an open rooftop.
  for (const [floor, width, length, z] of [[1.48, 11.65, 44, 1], [4.08, 11.55, 43, 1.4], [6.54, 10.25, 39.5, 1.8]]) {
    b.box([width, .22, length], [0, floor, z], 'paintWhite');
    b.box([width - .23, .05, length - .24], [0, floor + .145, z], 'woodLight');
    for (const side of [-1, 1]) b.box([.07, .075, length - .3], [side * (width / 2 + .013), floor + .09, z], 'warm');
  }
  for (const y of [1.7, 4.3]) {
    for (const side of [-1, 1]) {
      const x = side * 5.29;
      b.box([.13, .34, 40.7], [x, y + .19, 1.3], 'paintWhite');
      b.box([.13, .22, 40.7], [x, y + 2.03, 1.3], 'paintWhite');
      for (let z = -18.2; z <= 20; z += 2.6) {
        b.box([.09, 1.6, 2.34], [x, y + 1.11, z], (Math.round((z + 18.2) / 2.6) + (y > 3 ? 1 : 0)) % 4 === 0 ? 'windowDim' : 'window');
        // Mullions and dark upper glazing break up the warm dining windows.
        b.box([.15, 1.98, .095], [x, y + 1.07, z + 1.23], 'paintWhite');
        b.box([.13, .24, 2.35], [x + side * .02, y + 1.79, z], 'glass');
        b.box([.15, 1.61, .045], [x + side * .035, y + 1.08, z], 'gold');
      }
      railing(b, side * 5.7, y - .06, -19.7, 21.2, { lights: y > 3, step: 1.5 });
    }
    b.box([10.5, 1.95, .16], [0, y + 1.08, 21.85], 'paintWhite');
    for (let x = -3.24; x <= 3.24; x += 2.16) b.box([1.94, 1.28, .17], [x, y + 1.13, 21.95], 'window');
    b.add(quad([[-5.21, y + .42, -19.52], [5.21, y + .42, -19.52], [4.92, y + 1.85, -18.94], [-4.92, y + 1.85, -18.94]]), 'glass');
    for (const x of [-3.35, 0, 3.35]) b.cylinder([x, y + .43, -19.54], [x * .95, y + 1.89, -18.96], .053, 'paintWhite');
  }
  for (const side of [-1, 1]) {
    railing(b, side * 4.98, 6.69, -17.5, 21.3, { material: 'gold', step: 1.4, lights: true });
    railing(b, side * 5.45, 1.64, -22.2, -19.9, { lights: true, step: .8 });
    // Large lit name plates are visible from either river bank.
    const m = signMaterial(variation % 2 ? 'CHAO PHRAYA NIGHT' : 'RIVER PEARL');
    b.add(new THREE.PlaneGeometry(13.6, 1.12), m, [side * 5.81, 3.78, 1.3], [0, side * Math.PI / 2, 0]);
  }
  // Rooftop dance floor, real chairs/tables and warm festoon lighting.
  b.box([3.35, .045, 8.5], [0, 6.715, -.8], 'teal');
  for (const x of [-3.2, 3.2]) for (let z = -13; z <= 16; z += 4.8) table(b, x, 6.72, z);
  for (let i = 0; i < 10; i++) {
    const x = i % 2 ? 2.35 : -2.35, z = -12 + Math.floor(i / 2) * 5.4;
    person(b, x, 6.73, z, { seated: true, heading: x < 0 ? -Math.PI / 2 : Math.PI / 2, shirt: i % 3 === 0 ? 'red' : 'white', skin: i % 2 ? 0xd8aa84 : 0xb68259 });
  }
  for (let i = 0; i < 4; i++) person(b, -.75 + (i % 2) * 1.5, 6.75, -1.7 + Math.floor(i / 2) * 2.1, { shirt: i % 2 ? 'red' : 'white', heading: i * 1.4 });
  for (const x of [-4.25, 4.25]) for (const z of [-16.1, 20.3]) b.cylinder([x, 6.7, z], [x, 9.27, z], .055, 'steel');
  for (const x of [-4.25, 4.25]) {
    b.curve([[x, 9.2, -16.1], [x, 8.63, -4], [x, 8.63, 8], [x, 9.2, 20.3]], .013, 'rubber', 24, 4);
    for (let i = 0; i < 25; i++) {
      const t = i / 24, z = lerp(-16.1, 20.3, t), y = 9.2 - Math.sin(t * Math.PI) * .59;
      b.ball(.067, [x, y - .075, z], 'warm', [1, 1.18, 1], 6);
    }
  }
  // Raised wheelhouse at the forward end and a modest rear awning.
  b.box([5.1, 1.82, 3.25], [0, 7.64, -16.45], 'paintWhite');
  b.add(quad([[-2.5, 7.2, -18.12], [2.5, 7.2, -18.12], [2.35, 8.45, -17.76], [-2.35, 8.45, -17.76]]), 'glass');
  b.box([5.4, .18, 3.6], [0, 8.65, -16.45], 'paintWhite');
  b.add(meshGrid(12, 18, (t, v) => [(v - .5) * 8.9, 9.04 + .47 * (1 - (v * 2 - 1) ** 2), 13.65 + t * 6.1]), 'clothWhite');
  for (const z of [13.65, 16.7, 19.75]) b.curve([[-4.45, 9.04, z], [0, 9.51, z], [4.45, 9.04, z]], .037, 'steel', 16, 5);
  for (const x of [-4.24, 4.24]) b.cylinder([x, 6.75, 13.78], [x, 9.1, 13.78], .058, 'paintWhite');
  b.cylinder([0, 8.73, -15.9], [0, 10.20, -15.9], .057, 'steel');
  b.box([1.76, .14, .32], [0, 9.61, -15.9], 'paintWhite');
  b.ball(.09, [0, 10.24, -15.9], 'warm');
  navLamp(b, -5.28, 6.25, -16.8, -1); navLamp(b, 5.28, 6.25, -16.8, 1);
  for (const side of [-1, 1]) for (let z = -15; z <= 20; z += 7) {
    b.cylinder([side * 6.09, .66, z], [side * 6.09, 1.35, z], .19, 'rubber', .19, 8);
  }
  // Working bow fittings and aft boarding stairs keep the ship grounded in
  // river life, with small service areas breaking up the rooftop restaurant.
  for (const side of [-1, 1]) {
    for (const z of [-23.0, 22.3]) cleat(b, side * 3.7, 1.66, z, 1.7);
    lifeRing(b, side * 5.71, 2.61, 17.6, side, .39);
    lifeRing(b, side * 4.99, 7.61, 19.8, side, .39);
    b.cylinder([side * 4.96, 7.64, -11.5], [side * 4.96, 8.17, -11.5], .052, 'paintWhite');
    b.ball(.12, [side * 4.96, 8.19, -11.5], 'warm', [.68, .68, 1], 8);
    for (let j = 0; j < 10; j++) b.box([1.17, .075, .30], [side * 4.75, 1.83 + j * .248, 19.1 + j * .26], 'paintWhite');
    b.cylinder([side * 4.15, 2.66, 19.06], [side * 4.15, 5.01, 21.42], .032, 'steel');
    b.cylinder([side * 5.36, 2.66, 19.06], [side * 5.36, 5.01, 21.42], .032, 'steel');
  }
  ropeCoil(b, -2.3, 1.49, -23.0, .65);
  ropeCoil(b, 2.6, 1.49, 23.4, .63);
  b.box([2.6, .71, .82], [0, 7.09, 18.0], 'darkWood');
  b.box([2.68, .045, .88], [0, 7.475, 18.0], 'steel');
  for (const x of [-1.72, 1.72]) {
    b.box([.51, 1.26, .54], [x, 7.36, 18.54], 'rubber');
    for (const y of [7.04, 7.57]) b.cylinder([x, y, 18.25], [x, y, 18.22], .18, 'navy', .18, 10);
  }
  person(b, 0, 6.72, 18.65, { shirt: 'white', heading: Math.PI });
  for (const x of [-.84, .84]) b.box([.42, .012, .32], [x, 7.51, 17.98], 'cyan');
  // White all-round stern lamp and Thai ensign, separate from colored sidelights.
  thaiFlag(b, 0, 7.7, 21.55, 1.7);
  b.ball(.10, [0, 8.19, 21.6], 'warm');
  return b.finish('illuminated dinner cruise');
}
function flag(b, x, y, z, color = 'orange') {
  b.cylinder([x, y, z], [x, y + 2.2, z], .029, 'steel');
  b.add(meshGrid(7, 2, (t, s) => [x + t * 1.18, y + 2.05 - s * .56, z + Math.sin(t * 7) * .10]), color);
}
function ferry(variation) {
  const b = new BoatBuilder();
  shipHull(b, { length: 30, width: 5.5, height: .97, draft: .70, stern: .80 });
  for (const side of [-1, 1]) b.box([.13, .33, 23.2], [side * 2.61, 1.15, .7], 'orange');
  canopy(b, { length: 22.5, width: 5.11, y: 3.40, z: .7, color: 'white', posts: 7, stripe: 'orange' });
  for (const side of [-1, 1]) {
    b.box([.055, .42, 20.0], [side * 2.46, 2.95, .8], 'glass');
    railing(b, side * 2.58, 1.25, -10.1, 11.4, { height: .68, step: 1.6 });
    b.add(new THREE.PlaneGeometry(8.1, .64), signMaterial('CHAO PHRAYA EXPRESS'), [side * 2.625, 1.58, .6], [0, side * Math.PI / 2, 0]);
    b.box([.045, .04, 19.5], [side * 2.35, 3.38, .8], 'warm');
  }
  for (let i = 0; i < 10; i++) {
    const z = -8.9 + i * 1.96;
    bench(b, -1.41, 1.36, z, 1.76, 'orange'); bench(b, 1.41, 1.36, z, 1.76, 'orange');
    if (i % 2 === 0) person(b, i % 4 === 0 ? -1.35 : 1.35, 1.06, z, { seated: true, shirt: i % 3 ? 'teal' : 'white' });
  }
  b.box([3.5, 1.53, 2.67], [0, 1.94, -10.49], 'white');
  b.add(quad([[-1.67, 1.70, -11.90], [1.67, 1.70, -11.90], [1.49, 2.77, -11.57], [-1.49, 2.77, -11.57]]), 'glass');
  b.box([3.85, .13, 2.98], [0, 2.84, -10.49], 'orange');
  for (const x of [-.55, .55]) b.cylinder([x, 1.75, -11.91], [x, 2.76, -11.57], .028, 'white');
  flag(b, 0, 1.26, -13.61, variation % 3 === 1 ? 'gold' : 'orange');
  for (const side of [-1, 1]) {
    b.box([.8, .48, 1.12], [side * 1.02, .71, 14.47], 'rubber');
    b.box([.16, .9, .20], [side * 1.02, .13, 14.65], 'steel');
    for (let z = -8; z < 12; z += 4) tire(b, side * 2.77, .76, z, .29, side);
    navLamp(b, side * 2.28, 3.32, -9.1, side);
  }
  b.box([2.05, .10, 1.9], [0, 1.07, 12.35], 'woodLight');
  person(b, 1.71, 1.05, 12.1, { shirt: 'navy', lifeVest: true });
  for (const side of [-1, 1]) {
    lifeRing(b, side * 2.61, 2.41, 8.82, side, .32);
    for (let z = -7.5; z <= 8; z += 3.7) {
      // Life jackets stored overhead, as on Bangkok's orange-flag boats.
      b.box([.43, .21, .48], [side * 1.96, 3.13, z], 'orange');
      b.box([.45, .035, .50], [side * 1.96, 3.20, z], 'rubber');
      b.box([.51, .03, .52], [side * 1.96, 2.995, z], 'steel');
    }
    cleat(b, side * 1.96, 1.13, -12.58, 1.1);
    b.box([.60, .32, .39], [side * 2.0, 1.33, 10.5], 'rubber');
  }
  for (let z = -6; z <= 6; z += 6) {
    b.box([2.45, .075, .16], [0, 3.42, z], 'paintWhite');
    b.box([2.25, .028, .115], [0, 3.37, z], 'warm');
  }
  thaiFlag(b, .92, 1.62, 12.66, 1.1);
  ropeCoil(b, -.49, 1.11, -13.0, .37);
  b.ball(.08, [0, 3.52, 11.21], 'warm');
  return b.finish('orange flag express ferry');
}
function electric() {
  const b = new BoatBuilder();
  for (const side of [-1, 1]) shipHull(b, { length: 24, width: 2.1, height: 1.03, draft: .63, x: side * 2.36, color: 'paintWhite', stern: .44 });
  b.box([6.8, .28, 20.4], [0, 1.18, 0], 'white');
  b.box([6.36, .065, 18.9], [0, 1.36, 0], 'woodLight');
  b.box([5.83, .38, 17.4], [0, 1.56, 0], 'navy');
  b.box([6.39, .22, 18.82], [0, 3.69, 0], 'white');
  b.box([6.04, .07, 18.02], [0, 3.85, 0], 'teal');
  for (const side of [-1, 1]) {
    for (let z = -7.18; z <= 7.2; z += 2.05) b.box([.11, 1.63, 1.92], [side * 2.89, 2.60, z], 'windowCool');
    for (let z = -8.2; z <= 8.2; z += 2.05) b.box([.13, 1.92, .092], [side * 2.94, 2.64, z], 'white');
    b.box([.13, .045, 18.49], [side * 3.19, 3.64, 0], 'cyan');
    b.add(new THREE.PlaneGeometry(6.65, .58), signMaterial('RIVER ELECTRIC'), [side * 3.03, 1.79, 0], [0, side * Math.PI / 2, 0]);
    railing(b, side * 3.27, 1.38, -9.52, 9.52, { height: .62, step: 1.4 });
    navLamp(b, side * 3.04, 3.60, -7.2, side);
    for (const z of [-7, -.8, 6.4]) b.cylinder([side * 3.44, .55, z], [side * 3.44, 1.2, z], .145, 'rubber');
  }
  for (const direction of [-1, 1]) {
    const z = direction * 9.0;
    b.add(quad([[-2.87, 1.8, z + direction * .28], [2.87, 1.8, z + direction * .28], [2.76, 3.58, z - direction * .22], [-2.76, 3.58, z - direction * .22]]), 'glass');
    for (const x of [-.92, .92]) b.cylinder([x, 1.80, z + direction * .28], [x, 3.58, z - direction * .22], .048, 'white');
    b.box([3.55, .16, 1.8], [0, 1.19, direction * 10.2], 'teal');
    b.box([2.1, .12, .11], [0, 1.77, direction * 9.29], 'cyan');
  }
  // Solar canopy: blue cells divided by a fine aluminum grid.
  for (let z = -7.7; z <= 7.7; z += 2.52) for (const x of [-1.58, 1.58]) {
    b.box([2.73, .035, 2.29], [x, 3.907, z], 'glass');
    for (let dx = -1.21; dx < 1.3; dx += .48) b.box([.018, .012, 2.25], [x + dx, 3.934, z], 'steel');
    b.box([2.74, .012, .020], [x, 3.934, z], 'steel');
  }
  for (let z = -6.4; z <= 6.4; z += 1.81) {
    bench(b, -1.58, 1.72, z, 1.58, 'teal'); bench(b, 1.58, 1.72, z, 1.58, 'teal');
  }
  for (const side of [-1, 1]) {
    lifeRing(b, side * 3.28, 2.02, 7.72, side, .31);
    cleat(b, side * 2.62, 1.55, 9.38, 1.1);
    b.box([.45, .82, .51], [side * 1.93, 4.30, 6.70], 'paintWhite');
    for (let j = 0; j < 5; j++) b.box([.455, .033, .53], [side * 1.93, 4.06 + j * .095, 6.70], 'navy');
  }
  thaiFlag(b, .4, 1.75, 10.63, .85);
  b.cylinder([0, 3.96, -5.5], [0, 5.10, -5.5], .036, 'steel');
  b.ball(.085, [0, 5.15, -5.5], 'warm');
  // Visible driver through front glazing, passengers suggested in each saloon.
  person(b, -.81, 1.40, -7.62, { seated: true, shirt: 'white' });
  return b.finish('electric river catamaran');
}
function fishing(variation) {
  const b = new BoatBuilder();
  woodenHull(b, { length: 6.5, width: 1.55, rim: .40, draft: .27, fishing: true, color: variation % 2 ? 'darkWood' : 'wood' });
  for (const z of [-1.86, .3, 2.08]) b.box([1.07, .09, .32], [0, .36, z], 'woodLight');
  person(b, -.01, -.025, .32, { seated: true, shirt: 'teal', hat: true, heading: -.29 });
  b.cylinder([.12, .70, -.02], [1.29, 1.85, -2.29], .019, 'darkWood', .009, 6);
  b.curve([[1.29, 1.85, -2.29], [1.68, 1.78, -2.77], [1.91, 1.39, -3.11]], .008, 'darkWood', 12, 4);
  b.cylinder([1.91, 1.39, -3.11], [1.95, -.025, -3.20], .0025, 'white', .0025, 3);
  b.cylinder([-.34, .12, -1.37], [-.34, .44, -1.37], .19, 'teal', .23, 9);
  b.cylinder([-.34, .444, -1.37], [-.34, .45, -1.37], .204, 'navy', .204, 9);
  b.box([.45, .33, .59], [.26, .28, 1.41], 'white');
  b.box([.47, .065, .61], [.26, .48, 1.41], 'teal');
  // Coiled cast net, float line and wooden paddle on the gunwale.
  for (let i = 0; i < 6; i++) {
    const r = .29 - i * .035;
    const points = Array.from({ length: 18 }, (_, j) => { const a = j / 17 * Math.PI * 2; return [Math.cos(a) * r, .17 + i * .023, -2.09 + Math.sin(a) * r]; });
    b.curve(points, .023, 'woodLight', 19, 4);
  }
  b.cylinder([-.61, .53, -1.81], [-.64, .53, 1.83], .033, 'woodLight');
  b.box([.22, .046, .74], [-.64, .53, 1.89], 'woodLight');
  b.box([.39, .33, .40], [0, .50, 2.43], 'rubber');
  b.cylinder([0, .33, 2.58], [0, -.13, 3.20], .032, 'steel');
  b.ball(.074, [0, .95, 2.55], 'warm', [1, 1.5, 1]);
  b.cylinder([0, .6, 2.55], [0, .85, 2.55], .018, 'steel');
  b.cylinder([0, .83, 2.55], [0, .87, 2.55], .12, 'rubber', .12, 10);
  b.add(new THREE.ConeGeometry(.13, .07, 10), 'steel', [0, 1.1, 2.55]);
  for (const side of [-1, 1]) b.cylinder([side * .10, .85, 2.55], [side * .10, 1.09, 2.55], .007, 'steel', .007, 4);
  tire(b, -.70, .20, .34, .18, -1);
  b.box([.27, .31, .23], [-.39, .36, 1.42], 'red');
  b.box([.12, .065, .09], [-.39, .555, 1.42], 'rubber');
  for (let i = 0; i < 8; i++) {
    const z = -2.54 + i * .10;
    b.curve([[-.20, .20, z], [.09, .45, z + .10], [.37, .17, z]], .006, 'white', 6, 3);
    b.curve([[-.23 + i * .085, .19, -2.6], [-.18 + i * .085, .43, -2.2], [-.20 + i * .085, .18, -1.7]], .006, 'white', 6, 3);
  }
  return b.finish('single-person wooden fishing boat');
}

function patrol(variation) {
  const b = new BoatBuilder(), paint = variation % 2 ? 0x29352f : 0x202c38;
  shipHull(b, {length:13.8,width:3.8,height:.92,draft:.55,color:paint,stern:.78,deck:paint,trim:'rubber'});
  // Low enclosed wheelhouse, sloped windshield and a long clear foredeck.
  b.box([2.9,.26,5.8],[0,1.09,.3],paint);
  b.box([2.66,1.48,3.85],[0,1.88,.9],paint);
  b.add(quad([[-1.31,1.42,-1.65],[1.31,1.42,-1.65],[1.16,2.63,-1.05],[-1.16,2.63,-1.05]]),'glass');
  b.cylinder([0,1.42,-1.67],[0,2.64,-1.07],.04,paint);
  b.box([3.04,.16,4.7],[0,2.72,.65],paint);
  for(const side of [-1,1]) {
    for(const z of [-.05,1.42]) b.box([.035,.91,1.21],[side*1.345,2.08,z],'glass');
    b.box([.065,.09,1.25],[side*1.37,1.50,1.4],'steel');
    b.box([.04,.09,4.6],[side*1.82,.87,.8],0x88979a);
    railing(b,side*1.55,1.01,-4.1,-1.8,{height:.53,material:paint,step:1.2});
    railing(b,side*1.65,.96,3.15,5.35,{height:.55,material:paint,step:1.1});
    for(const z of [-1.9,2.8,4.3]) tire(b,side*1.87,.48,z,.23,side);
    cleat(b,side*1.3,1.02,-4.6,.75);
    // Twin outboards with their lower units in the water.
    b.box([.84,1.0,.78],[side*.91,.94,6.63],paint);
    b.box([.72,.10,.72],[side*.91,1.49,6.61],'rubber');
    b.box([.25,.86,.29],[side*.91,.08,6.86],'rubber');
    navLamp(b,side*1.40,2.75,-1.15,side);
    b.add(new THREE.PlaneGeometry(2.1,.26),patrolMarking(variation),[side*1.354,1.35,.7],[0,side*Math.PI/2,0]);
  }
  b.box([2.10,.13,.39],[0,2.87,.65],'rubber');
  // The two LED clusters are drawn by the antialiased fixture batch.
  b.cylinder([.63,2.82,1.95],[.63,4.1,1.95],.022,'steel');
  b.cylinder([-.63,2.82,1.75],[-.63,3.55,1.75],.018,'steel');
  b.box([.7,.12,.19],[.63,3.65,1.95],paint);
  b.box([.54,.18,.52],[0,1.04,-3.4],paint);
  b.cylinder([0,1.2,-3.4],[0,1.24,-3.4],.18,'rubber',.18,10);
  b.ball(.085,[0,3.7,1.96],'warm');
  thaiFlag(b,-1.25,1.1,5.05,.72);
  person(b,-.63,1.05,.18,{seated:true,shirt:paint});
  person(b,.6,.96,3.6,{shirt:paint});
  return b.finish('river patrol launch');
}
function patrolMarking(variation) {
  const key=`patrol-marking:${variation%2}`;
  if(materials.has(key))return materials.get(key);
  if(typeof document==='undefined')return mat('white');
  const c=document.createElement('canvas');c.width=1024;c.height=128;
  const ctx=c.getContext('2d');ctx.fillStyle=variation%2?'#29352f':'#202c38';ctx.fillRect(0,0,1024,128);
  ctx.fillStyle='#b3babc';ctx.font='600 77px "Noto Sans Thai",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('ตำรวจน้ำ  '+(variation%2?'๒๗':'๑๙'),512,64,970);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshStandardMaterial({map,roughness:.72});materials.set(key,material);return material;
}

const factories = { longtail, cruise, ferry, electric, fishing, patrol };
export function createBoat(kind = 'longtail', variation = 0) {
  const resolved = Object.hasOwn(factories, kind) ? kind : 'longtail';
  const boat = factories[resolved](variation);
  boat.userData.kind = resolved;
  boat.userData.spec = boatSpecs[resolved];
  // Renderer may opt into a very small pool of real local lights for the
  // player and closest ship. Fixtures themselves are batched emissive meshes.
  const lighting = {
    longtail: [{ position: [0, 1.84, .15], color: 0xffc381, intensity: 19, distance: 7.5 }],
    cruise: [{ position: [0, 8.7, -.5], color: 0xffc78d, intensity: 95, distance: 31 }, { position: [0, 8.6, 15.8], color: 0xffbb85, intensity: 65, distance: 18 }],
    ferry: [{ position: [0, 3.2, 0], color: 0xffd5a0, intensity: 42, distance: 16 }],
    electric: [{ position: [0, 3.45, 0], color: 0xc2ecf5, intensity: 37, distance: 13 }],
    patrol: [{ position: [-.74,3.05,.65], color: 0xff1838, intensity: 0, distance: 21 }, { position: [.74,3.05,.65], color: 0x1870ff, intensity: 0, distance: 21 }],
    fishing: [{ position: [0, .94, 2.55], color: 0xffbf79, intensity: 5, distance: 4.5 }],
  };
  boat.userData.lightSources = lighting[resolved];
  return boat;
}

import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Dimensions describe the hull, excluding flags and the long-tail propeller shaft.
// Metres, y=0 at the waterline; the bow always faces local -Z.
export const boatSpecs = Object.freeze({
  longtail: Object.freeze({ length: 12.4, width: 2.35, mass: 1, maxSpeed: 25 }),
  cruise: Object.freeze({ length: 55, width: 13, mass: 24, maxSpeed: 5.1 }),
  ferry: Object.freeze({ length: 30, width: 5.5, mass: 5.5, maxSpeed: 12 }),
  electric: Object.freeze({ length: 24, width: 7, mass: 7, maxSpeed: 9 }),
  fishing: Object.freeze({ length: 6.5, width: 1.55, mass: .45, maxSpeed: 3.8 }),
});

const C = { wood: 0x874624, woodLight: 0xb87a3f, darkWood: 0x3f2115, white: 0xe6e4d7, red: 0xc83e2a, teal: 0x128e86, orange: 0xe67d28, gold: 0xd4ad52, navy: 0x163b49, steel: 0x99a8a8, rubber: 0x171a19, warm: 0xffdd91, cyan: 0x77e7e5 };
const materials = new Map();
let woodTexture;
function woodMap() {
  if (woodTexture) return woodTexture;
  const size = 256, data = new Uint8Array(size * size * 4);
  // Fine longitudinal grain and weathered plank seams without an asset request.
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const grain = Math.sin(y * .72 + Math.sin(x * .038) * 2.4) * 11 + Math.sin(y * 2.3 + x * .014) * 5;
    const noise = ((x * 1973 + y * 9277 + x * y * 17) % 101) / 101 * 11;
    const seam = y % 32 < 2 ? -53 : 0;
    const v = Math.max(20, Math.min(255, 206 + grain + noise + seam));
    const at = (y * size + x) * 4;
    data[at] = v; data[at + 1] = v * .91; data[at + 2] = v * .77; data[at + 3] = 255;
  }
  woodTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.colorSpace = THREE.SRGBColorSpace;
  woodTexture.generateMipmaps = true;
  woodTexture.minFilter = THREE.LinearMipmapLinearFilter;
  woodTexture.magFilter = THREE.LinearFilter;
  woodTexture.anisotropy = 4;
  woodTexture.needsUpdate = true;
  return woodTexture;
}
function mat(name) {
  if (materials.has(name)) return materials.get(name);
  let options = { color: C[name] ?? name, roughness: .68, metalness: .04 };
  if (['wood', 'woodLight', 'darkWood'].includes(name)) options = { ...options, map: woodMap(), roughness: .68 };
  if (name === 'steel') options = { ...options, metalness: .72, roughness: .29 };
  if (name === 'gold') options = { ...options, metalness: .55, roughness: .3 };
  if (name === 'glass') options = { color: 0x123e4e, metalness: .45, roughness: .19, emissive: 0x073842, emissiveIntensity: .28 };
  if (name === 'window') options = { color: 0x795a30, roughness: .32, metalness: .12, emissive: 0xffbc5c, emissiveIntensity: .68 };
  if (name === 'warm') options = { color: 0xffecb4, emissive: 0xffcd70, emissiveIntensity: 2.4, roughness: .32 };
  if (name === 'cyan') options = { color: 0xacecef, emissive: 0x40c4de, emissiveIntensity: 1.4, roughness: .32 };
  if (name === 'navRed') options = { color: 0xff5d49, emissive: 0xff1d0a, emissiveIntensity: 2.4 };
  if (name === 'navGreen') options = { color: 0x60e293, emissive: 0x05dc57, emissiveIntensity: 2.4 };
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
function person(b, x, y, z, { seated = false, heading = 0, shirt = 'teal', skin = 0xb68259, hat = false, scale = 1 } = {}) {
  b.inFrame([x, y, z], heading, () => {
    const oldFrame = b.frame;
    b.frame = oldFrame.clone().scale(new THREE.Vector3(scale, scale, scale));
    const hips = seated ? .47 : .86, shoulders = hips + .48, head = shoulders + .23;
    b.cylinder([0, hips, 0], [0, shoulders - .05, 0], .18, shirt, .23, 8);
    b.ball(.18, [0, hips, 0], 'navy', [1, .63, .76]);
    b.cylinder([0, shoulders - .02, 0], [0, shoulders + .08, 0], .065, skin);
    b.ball(.12, [0, head, -.015], skin, [.82, 1.15, .87]);
    b.ball(.112, [0, head + .059, .013], 'rubber', [.94, .71, .97]);
    b.ball(.023, [0, head - .005, -.117], skin, [.8, .9, 1]);
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
  b.add(meshGrid(12, 14, (t, s) => [(s - .5) * width, y + .24 * (1 - Math.pow(s * 2 - 1, 2)), z + (t - .5) * length]), color);
  for (const side of [-1, 1]) {
    b.box([.035, .14, length], [side * width / 2, y - .055, z], stripe);
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
  person(b, -.16, .40, 4.21, { seated: true, shirt: 'orange', hat: true });
  b.box([.48, .36, .56], [.59, .37, 3.81], 'navy');
  b.cylinder([-.47, .41, 4.88], [0, 1.0, 5.24], .06, 'steel');
  b.cylinder([.47, .41, 4.88], [0, 1.0, 5.24], .06, 'steel');
  for (const side of [-1, 1]) {
    b.ball(.12, [side * .73, .83, 3.62], 'rubber', [1, 1, .53]);
    b.ball(.045, [side * .91, 2.01, -.85], side < 0 ? 'navRed' : 'navGreen');
  }
  const boat = b.finish('Thai wooden long-tail');
  const motor = engine(); motor.position.set(0, 1.00, 5.22);
  boat.add(motor); boat.userData.motor = motor; boat.userData.propeller = motor.userData.propeller;
  boat.userData.passengerSeats = [[-.43, .73, -2.28], [.43, .73, -2.28], [-.43, .73, -.16], [.43, .73, .9]];
  return boat;
}

function shipHull(b, { length, width, height = 1.5, draft = 1.1, color = 'white', x = 0, stern = .82 }) {
  const beam = t => width * .5 * profile(t, [[0, .025], [.065, .39], [.18, .87], [.3, 1], [.78, 1], [1, stern]]);
  b.add(meshGrid(32, 12, (t, s) => [x + beam(t) * (s * 2 - 1), -draft + (height + draft) * Math.pow(Math.abs(s * 2 - 1), 3), (t - .5) * length]), color);
  b.add(meshGrid(32, 1, (t, s) => [x + beam(t) * (s * 2 - 1), height, (t - .5) * length]), 'woodLight');
  b.add(quad([[x - beam(1), height, length / 2], [x + beam(1), height, length / 2], [x + beam(1) * .75, -draft * .45, length / 2], [x - beam(1) * .75, -draft * .45, length / 2]]), color);
  for (const side of [-1, 1]) {
    const points = Array.from({ length: 28 }, (_, i) => { const t = i / 27; return [x + beam(t) * side, height - .27, (t - .5) * length]; });
    b.curve(points, .065, 'gold', 36);
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
  b.ball(.056, [x, y + .92, z], 'warm', [.72, 1.20, .72], 6);
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
    b.box([width, .22, length], [0, floor, z], 'white');
    b.box([width - .23, .05, length - .24], [0, floor + .145, z], 'woodLight');
    for (const side of [-1, 1]) b.box([.07, .075, length - .3], [side * (width / 2 + .013), floor + .09, z], 'warm');
  }
  for (const y of [1.7, 4.3]) {
    for (const side of [-1, 1]) {
      const x = side * 5.29;
      b.box([.13, .34, 40.7], [x, y + .19, 1.3], 'white');
      b.box([.13, .22, 40.7], [x, y + 2.03, 1.3], 'white');
      for (let z = -18.2; z <= 20; z += 2.6) {
        b.box([.09, 1.6, 2.34], [x, y + 1.11, z], 'window');
        // Mullions and dark upper glazing break up the warm dining windows.
        b.box([.15, 1.98, .095], [x, y + 1.07, z + 1.23], 'white');
        b.box([.13, .24, 2.35], [x + side * .02, y + 1.79, z], 'glass');
        b.box([.15, 1.61, .045], [x + side * .035, y + 1.08, z], 'gold');
      }
      railing(b, side * 5.7, y - .06, -19.7, 21.2, { lights: y > 3, step: 1.5 });
    }
    b.box([10.5, 1.95, .16], [0, y + 1.08, 21.85], 'white');
    b.box([8.5, 1.28, .17], [0, y + 1.13, 21.95], 'window');
    b.add(quad([[-5.21, y + .42, -19.52], [5.21, y + .42, -19.52], [4.92, y + 1.85, -18.94], [-4.92, y + 1.85, -18.94]]), 'glass');
    for (const x of [-3.35, 0, 3.35]) b.cylinder([x, y + .43, -19.54], [x * .95, y + 1.89, -18.96], .053, 'white');
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
  b.box([5.1, 1.82, 3.25], [0, 7.64, -16.45], 'white');
  b.add(quad([[-2.5, 7.2, -18.12], [2.5, 7.2, -18.12], [2.35, 8.45, -17.76], [-2.35, 8.45, -17.76]]), 'glass');
  b.box([5.4, .18, 3.6], [0, 8.65, -16.45], 'white');
  b.box([8.9, .12, 6.1], [0, 9.09, 16.7], 'white');
  for (const x of [-4.24, 4.24]) b.cylinder([x, 6.75, 13.78], [x, 9.1, 13.78], .058, 'white');
  b.cylinder([0, 8.73, -15.9], [0, 10.20, -15.9], .057, 'steel');
  b.box([1.76, .14, .32], [0, 9.61, -15.9], 'white');
  b.ball(.09, [0, 10.24, -15.9], 'warm');
  b.ball(.10, [-5.28, 6.25, -16.8], 'navRed'); b.ball(.10, [5.28, 6.25, -16.8], 'navGreen');
  for (const side of [-1, 1]) for (let z = -15; z <= 20; z += 7) {
    b.cylinder([side * 6.09, .66, z], [side * 6.09, 1.35, z], .19, 'rubber', .19, 8);
  }
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
    for (let z = -8; z < 12; z += 4) b.ball(.23, [side * 2.76, .80, z], 'rubber', [.45, 1, 1]);
    b.ball(.075, [side * 2.28, 3.32, -9.1], side < 0 ? 'navRed' : 'navGreen');
  }
  b.box([2.05, .10, 1.9], [0, 1.07, 12.35], 'woodLight');
  person(b, 1.71, 1.05, 12.1, { shirt: 'orange' });
  return b.finish('orange flag express ferry');
}
function electric() {
  const b = new BoatBuilder();
  for (const side of [-1, 1]) shipHull(b, { length: 24, width: 2.1, height: 1.03, draft: .63, x: side * 2.36, color: 'white', stern: .44 });
  b.box([6.8, .28, 20.4], [0, 1.18, 0], 'white');
  b.box([6.36, .065, 18.9], [0, 1.36, 0], 'woodLight');
  b.box([5.83, .38, 17.4], [0, 1.56, 0], 'navy');
  b.box([6.39, .22, 18.82], [0, 3.69, 0], 'white');
  b.box([6.04, .07, 18.02], [0, 3.85, 0], 'teal');
  for (const side of [-1, 1]) {
    b.box([.11, 1.63, 16.4], [side * 2.89, 2.60, 0], 'glass');
    for (let z = -8.2; z <= 8.2; z += 2.05) b.box([.13, 1.92, .092], [side * 2.94, 2.64, z], 'white');
    b.box([.13, .045, 18.49], [side * 3.19, 3.64, 0], 'cyan');
    b.add(new THREE.PlaneGeometry(6.65, .58), signMaterial('RIVER ELECTRIC'), [side * 3.03, 1.79, 0], [0, side * Math.PI / 2, 0]);
    railing(b, side * 3.27, 1.38, -9.52, 9.52, { height: .62, step: 1.4 });
    b.ball(.079, [side * 3.04, 3.60, -7.2], side < 0 ? 'navRed' : 'navGreen');
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
  b.ball(.058, [0, .90, 2.55], 'warm');
  b.cylinder([0, .6, 2.55], [0, .87, 2.55], .013, 'steel');
  return b.finish('single-person wooden fishing boat');
}

const factories = { longtail, cruise, ferry, electric, fishing };
export function createBoat(kind = 'longtail', variation = 0) {
  const resolved = Object.hasOwn(factories, kind) ? kind : 'longtail';
  const boat = factories[resolved](variation);
  boat.userData.kind = resolved;
  boat.userData.spec = boatSpecs[resolved];
  return boat;
}

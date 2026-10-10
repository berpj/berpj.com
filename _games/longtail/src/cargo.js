import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Loaded Chao Phraya workboats. Forward is -Z and y=0 is the waterline.
// Every hull remains a separate object so a convoy can articulate around bends.
export const cargoSpecs = Object.freeze({
  tug: Object.freeze({ length: 16, width: 5.4, mass: 8, maxSpeed: 3.2 }),
  barge: Object.freeze({ length: 48, width: 12.5, mass: 65, maxSpeed: 3.2 }),
});

const templates = new Map();
const vertexColor = new THREE.Color();
const noise = (x, y) => {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
};
function surface(type) {
  const size = 128, pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    const weave = type === 'canvas' ? (x % 3 === 0 ? 12 : 0) + (y % 3 === 0 ? 9 : 0) : 0;
    const mottling = noise(Math.floor(x / 9), Math.floor(y / 6)) * 18;
    const streak = type === 'steel' ? Math.sin(x * .65) * 11 * (y / size) : 0;
    const value = 213 + noise(x, y) * 26 - weave - mottling - streak;
    pixels[i] = pixels[i + 1] = pixels[i + 2] = value;
    pixels[i + 3] = 255;
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.anisotropy = 2;
  texture.needsUpdate = true;
  return texture;
}
const steelMap = surface('steel'), clothMap = surface('canvas');
// Vertex colours batch different paint colours, window panes, and lamp colours
// into only six draw calls. Textures and geometries are shared by every clone.
const materials = {
  metal: new THREE.MeshStandardMaterial({ vertexColors: true, map: steelMap, roughness: .78, metalness: .20 }),
  canvas: new THREE.MeshStandardMaterial({ vertexColors: true, map: clothMap, roughness: .96, metalness: 0, side: THREE.DoubleSide }),
  paint: new THREE.MeshStandardMaterial({ vertexColors: true, map: steelMap, roughness: .56, metalness: .1 }),
  rubber: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, metalness: 0 }),
  glass: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .23, metalness: .35, emissive: 0x385459, emissiveIntensity: .16 }),
  lamp: new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }),
};

class Builder {
  constructor() { this.batches = new Map(); }
  add(source, type, color, position = [0, 0, 0], rotation = [0, 0, 0]) {
    source.clearGroups();
    source.applyMatrix4(new THREE.Matrix4().compose(
      new THREE.Vector3(...position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),
      new THREE.Vector3(1, 1, 1),
    ));
    const geometry = source.index ? source.toNonIndexed() : source;
    if (source !== geometry) source.dispose();
    vertexColor.set(color);
    const colors = new Float32Array(geometry.attributes.position.count * 3);
    for (let i = 0; i < colors.length; i += 3) {
      colors[i] = vertexColor.r; colors[i + 1] = vertexColor.g; colors[i + 2] = vertexColor.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    if (!this.batches.has(type)) this.batches.set(type, []);
    this.batches.get(type).push(geometry);
  }
  box(size, position, type, color, rotation = [0, 0, 0]) {
    this.add(new THREE.BoxGeometry(...size), type, color, position, rotation);
  }
  rod(a, b, radius, type, color, segments = 5) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
    const direction = end.clone().sub(start);
    const geometry = new THREE.CylinderGeometry(radius, radius, direction.length(), segments);
    geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize()));
    this.add(geometry, type, color, start.add(end).multiplyScalar(.5).toArray());
  }
  path(points, radius, type, color, radial = 4) {
    for (let i = 1; i < points.length; i++) this.rod(points[i - 1], points[i], radius, type, color, radial);
  }
  finish(name) {
    const group = new THREE.Group(); group.name = name;
    for (const [type, geometries] of this.batches) {
      const geometry = mergeGeometries(geometries, false);
      geometries.forEach(g => g.dispose());
      geometry.computeBoundingBox(); geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, materials[type]);
      mesh.name = `${name}-${type}`;
      mesh.receiveShadow = true;
      group.add(mesh);
    }
    return group;
  }
}

function grid(rows, columns, point) {
  const positions = [], uv = [], indices = [];
  for (let r = 0; r <= rows; r++) for (let c = 0; c <= columns; c++) {
    positions.push(...point(r / rows, c / columns)); uv.push(c / columns * 2, r / rows * 7);
    if (r < rows && c < columns) {
      const i = r * (columns + 1) + c;
      indices.push(i, i + columns + 1, i + 1, i + 1, i + columns + 1, i + columns + 2);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices); geometry.computeVertexNormals();
  return geometry;
}

function quad(points) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
  geometry.setIndex([0, 1, 2, 0, 2, 3]); geometry.computeVertexNormals();
  return geometry;
}

// The hull perimeter is clockwise viewed from above. The decks close the
// silhouette, including the chamfered ends where a plain box would look false.
function hull(builder, outline, deck, draft, color) {
  const shape = new THREE.Shape();
  outline.forEach(([x, z], i) => i ? shape.lineTo(x, -z) : shape.moveTo(x, -z));
  shape.closePath();
  const cap = new THREE.ShapeGeometry(shape);
  cap.rotateX(-Math.PI / 2);
  builder.add(cap, 'metal', color, [0, deck, 0]);
  for (let i = 0; i < outline.length; i++) {
    const [x1, z1] = outline[i], [x2, z2] = outline[(i + 1) % outline.length];
    builder.add(quad([[x1, deck, z1], [x2, deck, z2], [x2 * .94, -draft, z2 * .97], [x1 * .94, -draft, z1 * .97]]), 'metal', color);
  }
}

function tire(builder, x, y, z, radius, heading = Math.PI / 2) {
  builder.add(new THREE.TorusGeometry(radius, radius * .30, 5, 10), 'rubber', 0x181b19, [x, y, z], [0, heading, 0]);
  builder.rod([x, y + radius * 1.5, z], [x, y + radius * .3, z], .033, 'metal', 0x6e6044, 4);
}

function bollard(builder, x, y, z, scale = 1) {
  builder.box([.72 * scale, .09 * scale, .47 * scale], [x, y, z], 'metal', 0x333b39);
  for (const s of [-1, 1]) {
    builder.rod([x + s * .2 * scale, y, z], [x + s * .2 * scale, y + .43 * scale, z], .13 * scale, 'metal', 0x59635d, 7);
    builder.box([.28 * scale, .065 * scale, .32 * scale], [x + s * .2 * scale, y + .44 * scale, z], 'metal', 0x6b7770);
  }
}

function ropeCoil(builder, x, y, z, radius = .5) {
  for (let r = radius; r > radius * .35; r -= radius * .19) {
    const points = Array.from({ length: 13 }, (_, i) => [x + Math.cos(i / 12 * Math.PI * 2) * r, y, z + Math.sin(i / 12 * Math.PI * 2) * r * .75]);
    builder.path(points, .042, 'metal', 0xaaa185, 4);
  }
}

function lamp(builder, point, color, size = .11) {
  builder.box([size * 1.6, size * 2, size], point, 'lamp', color);
}

function barge(variation) {
  const b = new Builder(), v = variation % 3;
  const hullColors = [0x363631, 0x483a31, 0x293733];
  const tarpColors = [0x7f877c, 0x626c54, 0x777c78];
  const outline = [[-4.8, -24], [4.8, -24], [6.25, -21.4], [6.25, 21.4], [4.8, 24], [-4.8, 24], [-6.25, 21.4], [-6.25, -21.4]];
  hull(b, outline, 1.12, 1.15, hullColors[v]);
  // A narrow working ledge, rubbing strake, and irregular rusty plate seams.
  for (const side of [-1, 1]) {
    b.box([.19, .16, 42.9], [side * 6.12, 1.24, 0], 'metal', 0x807054);
    b.box([.17, .14, 42.3], [side * 6.28, .30, 0], 'rubber', 0x1b2320);
    b.box([.11, .10, 41.4], [side * 5.66, 1.45, -.25], 'metal', 0x6b6755);
    for (let z = -19; z < 21; z += 3.3) {
      b.box([.035, .82, .13], [side * 6.257, .61, z], 'metal', 0x735743);
      b.box([.042, .32 + noise(z, variation) * .3, .16 + noise(variation, z) * .22], [side * 6.276, .8, z + .28], 'metal', 0x66513e);
    }
  }
  // Large shallow cargo arches, with a slightly sagging tarpaulin between ribs.
  const coverY = (u, t) => 1.39 + Math.sin(u * Math.PI) * 1.53 - Math.sin(t * Math.PI * 14) ** 2 * .065;
  b.add(grid(42, 14, (t, u) => [(u - .5) * 10.78, coverY(u, t), -20.4 + t * 38.4]), 'canvas', tarpColors[v]);
  for (const z of [-20.4, 18]) {
    const points = [[-5.39, 1.28, z], [5.39, 1.28, z]];
    for (let i = 14; i >= 0; i--) points.push([(i / 14 - .5) * 10.78, coverY(i / 14, z < 0 ? 0 : 1), z]);
    // End curtains use a fan, avoiding holes under the arched tarp.
    for (let i = 1; i < points.length - 1; i++) {
      const g = new THREE.BufferGeometry();
      const triangle = z < 0 ? [points[0], points[i], points[i + 1]] : [points[0], points[i + 1], points[i]];
      g.setAttribute('position', new THREE.Float32BufferAttribute(triangle.flat(), 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 1, 0, 1], 2)); g.computeVertexNormals();
      b.add(g, 'canvas', tarpColors[v]);
    }
  }
  for (let i = 0; i <= 14; i++) {
    const z = -20.4 + i / 14 * 38.4;
    b.path(Array.from({ length: 13 }, (_, j) => [(j / 12 - .5) * 10.88, 1.43 + Math.sin(j / 12 * Math.PI) * 1.53, z]), .039, 'metal', 0x555b49);
    for (const s of [-1, 1]) b.rod([s * 5.43, 1.42, z], [s * 5.74, 1.18, z + .13], .024, 'metal', 0x8f8970, 4);
  }
  // Two tarp repairs break up the large otherwise featureless roof.
  for (const [x, z, r] of [[-2.6, -11.1, -.36], [2.6, 7.8, .36]]) b.box([1.14, .016, 1.38], [x, 2.54, z], 'canvas', v === 1 ? 0x92978b : 0x5c6b5b, [0, 0, r]);
  for (const side of [-1, 1]) for (const z of [-20.9, -17.7, -9, 9, 17.7, 20.9]) tire(b, side * 6.22, .67, z, .46);
  for (const z of [-23.85, 23.85]) for (const x of [-3.8, 3.8]) tire(b, x, .62, z, .48, 0);
  for (const z of [-22.5, 22.5]) {
    for (const side of [-1, 1]) bollard(b, side * 3.85, 1.14, z, 1.3);
    // Centre fairleads are also the logical attachment points for towing lines.
    b.box([1.2, .36, .36], [0, 1.30, z < 0 ? -23.5 : 23.5], 'metal', 0x615e51);
    b.box([.74, .15, .42], [0, 1.49, z < 0 ? -23.5 : 23.5], 'rubber', 0x1a201b);
  }
  ropeCoil(b, 2.5, 1.18, -22.2, .69);
  // Low aft attendant shelter is common on these working cargo lighters.
  b.box([2.35, 1.19, 2.15], [-2.7, 1.76, 20.70], 'paint', 0xa6a99d);
  b.box([2.60, .13, 2.45], [-2.7, 2.43, 20.70], 'paint', v === 1 ? 0x626c54 : 0x6b7a74);
  b.box([1.55, .38, .035], [-2.7, 1.98, 19.615], 'glass', 0x324b4d);
  b.box([.035, .42, .65], [-1.515, 1.99, 20.61], 'glass', 0x283d3c);
  b.box([.46, .84, .035], [-2.7, 1.65, 21.785], 'paint', 0x5e6961);
  b.rod([-4.66, 1.15, 21.7], [-4.66, 3.11, 21.7], .045, 'metal', 0x8c998e);
  lamp(b, [-4.66, 3.14, 21.7], 0xffd9a0, .10);
  lamp(b, [-5.75, 1.42, -20.9], 0xff3421, .075);
  lamp(b, [5.75, 1.42, -20.9], 0x40dd81, .075);
  const model = b.finish(`covered cargo barge ${v + 1}`);
  model.userData.lightSources = [{ position: [-4.66, 3.14, 21.7], color: 0xffd39a, intensity: 8, distance: 5 }];
  return model;
}

function tug(variation) {
  const b = new Builder(), v = variation % 3;
  const deckColor = [0x327675, 0x27668c, 0x406e60][v];
  const roofColor = [0xbd642e, 0xa94730, 0x9c6c36][v];
  const outline = [[0, -8], [1.9, -7.7], [2.55, -6], [2.7, -3.5], [2.7, 5.6], [2.0, 7.6], [0, 8], [-2.0, 7.6], [-2.7, 5.6], [-2.7, -3.5], [-2.55, -6], [-1.9, -7.7]];
  hull(b, outline, 1.01, .98, 0x283330);
  // Painted work deck and substantial black rubber collar around the hull.
  const deckOutline = outline.map(([x, z]) => [x * .94, z * .96]);
  const shape = new THREE.Shape();
  deckOutline.forEach(([x, z], i) => i ? shape.lineTo(x, -z) : shape.moveTo(x, -z)); shape.closePath();
  const deck = new THREE.ShapeGeometry(shape); deck.rotateX(-Math.PI / 2);
  b.add(deck, 'paint', deckColor, [0, 1.04, 0]);
  b.path([...outline, outline[0]].map(([x, z]) => [x, .87, z]), .17, 'rubber', 0x17231f, 6);
  for (const side of [-1, 1]) {
    for (const z of [-5.7, -4.5, -3.1, -1.7, -.3, 1.1, 2.5, 3.9, 5.3]) tire(b, side * 2.73, .57, z, .40);
    tire(b, side * 1.45, .50, -7.82, .46, 0);
    tire(b, side * 1.30, .51, 7.89, .46, 0);
  }
  // The wheelhouse sits forward, leaving a useful stern towing deck.
  b.box([3.36, 1.73, 4.37], [0, 1.91, -2.02], 'paint', 0xd4d3bc);
  b.box([3.54, .20, 4.66], [0, 2.85, -2.02], 'paint', deckColor);
  b.box([3.10, 1.38, 3.55], [0, 3.63, -2.00], 'paint', 0xe1dfcc);
  b.box([3.60, .20, 4.03], [0, 4.43, -2.00], 'paint', roofColor);
  b.box([3.70, .07, 4.14], [0, 4.54, -2.00], 'paint', roofColor);
  // Broad separated panes leave visible white mullions at each corner.
  for (const x of [-.99, 0, .99]) b.box([.82, .73, .045], [x, 3.78, -3.80], 'glass', 0x243e45);
  for (const side of [-1, 1]) {
    for (const z of [-2.96, -1.94, -.92]) b.box([.045, .73, .84], [side * 1.575, 3.78, z], 'glass', 0x34565b);
    b.box([.045, .89, .77], [side * 1.703, 1.98, -2.20], 'paint', 0x829687);
    b.box([.05, .34, .51], [side * 1.731, 2.16, -2.20], 'glass', 0x263c40);
    for (const z of [-3.39, -.93]) b.box([.045, .45, .73], [side * 1.705, 2.04, z], 'glass', 0x324c4d);
    // One sloping ladder on each side from the working deck to the wheelhouse.
    const from = [side * 2.08, 1.11, .92], to = [side * 2.08, 2.88, -1.30];
    for (const dx of [-.28, .28]) b.rod([from[0] + dx, from[1], from[2]], [to[0] + dx, to[1], to[2]], .04, 'metal', 0x9aaba2);
    for (let i = 0; i <= 7; i++) b.box([.59, .055, .20], [from[0], from[1] + i / 7 * 1.77, from[2] - i / 7 * 2.22], 'metal', 0x9ba59a);
    b.rod([side * 2.3, 1.17, -6.32], [side * 2.3, 1.93, -6.32], .036, 'paint', 0xcacbb5);
    b.rod([side * 2.4, 1.17, -4.75], [side * 2.4, 1.93, -4.75], .036, 'paint', 0xcacbb5);
    b.rod([side * 2.3, 1.93, -6.32], [side * 2.4, 1.93, -4.75], .038, 'paint', 0xcacbb5);
    lamp(b, [side * 1.68, 4.23, -3.49], side < 0 ? 0xff382c : 0x35e68a, .11);
    b.box([.20, .085, .26], [side * 1.68, 4.39, -3.49], 'paint', roofColor);
  }
  b.box([1.22, .69, .045], [0, 3.74, -.203], 'glass', 0x3c4f47);
  // A dim practical lamp, mast, radar bar, exhaust, and Thai flag.
  b.rod([0, 4.6, -2.18], [0, 6.61, -2.18], .055, 'paint', 0xd7d8bc, 6);
  b.rod([-.61, 5.59, -2.18], [.61, 5.59, -2.18], .042, 'paint', 0xd7d8bc);
  b.box([1.38, .13, .26], [0, 5.03, -2.29], 'paint', 0xd9d9c1);
  lamp(b, [0, 6.65, -2.18], 0xffe1ae, .105);
  lamp(b, [0, 5.67, -2.18], 0xffe1ae, .095);
  lamp(b, [0, 2.79, .26], 0xffc983, .10);
  b.rod([.79, 2.80, -.52], [.79, 4.02, -.52], .17, 'metal', 0x303b35, 7);
  b.box([.52, .07, .46], [.79, 4.10, -.52], 'metal', 0x323a32);
  b.rod([-.8, 4.54, -.38], [-.8, 5.78, -.38], .019, 'metal', 0xc7ccb9, 5);
  const stripes = [[.0, .10, 0xa42b24], [.10, .10, 0xe0dbcb], [.20, .20, 0x344863], [.40, .10, 0xe0dbcb], [.50, .10, 0xa42b24]];
  for (const [dy, h, color] of stripes) b.box([.87, h, .015], [-.365, 5.66 - dy - h * .5, -.36], 'paint', color, [0, -.25, 0]);
  // Stern winch drum, high towing staple, fairlead and clear aft tow point.
  b.box([2.3, .34, 1.35], [0, 1.23, 3.14], 'paint', deckColor);
  b.rod([-.84, 1.75, 3.14], [.84, 1.75, 3.14], .45, 'metal', 0x5e6755, 10);
  for (const x of [-.89, .89]) b.rod([x, 1.32, 3.14], [x, 2.04, 3.14], .14, 'metal', 0x738073, 7);
  for (let x = -.60; x <= .60; x += .14) b.add(new THREE.TorusGeometry(.45, .039, 4, 12), 'metal', 0xada280, [x, 1.75, 3.14], [0, Math.PI / 2, 0]);
  for (const side of [-1, 1]) b.rod([side * 1.43, 1.1, 4.9], [side * 1.43, 2.23, 4.9], .10, 'metal', 0xa6aba0);
  b.rod([-1.43, 2.23, 4.9], [1.43, 2.23, 4.9], .13, 'metal', 0xb0b0a0);
  b.rod([0, 1.73, 3.6], [0, 1.52, 7.71], .068, 'metal', 0xaa9e7a, 6);
  b.box([1.00, .35, .36], [0, 1.35, 7.61], 'metal', 0x677263);
  for (const side of [-1, 1]) {
    bollard(b, side * 1.50, 1.10, 6.05);
    bollard(b, side * 1.21, 1.10, -6.58, .8);
  }
  ropeCoil(b, 1.67, 1.11, 2.1, .44);
  b.add(new THREE.TorusGeometry(.34, .095, 5, 12), 'paint', 0xcd7438, [-1.74, 2.13, -.15], [0, Math.PI / 2, 0]);
  lamp(b, [0, 1.71, 7.42], 0xffdfb8, .09);
  const model = b.finish(`Chao Phraya working tug ${v + 1}`);
  model.userData.lightSources = [{ position: [0, 2.69, .61], color: 0xffca8f, intensity: 15, distance: 7 }];
  return model;
}

export function createCargoBoat(kind = 'barge', variation = 0) {
  const resolved = kind === 'tug' ? 'tug' : 'barge';
  const v = ((Math.trunc(variation) % 3) + 3) % 3;
  const key = `${resolved}:${v}`;
  if (!templates.has(key)) templates.set(key, resolved === 'tug' ? tug(v) : barge(v));
  const model = templates.get(key).clone(true);
  model.userData.kind = resolved;
  model.userData.spec = cargoSpecs[resolved];
  model.userData.towPoints = resolved === 'tug'
    ? { bow: [0, 1.3, -7.8], stern: [0, 1.52, 7.8] }
    : { bow: [0, 1.49, -23.5], stern: [0, 1.49, 23.5] };
  return model;
}

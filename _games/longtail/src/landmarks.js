import * as THREE from 'three';
import {addMappedArchitecture,mappedBuildingById} from './mapped-architecture.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Architectural game models, in metres. The river-facing facade is local +Z.
// Static parts are merged by material to keep a whole landmark inexpensive.
const materials = new Map();
const models = new Map();
const V = new THREE.Vector3();
const E = new THREE.Euler();
const Q = new THREE.Quaternion();
const S = new THREE.Vector3(1, 1, 1);
const T = new THREE.Matrix4();
const c = (key, color, extra = {}) => {
  if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({ color, roughness: .78, ...extra }));
  return materials.get(key);
};
const M = {
  stone: c('stone', '#d8cbb2'), porcelain: c('porcelain', '#ece1c8'),
  plaster: c('plaster', '#ddd2bd'), white: c('white', '#e0ddcc'),
  concrete: c('concrete', '#b7b8b4'), oldStone: c('oldStone', '#a18b72'),
  gold: c('gold', '#dcb358', { metalness: .48, roughness: .32, emissive: '#8f571b', emissiveIntensity: .2 }),
  warm: c('warm', '#fff0c4', { emissive: '#ffd48a', emissiveIntensity: 1.8, roughness: .4 }),
  softLight: c('softLight', '#dfc28c', { emissive: '#ffc677', emissiveIntensity: .8 }),
  tile: c('tile', '#973c27'), tileGreen: c('tileGreen', '#296657'),
  red: c('red', '#7f2920'), teal: c('teal', '#347b72'),
  dark: c('dark', '#171e24'), bronze: c('bronze', '#625448', { metalness: .55, roughness: .35 }),
  roof: c('roof', '#473f37'), redBrick: c('redBrick', '#a77963'),
  glass: c('glass', '#33464c', { roughness: .27, metalness: .4 }),
  window: c('window', '#ad9c72', { emissive: '#ddac59', emissiveIntensity: .55 }),
  stained: c('stained', '#ccb076', { emissive: '#d18b47', emissiveIntensity: .8 }),
};

function hash(n) { const h = Math.sin(n * 127.1 + 311.7) * 43758.5453; return h - Math.floor(h); }
function canvasTexture(w, h, paint) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
  paint(canvas.getContext('2d'), w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4;
  return texture;
}
function windowsMaterial(key, columns = 24, rows = 60, warm = false) {
  if (materials.has(key)) return materials.get(key);
  const map = canvasTexture(768, 1536, (ctx, w, h) => {
    ctx.fillStyle = warm ? '#202421' : '#15232a'; ctx.fillRect(0, 0, w, h);
    const cw = w / columns, rh = h / rows;
    for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
      const n = hash(row * 91 + col * 53 + key.length * 37);
      ctx.fillStyle = n > .70 ? ['#c29b60', '#aa8b54', '#c6b588', '#736044'][Math.floor(hash(row * 13 + col) * 4)] : n > .38 ? '#1b262c' : '#0d151c';
      ctx.fillRect(col * cw + 2, row * rh + 2, cw - 4, rh - 4);
      if (n > .77) { ctx.fillStyle = '#414238'; ctx.fillRect(col * cw + cw * .6, row * rh + 2, cw * .23, rh - 4); }
      ctx.fillStyle = '#283236'; ctx.fillRect(col * cw, row * rh, 1.3, rh);
    }
  });
  const material = c(key, '#aab6b6', { map, emissiveMap: map, emissive: '#eee6ca', emissiveIntensity: .65, metalness: .3, roughness: .42 });
  return material;
}
function signMaterial(label, color = '#fff1c0', background = '#29261e') {
  const key = `sign:${label}:${color}`;
  if (materials.has(key)) return materials.get(key);
  const map = canvasTexture(1024, 160, (ctx, w, h) => {
    ctx.fillStyle = background; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '500 100px Georgia, serif'; ctx.fillText(label, w / 2, h / 2 + 3, w - 65);
  });
  return c(key, '#ffffff', { map, emissiveMap: map, emissive: color, emissiveIntensity: .85, roughness: .55 });
}

class Building {
  constructor(kind) { this.kind = kind; this.parts = new Map(); }
  add(geometry, material, x = 0, y = 0, z = 0, rotation = [0, 0, 0], scale = [1, 1, 1]) {
    V.set(x, y, z); E.set(...rotation); Q.setFromEuler(E); S.set(...scale); T.compose(V, Q, S);
    geometry.applyMatrix4(T);
    if (geometry.index) { const old = geometry; geometry = old.toNonIndexed(); old.dispose(); }
    geometry.deleteAttribute('tangent');
    if (!this.parts.has(material)) this.parts.set(material, []);
    this.parts.get(material).push(geometry);
  }
  box(w, h, d, x, y, z, material = M.stone, rotation = [0, 0, 0]) { this.add(new THREE.BoxGeometry(w, h, d), material, x, y, z, rotation); }
  cylinder(rt, rb, h, x, y, z, material = M.stone, sides = 16, scale = [1, 1, 1]) { this.add(new THREE.CylinderGeometry(rt, rb, h, sides), material, x, y, z, [0, 0, 0], scale); }
  sphere(r, x, y, z, material = M.gold, scale = [1, 1, 1]) { this.add(new THREE.SphereGeometry(r, 16, 10), material, x, y, z, [0, 0, 0], scale); }
  line(a, b, radius = .12, material = M.gold, sides = 6) {
    const delta = new THREE.Vector3(...b).sub(new THREE.Vector3(...a));
    const geo = new THREE.CylinderGeometry(radius, radius, delta.length(), sides);
    geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()));
    this.add(geo, material, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
  }
  sign(label, w, h, x, y, z, color, background) { this.add(new THREE.PlaneGeometry(w, h), signMaterial(label, color, background), x, y, z); }
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

function stairs(b, x, z, width, rise, run, steps, direction = 1, base = 0) {
  for (let i = 0; i < steps; i++) {
    const h = (i + 1) * rise / steps;
    b.box(width, h, run / steps + .03, x, base + h / 2, z + direction * (run / 2 - (i + .5) * run / steps), M.stone);
  }
}
function pitchedRoof(b, x, y, z, width, depth, height, material = M.tile) {
  const slope = Math.atan2(height, width / 2), length = Math.hypot(width / 2, height);
  for (const side of [-1, 1]) {
    b.box(length + .25, .45, depth, x + side * width / 4, y + height / 2, z, material, [0, 0, -side * slope]);
    for (const end of [-1, 1]) b.line([x, y + height + .2, z + end * depth / 2], [x + side * width / 2, y + .1, z + end * depth / 2], .16, M.gold);
    b.line([x + side * width / 2, y, z - depth / 2], [x + side * width / 2, y, z + depth / 2], .12, M.gold);
  }
  b.line([x, y + height + .25, z - depth / 2], [x, y + height + .25, z + depth / 2], .2, M.gold);
  for (const end of [-1, 1]) {
    const shape = new THREE.Shape(); shape.moveTo(-width / 2 + .7, 0); shape.lineTo(width / 2 - .7, 0); shape.lineTo(0, height - .4); shape.closePath();
    b.add(new THREE.ShapeGeometry(shape), M.red, x, y, z + end * (depth / 2 - .15), [0, end === -1 ? Math.PI : 0, 0]);
    b.line([x, y + height, z + end * depth / 2], [x, y + height + 2.3, z + end * (depth / 2 + .55)], .18, M.gold);
    b.line([x, y + height + 2.3, z + end * (depth / 2 + .55)], [x, y + height + 3, z + end * (depth / 2 + 1.6)], .09, M.gold);
    // Small gilded gable medallion catches the floodlights.
    b.sphere(.65, x, y + height * .49, z + end * (depth / 2 + .12), M.gold, [1, 1, .15]);
  }
}
function thaiHall(b, x, z, width = 21, depth = 38, scale = 1, accent = M.tile) {
  const w = width * scale, d = depth * scale, h = 8 * scale;
  b.box(w + 4, 1.1, d + 4, x, .55, z, M.oldStone);
  b.box(w, h, d, x, h / 2 + 1, z, M.plaster);
  for (const side of [-1, 1]) for (let p = -d / 2 + 4; p < d / 2; p += 5 * scale) {
    b.box(.4, 4.6 * scale, 1.9 * scale, x + side * (w / 2 + .08), h / 2 + 1.3, z + p, M.gold);
    b.box(.45, 3.9 * scale, 1.25 * scale, x + side * (w / 2 + .1), h / 2 + 1.3, z + p, M.dark);
  }
  for (const side of [-1, 1]) for (let p = -d / 2 + 1; p <= d / 2; p += 5 * scale) {
    b.cylinder(.26 * scale, .4 * scale, h + .2, x + side * (w / 2 + 1.25), h / 2 + 1, z + p, M.porcelain, 8);
    b.box(1, .4, 1, x + side * (w / 2 + 1.25), h + 1, z + p, M.gold);
  }
  b.box(w * .22, h * .72, .25, x, 1 + h * .36, z + d / 2 + .15, M.gold);
  b.box(w * .17, h * .63, .28, x, 1 + h * .315, z + d / 2 + .2, M.dark);
  pitchedRoof(b, x, h + 1, z, w + 5 * scale, d + 6 * scale, 6.5 * scale, accent);
  pitchedRoof(b, x, h + 4 * scale, z, w + .6 * scale, d - 2 * scale, 6.4 * scale, accent);
  pitchedRoof(b, x, h + 7 * scale, z, w - 4 * scale, d - 10 * scale, 5.6 * scale, accent);
  for (const side of [-1, 1]) b.box(.18, .22, d + 4, x + side * (w / 2 + 1.5), 1.2, z, M.warm);
}

// Wat Arun's upper tower is a continuous lotus-bud profile on three indented
// terraces. Thin cornices and reliefs provide its Khmer silhouette, not cones.
function arunPorcelain() {
  if (materials.has('arun-porcelain')) return materials.get('arun-porcelain');
  const map = canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#cebb94'; ctx.fillRect(0, 0, w, h);
    for (let row = 0; row < 12; row++) for (let col = 0; col < 12; col++) {
      const x = (col + .5 + (row % 2) * .25) * w / 12, y = (row + .5) * h / 12;
      const tone = hash(row * 41 + col * 7);
      ctx.fillStyle = tone < .3 ? '#75847a' : tone < .65 ? '#997763' : '#e4cf9b';
      for (let petal = 0; petal < 6; petal++) {
        const a = petal * Math.PI / 3;
        ctx.beginPath(); ctx.ellipse(x + Math.sin(a) * 6, y + Math.cos(a) * 6, 2.7, 4.5, -a, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#dfd0ad'; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#a9926d'; ctx.fillRect(x - 16, y + 17, 25, 1.5);
    }
  });
  if (map) { map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.set(2, 3); }
  return c('arun-porcelain', '#f4d9ad', { map, bumpMap: map, bumpScale: .15, roughness: .86, emissive: '#bb791f', emissiveIntensity: .22 });
}
function indentedTerrace(b, x, z, y, height, radius, material) {
  const shape = new THREE.Shape();
  const quarter = [[1, .52], [.76, .52], [.76, .76], [.52, .76], [.52, 1]];
  let first = true;
  for (let side = 0; side < 4; side++) for (const [px, pz] of quarter) {
    const a = side * Math.PI / 2, sx = (px * Math.cos(a) - pz * Math.sin(a)) * radius, sz = (px * Math.sin(a) + pz * Math.cos(a)) * radius;
    if (first) { shape.moveTo(sx, sz); first = false; } else shape.lineTo(sx, sz);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false, steps: 1 });
  geo.rotateX(-Math.PI / 2);
  b.add(geo, material, x, y, z);
}
function prang(b, x, z, height = 76, radius = 15) {
  const k = height / 76, rs = radius / 15.2;
  const porcelain = arunPorcelain();
  const trim = c('arun-trim', '#d8b47d', { roughness: .8, emissive: '#b57b27', emissiveIntensity: .19 });
  const recess = c('arun-recess', '#7d765b', { roughness: .9, emissive: '#76531f', emissiveIntensity: .12 });
  const jade = c('arun-jade', '#577768', { roughness: .78, emissive: '#806b25', emissiveIntensity: .14 });
  const rose = c('arun-rose', '#946e58', { roughness: .78, emissive: '#a16a23', emissiveIntensity: .14 });
  const stage = (y, h, r, mat) => indentedTerrace(b, x, z, y * k, h * k, r * rs, mat);
  // Broad, re-entrant square terraces and deeply recessed supporting galleries.
  stage(0, 1.3, 17.8, trim); stage(1.3, .55, 18.1, porcelain);
  for (const [bottom, h, r] of [[1.85, 5.5, 16.5], [8.2, 6, 13.6], [15, 6.7, 11.3], [22.6, 6.4, 9.4]]) {
    stage(bottom, h, r, porcelain);
    stage(bottom + .15, .42, r + .3, recess);
    stage(bottom + .65, .26, r + .44, trim);
    stage(bottom + h - .9, .3, r + .34, recess);
    stage(bottom + h - .55, .55, r + .78, porcelain);
    stage(bottom + h, .45, r + 1, trim);
    for (let y = bottom + 1.35; y < bottom + h - 1; y += 1.15) stage(y, .17, r + .1, trim);
    // Repeated carrying figurines and ceramic rosettes on the terrace galleries.
    const count = height > 40 ? 6 : 3;
    for (let side = 0; side < 4; side++) for (let i = 0; i < count; i++) {
      const a = side * Math.PI / 2, offset = ((i + .5) / count - .5) * r * 1.02 * rs;
      const cx = x + Math.sin(a) * (r * rs + .17 * k) + Math.cos(a) * offset;
      const cz = z + Math.cos(a) * (r * rs + .17 * k) - Math.sin(a) * offset;
      const cy = (bottom + h * .52) * k;
      b.add(new THREE.OctahedronGeometry(.6 * k), i % 2 ? porcelain : jade, cx, cy, cz, [0, a, 0], [1, 1.6, .48]);
      b.add(new THREE.SphereGeometry(.27 * k, 6, 4), trim, cx, cy + .9 * k, cz, [0, 0, 0], [1, 1.12, 1]);
      for (const sideArm of [-1, 1]) b.line([cx + Math.cos(a) * sideArm * .35 * k, cy + .15 * k, cz - Math.sin(a) * sideArm * .35 * k], [cx + Math.cos(a) * sideArm * .6 * k, cy + 1.15 * k, cz - Math.sin(a) * sideArm * .6 * k], .12 * k, porcelain, 5);
    }
  }
  // Four steep flights and their raised stone balustrades reach the upper terrace.
  for (const side of [-1, 1]) {
    stairs(b, x, z + side * 15.2 * rs, 3.8 * rs, 21.7 * k, 15 * rs, 26, side);
    for (let i = 0; i < 26; i++) {
      const h = (i + 1) * 21.7 * k / 26, xx = x + side * (22.7 - (i + .5) * 15 / 26) * rs;
      b.box(15 * rs / 26 + .02, h, 3.8 * rs, xx, h / 2, z, M.stone);
    }
    for (const rail of [-1, 1]) {
      b.line([x + rail * 2.25 * rs, .9 * k, z + side * 22.7 * rs], [x + rail * 2.25 * rs, 22.7 * k, z + side * 7.7 * rs], .29 * k, trim, 6);
      b.line([x + side * 22.7 * rs, .9 * k, z + rail * 2.25 * rs], [x + side * 7.7 * rs, 22.7 * k, z + rail * 2.25 * rs], .29 * k, trim, 6);
    }
  }
  // Cruciform sanctuary with high dark niches beneath miniature prang gables.
  stage(29.45, 5.8, 8.55, porcelain);
  for (let side = 0; side < 4; side++) {
    const a = side * Math.PI / 2, nx = x + Math.sin(a) * 8.65 * rs, nz = z + Math.cos(a) * 8.65 * rs;
    b.add(new THREE.ShapeGeometry(archShape(3.8 * rs, 5.6 * k, true), 8), recess, nx, 28.6 * k, nz, [0, a, 0]);
    for (const col of [-1, 1]) b.cylinder(.35 * rs, .45 * rs, 6.1 * k, nx + Math.cos(a) * col * 2.25 * rs, 31.65 * k, nz - Math.sin(a) * col * 2.25 * rs, trim, 8);
    b.box(5.5 * rs, .75 * k, 1.8 * rs, nx, 35.2 * k, nz, porcelain, [0, a, 0]);
    b.cylinder(.5 * rs, 2.65 * rs, 3.4 * k, nx, 37.25 * k, nz, porcelain, 8);
    b.cylinder(0, .64 * rs, 2 * k, nx, 39.95 * k, nz, trim, 8);
    // Small enshrined sculptural form inside the recess.
    b.add(new THREE.OctahedronGeometry(.85 * k), trim, nx, 30.2 * k, nz, [0, a, 0], [1.1, 1.45, .8]);
  }
  // Rounded shoulder and long convex taper, with eight sculpted vertical lobes.
  const profile = [
    [33, 7.5], [35, 8.25], [38, 8.8], [41, 8.8], [44, 8.4],
    [47, 7.75], [50, 6.9], [53, 6.0], [56, 5.05], [59, 4.12],
    [62, 3.18], [65, 2.3], [68, 1.48], [70, .88], [71.2, .53],
  ];
  const curve = new THREE.SplineCurve(profile.map(([y, r]) => new THREE.Vector2(r * rs, y * k)));
  const points = curve.getPoints(54);
  const body = new THREE.LatheGeometry(points, 32);
  const positions = body.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const px = positions.getX(i), pz = positions.getZ(i), a = Math.atan2(px, pz);
    const flute = 1 + .035 * Math.cos(a * 8) - .018 * Math.cos(a * 16);
    positions.setXYZ(i, px * flute, positions.getY(i), pz * flute);
  }
  body.computeVertexNormals(); b.add(body, porcelain, x, 0, z);
  const radiusAt = y => {
    for (let i = 1; i < profile.length; i++) if (y <= profile[i][0]) {
      const [ay, ar] = profile[i - 1], [by, br] = profile[i]; return (ar + (br - ar) * (y - ay) / (by - ay)) * rs;
    }
    return .53 * rs;
  };
  for (let y = 34; y < 70.8; y += 1.05) {
    const r = radiusAt(y), prominence = .16 * rs + r * .025;
    b.cylinder(r + prominence, r + prominence * .6, .23 * k, x, y * k, z, trim, 16);
    b.cylinder(r + .035 * rs, r + .035 * rs, .19 * k, x, (y - .25) * k, z, y % 3 < 1 ? jade : recess, 16);
    // Pointed lotus leaves and colored porcelain studs interrupt every cornice.
    for (let petal = 0; petal < 8; petal++) {
      const a = petal * Math.PI / 4 + Math.PI / 8, pr = r + prominence * .6;
      b.add(new THREE.OctahedronGeometry(.52 * k), porcelain, x + Math.sin(a) * pr, (y + .52) * k, z + Math.cos(a) * pr, [0, a, 0], [.58, 1.25, .65]);
      if (y < 64) b.add(new THREE.OctahedronGeometry(.19 * k), petal % 2 ? jade : rose, x + Math.sin(a) * (pr + .15 * k), (y + .25) * k, z + Math.cos(a) * (pr + .15 * k), [0, a, Math.PI / 4], [1, 1, .5]);
    }
  }
  // Slender metal finial with seven small umbrella rings, rather than a gold cone.
  b.cylinder(.075 * k, .2 * k, 5.9 * k, x, 73.05 * k, z, M.gold, 8);
  for (let i = 0; i < 7; i++) b.cylinder((.76 - i * .092) * rs, (.76 - i * .092) * rs, .14 * k, x, (71.25 + i * .53) * k, z, M.gold, 12);
  for (const side of [-1, 1]) b.line([x, 75.1 * k, z], [x + side * .36 * rs, 75.8 * k, z], .075 * k, M.gold, 5);
}
function chedi(b, x, z, height, radius, material = M.gold) {
  b.box(radius * 2.2, 1.4, radius * 2.2, x, .7, z, M.stone);
  for (let i = 0; i < 4; i++) b.cylinder(radius * (1 - i * .12), radius * (1.07 - i * .12), 1.15, x, 1.4 + i * 1.1, z, material, 16);
  b.sphere(radius * .69, x, height * .3, z, material, [1, 1.5, 1]);
  b.cylinder(radius * .13, radius * .51, height * .3, x, height * .57, z, material, 16);
  for (let i = 0; i < 9; i++) {
    const r = radius * (.32 - i * .027);
    b.cylinder(r, r + .12, height * .018, x, height * (.63 + i * .026), z, material, 16);
  }
  b.cylinder(0, radius * .13, height * .19, x, height * .905, z, material, 12);
}
function gardenWall(b, width, depth, z = 0) {
  for (const side of [-1, 1]) {
    b.box(.65, 1.8, depth, side * width / 2, .9, z, M.plaster);
    b.box(width, 1.8, .65, 0, .9, z + side * depth / 2, M.plaster);
  }
  for (let x = -width / 2; x <= width / 2; x += 6) {
    b.box(.85, 2.25, .85, x, 1.12, z + depth / 2, M.plaster);
    b.cylinder(0, .62, .8, x, 2.65, z + depth / 2, M.gold, 4);
  }
}

function watArun(b) {
  b.box(100, .6, 87, 0, .3, -7, M.oldStone);
  prang(b, 0, 1, 76, 15.2);
  for (const x of [-22, 22]) for (const z of [-20, 22]) prang(b, x, z, 27, 6.4);
  thaiHall(b, -37, -18, 15, 33, .75, M.tileGreen);
  thaiHall(b, 37, -18, 15, 33, .75, M.tile);
  gardenWall(b, 101, 88, -7);
}
function watPho(b) {
  b.box(145, .5, 108, 0, .25, -7, M.oldStone);
  thaiHall(b, -18, 5, 24, 48, 1.05);
  thaiHall(b, 43, -14, 19, 36, .9, M.tileGreen);
  for (const [x, z, mat] of [[-58, -28, M.tileGreen], [-41, -28, M.gold], [-58, -46, M.teal], [-41, -46, M.tile]]) chedi(b, x, z, 42, 7.8, mat);
  for (let x = -61; x < 63; x += 13) chedi(b, x, 38, 13, 2.6, x % 2 ? M.tileGreen : M.gold);
  for (const side of [-1, 1]) {
    const z = -7 + side * 47;
    b.box(130, 4.5, 5, 0, 2.5, z, M.plaster);
    for (const slope of [-1, 1]) b.box(132, .38, Math.hypot(3.5, 2), 0, 5.5, z + slope * 1.75, M.tileGreen, [slope * Math.atan2(2, 3.5), 0, 0]);
    b.line([-66, 6.55, z], [66, 6.55, z], .15, M.gold);
  }
  gardenWall(b, 146, 110, -7);
}

function rectangularTower(b, x, z, width, depth, height, floors, key, setback = false) {
  const glass = windowsMaterial(key, Math.max(12, Math.floor(width / 2)), floors);
  b.box(width, height, depth, x, height / 2, z, glass);
  for (const side of [-1, 1]) for (const end of [-1, 1]) b.box(1.1, height + 1, 1.1, x + side * width / 2, (height + 1) / 2, z + end * depth / 2, M.white);
  for (let floor = 0; floor <= floors; floor++) {
    const y = Math.max(.2, floor * height / floors);
    b.box(width + 1.5, .32, depth + 1.5, x, y, z, M.concrete);
  }
  b.box(width + 2, 1.8, depth + 2, x, height + .5, z, M.white);
  if (setback) {
    b.box(width * .73, 9, depth * .72, x, height + 5.5, z, M.dark);
    b.box(width * .75, .55, depth * .74, x, height + 10, z, M.softLight);
  }
}
function facetedTower(b, x, z, width, depth, height, floors, key) {
  const glass = windowsMaterial(key, 44, floors);
  b.cylinder(1, 1, height, x, height / 2, z, glass, 8, [width / 2, 1, depth / 2]);
  for (let floor = 0; floor <= floors; floor++) b.cylinder(1.015, 1.015, .4, x, Math.max(.2, floor * height / floors), z, M.concrete, 8, [width / 2, 1, depth / 2]);
  for (let corner = 0; corner < 8; corner++) {
    const a = corner * Math.PI / 4;
    b.box(.85, height, .85, x + Math.sin(a) * width / 2, height / 2, z + Math.cos(a) * depth / 2, M.white);
  }
  b.cylinder(.82, 1, 6, x, height + 3, z, M.dark, 8, [width / 2, 1, depth / 2]);
  b.cylinder(.825, .825, .55, x, height + 6, z, M.softLight, 8, [width / 2, 1, depth / 2]);
}
function iconSiam(b) {
  // Residential towers use their separate OSM footprints and mapped heights.
  b.box(226, 3, 86, 0, 1.5, -3, M.stone);
  const glazing = windowsMaterial('icon-mall-glass', 42, 2, true);
  for (let tier = 0; tier < 4; tier++) {
    const w = 218 - tier * 12, d = 78 - tier * 10, y = 4 + tier * 7;
    b.box(w, 7, d, 0, y + 3.5, -tier * 4, glazing);
    b.box(w + 4, .85, d + 3, 0, y + 7.1, -tier * 4, M.white);
    b.box(w + 4, .16, .18, 0, y + 6.55, -tier * 4 + d / 2 + 1.55, M.softLight);
  }
  // The river facade's pleated gold envelope and tapering glass pavilions.
  for (let x = -104; x <= 104; x += 5) {
    const h = 24 + 7 * Math.sin((x + 110) * .035);
    b.box(1.15, h, 1.1, x, 4 + h / 2, 38.2, M.gold, [0, x % 10 ? .35 : -.35, 0]);
  }
  for (const x of [-68, 0, 68]) {
    b.cylinder(12, 18, 11, x, 31, -5, M.glass, 4, [1.5, 1, 1]);
    b.cylinder(12.4, 12.4, .6, x, 36.5, -5, M.gold, 4, [1.5, 1, 1]);
  }
  b.box(70, 6.5, 1, 0, 31.5, 39.4, M.dark);
  b.sign('ICONSIAM', 64, 6, 0, 31.5, 40, '#fff0c2', '#28231b');
  for (let x = -106; x < 112; x += 8) {
    b.cylinder(.24, .35, 5, x, 2.5, 47, M.bronze, 8);
    b.sphere(.48, x, 5.2, 47, M.warm);
  }
  stairs(b, 0, 47, 200, 3, 9, 8, 1);
}
function curvedCondo(b, x, z, width, depth, height, floors, key, lean = 0) {
  const glass = windowsMaterial(key, 56, floors);
  b.cylinder(1, 1, height, x, height / 2, z, glass, 28, [width / 2, 1, depth / 2]);
  for (let floor = 0; floor <= floors; floor++) {
    const y = Math.max(.23, floor * height / floors);
    const bulge = Math.sin(floor / floors * Math.PI) * 1.3;
    b.cylinder(1, 1, .45, x + Math.sin(floor / floors * Math.PI) * lean, y, z, M.white, 28, [width / 2 + 1.2 + bulge, 1, depth / 2 + 1]);
  }
  for (const side of [-1, 1]) b.box(1.35, height + 2, 1.8, x + side * width * .43, (height + 2) / 2, z + depth * .22, M.white);
  b.cylinder(.85, 1, 7, x, height + 3.5, z, M.white, 28, [width / 2, 1, depth / 2]);
  b.cylinder(.855, .855, .4, x, height + 7.1, z, M.softLight, 28, [width / 2, 1, depth / 2]);
}
function theRiver(b) {
  b.box(138, 7, 69, 0, 3.5, 0, M.plaster);
  b.box(136, 5, 66, 0, 9.5, 0, windowsMaterial('river-podium', 36, 2, true));
  b.box(139, .8, 70, 0, 12.4, 0, M.white);
  curvedCondo(b, -34, -10, 43, 32, 221, 71, 'river-tower-south', 1.2);
  curvedCondo(b, 37, -15, 39, 29, 152, 47, 'river-tower-north', .7);
  b.box(29, 3.5, .4, 0, 7.8, 34.7, M.dark);
  b.sign('THE RIVER', 27, 3, 0, 7.8, 35, '#e6dbc5', '#28251f');
  for (let x = -63; x <= 63; x += 9) { b.box(.6, 5, .6, x, 3, 35.2, M.gold); b.box(5.7, .15, .3, x, 6, 35.3, M.softLight); }
}
function stateTower(b) {
  rectangularTower(b, 0, -7, 74, 49, 171, 48, 'state-main');
  rectangularTower(b, 0, -9, 61, 43, 198, 56, 'state-upper');
  b.box(53, 19, 39, 0, 207, -9, windowsMaterial('state-crown', 20, 5, true));
  for (const y of [199, 207, 216]) b.box(59, 1.5, 43, 0, y, -9, M.white);
  for (let x = -24; x <= 24; x += 8) {
    b.cylinder(1.1, 1.1, 15, x, 222.5, 9, M.plaster, 12);
    b.box(2.5, 1, 2.5, x, 230, 9, M.white);
  }
  b.box(58, 1.4, 41, 0, 231, -8, M.white);
  b.cylinder(11, 11, 5, 3, 233.5, -5, M.plaster, 32);
  b.add(new THREE.SphereGeometry(11.8, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), M.gold, 3, 236, -5, [0, 0, 0], [1, .78, 1]);
  b.cylinder(.35, .8, 3.4, 3, 246, -5, M.gold, 8);
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    b.box(.5, 4, .6, 3 + Math.sin(a) * 10.9, 233.8, -5 + Math.cos(a) * 10.9, M.gold);
  }
  b.box(74, 1, 51, 0, 172, -7, M.softLight);
  b.sign('LEBUA', 18, 3.6, -17, 223, 13, '#efd3a3', '#302a25');
}

function archShape(width, height, pointed = false) {
  const s = new THREE.Shape(), half = width / 2;
  s.moveTo(-half, 0); s.lineTo(half, 0); s.lineTo(half, height - half);
  if (pointed) { s.quadraticCurveTo(half * .7, height - half * .25, 0, height); s.quadraticCurveTo(-half * .7, height - half * .25, -half, height - half); }
  else s.absarc(0, height - half, half, 0, Math.PI, false);
  s.lineTo(-half, 0); s.closePath(); return s;
}
function arch(b, width, height, x, y, z, material, pointed = false) { b.add(new THREE.ShapeGeometry(archShape(width, height, pointed), 10), material, x, y, z); }
function cross(b, x, y, z, size = 1) { b.box(.23 * size, 2.2 * size, .25 * size, x, y, z, M.gold); b.box(1.25 * size, .23 * size, .25 * size, x, y + .4 * size, z, M.gold); }
function santaCruz(b) {
  b.box(34, .65, 55, 0, .32, -5, M.stone);
  b.box(20, 11, 38, 0, 5.85, -7, M.redBrick);
  b.box(28, 8, 14, 0, 4.3, -9, M.redBrick);
  pitchedRoof(b, 0, 11.1, -8, 22, 39, 4, M.roof);
  b.box(24, 15, 4, 0, 7.8, 14, M.plaster);
  for (const side of [-1, 1]) b.box(1.1, 16, 1.3, side * 10, 8, 16.3, M.white);
  arch(b, 5.5, 8.5, 0, .6, 16.2, M.dark);
  arch(b, 3, 5.8, -7, 5, 16.25, M.stained);
  arch(b, 3, 5.8, 7, 5, 16.25, M.stained);
  b.cylinder(6.6, 7.4, 7, 0, 18.5, 8, M.plaster, 16);
  for (let i = 0; i < 10; i++) {
    const a = i * Math.PI / 5;
    b.cylinder(.28, .38, 6.7, Math.sin(a) * 6.9, 18.5, 8 + Math.cos(a) * 6.9, M.white, 8);
  }
  b.add(new THREE.SphereGeometry(7.3, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), M.redBrick, 0, 22, 8, [0, 0, 0], [1, 1.15, 1]);
  b.cylinder(1.7, 1.7, 3, 0, 31.1, 8, M.plaster, 12);
  b.sphere(1.8, 0, 33, 8, M.redBrick, [1, .6, 1]);
  cross(b, 0, 35.1, 8, .9);
  for (const y of [1, 11.5, 15.2]) b.box(25, .65, 4.8, 0, y, 14, M.white);
  b.sign('SANTA CRUZ', 13, 1.4, 0, 12.7, 16.45, '#efd5a1', '#b7a896');
}
function holyRosary(b) {
  b.box(28, .8, 48, 0, .4, -7, M.stone);
  b.box(19, 14, 37, 0, 7.4, -7, M.plaster);
  pitchedRoof(b, 0, 14.5, -7, 22, 40, 8, M.roof);
  b.box(8, 27, 7, 0, 13.5, 14, M.plaster);
  for (const side of [-1, 1]) {
    b.box(.85, 28, 1.1, side * 4, 14, 17.9, M.white);
    b.box(1.7, 16, 2.5, side * 9.7, 8, 11, M.white);
    b.cylinder(0, 1.2, 5, side * 9.7, 18.5, 11, M.roof, 4);
    for (let z = -23; z < 10; z += 7) b.box(1.2, 13, 1.7, side * 9.8, 6.5, z, M.white);
  }
  arch(b, 4.2, 7.8, 0, .8, 17.65, M.dark, true);
  arch(b, 3.1, 5.8, 0, 18.5, 17.65, M.stained, true);
  for (const side of [-1, 1]) arch(b, 3.1, 7, side * 6.5, 5.6, 11.65, M.stained, true);
  b.add(new THREE.TorusGeometry(1.9, .22, 8, 24), M.gold, 0, 13.5, 17.7);
  b.add(new THREE.CircleGeometry(1.65, 24), M.stained, 0, 13.5, 17.72);
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    b.line([0, 13.5, 17.75], [Math.sin(a) * 1.6, 13.5 + Math.cos(a) * 1.6, 17.75], .06, M.white);
  }
  b.box(8.6, .85, 7.6, 0, 27, 14, M.white);
  b.cylinder(0, 4.9, 15, 0, 35, 14, M.roof, 4);
  cross(b, 0, 43.5, 14, .8);
  for (const x of [-4, 4]) for (const z of [10.5, 17.5]) b.cylinder(0, .55, 3.4, x, 29, z, M.roof, 4);
}
function riverCity(b) {
  b.box(112, 19, 42, 0, 9.5, 0, windowsMaterial('river-city', 28, 4, true));
  for (let floor = 0; floor <= 4; floor++) b.box(115, 1, 45, 0, floor * 4.6 + .6, 0, M.white);
  for (let x = -52; x < 56; x += 8) b.box(1.1, 20.5, 1.8, x, 10.25, 22, M.plaster);
  b.box(48, 6.5, 2, 0, 18.7, 23, M.plaster);
  b.sign('RIVER CITY BANGKOK', 45, 3.9, 0, 18.8, 24.1, '#d9bd89', '#44403a');
  b.box(118, 1.1, 13, 0, 5, 29, M.white);
  for (let x = -53; x <= 53; x += 13) b.cylinder(.5, .65, 4.8, x, 2.4, 33, M.plaster, 10);
  for (let x = -48; x < 55; x += 16) b.box(11, .2, .2, x, 4.7, 35.6, M.softLight);
}
function mandarinOriental(b) {
  const glass = windowsMaterial('oriental-hotel', 30, 15, true);
  b.box(98, 56, 31, -14, 28, -21, glass);
  for (let floor = 0; floor <= 16; floor++) b.box(100, .62, 33, -14, Math.max(.32, floor * 3.5), -21, M.plaster);
  for (let x = -59; x < 40; x += 9) b.box(1.1, 57, 33, x, 28.5, -21, M.plaster);
  rectangularTower(b, 49, -9, 24, 50, 42, 12, 'oriental-wing');
  // Low original Authors' Wing in front, with colonial arched verandas.
  b.box(65, 9.8, 24, -14, 4.9, 15, M.white);
  b.box(69, 1.1, 27, -14, 10.2, 15, M.white);
  for (const y of [1.1, 5.8]) for (let x = -41; x < 16; x += 6) {
    arch(b, 4.2, 3.7, x, y, 27.08, M.window);
    b.cylinder(.22, .22, 4, x - 2.6, y + 1.8, 27.4, M.white, 8);
  }
  b.box(65, .4, 1, -14, 5.6, 27.5, M.white);
  b.sign('MANDARIN ORIENTAL', 40, 2.4, -14, 11.6, 27.2, '#f0dab0', '#514f40');
  for (let x = -39; x < 20; x += 10) {
    b.cylinder(0, 3.4, 1.5, x, 3.2, 34, M.plaster, 12);
    b.cylinder(.13, .13, 2.7, x, 1.35, 34, M.bronze, 6);
    b.sphere(.25, x, 2.5, 34, M.warm);
  }
}
function watKalayanamit(b) {
  b.box(94, .65, 88, 0, .32, -4, M.oldStone);
  thaiHall(b, -6, -7, 30, 40, 1.3);
  thaiHall(b, 35, -19, 14, 25, .68, M.tileGreen);
  chedi(b, -36, 18, 25, 5, M.porcelain);
  chedi(b, 30, 24, 18, 4, M.gold);
  gardenWall(b, 95, 89, -4);
}

const builders = {
  'wat-arun': watArun, 'wat-pho': watPho, 'icon-siam': iconSiam,
  'the-river': theRiver, 'state-tower': stateTower, 'santa-cruz': santaCruz,
  'holy-rosary': holyRosary, 'river-city': riverCity,
  'mandarin-oriental': mandarinOriental, 'wat-kalayanamit': watKalayanamit,
};

export const landmarkDimensions = Object.freeze({
  'wat-arun': { width: 102, depth: 89, height: 76 },
  'wat-pho': { width: 148, depth: 112, height: 42 },
  'icon-siam': { width: 230, depth: 96, height: 39 },
  'the-river': { width: 140, depth: 70, height: 229 },
  'state-tower': { width: 77, depth: 53, height: 249 },
  'santa-cruz': { width: 35, depth: 56, height: 37 },
  'holy-rosary': { width: 29, depth: 49, height: 46 },
  'river-city': { width: 119, depth: 59, height: 23 },
  'mandarin-oriental': { width: 127, depth: 77, height: 59 },
  'wat-kalayanamit': { width: 96, depth: 90, height: 35 },
});

export function buildLandmark(kind) {
  if (!builders[kind]&&!mappedBuildingById.has(kind)) throw new Error(`Unknown river landmark: ${kind}`);
  if (!models.has(kind)) { const b = new Building(kind); if(mappedBuildingById.has(kind))addMappedArchitecture(b,mappedBuildingById.get(kind),M);else builders[kind](b); models.set(kind, b.finish()); }
  // Geometry/material are intentionally shared by clones, just like instanced assets.
  return models.get(kind).clone(true);
}

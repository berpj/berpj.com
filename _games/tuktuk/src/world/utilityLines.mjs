import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
export {stationUtilityVolumes} from './btsStations.js';

const MARGIN = .75; // Includes facade slab edges, AC boxes and balcony projections.
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const lerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t });
const bounds = points => ({ minX: Math.min(...points.map(p => p.x)), maxX: Math.max(...points.map(p => p.x)), minZ: Math.min(...points.map(p => p.z)), maxZ: Math.max(...points.map(p => p.z)) });
const expand = (b, r) => ({ minX: b.minX - r, maxX: b.maxX + r, minZ: b.minZ - r, maxZ: b.maxZ + r });
const overlap = (a, b) => a.minX <= b.maxX && a.maxX >= b.minX && a.minZ <= b.maxZ && a.maxZ >= b.minZ;
const hash = value => { let h = 2166136261; for (const c of String(value)) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const noise = value => hash(value) / 4294967295;

class Grid {
  constructor(size = 64) { this.size = size; this.cells = new Map(); }
  keys(b) { const keys = []; for (let x = Math.floor(b.minX / this.size); x <= Math.floor(b.maxX / this.size); x++) for (let z = Math.floor(b.minZ / this.size); z <= Math.floor(b.maxZ / this.size); z++) keys.push(`${x},${z}`); return keys; }
  add(item, b) { item.bounds = b; for (const key of this.keys(b)) { if (!this.cells.has(key)) this.cells.set(key, []); this.cells.get(key).push(item); } }
  query(b) { const found = new Set(); for (const key of this.keys(b)) for (const item of this.cells.get(key) || []) if (overlap(item.bounds, b)) found.add(item); return [...found]; }
}

function pointSegmentSquared(p, a, b) {
  const dx = b.x - a.x, dz = b.z - a.z, length = dx * dx + dz * dz;
  const t = length ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.z - a.z) * dz) / length)) : 0;
  return (p.x - a.x - dx * t) ** 2 + (p.z - a.z - dz * t) ** 2;
}
function segmentDistanceSquared(a, b, c, d) {
  const dx = b.x - a.x, dz = b.z - a.z, ex = d.x - c.x, ez = d.z - c.z, cross = dx * ez - dz * ex;
  if (Math.abs(cross) > 1e-10) {
    const t = ((c.x - a.x) * ez - (c.z - a.z) * ex) / cross;
    const u = ((c.x - a.x) * dz - (c.z - a.z) * dx) / cross;
    if (t >= -1e-9 && t <= 1 + 1e-9 && u >= -1e-9 && u <= 1 + 1e-9) return 0;
  }
  return Math.min(pointSegmentSquared(a, c, d), pointSegmentSquared(b, c, d), pointSegmentSquared(c, a, b), pointSegmentSquared(d, a, b));
}
function pointInRing(p, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if (pointSegmentSquared(p, a, b) < 1e-12) return true;
    if ((a.z > p.z) !== (b.z > p.z) && p.x < (b.x - a.x) * (p.z - a.z) / (b.z - a.z) + a.x) inside = !inside;
  }
  return inside;
}
function pointInPolygon(p, polygon) { return pointInRing(p, polygon.outer) && !polygon.holes.some(ring => pointInRing(p, ring)); }

/** Complete 3D segment test, including wall crossings between two outside endpoints. */
export function segmentIntersectsBuilding(a, b, building, { margin = MARGIN } = {}) {
  const base = building.baseHeight - .1, top = building.topHeight + .35, dy = b.y - a.y;
  let low = 0, high = 1;
  if (Math.abs(dy) < 1e-10) { if (a.y < base || a.y > top) return false; }
  else { const t1 = (base - a.y) / dy, t2 = (top - a.y) / dy; low = Math.max(0, Math.min(t1, t2)); high = Math.min(1, Math.max(t1, t2)); if (low > high) return false; }
  const start = lerp(a, b, low), end = lerp(a, b, high);
  for (const polygon of building.polygons) {
    if (pointInPolygon(start, polygon) || pointInPolygon(end, polygon)) return true;
    for (const ring of [polygon.outer, ...polygon.holes]) for (let i = 1; i < ring.length; i++) if (segmentDistanceSquared(start, end, ring[i - 1], ring[i]) <= margin * margin) return true;
  }
  return false;
}

export function createUtilityVolumeIndex(buildings, { margin = MARGIN } = {}) {
  const grid = new Grid();
  for (const building of buildings) grid.add({ ...building }, expand(bounds(building.polygons.flatMap(p => p.outer)), margin));
  return {
    buildings, margin,
    isSegmentClear(a, b, extraMargin = 0) {
      const query = expand(bounds([a, b]), Math.max(0, extraMargin));
      for (const building of grid.query(query)) if (segmentIntersectsBuilding(a, b, building, { margin: margin + extraMargin })) return false;
      return true;
    },
    isPolylineClear(points) { for (let i = 1; i < points.length; i++) if (!this.isSegmentClear(points[i - 1], points[i])) return false; return true; },
  };
}

function sampleRoads(map) {
  const byRoad = new Map();
  for (const segment of map.segments) {
    if (!['primary', 'secondary', 'tertiary', 'residential', 'living_street'].includes(segment.road.tags.highway)) continue;
    if (!byRoad.has(segment.road.id)) byRoad.set(segment.road.id, []);
    byRoad.get(segment.road.id).push(segment);
  }
  const samples = [];
  for (const [id, segments] of byRoad) {
    const road = segments[0].road, family = road.tags['name:en'] || road.tags.name || id;
    const busy = /Soi Sukhumvit (22|23|31|33)|สุขุมวิท (22|23|31|33)/.test(family) || hash(family) % 5 === 0;
    let travel = 0, next = 5 + hash(id) % 8;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      while (next <= travel + segment.len - 2) {
        const t = Math.max(2, next - travel), p = { x: segment.a.x + segment.dir.x * t, z: segment.a.z + segment.dir.z * t };
        for (const side of [-1, 1]) samples.push({ p, segment, side, family, busy, key: `${id}/${Math.round(next)}/${side}` });
        next += busy ? 26 : 33;
      }
      // Place a support at a genuine street bend rather than taking a long chord
      // through a corner building. Impossible locations are rejected later.
      const following = segments[i + 1];
      if (following && segment.dir.x * following.dir.x + segment.dir.z * following.dir.z < .94) {
        for (const side of [-1, 1]) samples.push({ p: segment.b, segment, side, family, busy, key: `${id}/bend-${i}/${side}` });
      }
      travel += segment.len;
    }
    if (travel >= 10 && travel < 16) for (const side of [-1, 1]) {
      const segment = segments[Math.floor(segments.length / 2)];
      samples.push({ p: { x: (segment.a.x + segment.b.x) / 2, z: (segment.a.z + segment.b.z) / 2 }, segment, side, family, busy, key: `${id}/short/${side}` });
    }
  }
  return samples.sort((a, b) => distance(a.p, map.spawn) - distance(b.p, map.spawn) || a.key.localeCompare(b.key));
}

function wirePoints(a, b, cable, busy, key) {
  const span = distance(a, b), power = cable < 3, bank = Math.floor(Math.max(0, cable - 3) / 6);
  const slot = power ? (cable - 1) * .20 : ((cable - 3) % 6 - 2.5) * .032;
  const attachmentA = a.height - (power ? .18 : .63 + bank * .16), attachmentB = b.height - (power ? .18 : .63 + bank * .16);
  const sag = power ? .16 + span * .008 : .26 + span * .012 + noise(`${key}/${cable}/sag`) * (busy ? .54 : .22);
  const count = Math.max(8, Math.ceil(span / 3)), points = [];
  const drift = (noise(`${key}/${cable}/drift`) - .5) * (busy ? .11 : .035);
  for (let i = 0; i <= count; i++) {
    const t = i / count, sideX = a.nx + (b.nx - a.nx) * t, sideZ = a.nz + (b.nz - a.nz) * t;
    points.push({ x: a.x + (b.x - a.x) * t + sideX * (slot + Math.sin(t * Math.PI) * drift),
      y: attachmentA + (attachmentB - attachmentA) * t - 4 * t * (1 - t) * sag,
      z: a.z + (b.z - a.z) * t + sideZ * (slot + Math.sin(t * Math.PI) * drift) });
  }
  return { points, type: power ? 'power' : 'telecom', sag };
}

/** Deterministic pure planner. Only accepted poles/spans are returned to rendering. */
export function planUtilityLines(map, buildings, { mobile = false, clearance = map.layout?.clearance, extraVolumes = [], range = mobile ? 1050 : 1450 } = {}) {
  if (!clearance) throw new Error('Utility planning requires the shared road clearance helpers.');
  const obstacles = createUtilityVolumeIndex([...buildings, ...extraVolumes]), poleIndex = new Grid(), poles = [], spans = [], detailLines = [];
  const stats = { candidates: 0, rejectedPole: 0, rejectedSpan: 0, denseSpans: 0, sparseSpans: 0, cableSegments: 0 };
  for (const sample of sampleRoads(map)) {
    if (distance(sample.p, map.spawn) > range || poles.length >= (mobile ? 280 : 520)) continue;
    stats.candidates++;
    const { segment, side } = sample, nx = segment.dir.z * side, nz = -segment.dir.x * side;
    const height = 7.6 + noise(sample.key) * .52;
    let pole = null;
    candidateSites: for (const offset of [1.05, 1.4, 1.82]) for (const along of [0, -2.4, 2.4, -4.5, 4.5]) {
      const x = sample.p.x + nx * (segment.road.width / 2 + offset) + segment.dir.x * along;
      const z = sample.p.z + nz * (segment.road.width / 2 + offset) + segment.dir.z * along;
      if (!map.inside({ x, z }) || !clearance.isCircleClear({ x, z, radius: .30 })) continue;
      if (!obstacles.isSegmentClear({ x, y: 0, z }, { x, y: height, z }, .50)) continue;
      const nearby = poleIndex.query({ minX: x - 13, maxX: x + 13, minZ: z - 13, maxZ: z + 13 });
      if (nearby.some(p => distance(p, { x, z }) < 12)) continue;
      pole = { id: poles.length, x, z, height, nx, nz, dx: segment.dir.x, dz: segment.dir.z, family: sample.family, busy: sample.busy, seed: hash(sample.key), links: 0 };
      break candidateSites;
    }
    if (!pole) { stats.rejectedPole++; continue; }
    poles.push(pole); poleIndex.add(pole, { minX: pole.x, maxX: pole.x, minZ: pole.z, maxZ: pole.z });
  }
  const edges = [];
  for (const pole of poles) for (const other of poleIndex.query({ minX: pole.x - 58, maxX: pole.x + 58, minZ: pole.z - 58, maxZ: pole.z + 58 })) {
    if (other.id <= pole.id || other.family !== pole.family || pole.nx * other.nx + pole.nz * other.nz < .45) continue;
    const span = distance(pole, other); if (span < 12 || span > 58) continue;
    const alignment = Math.abs(((other.x - pole.x) * pole.dx + (other.z - pole.z) * pole.dz) / span);
    if (alignment < .45) continue;
    edges.push({ a: pole, b: other, span });
  }
  edges.sort((a, b) => a.span - b.span || a.a.id - b.a.id || a.b.id - b.b.id);
  for (const { a, b, span } of edges) {
    if (a.links >= 2 || b.links >= 2) continue;
    const busy = a.busy || b.busy, key = `${a.id}/${b.id}`, count = busy ? (mobile ? 12 + hash(key) % 5 : 24 + hash(key) % 5) : 4 + hash(key) % 4;
    const cables = Array.from({ length: count }, (_, i) => wirePoints(a, b, i, busy, key));
    if (!cables.every(cable => obstacles.isPolylineClear(cable.points))) { stats.rejectedSpan++; continue; }
    // Two links may meet at a bend, but do not produce an artificial tiny cable triangle.
    if (spans.some(s => s.a === a.id && s.b === b.id || s.a === b.id && s.b === a.id)) continue;
    spans.push({ a: a.id, b: b.id, busy, length: span, cables }); a.links++; b.links++;
    stats[busy ? 'denseSpans' : 'sparseSpans']++;
    stats.cableSegments += cables.reduce((sum, cable) => sum + cable.points.length - 1, 0);
  }
  const active = new Set(spans.flatMap(span => [span.a, span.b]));
  for (const pole of poles) {
    if (!active.has(pole.id) || !pole.busy) continue;
    const count = 1 + pole.seed % 3;
    for (let coil = 0; coil < count; coil++) {
      const radius = .22 + coil * .047, y = 4.8 + coil * .27, points = [];
      for (let i = 0; i <= 24; i++) { const angle = i / 24 * Math.PI * 2; points.push({ x: pole.x + pole.nx * .21 + pole.dx * Math.cos(angle) * radius, y: y + Math.sin(angle) * radius, z: pole.z + pole.nz * .21 + pole.dz * Math.cos(angle) * radius }); }
      if (obstacles.isPolylineClear(points)) detailLines.push({ pole: pole.id, points });
    }
  }
  const emittedPoles = poles.filter(p => active.has(p.id));
  stats.poles = emittedPoles.length; stats.spans = spans.length; stats.cables = spans.reduce((sum, span) => sum + span.cables.length, 0); stats.loops = detailLines.length;
  return { poles: emittedPoles, spans, detailLines, stats };
}

/** Static batches per 160m block, allowing Three.js native frustum culling. */
export function createUtilityLines(THREE, plan, { mobile = false } = {}) {
  const root = new THREE.Group(); root.name = 'Bangkok sidewalk utility poles and cable bundles';
  const materials = [new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .87 }),
    new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .5, metalness: .48 })];
  const wireMaterial = new THREE.LineBasicMaterial({ color: '#30332d' }), chunks = new Map(), size = mobile ? 160 : 192;
  const chunkAt = (x, z) => { const key = `${Math.floor(x / size)},${Math.floor(z / size)}`; if (!chunks.has(key)) chunks.set(key, { pieces: [[], []], wires: [] }); return chunks.get(key); };
  const add = (chunk, geometry, color, material, position, scale = null, quaternion = null) => {
    const g = geometry.clone(), matrix = new THREE.Matrix4().compose(position, quaternion || new THREE.Quaternion(), scale || new THREE.Vector3(1, 1, 1));
    g.applyMatrix4(matrix); const c = new THREE.Color(color), values = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(values, 3)); chunk.pieces[material].push(g);
  };
  const box = new THREE.BoxGeometry(1, 1, 1), cylinder = new THREE.CylinderGeometry(.11, .16, 1, 6), insulator = new THREE.CylinderGeometry(.07, .07, .21, 6);
  for (const pole of plan.poles) {
    const chunk = chunkAt(pole.x, pole.z), yaw = Math.atan2(pole.dx, pole.dz), q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    add(chunk, cylinder, '#b0aaa0', 0, new THREE.Vector3(pole.x, pole.height / 2, pole.z), new THREE.Vector3(1, pole.height, 1));
    add(chunk, box, '#95948a', 0, new THREE.Vector3(pole.x, .1, pole.z), new THREE.Vector3(.43, .20, .43));
    for (const y of [pole.height - .45, pole.height - 1.04]) {
      add(chunk, box, '#747b73', 1, new THREE.Vector3(pole.x, y, pole.z), new THREE.Vector3(.88, .08, .075), q);
      for (const offset of [-.27, 0, .27]) add(chunk, insulator, '#bab8a2', 0, new THREE.Vector3(pole.x + pole.nx * offset, y + .14, pole.z + pole.nz * offset));
    }
    add(chunk, box, '#59605a', 1, new THREE.Vector3(pole.x + pole.nx * .24, 4.34, pole.z + pole.nz * .24), new THREE.Vector3(.29, .48, .24), q);
    for (let y = 1.1; y < pole.height - 1.3; y += .48) add(chunk, box, '#7f8378', 1, new THREE.Vector3(pole.x, y, pole.z), new THREE.Vector3(.25, .04, .24), q);
    if (!mobile && pole.busy && pole.seed % 9 === 0) {
      const transformer = new THREE.CylinderGeometry(.21, .21, .66, 8);
      add(chunk, transformer, '#788478', 1, new THREE.Vector3(pole.x + pole.nx * .28, 5.64, pole.z + pole.nz * .28)); transformer.dispose();
      add(chunk, box, '#5c685b', 1, new THREE.Vector3(pole.x + pole.nx * .28, 5.27, pole.z + pole.nz * .28), new THREE.Vector3(.48, .06, .46), q);
    }
  }
  const appendLine = points => {
    const middle = points[Math.floor(points.length / 2)], chunk = chunkAt(middle.x, middle.z);
    for (let i = 1; i < points.length; i++) chunk.wires.push(points[i - 1].x, points[i - 1].y, points[i - 1].z, points[i].x, points[i].y, points[i].z);
  };
  for (const span of plan.spans) for (const cable of span.cables) appendLine(cable.points);
  for (const line of plan.detailLines) appendLine(line.points);
  for (const [key, chunk] of chunks) {
    const group = new THREE.Group(); group.name = `Utility block ${key}`;
    for (let i = 0; i < materials.length; i++) if (chunk.pieces[i].length) {
      const geometry = mergeGeometries(chunk.pieces[i]); geometry.computeBoundingSphere();
      const mesh = new THREE.Mesh(geometry, materials[i]); mesh.castShadow = !mobile; mesh.receiveShadow = true; group.add(mesh); chunk.pieces[i].forEach(g => g.dispose());
    }
    if (chunk.wires.length) { const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(chunk.wires, 3)); geometry.computeBoundingSphere(); group.add(new THREE.LineSegments(geometry, wireMaterial)); }
    root.add(group);
  }
  box.dispose(); cylinder.dispose(); insulator.dispose(); root.userData = { ...plan.stats, chunks: chunks.size, drawCallMaximum: chunks.size * 3 };
  return root;
}

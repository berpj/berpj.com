import polygonClipping from 'polygon-clipping';
import {planDistrictInfill} from './districtInfill.mjs';

// The source database remains untouched. These are derived gameplay polygons in metres.
export const ROAD_CLEARANCE = .35;
const MINIMUM_FRAGMENT_AREA = 3;
const EPSILON_AREA = 1e-7;
const caches = new WeakMap();
const overlaps = (a, b) => a.minX <= b.maxX && a.maxX >= b.minX && a.minZ <= b.maxZ && a.maxZ >= b.minZ;
const boundsOf = points => ({ minX: Math.min(...points.map(p => p[0])), maxX: Math.max(...points.map(p => p[0])), minZ: Math.min(...points.map(p => p[1])), maxZ: Math.max(...points.map(p => p[1])) });
const expandBounds = (b, amount) => ({ minX: b.minX - amount, maxX: b.maxX + amount, minZ: b.minZ - amount, maxZ: b.maxZ + amount });
const squaredDistance = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
function ringArea(ring) { let result = 0; for (let i = 1; i < ring.length; i++) result += ring[i - 1][0] * ring[i][1] - ring[i][0] * ring[i - 1][1]; return Math.abs(result) / 2; }
function polygonArea(polygon) { return Math.max(0, ringArea(polygon[0]) - polygon.slice(1).reduce((sum, ring) => sum + ringArea(ring), 0)); }
const geometryArea = geometry => geometry.reduce((sum, polygon) => sum + polygonArea(polygon), 0);
function viableFragment(polygon) {
  const area = polygonArea(polygon), outer = polygon[0];
  let perimeter = 0; for (let i = 1; i < outer.length; i++) perimeter += Math.sqrt(squaredDistance(outer[i - 1], outer[i]));
  // Also remove long paper-thin scraps whose area alone would pass the threshold.
  return area >= MINIMUM_FRAGMENT_AREA && perimeter > 0 && area * 2 / perimeter >= .5;
}

class SpatialIndex {
  constructor(cellSize = 64) { this.cellSize = cellSize; this.cells = new Map(); }
  keys(bounds) {
    const keys = [];
    for (let x = Math.floor(bounds.minX / this.cellSize); x <= Math.floor(bounds.maxX / this.cellSize); x++)
      for (let z = Math.floor(bounds.minZ / this.cellSize); z <= Math.floor(bounds.maxZ / this.cellSize); z++) keys.push(`${x},${z}`);
    return keys;
  }
  add(item, bounds) { item.bounds = bounds; for (const key of this.keys(bounds)) { if (!this.cells.has(key)) this.cells.set(key, []); this.cells.get(key).push(item); } }
  query(bounds) { const found = new Set(); for (const key of this.keys(bounds)) for (const item of this.cells.get(key) || []) if (overlaps(item.bounds, bounds)) found.add(item); return [...found]; }
}

function pointSegmentDistanceSquared(point, a, b) {
  const lengthSquared = squaredDistance(a, b);
  const t = lengthSquared ? Math.max(0, Math.min(1, ((point[0] - a[0]) * (b[0] - a[0]) + (point[1] - a[1]) * (b[1] - a[1])) / lengthSquared)) : 0;
  return squaredDistance(point, [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
}
function pointInRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if (pointSegmentDistanceSquared(point, a, b) < 1e-12) return true;
    if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
function pointInPolygon(point, polygon) { return pointInRing(point, polygon[0]) && !polygon.slice(1).some(hole => pointInRing(point, hole)); }
function rectangleRing({ x, z, width, depth, yaw = 0 }, padding = 0) {
  if (![x, z, width, depth, yaw, padding].every(Number.isFinite) || width + padding * 2 <= 0 || depth + padding * 2 <= 0) return null;
  const w = width / 2 + padding, d = depth / 2 + padding, c = Math.cos(yaw), s = Math.sin(yaw);
  const points = [[-w, -d], [-w, d], [w, d], [w, -d]].map(([dx, dz]) => [x + dx * c + dz * s, z - dx * s + dz * c]);
  return [...points, points[0]];
}
// Both road ribbons and placement rectangles are convex. SAT avoids fragile
// coincident-boundary boolean operations in frequently called clearance queries.
function convexOverlap(a, b) {
  for (const ring of [a, b]) for (let i = 1; i < ring.length; i++) {
    const dx = ring[i][0] - ring[i - 1][0], dz = ring[i][1] - ring[i - 1][1], length = Math.hypot(dx, dz);
    if (!length) continue;
    const nx = -dz / length, nz = dx / length;
    const pa = a.map(p => p[0] * nx + p[1] * nz), pb = b.map(p => p[0] * nx + p[1] * nz);
    if (Math.min(Math.max(...pa), Math.max(...pb)) - Math.max(Math.min(...pa), Math.min(...pb)) <= 1e-8) return false;
  }
  return true;
}
function corridorRing(segment, margin) {
  const dx = segment.dir?.x ?? (segment.b.x - segment.a.x) / segment.len;
  const dz = segment.dir?.z ?? (segment.b.z - segment.a.z) / segment.len;
  const halfWidth = segment.road.width / 2 + margin, nx = dz * halfWidth, nz = -dx * halfWidth;
  const a = [segment.a.x - dx * margin, segment.a.z - dz * margin], b = [segment.b.x + dx * margin, segment.b.z + dz * margin];
  return [[a[0] - nx, a[1] - nz], [b[0] - nx, b[1] - nz], [b[0] + nx, b[1] + nz], [a[0] + nx, a[1] + nz], [a[0] - nx, a[1] - nz]];
}

/** Full-footprint queries against every intersecting road, with spatial filtering. */
export function createRoadClearance(map, { margin = ROAD_CLEARANCE } = {}) {
  const roadIndex = new SpatialIndex(), buildingIndex = new SpatialIndex();
  const corridors = map.segments.filter(s => s.len > 0 && s.road.width > 0).map(segment => {
    const ring = corridorRing(segment, margin), item = { segment, ring, geometry: [ring] };
    roadIndex.add(item, boundsOf(ring)); return item;
  });
  const rectangleIntersects = (ring, geometry) => {
    try { return geometryArea(polygonClipping.intersection([ring], geometry)) > EPSILON_AREA; }
    catch { return true; } // A numerical boundary ambiguity must not place scenery in a building.
  };
  return {
    margin, corridors,
    candidates: bounds => roadIndex.query(bounds),
    isRectangleClear(rectangle, extraMargin = 0) {
      const ring = rectangleRing(rectangle, extraMargin); if (!ring) return false;
      return !roadIndex.query(boundsOf(ring)).some(item => convexOverlap(ring, item.ring));
    },
    isCircleClear({ x, z, radius }, extraMargin = 0) {
      const r = radius + extraMargin;
      if (![x, z, r].every(Number.isFinite) || r < 0) return false;
      const point = [x, z], bounds = { minX: x - r, maxX: x + r, minZ: z - r, maxZ: z + r };
      for (const item of roadIndex.query(bounds)) {
        if (pointInRing(point, item.ring)) return false;
        for (let i = 1; i < item.ring.length; i++) if (pointSegmentDistanceSquared(point, item.ring[i - 1], item.ring[i]) < r * r) return false;
      }
      return true;
    },
    isPointInBuilding({ x, z }, maximumBaseHeight = Infinity) {
      const point = [x, z], bounds = { minX: x, maxX: x, minZ: z, maxZ: z };
      return buildingIndex.query(bounds).some(item => item.building.baseHeight <= maximumBaseHeight && item.geometry.some(polygon => pointInPolygon(point, polygon)));
    },
    isRectangleClearOfBuildings(rectangle, extraMargin = 0, ignoreId = null) {
      const ring = rectangleRing(rectangle, extraMargin); if (!ring) return false;
      return !buildingIndex.query(boundsOf(ring)).some(item => item.building.id !== ignoreId && rectangleIntersects(ring, item.geometry));
    },
    // Called once after clipping, so authored scenery tests the actual rendered footprint.
    setBuildings(buildings) {
      for (const building of buildings) {
        const geometry = building.polygons.map(p => [p.outer, ...p.holes].map(ring => ring.map(p => [p.x, p.z])));
        const bounds = boundsOf(geometry.flatMap(polygon => polygon[0]));
        buildingIndex.add({ building, geometry }, bounds);
      }
    },
  };
}

function meters(value) {
  if (value == null || value === '') return null;
  const number = Number.parseFloat(value); if (!Number.isFinite(number)) return null;
  return /(?:ft|feet|')/.test(String(value)) ? number * .3048 : number;
}
function defaultHeight(id) {
  let hash = 2166136261; for (const letter of id) hash = Math.imul(hash ^ letter.charCodeAt(0), 16777619);
  return 8 + (hash >>> 0) / 4294967295 * 12;
}
function heights(building) {
  const tags = building.tags, roofOnly = ['roof', 'carport'].includes(tags.building);
  const minHeight = meters(tags.min_height ?? tags['building:min_height']);
  const minLevel = meters(tags['building:min_level']), layer = meters(tags.layer) ?? 0;
  let baseHeight = minHeight ?? (minLevel != null ? minLevel * 3.25 : layer * 4);
  let baseSource = minHeight != null ? 'min_height' : minLevel != null ? 'building:min_level' : layer ? 'layer-estimate' : 'ground';
  if (roofOnly && baseSource === 'ground') { baseHeight = 2.8; baseSource = 'canopy-default'; }
  const explicit = meters(tags.height), legacy = meters(tags['building:height']), levels = meters(tags['building:levels']);
  let heightSource = explicit != null ? 'height' : legacy != null ? 'building:height' : levels != null ? 'building:levels' : roofOnly ? 'canopy-default' : 'authored-default';
  let topHeight = explicit ?? legacy ?? (levels != null ? levels * 3.25 : roofOnly ? baseHeight + .24 : defaultHeight(building.id));
  topHeight = Math.max(baseHeight + (roofOnly ? .12 : 3), topHeight);
  // A driver collider may only cover the actual wall span below 4m, never a floating base.
  const collisionTopHeight = Math.max(baseHeight, Math.min(topHeight, 4));
  return { baseHeight, topHeight, baseSource, heightSource, roofOnly, collisionTopHeight, collisionHeight: collisionTopHeight - baseHeight };
}
function isAuthoredBtsStation(building) {
  const tags = building.tags, name = tags['name:en'] || tags.name || '';
  return ['way/157656702', 'way/1234791533'].includes(building.id) ||
    (['train_station', 'station'].includes(tags.building) && (/BTS/i.test(name) || (Number.parseFloat(tags.layer) > 0 && /อโศก|พร้อมพงษ์/.test(name))));
}
function projectRing(coordinates, map) {
  const result = [];
  for (const coordinate of coordinates) {
    const p = map.project(coordinate); if (![p.x, p.z].every(Number.isFinite)) return null;
    const point = [p.x, p.z]; if (!result.length || squaredDistance(result[result.length - 1], point) > 1e-16) result.push(point);
  }
  if (result.length < 3) return null;
  if (squaredDistance(result[0], result[result.length - 1]) > 1e-16) result.push(result[0]);
  return result.length >= 4 ? result : null;
}
function sourceGeometry(building, map) {
  const outers = (building.outerRings?.length ? building.outerRings : [building.coordinates]).map(ring => projectRing(ring, map)).filter(Boolean);
  const holes = (building.innerRings || []).map(ring => projectRing(ring, map)).filter(Boolean);
  return outers.map(outer => [outer, ...holes.filter(hole => pointInRing(hole[0], outer))]);
}

/** Same final polygons are consumed by render surfaces and driving collision walls. */
export function prepareBuildingLayout(map, { mobile = false } = {}) {
  let cached = caches.get(map); if (!cached) { cached = new Map(); caches.set(map, cached); }
  const key = mobile ? 'mobile' : 'desktop'; if (cached.has(key)) return cached.get(key);
  const started = performance.now(), clearance = createRoadClearance(map), buildings = [];
  const stats = { selected: 0, emitted: 0, clipped: 0, dropped: 0, skippedBts: 0, rejectedInvalid: 0, discardedFragments: 0, sourceArea: 0, renderArea: 0 };
  const selected = map.data.buildings.map(building => ({ building, first: map.project(building.coordinates[0]) }))
    .filter(({ building }) => building.coordinates.some(coordinate=>(map.insideScenery||map.inside)(map.project(coordinate))))
    .sort((a, b) => Math.hypot(a.first.x - map.spawn.x, a.first.z - map.spawn.z) - Math.hypot(b.first.x - map.spawn.x, b.first.z - map.spawn.z));
  for (const { building } of selected) {
    stats.selected++;
    if (isAuthoredBtsStation(building)) { stats.skippedBts++; continue; }
    try {
      const original = sourceGeometry(building, map); if (!original.length) { stats.rejectedInvalid++; continue; }
      const subject = polygonClipping.union(original), sourceArea = geometryArea(subject);
      stats.sourceArea += sourceArea;
      if (sourceArea < MINIMUM_FRAGMENT_AREA) { stats.dropped++; continue; }
      const dimensions = heights(building), bounds = boundsOf(subject.flatMap(p => p[0]));
      const candidates = dimensions.baseHeight <= .01 ? clearance.candidates(bounds) : [];
      let geometry = candidates.length ? polygonClipping.difference(subject, ...candidates.map(item => item.geometry)) : subject;
      const beforeFragments = geometry.length;
      geometry = geometry.filter(viableFragment);
      stats.discardedFragments += beforeFragments - geometry.length;
      const renderArea = geometryArea(geometry);
      if (renderArea > sourceArea + Math.max(.001, sourceArea * 1e-9)) { stats.rejectedInvalid++; continue; }
      if (sourceArea - renderArea > .001) stats.clipped++;
      if (!geometry.length) { stats.dropped++; continue; }
      const polygons = geometry.map(polygon => ({ outer: polygon[0].map(([x, z]) => ({ x, z })), holes: polygon.slice(1).map(ring => ring.map(([x, z]) => ({ x, z }))) }));
      buildings.push({ id: building.id, tags: building.tags, polygons, ...dimensions, sourceArea, renderArea });
      stats.renderArea += renderArea;
    } catch (error) {
      stats.rejectedInvalid++;
      // Failing closed avoids a broken polygon reintroducing a blocking street wall.
      console.warn(`Building layout rejected ${building.id}: ${error.message}`);
    }
  }
  clearance.setBuildings(buildings);
  const infill=map.district?planDistrictInfill(map,clearance):[];
  buildings.push(...infill);stats.authoredInfill=infill.length;
  for(const b of infill){stats.sourceArea+=b.sourceArea;stats.renderArea+=b.renderArea;}
  stats.emitted = buildings.length; stats.removedArea = stats.sourceArea - stats.renderArea; stats.elapsedMs = performance.now() - started;
  const result = { buildings, clearance, stats }; cached.set(key, result); return result;
}

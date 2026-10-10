import {assetUrl} from '../game/assetUrl.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const SHOP_STYLES = [
  { id: 'massage', thai: 'นวดแผนไทย', accent: '#654352', frame: '#a99b84', weight: 24 },
  { id: 'shuttered', thai: 'ว่างให้เช่า', accent: '#829386', frame: '#a9a695', weight: 13 },
  { id: 'barber', thai: 'ตัดผม', accent: '#387b80', frame: '#98ada4', weight: 17 },
  { id: 'tailor', thai: 'ตัดสูท', accent: '#544437', frame: '#96866e', weight: 16 },
  { id: 'pizzeria', thai: 'พิซซ่า', accent: '#8f4236', frame: '#a8aa93', weight: 16 },
  { id: 'laundry', thai: 'ซักอบรีด', accent: '#547f9e', frame: '#a7b5bb', weight: 14 },
  { id: 'noodles', thai: 'ก๋วยเตี๋ยว', accent: '#a8493b', frame: '#b9aa8d', weight: 20, atlas: [0,0] },
  { id: 'coffee', thai: 'กาแฟ', accent: '#35594e', frame: '#947656', weight: 18, atlas: [1,0] },
  { id: 'bakery', thai: 'เบเกอรี่', accent: '#c69c3e', frame: '#648b89', weight: 13, atlas: [2,0] },
  { id: 'florist', thai: 'ดอกไม้', accent: '#b9808b', frame: '#adb395', weight: 10, atlas: [0,1] },
  { id: 'hardware', thai: 'อุปกรณ์ช่าง', accent: '#3b6497', frame: '#b2aa89', weight: 10, atlas: [1,1] },
  { id: 'fruit', thai: 'ผลไม้สด', accent: '#ce7439', frame: '#719176', weight: 15, atlas: [2,1] },
];

const hash = value => { let h = 2166136261; for (const c of String(value)) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const squareDistance = (a, b) => (a.x - b.x) ** 2 + (a.z - b.z) ** 2;

/** Ground-floor photographic bays, with authored shallow facade geometry. */
export function createShopfrontSystem(THREE, map, layout, { mobile = false } = {}) {
  const group = new THREE.Group(); group.name = 'Varied Sukhumvit shopfronts';
  const queue = [], sites = [], chunks = new Map(), checks = [];
  const chunkSize = mobile ? 150 : 125;
  const range = mobile ? 245 : 370;
  const solid = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .89 });
  const metal = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .53, metalness: .36 });
  let atlasMaterial=null;
  const materials = SHOP_STYLES.map(style => {
    if(style.atlas&&atlasMaterial)return atlasMaterial;
    const material = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: .9, side: THREE.DoubleSide });
    material.name = style.atlas?'Local Bangkok shop atlas':`${style.id} facade photograph`;
    if(style.atlas)atlasMaterial=material;
    if (typeof document !== 'undefined') {
      const texture = new THREE.TextureLoader().load(assetUrl(style.atlas?'textures/shopfronts/bangkok-local-atlas.png':`textures/shopfronts/${style.id}.webp`), undefined, undefined, () => {
        material.map = null; material.color.set(style.accent); material.needsUpdate = true;
      });
      texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = mobile ? 4 : 8;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      material.map = texture;
    } else material.color.set(style.accent);
    return material;
  });
  let plaqueMaterial = null;
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = SHOP_STYLES.length*128;
    const ctx = canvas.getContext('2d');
    SHOP_STYLES.forEach((style, i) => {
      ctx.fillStyle = style.accent; ctx.fillRect(0, i * 128, 512, 128);
      ctx.strokeStyle = '#c8b99b'; ctx.lineWidth = 3; ctx.strokeRect(8, i * 128 + 8, 496, 112);
      ctx.fillStyle = '#f3e6c8'; ctx.font = 'bold 66px Tahoma,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(style.thai, 256, i * 128 + 66, 470);
    });
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    plaqueMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: .84, side: THREE.DoubleSide });
  }
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  function getChunk(x, z) {
    const key = `${Math.floor(x / chunkSize)},${Math.floor(z / chunkSize)}`;
    if (!chunks.has(key)) {
      const node = new THREE.Group(); node.name = `Shopfront chunk ${key}`;
      group.add(node); chunks.set(key, { group: node, centers: [], materialBatches: new Map() });
    }
    return chunks.get(key);
  }
  function addGeometry(chunk, geometry, material, tint = null, transform = null) {
    const g = geometry.clone();
    if (transform) g.applyMatrix4(transform);
    if (material.vertexColors && !g.attributes.color) {
      const color = new THREE.Color(tint || '#ffffff'), values = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) { values[i] = color.r; values[i + 1] = color.g; values[i + 2] = color.b; }
      g.setAttribute('color', new THREE.BufferAttribute(values, 3));
    }
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!chunk.materialBatches.has(material)) chunk.materialBatches.set(material, []);
    chunk.materialBatches.get(material).push(g);
  }
  function quad(chunk, points, uv, material, tint = null) {
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex([0, 1, 2, 0, 2, 3]); g.computeVertexNormals(); addGeometry(chunk, g, material, tint); g.dispose();
  }
  const dummy = new THREE.Object3D();
  function addBox(chunk, site, x, y, z, w, h, d, tint, material = solid, tilt = 0) {
    const cs = Math.cos(site.yaw), sn = Math.sin(site.yaw);
    dummy.position.set(site.x + x * cs + z * sn, y, site.z - x * sn + z * cs);
    dummy.rotation.set(0, site.yaw, 0); dummy.rotateX(tilt); dummy.scale.set(w, h, d); dummy.updateMatrix();
    addGeometry(chunk, unitBox, material, tint, dummy.matrix);
  }
  function point(site, x, z) {
    const cs = Math.cos(site.yaw), sn = Math.sin(site.yaw);
    return { x: site.x + x * cs + z * sn, z: site.z - x * sn + z * cs };
  }
  function clearProjection(site, x, z, width, depth) {
    const p = point(site, x, z), rectangle = { ...p, width, depth, yaw: site.yaw };
    const clear = layout.clearance.isRectangleClear(rectangle) && layout.clearance.isRectangleClearOfBuildings(rectangle, 0, site.buildingId);
    if (clear) checks.push(rectangle);
    return clear;
  }
  function addPhotoBay(site, index) {
    const style = SHOP_STYLES[index], chunk = getChunk(site.x, site.z);
    chunk.centers.push({ x: site.x, z: site.z });
    const height = Math.min(3.6, site.height - site.base);
    const photoWidth = Math.min(4, site.width - .09), span = photoWidth / 4;
    let u0 = (1 - span) / 2, u1 = 1 - u0, v0=0, v1=height/3.6;
    if(style.atlas){const [col,row]=style.atlas;u0=(col+u0+.006)/3;u1=(col+u1-.006)/3;v0=(1-row+.006)/2;v1=(1-row+v1-.006)/2;}
    const bottomLeft = point(site, -photoWidth / 2, .024), bottomRight = point(site, photoWidth / 2, .024);
    quad(chunk, [[bottomLeft.x, site.base, bottomLeft.z], [bottomRight.x, site.base, bottomRight.z], [bottomRight.x, site.base + height, bottomRight.z], [bottomLeft.x, site.base + height, bottomLeft.z]], [u0, v0, u1, v0, u1, v1, u0, v1], materials[index]);
    // Wide bays retain a 4m photograph and get narrow rendered jamb infills;
    // narrower bays crop symmetrically instead of distorting doors or signage.
    const gap = (site.width - photoWidth) / 2;
    if (gap > .02) for (const side of [-1, 1]) addBox(chunk, site, side * (photoWidth / 2 + gap / 2), site.base + height / 2, .004, gap, height, .016, style.frame);
    const detailed = sites.length < (mobile ? 150 : 260) && Math.sqrt(squareDistance(site, map.spawn)) < (mobile ? 380 : 620);
    if (detailed) {
      if (clearProjection(site, 0, .075, site.width, .18)) {
        for (const side of [-1, 1]) addBox(chunk, site, side * (site.width / 2 - .038), site.base + height / 2, .074, .075, height, .102, style.frame, metal);
        addBox(chunk, site, 0, site.base + height - .038, .068, site.width, .076, .105, style.frame);
      }
      if (clearProjection(site, 0, .165, site.width - .09, .35)) addBox(chunk, site, 0, site.base + .045, .165, site.width - .09, .075, .33, '#b6b2a2');
      if (index !== 1 && (hash(site.key) % 3 === 0 || index === 4)) {
        const width = Math.min(site.width - .21, 3.85);
        if (clearProjection(site, 0, .34, width, .81)) {
          addBox(chunk, site, 0, site.base + 2.67, .36, width, .045, .74, style.accent, solid, .13);
          addBox(chunk, site, 0, site.base + 2.60, .717, width, .094, .035, style.accent);
          for (const side of [-1, 1]) addBox(chunk, site, side * width * .43, site.base + 2.67, .34, .022, .045, .75, '#92968c', metal, .13);
        }
      }
      // Thai plaques are small supplementary blades; the photographic fascia
      // and its English business name remain completely visible.
      if (plaqueMaterial && index !== 1 && hash(site.key) % 2 === 0 && clearProjection(site, site.width / 2 - .23, .32, .15, .69)) {
        const x = site.width / 2 - .23, yaw = site.yaw + Math.PI / 2;
        const center = point(site, x, .34), cs = Math.cos(yaw), sn = Math.sin(yaw), w = .50, h = .25;
        const a = { x: center.x - cs * w / 2, z: center.z + sn * w / 2 }, b = { x: center.x + cs * w / 2, z: center.z - sn * w / 2 };
        const v0 = (SHOP_STYLES.length - 1 - index) / SHOP_STYLES.length, v1 = v0 + 1 / SHOP_STYLES.length;
        quad(chunk, [[a.x, 2.39, a.z], [b.x, 2.39, b.z], [b.x, 2.39 + h, b.z], [a.x, 2.39 + h, a.z]], [0, v0, 1, v0, 1, v1, 0, v1], plaqueMaterial);
        addBox(chunk, site, x, 2.66, .33, .027, .024, .68, '#6d776e', metal);
      }
      if ((index === 0 || index === 4) && clearProjection(site, -site.width * .28, .44, .44, .34)) {
        const x = -site.width * .28;
        addBox(chunk, site, x, .44, .46, .40, .62, .042, '#343f38');
        for (const side of [-1, 1]) addBox(chunk, site, x + side * .19, .32, .47, .025, .60, .21, '#6e6250');
        addBox(chunk, site, x, .58, .488, .26, .006, .007, '#e6dcc6');
        for (let line = 0; line < 4; line++) addBox(chunk, site, x - .018, .47 - line * .07, .488, .22 - line * .015, .006, .007, '#d3cbb8');
      }
    }
    const output = { type: style.id, x: site.x, z: site.z, yaw: site.yaw, width: site.width, normal: { x: Math.sin(site.yaw), z: Math.cos(site.yaw) }, buildingId: site.buildingId };
    if (index === 1) {
      const cat = point(site, site.width * .22, .48), rectangle = { ...cat, width: .62, depth: .35, yaw: site.yaw };
      if (layout.clearance.isRectangleClear(rectangle) && layout.clearance.isRectangleClearOfBuildings(rectangle) && !layout.clearance.isPointInBuilding(cat)) output.sleepingCatSite = { ...cat, yaw: site.yaw - Math.PI / 2 };
    }
    sites.push(output);
  }
  function collectFacade({ a, b, base = 0, height = 3.6, yaw, buildingId, seed = 0, spans = null }) {
    if (height - base < 1 || ![a.x, a.z, b.x, b.z, yaw].every(Number.isFinite)) return;
    const length = Math.hypot(b.x - a.x, b.z - a.z);
    for (const [start, end] of spans || [[0, length]]) {
      const span = end - start;
      if (span < .01) continue;
      if (span < 1.3) {
        const center = (start + end) / 2;
        queue.push({ x: a.x + (b.x - a.x) * center / length, z: a.z + (b.z - a.z) * center / length, yaw, base, height, width: span, infill: true });
        continue;
      }
      const count = Math.max(1, Math.round(span / 4));
      const average = span / count;
      let at = start;
      const widths = Array.from({ length: count }, (_, i) => average + ((hash(`${buildingId}:${seed}:${i}`) % 201) / 200 - .5) * .32);
      const adjustment = (span - widths.reduce((sum, w) => sum + w, 0)) / count;
      for (let i = 0; i < count; i++) {
        const width = widths[i] + adjustment, center = at + width / 2;
        const x = a.x + (b.x - a.x) * center / length, z = a.z + (b.z - a.z) * center / length;
        queue.push({ x, z, yaw, base, height, width, buildingId, key: `${buildingId}:${a.x.toFixed(2)}:${a.z.toFixed(2)}:${i}:${start.toFixed(1)}` });
        at += width;
      }
    }
  }
  function finish() {
    queue.sort((a, b) => squareDistance(a, map.spawn) - squareDistance(b, map.spawn));
    let nearIndex = 0;
    for (const site of queue) {
      if (site.infill) {
        const chunk = getChunk(site.x, site.z), a = point(site, -site.width / 2, .005), b = point(site, site.width / 2, .005);
        chunk.centers.push({ x: site.x, z: site.z });
        quad(chunk, [[a.x, site.base, a.z], [b.x, site.base, b.z], [b.x, site.height, b.z], [a.x, site.height, a.z]], [0, 0, 1, 0, 1, 1, 0, 1], solid, '#bdb9a8');
        continue;
      }
      let index;
      if (nearIndex < 48) index = [6,7,0,8,2,9,4,10,3,11,5,1][nearIndex++ % SHOP_STYLES.length];
      else {
        let value = hash(site.key) % SHOP_STYLES.reduce((sum,style)=>sum+style.weight,0); index = 0;
        while (index < SHOP_STYLES.length - 1 && value >= SHOP_STYLES[index].weight) value -= SHOP_STYLES[index++].weight;
      }
      const neighbors = sites.filter(other => {
        const dx = other.x - site.x, dz = other.z - site.z;
        if (Math.abs(dx) > 8 || Math.abs(dz) > 8 || Math.cos(other.yaw - site.yaw) < .94) return false;
        const along = dx * Math.cos(site.yaw) - dz * Math.sin(site.yaw);
        const across = dx * Math.sin(site.yaw) + dz * Math.cos(site.yaw);
        const otherAlong = dx * Math.cos(other.yaw) - dz * Math.sin(other.yaw);
        const otherAcross = dx * Math.sin(other.yaw) + dz * Math.cos(other.yaw);
        return Math.min(Math.abs(across), Math.abs(otherAcross)) < .45 && Math.min(Math.abs(along), Math.abs(otherAlong)) < (site.width + other.width) / 2 + .55;
      }).map(other => other.type);
      if (neighbors.includes(SHOP_STYLES[index].id)) {
        const start = hash(`${site.key}:neighbor`) % SHOP_STYLES.length;
        for (let i = 0; i < SHOP_STYLES.length; i++) {
          const candidate = (start + i) % SHOP_STYLES.length;
          if (!neighbors.includes(SHOP_STYLES[candidate].id)) { index = candidate; break; }
        }
      }
      addPhotoBay(site, index);
    }
    for (const chunk of chunks.values()) {
      for (const [material, geometries] of chunk.materialBatches) {
        const geometry = mergeGeometries(geometries), mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = material === solid || material === metal; mesh.receiveShadow = true; chunk.group.add(mesh); geometries.forEach(g => g.dispose());
      }
      chunk.materialBatches.clear();
    }
    map.shopfronts = sites;
    group.userData = { bayCount: sites.length, chunkCount: chunks.size, types: Object.fromEntries(SHOP_STYLES.map(s => [s.id, sites.filter(site => site.type === s.id).length])), projectionChecks: checks.length, authoredFacadeStyles: true };
    update(map.spawn);
    return sites;
  }
  function update(player = map.spawn) {
    const p = player.position || player;
    for (const chunk of chunks.values()) chunk.group.visible = chunk.centers.some(center => squareDistance(center, p) < range * range);
  }
  return { group, collectFacade, finish, update, sites, checks };
}

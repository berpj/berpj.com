import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const smooth = t => { const p = Math.max(0, Math.min(1, t)); return p * p * (3 - 2 * p); };
const mix = (a, b, t) => a + (b - a) * t;

/** A braked, sidewalk-contained shuttle with a stationary, smooth endpoint turn. */
export function sampleSidewalkMotion(actor, time) {
  const range = Math.max(.01, actor.range), pace = Math.max(.08, actor.pace || .8);
  const distance = range * 2, ramp = Math.min(.38, distance / pace * .22);
  const travelDuration = distance / pace + ramp, turnDuration = actor.turnDuration || 1.05;
  const cycle = 2 * (travelDuration + turnDuration);
  const clock = ((time + (actor.phase || 0) * 2) % cycle + cycle) % cycle;
  const baseYaw = Math.atan2(-actor.segment.dir.x, -actor.segment.dir.z);
  function travel(t) {
    if (t < ramp) return { distance: pace * .5 * (t - ramp / Math.PI * Math.sin(Math.PI * t / ramp)), speed: pace * .5 * (1 - Math.cos(Math.PI * t / ramp)) };
    if (t > travelDuration - ramp) {
      const remaining = travelDuration - t;
      return { distance: distance - pace * .5 * (remaining - ramp / Math.PI * Math.sin(Math.PI * remaining / ramp)), speed: pace * .5 * (1 - Math.cos(Math.PI * remaining / ramp)) };
    }
    return { distance: pace * (t - ramp * .5), speed: pace };
  }
  let offset, yaw, speed = 0, travelled = 0;
  if (clock < travelDuration) {
    const state = travel(clock); offset = state.distance - range; yaw = baseYaw; speed = state.speed; travelled = state.distance;
  } else if (clock < travelDuration + turnDuration) {
    offset = range; yaw = baseYaw + Math.PI * smooth((clock - travelDuration) / turnDuration); travelled = distance;
  } else if (clock < travelDuration * 2 + turnDuration) {
    const state = travel(clock - travelDuration - turnDuration); offset = range - state.distance; yaw = baseYaw + Math.PI; speed = state.speed; travelled = distance + state.distance;
  } else {
    offset = -range; yaw = baseYaw + Math.PI + Math.PI * smooth((clock - travelDuration * 2 - turnDuration) / turnDuration); travelled = distance * 2;
  }
  return { offset, yaw, speed, paceFactor: speed / pace, stridePhase: travelled * Math.PI * 2 / 1.08 + (actor.phase || 0), cycle };
}

function torsoGeometry(THREE) {
  const rings = [[0,.74,.83],[.18,.67,.84],[.60,.90,1],[.80,1,.85],[1,.32,.56]];
  const positions = [], indices = [], sides = 8;
  for (const [y, width, depth] of rings) for (let i = 0; i < sides; i++) {
    const angle = i / sides * Math.PI * 2; positions.push(Math.cos(angle) * width, y, Math.sin(angle) * depth);
  }
  for (let ring = 0; ring < rings.length - 1; ring++) for (let i = 0; i < sides; i++) {
    const a = ring * sides + i, b = ring * sides + (i + 1) % sides;
    indices.push(a, b + sides, b, a, a + sides, b + sides);
  }
  for (const top of [false, true]) {
    const center = positions.length / 3, offset = top ? (rings.length - 1) * sides : 0;
    positions.push(0, top ? 1 : 0, 0);
    for (let i = 0; i < sides; i++) top ? indices.push(center, offset + (i + 1) % sides, offset + i) : indices.push(center, offset + i, offset + (i + 1) % sides);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices); geometry.computeVertexNormals(); return geometry;
}

/** Authored sidewalk life placed against the imported Sukhumvit geometry. */
export function createStreetLife(THREE, map, { mobile = false, shopfronts = map.shopfronts || [] } = {}) {
  const group = new THREE.Group();
  group.name = 'Sukhumvit sidewalk life';
  const peopleLimit = mobile ? 30 : 50;
  const animalLimit = mobile ? 6 : 10;
  const viewRange = mobile ? 135 : 175;
  // Instance colors carry each actor's clothing and skin; these primitives have no vertex color attribute.
  const solid = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: .88 });
  const stallPaint = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .74, metalness: .12 });
  const metal = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .36, metalness: .72 });
  const sphereGeometry = new THREE.SphereGeometry(1, 10, 6);
  const cylinderGeometry = new THREE.CylinderGeometry(.74, 1, 1, 7);
  const coneGeometry = new THREE.ConeGeometry(1, 1, 7);
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  let seed = 98531;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const shirts = ['#e5c7ab', '#779daa', '#b75442', '#b3b898', '#d2a736', '#687267', '#ece7d6', '#495773', '#ba8496'];
  const pants = ['#374451', '#263437', '#6b6254', '#434647', '#2f3e58'];
  const skins = ['#c18b62', '#a8754f', '#d2a27c', '#bb865d', '#e1b693'];
  const hairColors = ['#272827', '#3a302a', '#202423'];
  const distanceSq = (a, b) => (a.x - b.x) ** 2 + (a.z - b.z) ** 2;

  const buildings = (map.data?.buildings || []).map(b => {
    const points = b.coordinates.map(map.project);
    return { points, minX: Math.min(...points.map(p => p.x)), maxX: Math.max(...points.map(p => p.x)), minZ: Math.min(...points.map(p => p.z)), maxZ: Math.max(...points.map(p => p.z)) };
  }).filter(b => map.nearest({ x: (b.minX + b.maxX) / 2, z: (b.minZ + b.maxZ) / 2 }, map.main)?.distance < 70);
  function insideBuilding(p, margin = .25) {
    for (const b of buildings) {
      if (p.x < b.minX - margin || p.x > b.maxX + margin || p.z < b.minZ - margin || p.z > b.maxZ + margin) continue;
      let inside = false;
      for (let i = 0, j = b.points.length - 1; i < b.points.length; j = i++) {
        const a = b.points[i], c = b.points[j];
        if ((a.z > p.z) !== (c.z > p.z) && p.x < (c.x - a.x) * (p.z - a.z) / (c.z - a.z) + a.x) inside = !inside;
        const dx = c.x - a.x, dz = c.z - a.z;
        const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.z - a.z) * dz) / (dx * dx + dz * dz || 1)));
        if ((p.x - a.x - dx * t) ** 2 + (p.z - a.z - dz * t) ** 2 < margin ** 2) return true;
      }
      if (inside) return true;
    }
    return false;
  }
  function outsideRoads(p, margin = .3) {
    if (!map.inside(p) || insideBuilding(p)) return false;
    // A curb on a divided road may actually be the other carriageway. Test all
    // roads, including crossing sois, rather than just the selected main way.
    for (const segment of map.segments) {
      const reach = segment.road.width / 2 + margin;
      if (p.x < Math.min(segment.a.x, segment.b.x) - reach || p.x > Math.max(segment.a.x, segment.b.x) + reach || p.z < Math.min(segment.a.z, segment.b.z) - reach || p.z > Math.max(segment.a.z, segment.b.z) + reach) continue;
      const t = Math.max(0, Math.min(segment.len, (p.x - segment.a.x) * segment.dir.x + (p.z - segment.a.z) * segment.dir.z));
      if ((p.x - segment.a.x - segment.dir.x * t) ** 2 + (p.z - segment.a.z - segment.dir.z * t) ** 2 < reach ** 2) return false;
    }
    return true;
  }
  function pointAt(segment, t, side, offset) {
    return { x: segment.a.x + segment.dir.x * t + segment.dir.z * side * offset, z: segment.a.z + segment.dir.z * t - segment.dir.x * side * offset };
  }
  const paths = [];
  const sortedMain = [...(map.main || [])].sort((a, b) => distanceSq(a.a, map.spawn) - distanceSq(b.a, map.spawn));
  for (const segment of sortedMain) {
    if (segment.len < 12) continue;
    const start = (map.graph?.get(segment.ia)?.length || 2) > 2 ? 9 : 4;
    const end = segment.len - ((map.graph?.get(segment.ib)?.length || 2) > 2 ? 9 : 4);
    // OSM has separate one-way carriageways here. Side +1 is the outside curb
    // in left-hand traffic; the other side is the narrow BTS median.
    for (const side of ['yes','1','true'].includes(segment.road.tags.oneway) ? [1] : segment.road.tags.oneway==='-1' ? [-1] : [-1,1]) {
      for (let t = start + 3; t < end - 3; t += 7.5) {
        for (const offset of [segment.road.width / 2 + .77, segment.road.width / 2 + 1.36]) {
          const center = pointAt(segment, t, side, offset);
          if (paths.some(p => distanceSq(p.center, center) < 3.1)) continue;
          let range = Math.min(4.1, t - start, end - t);
          while (range > 1.2) {
            if ([-1, -.5, 0, .5, 1].every(k => outsideRoads(pointAt(segment, t + range * k, side, offset)))) break;
            range -= .6;
          }
          if (range <= 1.2) continue;
          const index = paths.length;
          paths.push({ center, segment, t, side, offset, range, index, phase: random() * Math.PI * 2, pace: .75 + random() * .45, height: .91 + random() * .14, shirt: shirts[Math.floor(random() * shirts.length)], pants: pants[Math.floor(random() * pants.length)], skin: skins[Math.floor(random() * skins.length)], hair: hairColors[Math.floor(random() * hairColors.length)], shorts: random() < .24, bag: random() < .24, longHair: random() < .22 });
          break;
        }
      }
    }
  }

  // A shared tiny atlas makes Thai food names and prices readable without any
  // remote textures or one material allocation for each street cart.
  let signMaterial = null;
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const names = [['ก๋วยเตี๋ยว', 'NOODLES  50 B'], ['ไก่ย่าง', 'GRILLED CHICKEN  40 B'], ['ผลไม้สด', 'FRESH FRUIT  30 B'], ['ชาเย็น', 'THAI TEA  35 B']];
    names.forEach((text, i) => {
      ctx.fillStyle = ['#d5c58a', '#a83f31', '#35674c', '#b77736'][i]; ctx.fillRect(0, i * 128, 512, 128);
      ctx.fillStyle = i === 0 ? '#292e26' : '#fff3d1'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = 'bold 46px sans-serif'; ctx.fillText(text[0], 256, i * 128 + 40, 480);
      ctx.font = 'bold 23px sans-serif'; ctx.fillText(text[1], 256, i * 128 + 94, 480);
    });
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    signMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: .85, side: THREE.DoubleSide });
  }
  function staticMesh(parent, geometry, material, color) {
    const g = geometry.clone();
    if (material.vertexColors) {
      const c = new THREE.Color(color); const values = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(values, 3));
    }
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    const object = new THREE.Mesh(g, material); object.castShadow = true; object.receiveShadow = true; parent.add(object); return object;
  }
  function staticBox(parent, x, y, z, w, h, d, color, material = stallPaint) {
    const o = staticMesh(parent, boxGeometry, material, color); o.position.set(x, y, z); o.scale.set(w, h, d); return o;
  }
  function staticSphere(parent, x, y, z, w, h, d, color, material = stallPaint) {
    const o = staticMesh(parent, sphereGeometry, material, color); o.position.set(x, y, z); o.scale.set(w, h, d); return o;
  }
  function mergeCart(cart) {
    const materials = new Map();
    for (const child of [...cart.children]) {
      if (!child.isMesh) continue;
      child.updateMatrix();
      if (!materials.has(child.material)) materials.set(child.material, []);
      materials.get(child.material).push(child.geometry.clone().applyMatrix4(child.matrix));
      cart.remove(child);
    }
    for (const [material, geometries] of materials) {
      const object = new THREE.Mesh(mergeGeometries(geometries), material);
      object.castShadow = true; object.receiveShadow = true; cart.add(object); geometries.forEach(g => g.dispose());
    }
  }
  const stalls = [], vendors = [];
  for (const path of paths) {
    if (stalls.length >= (mobile ? 24 : 36) || stalls.some(s => distanceSq(s.center, path.center) < 26 ** 2)) continue;
    const offset = path.segment.road.width / 2 + 1.18;
    const center = pointAt(path.segment, path.t, path.side, offset);
    const vendorPosition = pointAt(path.segment, path.t + .32, path.side, offset + .68);
    if (![center, vendorPosition, pointAt(path.segment, path.t - .85, path.side, offset), pointAt(path.segment, path.t + .85, path.side, offset)].every(p => outsideRoads(p, .45))) continue;
    const cart = new THREE.Group(); cart.name = 'Street food cart and umbrella';
    cart.position.set(center.x, .035, center.z);
    cart.rotation.y = Math.atan2(-path.segment.dir.z, path.segment.dir.x) + (path.side > 0 ? Math.PI : 0);
    const kind = stalls.length % 4;
    staticBox(cart, 0, .64, 0, 1.42, .54, .65, '#949d91', metal);
    staticBox(cart, 0, .95, 0, 1.51, .065, .72, '#b8bfb6', metal);
    for (const x of [-.59, .59]) {
      staticBox(cart, x, .31, .22, .09, .45, .09, '#797e73', metal);
      const wheel = staticMesh(cart, new THREE.CylinderGeometry(.18, .18, .08, 10), stallPaint, '#252e2c'); wheel.rotation.z = Math.PI / 2; wheel.position.set(x, .18, .11);
      staticBox(cart, x, .38, -.20, .04, .64, .04, '#969f99', metal);
    }
    if (kind === 0 || kind === 1) {
      const bowl = staticMesh(cart, new THREE.CylinderGeometry(.20, .15, .19, 10), metal, '#c7cebd'); bowl.position.set(-.38, 1.076, .015);
      const lid = staticMesh(cart, new THREE.CylinderGeometry(.205, .205, .015, 10), metal, '#b9c4bb'); lid.position.set(-.38, 1.178, .015);
      staticSphere(cart, -.38, 1.203, .015, .025, .017, .025, '#4f5551');
      staticBox(cart, .34, .995, -.05, .42, .021, .40, '#353d32');
      for (let n = 0; n < 6; n++) {
        staticBox(cart, .17 + (n % 3) * .12, 1.03, -.17 + Math.floor(n / 3) * .18, .046, .05, .12, '#b3703c');
        staticBox(cart, .17 + (n % 3) * .12, 1.041, -.25 + Math.floor(n / 3) * .18, .009, .008, .28, '#d6b77c');
      }
    } else {
      for (let n = 0; n < 12; n++) staticSphere(cart, -.5 + (n % 4) * .29, 1.017 + Math.floor(n / 8) * .08, -.14 + (Math.floor(n / 4) % 2) * .24, .072, .074, .072, kind === 2 ? (n % 3 ? '#d5a741' : '#72a140') : (n % 2 ? '#b2682d' : '#dcab69'));
    }
    // Plastic supply crates, a blue ice box and a little red stool.
    staticBox(cart, -.45, .17, .25, .45, .30, .29, '#688345');
    for (let n = 0; n < 4; n++) staticBox(cart, -.6 + n * .105, .21, .405, .027, .16, .01, '#2a4231');
    staticBox(cart, .52, .22, .41, .37, .40, .35, '#456e96');
    staticBox(cart, .52, .43, .41, .39, .028, .36, '#b6c5cd');
    staticBox(cart, -.78, .31, .45, .26, .035, .26, '#b74130');
    for (const x of [-.87, -.69]) staticBox(cart, x, .15, .45, .032, .30, .21, '#b74130');
    const pole = staticMesh(cart, new THREE.CylinderGeometry(.018, .021, 2.43, 7), metal, '#969e89'); pole.position.set(-.1, 1.22, .20);
    const umbrellaColors = [['#b64232', '#ddd0a4'], ['#557c64', '#d8c8a7'], ['#b9933c', '#e8dac0'], ['#496c96', '#c4cbc4']][kind];
    const umbrellaVertices = [], umbrellaIndices = [], umbrellaColorsArray = [];
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI * 2, b = (i + 1) / 10 * Math.PI * 2;
      const points = [[-.1, 2.49, .2], [-.1 + Math.cos(a) * .99, 2.13, .2 + Math.sin(a) * .99], [-.1 + Math.cos(b) * .99, 2.13, .2 + Math.sin(b) * .99]];
      const c = new THREE.Color(umbrellaColors[i % 2]);
      points.forEach(p => { umbrellaVertices.push(...p); umbrellaColorsArray.push(c.r, c.g, c.b); }); umbrellaIndices.push(i * 3, i * 3 + 1, i * 3 + 2);
    }
    const umbrellaGeometry = new THREE.BufferGeometry();
    umbrellaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(umbrellaVertices, 3));
    umbrellaGeometry.setAttribute('color', new THREE.Float32BufferAttribute(umbrellaColorsArray, 3));
    umbrellaGeometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(umbrellaVertices.length / 3 * 2), 2));
    umbrellaGeometry.setIndex(umbrellaIndices); umbrellaGeometry.computeVertexNormals();
    const umbrella = new THREE.Mesh(umbrellaGeometry, stallPaint); umbrella.material.side = THREE.DoubleSide; umbrella.castShadow = true; cart.add(umbrella);
    if (signMaterial) {
      const signGeometry = new THREE.PlaneGeometry(1.15, .30);
      const uv = signGeometry.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setY(i, (3 - kind + uv.getY(i)) / 4);
      const sign = new THREE.Mesh(signGeometry, signMaterial); sign.position.set(0, .714, -.331); sign.rotation.y = Math.PI; cart.add(sign);
    }
    mergeCart(cart); group.add(cart);
    const vendor = { ...path, center: vendorPosition, range: 0, vendor: true, phase: random() * Math.PI * 2, yaw: cart.rotation.y, shirt: ['#e1c78e', '#a89876', '#689286'][kind % 3], apron: '#d1bb98' };
    vendors.push(vendor); stalls.push({ cart, center, vendor });
  }

  const creatures = [];
  let rejectedSleepingSites = 0;
  for (const shop of shopfronts) {
    if (creatures.filter(p => p.sleeping).length >= (mobile ? 2 : 4)) break;
    const site = shop.sleepingCatSite;
    if (!site) continue;
    if (!Number.isFinite(site.x) || !Number.isFinite(site.z) || !outsideRoads(site, .38) || creatures.some(p => distanceSq(p.center, site) < 2.5 ** 2)) { rejectedSleepingSites++; continue; }
    creatures.push({ center: { x: site.x, z: site.z }, cat: true, sleeping: true, range: 0,
      color: '#252a27', height: .92 + random() * .10, phase: random() * Math.PI * 2,
      yaw: Number.isFinite(site.yaw) ? site.yaw : (shop.yaw || 0) + Math.PI / 2, breed: 0 });
  }
  for (const path of paths) {
    if (creatures.length >= (mobile ? 24 : 36) || creatures.some(p => distanceSq(p.center, path.center) < 34 ** 2)) continue;
    const offset = path.segment.road.width / 2 + 1.65, at = path.t + .8;
    const center = pointAt(path.segment, at, path.side, offset);
    if (!outsideRoads(center, .46)) continue;
    const index = creatures.length, cat = index % 3 === 0, breed = Math.floor(index / 3) % 3;
    let range = index % 4 === 3 ? Math.min(1.8, path.range - .8) : 0;
    if (range < .7 || ![-1,-.5,0,.5,1].every(k => outsideRoads(pointAt(path.segment, at + range * k, path.side, offset), .52)) || stalls.some(s => distanceSq(s.center, center) < (range + 2.2) ** 2)) range = 0;
    creatures.push({ center, cat, breed, range, segment: path.segment, t: at, side: path.side, offset, pace: cat ? .29 : .39,
      color: cat ? '#252a27' : ['#aa926f', '#b0a58b', '#56584e'][breed], accent: ['#746650', '#eee1c5', '#9c825d'][breed],
      height: cat ? .88 + random() * .24 : .86 + random() * .22, phase: random() * Math.PI * 2,
      yaw: Math.atan2(-path.segment.dir.x, -path.segment.dir.z) + (random() - .5) * 2 });
  }

  // Four shared batches: smooth ellipsoids, tapered limbs, ears, and anatomical torsos.
  // Face/toe details are emitted only within the near LOD; no per-actor meshes.
  const sphereCapacity = peopleLimit * 28 + animalLimit * 60;
  const rodCapacity = peopleLimit * 20 + animalLimit * 40;
  const sphereInstances = new THREE.InstancedMesh(sphereGeometry, solid, sphereCapacity);
  const rodInstances = new THREE.InstancedMesh(cylinderGeometry, solid, rodCapacity);
  const coneInstances = new THREE.InstancedMesh(coneGeometry, solid, animalLimit * 4);
  const torsoInstances = new THREE.InstancedMesh(torsoGeometry(THREE), solid, peopleLimit);
  sphereInstances.name = 'Crowd and animal anatomy'; rodInstances.name = 'Articulated tapered limbs';
  coneInstances.name = 'Cat and soi dog ears'; torsoInstances.name = 'Shoulders chest and waist profiles';
  const batches = [sphereInstances, rodInstances, coneInstances, torsoInstances];
  for (const instances of batches) {
    instances.instanceMatrix.setUsage(THREE.DynamicDrawUsage); instances.frustumCulled = false;
    instances.castShadow = !mobile; instances.receiveShadow = true; instances.count = 0; group.add(instances);
  }
  const dummy = new THREE.Object3D(), c = new THREE.Color(), from = new THREE.Vector3(), to = new THREE.Vector3(), axis = new THREE.Vector3(0, 1, 0);
  let sphereCount = 0, rodCount = 0, coneCount = 0, torsoCount = 0, time = 0, selectionAge = Infinity, overflows = 0;
  let visiblePeople = [], visibleAnimals = [], lastSelection = { x: Infinity, z: Infinity };
  function transformedPoint(person, point) {
    const cs = Math.cos(person.yaw), sn = Math.sin(person.yaw), h = person.height || 1;
    return [person.x + (point[0] * cs + point[2] * sn) * h, .035 + point[1] * h, person.z + (-point[0] * sn + point[2] * cs) * h];
  }
  function instanceSphere(person, point, scale, color, cone = false, rotation = [0,0,0]) {
    const mesh = cone ? coneInstances : sphereInstances;
    const index = cone ? coneCount : sphereCount;
    if (index >= mesh.instanceMatrix.count) { overflows++; return; }
    if (cone) coneCount++; else sphereCount++;
    const p = transformedPoint(person, point), h = person.height || 1;
    dummy.position.set(...p); dummy.rotation.set(rotation[0], person.yaw + rotation[1], rotation[2], 'YXZ');
    dummy.scale.set(scale[0] * h, scale[1] * h, scale[2] * h); dummy.updateMatrix();
    mesh.setMatrixAt(index, dummy.matrix); c.set(color); mesh.setColorAt(index, c);
  }
  function instanceRod(person, a, b, radius, color) {
    if (rodCount >= rodCapacity) { overflows++; return; }
    from.set(...transformedPoint(person, a)); to.set(...transformedPoint(person, b));
    const length = from.distanceTo(to); if (length < .0001) return;
    dummy.position.copy(from).add(to).multiplyScalar(.5);
    dummy.quaternion.setFromUnitVectors(axis, to.sub(from).normalize());
    dummy.scale.set(radius * (person.height || 1), length, radius * (person.height || 1)); dummy.updateMatrix();
    rodInstances.setMatrixAt(rodCount, dummy.matrix); c.set(color); rodInstances.setColorAt(rodCount++, c);
  }
  function instanceTorso(person, position, scale, twist) {
    if (torsoCount >= peopleLimit) { overflows++; return; }
    const h = person.height || 1;
    dummy.position.set(...transformedPoint(person, position)); dummy.rotation.set(0, person.yaw + twist, 0);
    dummy.scale.set(scale[0] * h, scale[1] * h, scale[2] * h); dummy.updateMatrix();
    torsoInstances.setMatrixAt(torsoCount, dummy.matrix); c.set(person.shirt); torsoInstances.setColorAt(torsoCount++, c);
  }
  function joint(a, target, upperLength, lowerLength, bend = [0,0,-1]) {
    const direction = new THREE.Vector3(target[0]-a[0], target[1]-a[1], target[2]-a[2]);
    const d = Math.max(.0001, Math.min(direction.length(), upperLength + lowerLength - .0005)); direction.normalize();
    const along = (upperLength * upperLength - lowerLength * lowerLength + d * d) / (2*d);
    const perpendicular = new THREE.Vector3(...bend).addScaledVector(direction, -new THREE.Vector3(...bend).dot(direction)).normalize();
    const result = new THREE.Vector3(...a).addScaledVector(direction, along).addScaledVector(perpendicular, Math.sqrt(Math.max(0, upperLength*upperLength-along*along)));
    return result.toArray();
  }
  function drawPerson(p) {
    const gait = p.stridePhase || 0, weight = p.vendor ? 0 : p.paceFactor || 0;
    const sway = Math.sin(gait), breath = Math.sin(time * 1.8 + p.phase) * .002;
    const hipY = .944 - .020 * sway * sway * weight + breath;
    const bodyWidth = (p.longHair ? .183 : .194) * (.95 + (p.index % 4) * .025);
    const torsoTwist = sway * .045 * weight;
    instanceTorso(p, [0, hipY-.016, 0], [bodyWidth, .486, .112 + breath], torsoTwist);
    instanceSphere(p, [0, hipY-.015, .005], [.146, .105, .112], p.pants);
    instanceRod(p, [0, 1.42 + hipY-.944, -.003], [0, 1.509 + hipY-.944, -.003], .043, p.skin);
    const headY = 1.605 + hipY-.944, headTilt = sway * .017 * weight;
    instanceSphere(p, [0,headY,0], [.089,.122,.098], p.skin, false, [0,headTilt,0]);
    instanceSphere(p, [0,headY-.078,-.012], [.064,.046,.076], p.skin);
    instanceSphere(p, [0,headY+.083,.007], [.093,.053,.100], p.hair);
    instanceSphere(p, [0,headY-.020,.069], [.087,p.longHair?.145:.076,.035], p.hair);
    if (!p.lod) {
      for (const side of [-1,1]) {
        instanceSphere(p,[side*.091,headY-.005,.005],[.015,.029,.018],p.skin);
        instanceSphere(p,[side*.034,headY+.006,-.089],[.012,.006,.007],'#bdb29d');
        instanceSphere(p,[side*.035,headY+.006,-.095],[.0035,.004,.004],'#343932');
        instanceRod(p,[side*.020,headY+.026,-.090],[side*.049,headY+.029,-.088],.004,p.hair);
      }
      instanceSphere(p,[0,headY-.018,-.101],[.014,.023,.019],p.skin);
      instanceRod(p,[-.016,headY-.058,-.081],[.017,headY-.058,-.081],.0035,'#795c4d');
    }
    for (const side of [-1,1]) {
      const phase = gait + (side < 0 ? Math.PI : 0), swing = Math.sin(phase) * weight;
      const lift = Math.max(0,-Math.cos(phase)) * .055 * weight;
      const hip = [side*.091, hipY-.009, 0], ankle = [side*.101, .10 + lift, swing * .195];
      const knee = joint(hip, ankle, .435, .435);
      instanceRod(p,hip,knee,.068,p.pants);
      if (!p.lod) instanceSphere(p,knee,[.053,.049,.052],p.pants);
      instanceRod(p,knee,ankle,.046,p.shorts?p.skin:p.pants);
      instanceSphere(p,[ankle[0],ankle[1]-.052,ankle[2]-.042],[.057,.043,.112],'#3c423f',false,[lift*1.3,0,0]);
      const shoulder = [side*.17,1.354+hipY-.944,sway*side*.008*weight];
      instanceSphere(p,shoulder,[.059,.062,.058],p.shirt);
      const hand = [side*(p.vendor?.21:.20),p.vendor?1.08:.875+hipY-.944,p.vendor?-.29+Math.sin(time*1.45+p.phase+side)*.024:-swing*.115];
      const elbow = joint(shoulder,hand,.27,.255,[side*.3,0,-1]);
      instanceRod(p,shoulder,elbow,.050,p.shirt);
      if (!p.lod) instanceSphere(p,elbow,[.033,.035,.034],p.skin);
      instanceRod(p,elbow,hand,.033,p.skin);
      instanceSphere(p,[hand[0],hand[1]-.025,hand[2]-.004],[.029,.043,.024],p.skin);
    }
    if (p.vendor) instanceSphere(p,[0,1.122,-.092],[.130,.213,.019],p.apron);
    else if (p.bag) {
      instanceRod(p,[.159,1.367,.004],[.226,1.025,.01],.010,'#665a47');
      instanceSphere(p,[.228,.989,.023],[.050,.126,.083],'#89775b');
    }
  }
  function animalPose(p) {
    if (p.sleeping) return {sit:0,lie:1,sniff:0,groom:0};
    if (p.range) return {sit:0,lie:0,sniff:0,groom:0};
    const sequence = p.cat ? ['sit','groom','lie','stand'] : ['lie','sit','stand','sniff'];
    const clock = time + p.phase * 9, interval = p.cat ? 21 : 25;
    const step = Math.floor(clock/interval), phase = smooth((clock%interval)/1.5);
    const previous = sequence[((step-1)%4+4)%4], current = sequence[step%4];
    const weights = mode => ({sit:mode==='sit'||mode==='groom'?1:0,lie:mode==='lie'?1:0,sniff:mode==='sniff'?1:0,groom:mode==='groom'?1:0});
    const a=weights(previous),b=weights(current);return Object.fromEntries(Object.keys(a).map(k=>[k,mix(a[k],b[k],phase)]));
  }
  function drawAnimal(p) {
    const cat=p.cat,pose=animalPose(p),{sit,lie,sniff,groom}=pose;
    const long=cat?.245:p.breed===2?.31:.365,wide=cat?.093:p.breed===2?.119:.139;
    const standY=cat?.285:p.breed===2?.35:.415;
    const breath=Math.sin(time*(cat?1.9:1.45)+p.phase)*.006;
    const bodyY=mix(mix(standY,cat?.265:.285,sit),cat?.135:.165,lie);
    const bodyHeight=mix(mix(cat?.112:.158,cat?.175:.198,sit),cat?.094:.123,lie)+breath*.5;
    const bodyLength=p.sleeping?long*.76:mix(long,cat?.147:long*.80,sit);
    const bodyPitch=cat?0:sit*.40;
    instanceSphere(p,[0,bodyY,.018+sit*.045],[wide*(p.sleeping?1.15:1),bodyHeight,bodyLength],p.color,false,[bodyPitch,0,0]);
    instanceSphere(p,[0,bodyY+(.015+sit*.045),-long*.45],[wide*.84,bodyHeight*.89,long*.53],p.color);
    instanceSphere(p,[0,bodyY-.022,long*.56],[wide*.85,bodyHeight*.86,long*.49],p.color);
    let headY=mix(mix(standY+(cat?.055:.125),cat?.474:.54,sit),cat?.208:.28,lie);
    headY=mix(headY,cat?.22:.175,sniff);headY-=groom*(.085+Math.sin(time*2.6+p.phase)*.009);
    const headZ=mix(-long-.014,cat?-.105:-long*.64,sit)-lie*.045-sniff*.06;
    if(p.sleeping)headY=.147+breath*.4;
    const look=p.sleeping?.55:Math.sin(time*.49+p.phase)*.065+(groom?-.27*groom:0);
    const headPitch=p.sleeping?-.08:-sniff*.48-groom*.30+Math.sin(time*.7+p.phase)*.025;
    const head=[p.sleeping?.055:groom*-.041,headY,p.sleeping?-long*.44:headZ];
    function headPoint(point){
      const cp=Math.cos(headPitch),sp=Math.sin(headPitch),cy=Math.cos(look),sy=Math.sin(look);
      const y=point[1]*cp-point[2]*sp,z=point[1]*sp+point[2]*cp;
      return [head[0]+point[0]*cy+z*sy,head[1]+y,head[2]-point[0]*sy+z*cy];
    }
    instanceRod(p,[0,bodyY+.045,-long*.57],head,cat?.065:.088,p.color);
    instanceSphere(p,head,[cat?.076:.104,cat?.073:.097,cat?.073:.100],p.color,false,[headPitch,look,0]);
    // Cheek, jaw and an elongated muzzle distinguish cats from street dogs.
    instanceSphere(p,headPoint([0,-.026,-.039]),[cat?.058:.073,cat?.034:.045,cat?.047:.075],p.color);
    instanceSphere(p,headPoint([0,-.021,cat?-.083:-.135]),[cat?.028:.052,cat?.020:.034,cat?.028:.060],cat?'#53584e':p.breed===0?'#6d6858':p.accent);
    instanceSphere(p,headPoint([0,-.013,cat?-.105:-.181]),[cat?.012:.020,cat?.009:.015,cat?.010:.014],'#242925');
    if (!cat&&!p.lod) instanceSphere(p,[0,bodyY-.06,-long*.41],[wide*.66,bodyHeight*.64,.085],p.accent,false,[bodyPitch,0,0]);
    for(const side of [-1,1]){
      const earTwitch=Math.sin(time*1.15+p.phase+side)*(p.sleeping?.015:.065);
      const erect=cat||p.breed!==1;
      instanceSphere(p,headPoint([side*(cat?.051:.071),cat?.079:.084,.008]),
        erect?[cat?.029:.043,cat?.066:.081,cat?.026:.040]:[.048,.077,.027],p.color,erect,[headPitch,look,side*.15+earTwitch]);
      if(!p.lod){
        if(erect)instanceSphere(p,headPoint([side*(cat?.051:.071),cat?.083:.089,-.013]),[cat?.013:.020,cat?.038:.047,.010],cat?'#68665f':'#8b826e',true,[headPitch,look,side*.13+earTwitch]);
        if(p.sleeping)instanceRod(p,headPoint([side*.023,.021,-.066]),headPoint([side*.043,.018,-.061]),.002,'#252b26');
        else{
          instanceSphere(p,headPoint([side*(cat?.031:.043),cat?.020:.022,cat?-.061:-.086]),[cat?.011:.010,cat?.007:.008,.008],cat?'#a5ad72':'#c2ad82');
          instanceSphere(p,headPoint([side*(cat?.031:.043),cat?.021:.022,cat?-.068:-.093]),[cat?.0028:.004,cat?.006:.005,.003],'#232820');
        }
        if(cat)for(const line of [-1,1])instanceRod(p,headPoint([side*.022,-.024+line*.005,-.087]),headPoint([side*.075,-.028+line*.008,-.080]),.0013,'#93988a');
      }
      for(const front of [true,false]){
        const phase=(p.stridePhase||0)+(side<0?Math.PI:0)+(front?0:Math.PI);
        const weight=p.paceFactor||0,swing=Math.sin(phase)*weight, lift=Math.max(0,-Math.cos(phase))*(cat?.026:.036)*weight;
        const rootZ=front?-long*.58:long*.56,rootY=bodyY+(front?.015:-.015);
        const root=[side*wide*.69,rootY,rootZ];
        const pawZ=(p.sleeping?(front?-long*.50:long*.50):mix(mix(rootZ-swing*(cat?.065:.10),front?-long*.60:long*.62,sit),front?-long-.072:long*.67,lie))-(front&&side<0?groom*.055:0);
        const pawY=.026+lift+(front&&side<0?groom*.30:0);
        const paw=[side*wide*.72,pawY,pawZ];
        if(front){
          const elbow=[side*wide*.70,mix(rootY*.56,.068,lie),mix(rootZ+.035,rootZ+.052,lie)];
          const wrist=[paw[0],pawY+.035,pawZ+.012];
          instanceSphere(p,[root[0],rootY+.014,rootZ+.005],[cat?.039:.056,cat?.056:.076,cat?.069:.097],p.color);
          instanceRod(p,root,elbow,cat?.025:.036,p.color);instanceRod(p,elbow,wrist,cat?.020:.026,p.color);
          instanceRod(p,wrist,paw,cat?.017:.023,p.color);
        }else{
          const stifle=[side*wide*.86,mix(mix(rootY*.56,.115,sit),.077,lie),rootZ-.07-sit*.055];
          const hock=[side*wide*.78,mix(.09,.055,sit+lie),rootZ+.052];
          instanceSphere(p,[root[0],rootY-.019,rootZ-.005],[cat?.054:.073,cat?.070:.100,cat?.079:.105],p.color);
          instanceRod(p,root,stifle,cat?.034:.047,p.color);instanceRod(p,stifle,hock,cat?.022:.029,p.color);instanceRod(p,hock,paw,cat?.016:.022,p.color);
        }
        const pawColor=!cat&&p.breed===1?p.accent:p.color;
        instanceSphere(p,[paw[0],pawY,pawZ-.017],[cat?.030:.043,.026,cat?.043:.060],pawColor);
        if(!p.lod&&front)for(const toe of [-1,1])instanceSphere(p,[paw[0]+toe*(cat?.011:.015),pawY-.003,pawZ-(cat?.040:.053)],[cat?.010:.013,.017,.014],pawColor);
      }
    }
    const wag=Math.sin(time*(cat?.74:1.3)+p.phase)*(cat?.024:.064);
    const tailRoot=[0,bodyY+.035,long*.80];
    const tail=p.sleeping?[tailRoot,[.06,.053,long+.015],[.16,.042,long*.8],[.20,.036,.01],[.16,.034,-long*.5]]:[tailRoot,[wag*.25,mix(bodyY+.085,.065,sit+lie),long+.04],[wag*.65+sit*.11,mix(bodyY+.16,.050,sit+lie),long+.18],
      [wag+sit*.20,mix(bodyY+(cat?.225:.205),.043,sit+lie),long+(cat?.28:.235)],[wag+sit*.26,mix(bodyY+(cat?.26:.16),.037,sit+lie),long+(cat?.35:.175)]];
    for(let i=1;i<tail.length;i++){
      instanceRod(p,tail[i-1],tail[i],(cat?.016:.027)*(1-i*.12),p.color);
      if(!p.lod&&i<tail.length-1)instanceSphere(p,tail[i],[cat?.011:.018,cat?.011:.018,cat?.011:.018],p.color);
    }
  }

  function select(player) {
    const closeVendors = vendors.filter(p => distanceSq(p.center, player) < viewRange ** 2).sort((a, b) => distanceSq(a.center, player) - distanceSq(b.center, player)).slice(0, Math.floor(peopleLimit / 5));
    const walking = paths.filter(p => distanceSq(p.center, player) < viewRange ** 2 && !stalls.some(s => distanceSq(s.center, p.center) < (p.range + 1.8) ** 2)).sort((a, b) => distanceSq(a.center, player) - distanceSq(b.center, player)).slice(0, peopleLimit - closeVendors.length);
    visiblePeople = [...walking, ...closeVendors];
    const nearbyAnimals = creatures.filter(p => distanceSq(p.center, player) < viewRange ** 2).sort((a, b) => distanceSq(a.center, player) - distanceSq(b.center, player));
    const sleeping = nearbyAnimals.filter(p => p.sleeping).slice(0, mobile ? 2 : 4);
    visibleAnimals = [...sleeping,...nearbyAnimals.filter(p => !p.sleeping).slice(0, animalLimit-sleeping.length)];
    const visibleStalls = new Set(stalls.filter(s => distanceSq(s.center, player) < (viewRange + 12) ** 2).sort((a, b) => distanceSq(a.center, player) - distanceSq(b.center, player)).slice(0, mobile ? 8 : 12));
    for (const s of stalls) s.cart.visible = visibleStalls.has(s);
    lastSelection = { x: player.x, z: player.z };
    group.userData.visiblePedestrians = walking.length;
    group.userData.visibleVendors = closeVendors.length;
    group.userData.visibleAnimals = visibleAnimals.length;
    group.userData.visibleStalls = visibleStalls.size;
  }
  function update(dt, player = map.spawn) {
    const position = player?.position || player || map.spawn;
    time += Math.min(.1, Math.max(0, dt || 0)); selectionAge += dt || 0;
    if (selectionAge > .45 || distanceSq(position, lastSelection) > 10 ** 2) { select(position); selectionAge = 0; }
    sphereCount = 0; rodCount = 0; coneCount = 0; torsoCount = 0; overflows = 0;
    for (const actor of visiblePeople) {
      if (actor.vendor) {
        drawPerson({ ...actor, x: actor.center.x, z: actor.center.z, lod:distanceSq(actor.center,position)>(mobile?28:45)**2 });
      } else {
        const motion = sampleSidewalkMotion(actor,time);
        const point = pointAt(actor.segment,actor.t+motion.offset,actor.side,actor.offset);
        drawPerson({ ...actor,...motion,x:point.x,z:point.z,lod:distanceSq(point,position)>(mobile?28:45)**2 });
      }
    }
    for (const animal of visibleAnimals) {
      const motion=animal.range?sampleSidewalkMotion(animal,time):{yaw:animal.yaw,paceFactor:0,stridePhase:0};
      const point=animal.range?pointAt(animal.segment,animal.t+motion.offset,animal.side,animal.offset):animal.center;
      drawAnimal({...animal,...motion,stridePhase:motion.stridePhase*(animal.cat?3.375:2.7),x:point.x,z:point.z,lod:distanceSq(point,position)>(mobile?28:45)**2});
    }
    sphereInstances.count = sphereCount; rodInstances.count = rodCount; coneInstances.count = coneCount; torsoInstances.count = torsoCount;
    for (const mesh of batches) {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
    group.userData.capacityOverflows=overflows;
    group.userData.actorTriangles=batches.reduce((total,mesh)=>total+mesh.count*mesh.geometry.index.count/3,0);
    group.userData.visibleSleepingCats=visibleAnimals.filter(p=>p.sleeping).length;
  }
  group.userData = { pedestrianPaths: paths.length, streetFoodStalls: stalls.length, animals: creatures.length,
    sleepingCats:creatures.filter(p=>p.sleeping).length,rejectedSleepingSites,
    visiblePedestrians:0,visibleVendors:0,visibleAnimals:0,visibleSleepingCats:0,
    peopleBudget:peopleLimit,animalBudget:animalLimit,actorDrawCalls:4,actorTriangles:0,capacityOverflows:0,authoredBackdrop:true };
  update(0, map.spawn);
  return { group, update };
}

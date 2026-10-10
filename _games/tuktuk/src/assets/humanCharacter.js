import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const caches = new WeakMap();

/** Adult character, metres, ground origin, forward -Z. */
export function createHumanCharacter(THREE, {
  shirtColor = '#d8bd87', trousersColor = '#384b60', skinColor = '#ba865f',
  hairColor = '#292725', hairStyle = 'short', pose = 'standing', cap = false,
  seatHeight = .94, height = 1.73, lean = 0,
} = {}) {
  let cache = caches.get(THREE);
  if (!cache) {
    cache = {
      sphere: new THREE.SphereGeometry(1, 10, 6), detail: new THREE.SphereGeometry(1, 8, 4),
      tiny: new THREE.SphereGeometry(1, 6, 3), rod: new THREE.CylinderGeometry(1, 1, 1, 6),
      box: new THREE.BoxGeometry(1, 1, 1), tinted: new Map(), faces: new Map(),
      cloth: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .88 }),
      skin: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .73 }),
      hair: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .57 }),
      eyes: new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .25 }),
    };
    caches.set(THREE, cache);
  }
  const root = new THREE.Group(); root.name = 'Adult Bangkok pedestrian';
  const body = new THREE.Group(); body.name = 'Character torso pivot';
  const seated = pose !== 'standing', driving = pose === 'driving';
  const hipY = seated ? seatHeight : .944;
  body.position.y = hipY; body.rotation.z = lean; root.add(body);
  const head = new THREE.Group(); head.name = 'Character head pivot'; head.position.set(0, .661, -.009); body.add(head);

  function coloredGeometry(geometry, color) {
    const key = `${geometry.id}:${color}`;
    if (!cache.tinted.has(key)) {
      const g = geometry.clone(), c = new THREE.Color(color);
      const colors = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < colors.length; i += 3) { colors[i] = c.r; colors[i + 1] = c.g; colors[i + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      cache.tinted.set(key, g);
    }
    return cache.tinted.get(key);
  }
  function mesh(parent, geometry, material, color) {
    const object = new THREE.Mesh(coloredGeometry(geometry, color), material);
    object.castShadow = true; object.receiveShadow = true; parent.add(object); return object;
  }
  function oval(parent, p, scale, color, material = cache.cloth, geometry = cache.detail) {
    const o = mesh(parent, geometry, material, color); o.position.set(...p); o.scale.set(...scale); return o;
  }
  function box(parent, p, scale, color, material = cache.cloth) {
    const o = mesh(parent, cache.box, material, color); o.position.set(...p); o.scale.set(...scale); return o;
  }
  function rod(parent, a, b, radius, color, material = cache.cloth) {
    const from = new THREE.Vector3(...a), to = new THREE.Vector3(...b), direction = to.clone().sub(from);
    const o = mesh(parent, cache.rod, material, color); o.position.copy(from.add(to).multiplyScalar(.5));
    o.scale.set(radius, direction.length(), radius); o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize()); return o;
  }
  function face(parent, points, color, material = cache.cloth) {
    const key = points.flat().join(',');
    if (!cache.faces.has(key)) {
      const g = new THREE.BufferGeometry(), indices = [];
      for (let i = 1; i < points.length - 1; i++) indices.push(0, i, i + 1);
      g.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3)); g.setIndex(indices); g.computeVertexNormals(); cache.faces.set(key, g);
    }
    return mesh(parent, cache.faces.get(key), material, color);
  }
  function loft(rings, segments = 12) {
    const positions = [], indices = [];
    rings.forEach(([y, w, d, z = 0]) => {
      for (let i = 0; i < segments; i++) {
        const a = i / segments * Math.PI * 2;
        positions.push(Math.cos(a) * w, y, z + Math.sin(a) * d);
      }
    });
    for (let row = 0; row < rings.length - 1; row++) for (let i = 0; i < segments; i++) {
      const a = row * segments + i, b = row * segments + (i + 1) % segments;
      indices.push(a, a + segments, b, b, a + segments, b + segments);
    }
    for (let i = 1; i < segments - 1; i++) {
      indices.push(0, i, i + 1);
      const last = (rings.length - 1) * segments; indices.push(last, last + i + 1, last + i);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.setIndex(indices); g.computeVertexNormals(); return g;
  }

  // An adult torso with a real waist, chest, shoulders and neck opening.
  const torsoGeometry = cache.torso || (cache.torso = loft([[.018, .143, .103], [.102, .133, .098], [.245, .152, .113, -.008], [.370, .176, .112, -.011], [.417, .186, .093], [.462, .132, .079], [.494, .052, .043]]));
  mesh(body, torsoGeometry, cache.cloth, shirtColor);
  oval(body, [0, -.012, .007], [.143, .085, .111], trousersColor);
  const seam = new THREE.Color(shirtColor).multiplyScalar(.80).getStyle();
  const collar = new THREE.Color(shirtColor).multiplyScalar(1.10).getStyle();
  rod(body, [0, .05, -.103], [0, .444, -.106], .0032, seam);
  for (const side of [-1, 1]) {
    const points = [[side * .045, .492, -.033], [side * .092, .463, -.081], [side * .041, .403, -.105], [side * .013, .457, -.056]];
    face(body, side > 0 ? points : points.reverse(), collar);
  }
  for (const y of [.12, .235, .345]) oval(body, [0, y, -.116], [.0048, .0048, .0026], '#a5a18e', cache.cloth, cache.tiny);
  box(body, [-.083, .314, -.116], [.062, .070, .0025], collar);
  rod(body, [-.116, .348, -.119], [-.050, .348, -.119], .0022, seam);
  rod(body, [0, .468, 0], [0, .553, -.003], .038, skinColor, cache.skin);

  // Head shape narrows at the jaw instead of using a spherical mascot head.
  if (!cache.head) {
    const g = new THREE.SphereGeometry(1, 14, 10), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i), jaw = y < -.28 ? 1 - (-y - .28) * .18 : 1;
      const front = p.getZ(i) < 0;
      p.setXYZ(i, p.getX(i) * .089 * jaw, y * .122, p.getZ(i) * (front ? .094 : .102) + (y < -.25 ? .010 : 0));
    }
    g.computeVertexNormals(); cache.head = g;
  }
  mesh(head, cache.head, cache.skin, skinColor);
  for (const side of [-1, 1]) {
    oval(head, [side * .088, -.001, .004], [.019, .035, .015], skinColor, cache.skin);
    const innerEar = new THREE.Color(skinColor).multiplyScalar(.78).getStyle();
    oval(head, [side * .102, -.001, .001], [.0035, .024, .009], innerEar, cache.skin, cache.tiny);
    oval(head, [side * .035, .025, -.089], [.024, .010, .0065], '#dad7c5', cache.eyes, cache.tiny);
    oval(head, [side * .035, .025, -.095], [.009, .009, .0028], '#554334', cache.eyes, cache.tiny);
    oval(head, [side * .035, .025, -.098], [.0042, .0062, .0015], '#232322', cache.eyes, cache.tiny);
    rod(head, [side * .011, .041, -.089], [side * .057, .038, -.085], .0038, hairColor, cache.hair);
    rod(head, [side * .011, .035, -.092], [side * .057, .031, -.086], .0022, skinColor, cache.skin);
  }
  // A bridge, small nostrils and restrained lips retain a human facial scale.
  oval(head, [0, .012, -.093], [.013, .029, .015], skinColor, cache.skin);
  oval(head, [0, -.009, -.110], [.017, .012, .018], skinColor, cache.skin);
  for (const side of [-1, 1]) oval(head, [side * .014, -.013, -.109], [.009, .008, .011], skinColor, cache.skin, cache.tiny);
  const lips = new THREE.Color(skinColor).lerp(new THREE.Color('#925b4f'), .35).getStyle();
  oval(head, [0, -.042, -.088], [.027, .0037, .005], lips, cache.skin, cache.tiny);
  oval(head, [0, -.049, -.087], [.023, .0043, .0045], lips, cache.skin, cache.tiny);

  if (!cache.hairCap) {
    const positions = [], indices = [], around = 14, rings = 6;
    for (let row = 0; row <= rings; row++) for (let i = 0; i <= around; i++) {
      const phi = i / around * Math.PI * 2;
      const theta = row / rings * (1.92 - .72 * Math.max(0, -Math.sin(phi)));
      positions.push(-Math.cos(phi) * Math.sin(theta) * .094, Math.cos(theta) * .125 + .014, Math.sin(phi) * Math.sin(theta) * .104 + .008);
      if (row < rings && i < around) { const a = row * (around + 1) + i; indices.push(a, a + around + 1, a + 1, a + 1, a + around + 1, a + around + 2); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.setIndex(indices); g.computeVertexNormals(); cache.hairCap = g;
  }
  mesh(head, cache.hairCap, cache.hair, hairColor);
  if (hairStyle === 'bob' || hairStyle === 'long') {
    oval(head, [0, -.055, .068], [.094, hairStyle === 'long' ? .141 : .095, .046], hairColor, cache.hair, cache.sphere);
    for (const side of [-1, 1]) oval(head, [side * .078, -.019, .030], [.026, .105, .041], hairColor, cache.hair);
  }
  if (cap) {
    oval(head, [0, .113, .006], [.098, .040, .106], '#344d51', cache.cloth, cache.sphere);
    const visor = oval(head, [0, .097, -.095], [.093, .009, .065], '#2d454a'); visor.rotation.x = -.12;
  }

  const armPoints = [];
  for (const side of [-1, 1]) {
    const shoulder = [side * .163, .410, -.007];
    const elbow = driving ? [side * .212, .240, -.170] : seated ? [side * .188, .188, -.095] : [side * .199, .145, .010];
    const hand = driving ? [side * .283, 1.092 - hipY, -.320] : seated ? [side * .119, .095, -.265] : [side * .194, -.104, -.006];
    rod(body, shoulder, elbow, .047, shirtColor);
    oval(body, elbow, [.035, .038, .035], skinColor, cache.skin);
    rod(body, elbow, hand, .030, skinColor, cache.skin);
    const palm = oval(body, hand, [.029, .047, .024], skinColor, cache.skin);
    palm.rotation.x = seated ? -.73 : 0;
    for (let finger = 0; finger < 3; finger++) {
      const x = hand[0] + (finger - 1) * .013;
      const end = [x, hand[1] - (seated ? .026 : .061), hand[2] - (seated ? .041 : .008)];
      rod(body, [x, hand[1] - .014, hand[2] - .002], end, .006, skinColor, cache.skin);
    }
    oval(body, [hand[0] - side * .031, hand[1] - .005, hand[2] - .003], [.013, .022, .012], skinColor, cache.skin, cache.tiny);
    armPoints.push({ shoulder, elbow, hand });
    const hip = [side * .090, hipY - .009, .003];
    const knee = seated ? [side * (driving ? .141 : .107), hipY + .024, driving ? -.268 : -.381] : [side * .097, .510, -.006];
    const ankle = seated ? [side * (driving ? .181 : .116), .612, driving ? -.387 : -.274] : [side * .10, .105, .004];
    rod(root, hip, knee, .067, trousersColor);
    oval(root, knee, [.067, .061, .063], trousersColor);
    rod(root, knee, ankle, .043, trousersColor);
    oval(root, [ankle[0], ankle[1] - .014, ankle[2]], [.043, .047, .041], '#4b5360');
    const shoeY = seated ? .586 : .048;
    oval(root, [ankle[0], shoeY, ankle[2] - .043], [.059, .046, .123], '#343b40', cache.cloth, cache.sphere);
    oval(root, [ankle[0], shoeY - .029, ankle[2] - .041], [.061, .015, .125], '#676b67');
    for (let lace = 0; lace < 3; lace++) rod(root, [ankle[0] - .031, shoeY + .042, ankle[2] - .025 - lace * .014], [ankle[0] + .031, shoeY + .042, ankle[2] - .025 - lace * .014], .0018, '#b9b5a4');
  }

  // Static colors merge into a few material meshes at each retained pivot.
  function batch(parent) {
    const batches = new Map();
    for (const part of [...parent.children]) {
      if (!part.isMesh) continue;
      part.updateMatrix(); if (!batches.has(part.material)) batches.set(part.material, []);
      batches.get(part.material).push(part.geometry.clone().applyMatrix4(part.matrix)); parent.remove(part);
    }
    for (const [material, geometries] of batches) {
      const object = new THREE.Mesh(mergeGeometries(geometries), material);
      object.castShadow = true; object.receiveShadow = true; parent.add(object); geometries.forEach(g => g.dispose());
    }
  }
  batch(head); batch(body); batch(root);
  root.scale.setScalar(height / 1.73);
  root.userData = { body, head, arms: [], armPoints, baseLean: lean, pose, standingHeight: height, forwardAxis: '-Z' };
  return root;
}

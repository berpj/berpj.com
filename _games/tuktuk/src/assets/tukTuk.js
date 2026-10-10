import { createHumanCharacter } from './humanCharacter.js';

/**
 * Authored Bangkok tuk-tuk, measured in metres. Ground is y=0, forward is -Z.
 * No external art or fonts are required. Geometry and materials are reused.
 */
export function createTukTuk(THREE, { livery = 'blue' } = {}) {
  const root = new THREE.Group();
  root.name = 'Bangkok classic tuk-tuk';
  const mesh = (geometry, material, parent = root) => {
    const object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const standard = (color, roughness = 0.55, metalness = 0) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const colors = {
    blue: ['#0875aa', '#cf2935'],
    red: ['#c63632', '#164f83'],
    green: ['#167957', '#bb303a'],
  };
  const palette = colors[livery] || colors.blue;
  const paint = standard(palette[0], 0.3, 0.4);
  const red = standard(palette[1], 0.32, 0.35);
  const yellow = standard('#f9b52a', 0.35, 0.25);
  const chrome = standard('#d0d7d8', 0.23, 0.91);
  const dullMetal = standard('#515b5e', 0.6, 0.6);
  const tire = standard('#171a1b', 0.86);
  const rubber = standard('#242525', 0.74);
  const fabric = standard('#202726', 0.88);
  fabric.side = THREE.DoubleSide;
  const seats = standard('#853b31', 0.74);
  const dark = standard('#202627', 0.66, 0.2);
  const glass = new THREE.MeshStandardMaterial({
    color: '#95c8d2', roughness: 0.16, metalness: 0.1,
    transparent: true, opacity: 0.19, depthWrite: false,
  });
  const headlight = new THREE.MeshStandardMaterial({
    color: '#fff2ce', roughness: 0.24, metalness: 0.2,
    emissive: '#ffe4a1', emissiveIntensity: 0.38,
  });
  const taillight = new THREE.MeshStandardMaterial({
    color: '#c8221c', roughness: 0.25,
    emissive: '#a91a13', emissiveIntensity: 0.35,
  });

  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  const unitSphere = new THREE.SphereGeometry(1, 12, 8);
  const tubeGeometries = new Map();
  function box(w, h, d, material, x, y, z, parent = root) {
    const object = mesh(unitBox, material, parent);
    object.scale.set(w, h, d);
    object.position.set(x, y, z);
    return object;
  }
  function ellipsoid(rx, ry, rz, material, x, y, z, parent = root) {
    const object = mesh(unitSphere, material, parent);
    object.scale.set(rx, ry, rz);
    object.position.set(x, y, z);
    return object;
  }
  function rod(a, b, radius, material = chrome, parent = root, segments = 8) {
    const start = new THREE.Vector3(...a);
    const end = new THREE.Vector3(...b);
    const direction = end.clone().sub(start);
    const key = `${radius}:${segments}`;
    let geometry = tubeGeometries.get(key);
    if (!geometry) {
      geometry = new THREE.CylinderGeometry(radius, radius, 1, segments);
      tubeGeometries.set(key, geometry);
    }
    const object = mesh(geometry, material, parent);
    object.scale.y = direction.length();
    object.position.copy(start.add(end).multiplyScalar(0.5));
    object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    return object;
  }
  function rail(points, radius = 0.017, material = chrome, parent = root) {
    const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
    return mesh(new THREE.TubeGeometry(curve, Math.max(10, points.length * 5), radius, 6, false), material, parent);
  }
  function roundedBox(w, h, d, r, material, x, y, z, parent = root) {
    const left = -w / 2, bottom = -h / 2;
    const shape = new THREE.Shape();
    shape.moveTo(left + r, bottom);
    shape.lineTo(left + w - r, bottom);
    shape.quadraticCurveTo(left + w, bottom, left + w, bottom + r);
    shape.lineTo(left + w, bottom + h - r);
    shape.quadraticCurveTo(left + w, bottom + h, left + w - r, bottom + h);
    shape.lineTo(left + r, bottom + h);
    shape.quadraticCurveTo(left, bottom + h, left, bottom + h - r);
    shape.lineTo(left, bottom + r);
    shape.quadraticCurveTo(left, bottom, left + r, bottom);
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: d - 0.012, steps: 1, bevelEnabled: true,
      bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 1, curveSegments: 3,
    });
    geometry.translate(0, 0, -d / 2 + 0.006);
    const object = mesh(geometry, material, parent);
    object.position.set(x, y, z);
    return object;
  }
  function cylinder(radius, length, material, x, y, z, parent = root, rotation = Math.PI / 2) {
    const object = mesh(new THREE.CylinderGeometry(radius, radius, length, 16), material, parent);
    object.rotation.z = rotation;
    object.position.set(x, y, z);
    return object;
  }
  function label(text, bg, fg, w, h, x, y, z, rotationY = 0, parent = root) {
    if (typeof document === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = fg;
    ctx.lineWidth = 5;
    ctx.strokeRect(8, 8, 368, 112);
    ctx.fillStyle = fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 54px sans-serif';
    ctx.fillText(text, 192, 67, 340);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshStandardMaterial({
      map: texture, roughness: 0.72, metalness: 0.1,
      polygonOffset: true, polygonOffsetFactor: -1,
    });
    const object = mesh(new THREE.PlaneGeometry(w, h), material, parent);
    object.position.set(x, y, z);
    object.rotation.y = rotationY;
    return object;
  }

  const body = new THREE.Group();
  body.name = 'Painted body and cabin';
  root.add(body);

  // A narrow motorcycle nose ahead of a broad, open two-person passenger body.
  roundedBox(1.17, 0.11, 1.8, 0.045, paint, 0, 0.47, 0.4, body);
  roundedBox(1.19, 0.27, 0.14, 0.075, paint, 0, 0.66, 1.25, body);
  roundedBox(1.18, 0.032, 0.16, 0.015, yellow, 0, 0.82, 1.245, body);
  roundedBox(1.08, 0.04, 1.52, 0.02, dark, 0, 0.548, 0.39, body);
  box(1.08, 0.025, 0.46, dullMetal, 0, 0.568, 0.04, body);
  // The passenger step is visible below either open doorway.
  for (const side of [-1, 1]) {
    roundedBox(0.13, 0.052, 0.8, 0.018, dullMetal, side * 0.62, 0.34, 0.26, body);
    for (let stripe = 0; stripe < 5; stripe++) {
      box(0.095, 0.007, 0.014, chrome, side * 0.62, 0.37, -0.04 + stripe * 0.15, body);
    }
    roundedBox(0.085, 0.16, 1.55, 0.03, paint, side * 0.57, 0.57, 0.48, body);
    box(0.089, 0.028, 1.51, yellow, side * 0.571, 0.641, 0.48, body);
    roundedBox(0.085, 0.32, 0.53, 0.04, red, side * 0.58, 0.77, 0.99, body);
    rod([side * 0.58, 0.95, 0.68], [side * 0.58, 0.95, 1.21], 0.023, chrome, body);
    rail([[side * 0.6, 0.64, 0.57], [side * 0.6, 0.94, 0.59], [side * 0.6, 1.04, 0.79]], 0.017, chrome, body);
  }
  // Rear bench, separate seat cushions, and stitched-looking horizontal seams.
  roundedBox(1.04, 0.13, 0.45, 0.05, seats, 0, 0.78, 0.9, body);
  roundedBox(1.04, 0.29, 0.105, 0.035, seats, 0, 0.98, 1.16, body);
  box(0.01, 0.007, 0.4, dark, 0, 0.848, 0.88, body);
  rod([-0.5, 0.933, 1.1], [0.5, 0.933, 1.1], 0.007, red, body);
  rod([-0.5, 1.024, 1.1], [0.5, 1.024, 1.1], 0.007, red, body);

  // Chassis, differential and rear suspension, all below the body sill.
  box(0.59, 0.16, 1.43, dark, 0, 0.33, 0.33);
  cylinder(0.057, 1.16, dullMetal, 0, 0.255, 0.79);
  ellipsoid(0.16, 0.12, 0.13, dullMetal, 0, 0.285, 0.79);
  box(0.33, 0.18, 0.38, dullMetal, 0, 0.41, 0.94);
  for (const side of [-1, 1]) {
    rod([side * 0.46, 0.49, 0.54], [side * 0.5, 0.27, 0.87], 0.027, dullMetal);
    rod([side * 0.44, 0.26, 0.36], [side * 0.44, 0.28, 1.15], 0.016, dark);
  }
  rail([[0.25, 0.28, 0.53], [0.39, 0.24, 0.73], [0.4, 0.23, 1.32]], 0.028, dullMetal);

  const wheelGeometry = new THREE.TorusGeometry(0.186, 0.066, 8, 20);
  const rimGeometry = new THREE.CylinderGeometry(0.13, 0.13, 0.102, 16);
  const hubGeometry = new THREE.CylinderGeometry(0.035, 0.035, 0.13, 10);
  const wheels = [];
  function wheel(x, y, z, parent) {
    const group = new THREE.Group();
    group.name = wheels.length === 0 ? 'Front wheel' : 'Rear wheel';
    group.position.set(x, y, z);
    parent.add(group);
    const tireMesh = mesh(wheelGeometry, tire, group);
    tireMesh.rotation.y = Math.PI / 2;
    const rim = mesh(rimGeometry, chrome, group);
    rim.rotation.z = Math.PI / 2;
    const hub = mesh(hubGeometry, dullMetal, group);
    hub.rotation.z = Math.PI / 2;
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2;
      rod([0.057, Math.cos(a) * 0.043, Math.sin(a) * 0.043],
        [0.057, Math.cos(a + 0.12) * 0.121, Math.sin(a + 0.12) * 0.121],
        0.013, chrome, group);
      rod([-0.057, Math.cos(a) * 0.043, Math.sin(a) * 0.043],
        [-0.057, Math.cos(a + 0.12) * 0.121, Math.sin(a + 0.12) * 0.121],
        0.013, chrome, group);
    }
    wheels.push(group);
    return group;
  }

  const steering = new THREE.Group();
  steering.name = 'Front fork steering pivot';
  steering.position.set(0, 0.72, -0.97);
  root.add(steering);
  wheel(0, -0.468, -0.13, steering);
  for (const side of [-1, 1]) {
    rod([side * 0.09, 0.07, 0], [side * 0.09, -0.47, -0.13], 0.028, chrome, steering);
    rod([side * 0.09, -0.25, -0.08], [side * 0.09, -0.47, -0.13], 0.034, red, steering);
  }
  // Front fender arch follows the single tyre without obscuring it.
  const fenderGeometry = new THREE.TorusGeometry(0.282, 0.045, 6, 16, Math.PI * 0.84);
  const frontFender = mesh(fenderGeometry, red, steering);
  frontFender.rotation.set(0, Math.PI / 2, Math.PI * 0.08);
  frontFender.position.set(0, -0.464, -0.13);
  frontFender.scale.z = 1.7;
  wheel(-0.595, 0.252, 0.79, root);
  wheel(0.595, 0.252, 0.79, root);
  for (const side of [-1, 1]) {
    const rearFender = mesh(new THREE.TorusGeometry(0.292, 0.07, 6, 16, Math.PI), paint, body);
    rearFender.rotation.y = Math.PI / 2;
    rearFender.position.set(side * 0.595, 0.26, 0.79);
    rearFender.scale.z = 1.25;
    box(0.155, 0.17, 0.028, rubber, side * 0.595, 0.16, 1.055, body);
  }

  // Sloped shield, curved motorcycle tank, twin round lamps and handlebars.
  const shield = roundedBox(0.67, 0.39, 0.16, 0.11, paint, 0, 0.79, -0.87, body);
  shield.rotation.x = -0.14;
  roundedBox(0.69, 0.048, 0.18, 0.022, yellow, 0, 0.79, -0.89, body);
  ellipsoid(0.245, 0.14, 0.31, red, 0, 0.74, -0.51, body);
  roundedBox(0.35, 0.075, 0.42, 0.055, rubber, 0, 0.845, -0.35, body);
  rod([0, 0.82, -0.93], [0, 1.13, -0.76], 0.026, chrome);
  const handlebars = rail([[-0.32, 1.09, -0.71], [-0.23, 1.15, -0.78], [0, 1.135, -0.8], [0.23, 1.15, -0.78], [0.32, 1.09, -0.71]], 0.019);
  for (const side of [-1, 1]) {
    rod([side * 0.24, 1.125, -0.745], [side * 0.35, 1.08, -0.70], 0.024, rubber);
    rod([side * 0.25, 1.13, -0.78], [side * 0.39, 1.35, -0.79], 0.009, chrome);
    ellipsoid(0.075, 0.045, 0.018, chrome, side * 0.395, 1.35, -0.79);
    const lampRim = mesh(new THREE.TorusGeometry(0.088, 0.012, 6, 16), chrome);
    lampRim.position.set(side * 0.208, 0.88, -1.016);
    lampRim.rotation.y = Math.PI;
    ellipsoid(0.079, 0.079, 0.026, headlight, side * 0.208, 0.88, -1.018);
    ellipsoid(0.025, 0.027, 0.023, yellow, side * 0.305, 0.793, -1.005);
    roundedBox(0.105, 0.058, 0.025, 0.017, taillight, side * 0.46, 0.72, 1.327, body);
  }
  roundedBox(0.30, 0.13, 0.026, 0.014, yellow, 0, 0.618, -1.001, body);
  label('กท ๒๕๖๙', '#e9b431', '#24231d', 0.283, 0.108, 0, 0.622, -1.019, Math.PI, body);
  roundedBox(0.34, 0.145, 0.027, 0.012, yellow, 0, 0.665, 1.329, body);
  label('กท ๒๕๖๙', '#e9b431', '#24231d', 0.322, 0.127, 0, 0.665, 1.345, 0, body);
  rail([[-0.57, 0.52, 1.36], [-0.38, 0.48, 1.385], [0.38, 0.48, 1.385], [0.57, 0.52, 1.36]], 0.024, chrome, body);

  const canopy = new THREE.Group();
  canopy.name = 'Canvas canopy and chrome frame';
  root.add(canopy);
  for (const side of [-1, 1]) {
    rod([side * 0.54, 0.66, -0.36], [side * 0.64, 1.72, -0.68], 0.019, chrome, canopy);
    rod([side * 0.55, 0.68, 1.18], [side * 0.65, 1.72, 1.18], 0.022, chrome, canopy);
    rail([[side * 0.64, 1.72, -0.68], [side * 0.69, 1.75, -0.4], [side * 0.69, 1.75, 0.85], [side * 0.65, 1.72, 1.22]], 0.022, yellow, canopy);
    rod([side * 0.56, 1.1, 1.16], [side * 0.56, 1.64, 1.16], 0.012, chrome, canopy);
  }
  const positions = [], indices = [], uvs = [];
  const nx = 16, nz = 8;
  const roofPoint = (u, v) => {
    const x = (u - 0.5) * 1.40;
    const z = -0.73 + v * 2.01;
    const corner = 1 - Math.pow(Math.abs(v - 0.5) * 2, 12) * 0.055;
    return [x * corner, 1.85 - Math.pow(Math.abs(x) / 0.7, 2.8) * 0.12 - Math.pow(Math.abs(v - 0.5) * 2, 8) * 0.045, z];
  };
  for (let zi = 0; zi <= nz; zi++) {
    for (let xi = 0; xi <= nx; xi++) {
      positions.push(...roofPoint(xi / nx, zi / nz));
      uvs.push(xi / nx, zi / nz);
      if (zi < nz && xi < nx) {
        const a = zi * (nx + 1) + xi, b = a + nx + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    }
  }
  const roofGeometry = new THREE.BufferGeometry();
  roofGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  roofGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  roofGeometry.setIndex(indices);
  roofGeometry.computeVertexNormals();
  mesh(roofGeometry, fabric, canopy);
  for (const v of [0, 0.5, 1]) {
    rail(Array.from({ length: 9 }, (_, i) => roofPoint(i / 8, v).map((n, axis) => axis === 1 ? n - 0.026 : n)), 0.012, chrome, canopy);
  }
  for (const v of [0, 1]) {
    rail(Array.from({ length: 17 }, (_, i) => roofPoint(i / 16, v)), 0.022, yellow, canopy);
  }
  // A compact transparent screen keeps the driver's face and open cabin visible.
  const screen = box(0.69, 0.245, 0.009, glass, 0, 1.38, -0.795, canopy);
  screen.rotation.x = -0.14;
  rod([-0.35, 1.258, -0.78], [0.35, 1.258, -0.78], 0.01, chrome, canopy);
  rod([-0.35, 1.5, -0.81], [0.35, 1.5, -0.81], 0.012, chrome, canopy);
  // Thin rear curtain below the arch, with an open view through to the riders.
  roundedBox(1.19, 0.13, 0.027, 0.025, fabric, 0, 1.662, 1.25, canopy);
  label('BANGKOK', '#202726', '#f1c25b', 0.59, 0.081, 0, 1.658, 1.266, 0, canopy);

  function person({ x, z, shirtColor, trousersColor, skinColor, hairColor, driver = false, lean = 0 }) {
    const character = createHumanCharacter(THREE, {
      shirtColor, trousersColor, skinColor, hairColor, lean,
      pose: driver ? 'driving' : 'sitting', cap: driver,
      hairStyle: driver || x < 0 ? 'short' : 'bob', seatHeight: .94,
    });
    character.name = driver ? 'Driver at handlebars' : 'Seated adult passenger';
    character.position.set(x, 0, z);
    root.add(character);
    return character;
  }
  const driver = person({ x: 0, z: -0.39, shirtColor: '#bcc3ab', trousersColor: '#293139', skinColor: '#aa7550', hairColor: '#272421', driver: true });
  const passengers = [
    person({ x: -0.25, z: 0.9, shirtColor: '#e0c28e', trousersColor: '#374554', skinColor: '#d8a27d', hairColor: '#443427', lean: -0.035 }),
    person({ x: 0.25, z: 0.9, shirtColor: '#96b8af', trousersColor: '#3a383f', skinColor: '#b97e57', hairColor: '#282320', lean: 0.035 }),
  ];

  // Batch static parts by material without importing a geometry utility. Keep
  // every animation pivot and the forearm references as separate objects.
  function batchDirectMeshes(parent, excluded = []) {
    const batches = new Map();
    for (const child of parent.children) {
      if (!child.isMesh || excluded.includes(child) || Array.isArray(child.material)) continue;
      if (!batches.has(child.material)) batches.set(child.material, []);
      batches.get(child.material).push(child);
    }
    for (const [material, parts] of batches) {
      if (parts.length < 2) continue;
      let vertexCount = 0, indexCount = 0;
      const transformed = parts.map(part => {
        part.updateMatrix();
        const geometry = part.geometry.clone().applyMatrix4(part.matrix);
        vertexCount += geometry.attributes.position.count;
        indexCount += geometry.index?.count ?? geometry.attributes.position.count;
        return geometry;
      });
      const positions = new Float32Array(vertexCount * 3);
      const normals = new Float32Array(vertexCount * 3);
      const uvs = new Float32Array(vertexCount * 2);
      const indices = vertexCount > 65535 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);
      let vertexOffset = 0, indexOffset = 0;
      for (const geometry of transformed) {
        positions.set(geometry.attributes.position.array, vertexOffset * 3);
        normals.set(geometry.attributes.normal.array, vertexOffset * 3);
        if (geometry.attributes.uv) uvs.set(geometry.attributes.uv.array, vertexOffset * 2);
        const count = geometry.index?.count ?? geometry.attributes.position.count;
        for (let i = 0; i < count; i++) {
          indices[indexOffset + i] = (geometry.index ? geometry.index.getX(i) : i) + vertexOffset;
        }
        vertexOffset += geometry.attributes.position.count;
        indexOffset += count;
        geometry.dispose();
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.computeBoundingSphere();
      parts.forEach(part => parent.remove(part));
      const combined = mesh(geometry, material, parent);
      combined.name = `Batched ${parts.length} static parts`;
    }
  }
  for (const group of [body, canopy, steering, ...wheels]) batchDirectMeshes(group);
  for (const rider of [driver, ...passengers]) {
    batchDirectMeshes(rider, rider.userData.arms);
    batchDirectMeshes(rider.userData.head);
  }
  batchDirectMeshes(root, [handlebars]);
  root.userData = {
    wheels, frontWheel: wheels[0], rearWheels: wheels.slice(1), steering, frontFork: steering,
    driver, passengers, body, canopy, handlebars,
    wheelRadius: 0.252, wheelbase: 1.89,
    dimensions: { length: 2.834, width: 1.448, height: 1.85 },
    forwardAxis: '-Z',
    exhaustPosition: { x: .40, y: .23, z: 1.34 },
    rearAxlePivot: { x: 0, y: .252, z: .79 },
  };
  return root;
}

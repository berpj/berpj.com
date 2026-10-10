import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Small authored traffic models, metres, Y up, forward -Z. */
export function createTrafficCar(THREE, color = '#d3bb65', type = 'car') {
  const root = new THREE.Group();
  root.name = type === 'bus' ? 'Bangkok city bus' : type === 'taxi' ? 'Bangkok taxi sedan' : 'Traffic sedan';
  const paint = new THREE.MeshPhysicalMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.27, metalness: 0.42, clearcoat: .75, clearcoatRoughness: .19 });
  const dark = new THREE.MeshStandardMaterial({ color: '#202528', roughness: 0.58, metalness: 0.15 });
  const rubber = new THREE.MeshStandardMaterial({ color: '#171a1d', roughness: 0.94 });
  const chrome = new THREE.MeshStandardMaterial({ color: '#aeb9bc', roughness: 0.28, metalness: 0.8 });
  const glass = new THREE.MeshPhysicalMaterial({ color: '#263e49', roughness: 0.12, metalness: 0.36, clearcoat: 1, clearcoatRoughness: .1, side: THREE.DoubleSide });
  const lights = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.24, metalness: 0.18, emissive: '#ffffff', emissiveIntensity: 0.025 });
  const greenYellowLivery = type === 'taxi' && ['yellow-green', 'green-yellow', 'bangkok'].includes(color);
  const primaryColor = new THREE.Color(greenYellowLivery ? '#278364' : color);
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const sphereGeometry = new THREE.SphereGeometry(1, 10, 6);
  function add(geometry, material, tint = primaryColor) {
    if (material.vertexColors && !geometry.attributes.color) {
      geometry = geometry.clone();
      const c = tint?.isColor ? tint : new THREE.Color(tint);
      const values = new Float32Array(geometry.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) {
        values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b;
      }
      geometry.setAttribute('color', new THREE.BufferAttribute(values, 3));
    }
    const object = new THREE.Mesh(geometry, material);
    object.castShadow = material !== glass && material !== lights;
    object.receiveShadow = true;
    root.add(object);
    return object;
  }
  function box(w, h, d, material, x, y, z, tint) {
    const object = add(boxGeometry, material, tint);
    object.scale.set(w, h, d); object.position.set(x, y, z);
    return object;
  }
  function sphere(w, h, d, material, x, y, z, tint) {
    const object = add(sphereGeometry, material, tint);
    object.scale.set(w, h, d); object.position.set(x, y, z);
    return object;
  }
  function line(a, b, r, material, tint) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
    const direction = end.clone().sub(start);
    const object = add(new THREE.CylinderGeometry(r, r, direction.length(), 6), material, tint);
    object.position.copy(start.add(end).multiplyScalar(0.5));
    object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    return object;
  }
  function face(points, material, tint) {
    const positions = [], indices = [];
    points.forEach(p => positions.push(...p));
    for (let i = 1; i < points.length - 1; i++) indices.push(0, i, i + 1);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(points.flatMap((p, i) => [i % 2, i > 1 ? 1 : 0]), 2));
    geometry.setIndex(indices); geometry.computeVertexNormals();
    return add(geometry, material, tint);
  }
  function roundedRectangle(w, h, d, r, material, x, y, z, tint) {
    const s = new THREE.Shape();
    const a = -w / 2, b = -h / 2;
    s.moveTo(a + r, b); s.lineTo(a + w - r, b);
    s.quadraticCurveTo(a + w, b, a + w, b + r);
    s.lineTo(a + w, b + h - r); s.quadraticCurveTo(a + w, b + h, a + w - r, b + h);
    s.lineTo(a + r, b + h); s.quadraticCurveTo(a, b + h, a, b + h - r);
    s.lineTo(a, b + r); s.quadraticCurveTo(a, b, a + r, b);
    const g = new THREE.ExtrudeGeometry(s, { depth: d, steps: 1, bevelEnabled: false, curveSegments: 2 });
    g.translate(0, 0, -d / 2);
    const object = add(g, material, tint); object.position.set(x, y, z); return object;
  }
  function wheel(x, y, z, radius, width) {
    const tyre = add(new THREE.TorusGeometry(radius * 0.755, radius * 0.245, 6, 16), rubber);
    tyre.position.set(x, y, z); tyre.rotation.y = Math.PI / 2;
    tyre.scale.z = width / (radius * 0.49);
    const rim = add(new THREE.CylinderGeometry(radius * 0.62, radius * 0.62, width * 0.94, 12), chrome);
    rim.rotation.z = Math.PI / 2; rim.position.set(x, y, z);
    const hub = add(new THREE.CylinderGeometry(radius * 0.23, radius * 0.23, width * 1.05, 8), dark);
    hub.rotation.z = Math.PI / 2; hub.position.set(x, y, z);
    for (const side of [-1, 1]) {
      for (let i = 0; i < 5; i++) {
        const a = i / 5 * Math.PI * 2;
        const bolt = add(new THREE.CylinderGeometry(radius * 0.044, radius * 0.044, 0.008, 5), dark);
        bolt.rotation.z = Math.PI / 2;
        bolt.position.set(x + side * width * 0.49, y + Math.cos(a) * radius * 0.38, z + Math.sin(a) * radius * 0.38);
      }
    }
  }
  function licencePlate(x, y, z, back = false) {
    const plate = box(0.37, 0.12, 0.018, lights, x, y, z, '#e9c349');
    for (let i = 0; i < 5; i++) box(0.014, 0.05, 0.003, dark, x - 0.11 + i * 0.045, y, z + (back ? 0.012 : -0.012));
    return plate;
  }
  function curvedGlass(bottomZ, topZ, bottomY, topY, bottomWidth, topWidth, front) {
    const positions = [], indices = [];
    for (let y = 0; y <= 4; y++) for (let x = 0; x <= 10; x++) {
      const t = y / 4, u = x / 5 - 1;
      positions.push(u * (bottomWidth + (topWidth - bottomWidth) * t), bottomY + (topY - bottomY) * t - .014 * u * u, bottomZ + (topZ - bottomZ) * t + (front ? -1 : 1) * .026 * (1 - u * u));
      if (x < 10 && y < 4) { const a = y * 11 + x; indices.push(...(front ? [a, a + 11, a + 1, a + 1, a + 11, a + 12] : [a, a + 1, a + 11, a + 1, a + 12, a + 11])); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.setIndex(indices); g.computeVertexNormals();
    return add(g, glass);
  }
  function sedanWheels() {
    const centers = [[-.756, .315, -1.27], [.756, .315, -1.27], [-.756, .315, 1.29], [.756, .315, 1.29]];
    const tyreGeometry = new THREE.TorusGeometry(.237, .078, 8, 16);
    const tyreInstances = new THREE.InstancedMesh(tyreGeometry, rubber, 4);
    tyreInstances.name = 'traffic-tyres'; tyreInstances.castShadow = true; tyreInstances.receiveShadow = true;
    const rimPieces = [];
    function rimPart(g, color, rotation, position) {
      const c = new THREE.Color(color), values = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(values, 3));
      const dummy = new THREE.Object3D(); dummy.rotation.set(...rotation); dummy.position.set(...position); dummy.updateMatrix(); g.applyMatrix4(dummy.matrix); rimPieces.push(g);
    }
    rimPart(new THREE.CylinderGeometry(.185, .185, .142, 16), '#434c50', [0, 0, Math.PI / 2], [0, 0, 0]);
    rimPart(new THREE.TorusGeometry(.184, .013, 3, 12), '#b4bfc2', [0, Math.PI / 2, 0], [-.079, 0, 0]);
    rimPart(new THREE.TorusGeometry(.184, .013, 3, 12), '#b4bfc2', [0, Math.PI / 2, 0], [.079, 0, 0]);
    for (const side of [-1, 1]) for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2;
      const spoke = new THREE.BoxGeometry(.013, .139, .033);
      rimPart(spoke, '#bac3c5', [a, 0, 0], [side * .083, Math.cos(a) * .108, Math.sin(a) * .108]);
    }
    rimPart(new THREE.CylinderGeometry(.039, .039, .173, 10), '#a1b0b4', [0, 0, Math.PI / 2], [0, 0, 0]);
    const rimGeometry = mergeGeometries(rimPieces);
    const rimMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .30, metalness: .75 });
    const rimInstances = new THREE.InstancedMesh(rimGeometry, rimMaterial, 4);
    rimInstances.name = 'traffic-rims'; rimInstances.castShadow = true; rimInstances.receiveShadow = true;
    const dummy = new THREE.Object3D();
    centers.forEach((point, i) => {
      dummy.position.set(...point); dummy.rotation.set(0, Math.PI / 2, 0); dummy.scale.set(1, 1, 1.25); dummy.updateMatrix(); tyreInstances.setMatrixAt(i, dummy.matrix);
      dummy.rotation.set(0, 0, 0); dummy.scale.set(1, 1, 1); dummy.updateMatrix(); rimInstances.setMatrixAt(i, dummy.matrix);
    });
    root.add(tyreInstances, rimInstances);
    tyreInstances.instanceMatrix.setUsage(THREE.DynamicDrawUsage); rimInstances.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    root.userData.wheelAnimation = { centers, radius: .315, tyres: 'traffic-tyres', rims: 'traffic-rims', tyreAxialScale: 1.25 };
  }

  if (type === 'bus') {
    const cream = '#e9e7d6';
    box(2.0, 0.24, 7.9, dark, 0, 0.54, 0);
    roundedRectangle(2.43, 1.0, 8.89, 0.1, paint, 0, 1.04, 0, '#31846d');
    roundedRectangle(2.40, 1.31, 8.83, 0.11, paint, 0, 2.18, 0, cream);
    roundedRectangle(2.42, 0.20, 8.86, 0.075, paint, 0, 2.9, 0, cream);
    box(2.37, 0.08, 8.88, paint, 0, 1.51, 0, '#e9c370');
    for (const side of [-1, 1]) {
      for (let i = 0; i < 7; i++) {
        const z = -2.96 + i * 0.95;
        box(0.022, 0.93, 0.82, glass, side * 1.209, 2.19, z);
        box(0.026, 0.018, 0.84, chrome, side * 1.222, 2.24, z);
      }
      box(0.025, 1.79, 0.82, dark, side * 1.217, 1.60, -3.91);
      box(0.029, 0.91, 0.73, glass, side * 1.232, 2.20, -3.91);
      line([side * 1.237, 0.75, -3.91], [side * 1.237, 2.6, -3.91], 0.015, chrome);
      box(0.028, 0.21, 0.83, rubber, side * 1.227, 0.65, -3.91);
      box(0.10, 0.3, 0.1, dark, side * 1.36, 2.20, -4.25);
      line([side * 1.19, 2.48, -4.23], [side * 1.36, 2.37, -4.25], 0.023, dark);
      wheel(side * 1.06, 0.48, -2.78, 0.48, 0.28);
      wheel(side * 1.06, 0.48, 2.72, 0.48, 0.28);
      // Dark arch covers give a bus-specific, tall body around the tyres.
      for (const z of [-2.78, 2.72]) {
        const arch = add(new THREE.TorusGeometry(0.53, 0.035, 5, 12, Math.PI), dark);
        arch.rotation.y = Math.PI / 2; arch.position.set(side * 1.233, 0.48, z);
      }
      box(0.34, 0.18, 0.028, lights, side * 0.76, 1.06, -4.47, '#edf0ce');
      box(0.09, 0.15, 0.031, lights, side * 1.02, 1.06, -4.48, '#e89928');
      box(0.13, 0.26, 0.032, lights, side * 0.95, 1.02, 4.465, '#c22823');
    }
    // The near-vertical front glass is slightly sloped, unlike a sedan cabin.
    face([[-1.08, 1.7, -4.474], [1.08, 1.7, -4.474], [1.06, 2.65, -4.424], [-1.06, 2.65, -4.424]], glass);
    line([0, 1.7, -4.481], [0, 2.65, -4.434], 0.022, dark);
    line([-.94, 1.82, -4.492], [-.38, 2.02, -4.485], 0.016, dark);
    line([.11, 1.82, -4.492], [.67, 2.02, -4.485], 0.016, dark);
    box(2.3, 0.14, 0.09, dark, 0, 0.74, -4.48);
    box(2.3, 0.14, 0.09, dark, 0, 0.74, 4.48);
    box(1.69, 0.16, 0.024, dark, 0, 2.76, -4.442);
    box(0.67, 0.08, 0.026, lights, 0, 2.77, -4.458, '#e0b76b');
    box(1.62, 0.65, 0.021, glass, 0, 2.22, 4.429);
    for (let i = 0; i < 5; i++) box(1.13, 0.022, 0.035, dark, 0, 1.23 + i * 0.061, 4.466);
    licencePlate(0, 0.99, -4.497);
    licencePlate(0, 0.88, 4.497, true);
    root.userData = { length: 9.05, width: 2.5, type, wheelRadius: 0.48 };
  } else {
    // A continuous curved shell, with wheel clearances formed in the shell
    // itself. Deck camber, rounded bumpers and sculpted shoulders avoid flat
    // extruded skirts or disconnected hood and door planes.
    const stations = [
      [-2.16, .57, .817, .777], [-2.08, .746, .855, .803],
      [-1.87, .851, .894, .843], [-1.58, .888, .931, .870],
      [-1.12, .885, .958, .900], [-.65, .879, .961, .904],
      [.66, .883, .980, .917], [1.14, .889, .960, .900],
      [1.65, .869, .943, .882], [1.98, .791, .902, .848],
      [2.10, .705, .870, .817], [2.16, .585, .855, .803],
    ];
    function section(z) {
      for (let i = 1; i < stations.length; i++) if (z <= stations[i][0]) {
        const a = stations[i - 1], b = stations[i], t = (z - a[0]) / (b[0] - a[0]);
        return a.slice(1).map((value, j) => value + (b[j + 1] - value) * t);
      }
      return stations.at(-1).slice(1);
    }
    const slices = stations.map(p => p[0]);
    for (const axle of [-1.27, 1.29]) for (let i = 0; i <= 12; i++) slices.push(axle + Math.cos(i / 12 * Math.PI) * .36);
    const zs = [...new Set(slices)].sort((a, b) => a - b);
    const positions = [], indices = [], ringSize = 10;
    for (const z of zs) {
      const [w, deck, shoulder] = section(z);
      let bottom = .365;
      for (const axle of [-1.27, 1.29]) {
        const d = Math.abs(z - axle);
        if (d < .36) bottom = Math.max(bottom, .315 + Math.sqrt(.36 * .36 - d * d));
      }
      const ring = [[-w * .975, bottom], [-w, .748], [-w, shoulder], [-w * .90, deck - .013], [-w * .60, deck + .013], [w * .60, deck + .013], [w * .90, deck - .013], [w, shoulder], [w, .748], [w * .975, bottom]];
      ring.forEach(([x, y]) => positions.push(x, y, z));
    }
    for (let row = 0; row < zs.length - 1; row++) for (let i = 0; i < ringSize; i++) {
      const a = row * ringSize + i, b = row * ringSize + (i + 1) % ringSize;
      indices.push(a, a + ringSize, b, b, a + ringSize, b + ringSize);
    }
    for (let i = 1; i < ringSize - 1; i++) {
      indices.push(0, i, i + 1);
      const last = (zs.length - 1) * ringSize; indices.push(last, last + i + 1, last + i);
    }
    const shell = new THREE.BufferGeometry(); shell.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    shell.setIndex(indices); shell.computeVertexNormals(); add(shell, paint);
    box(1.37, .073, 3.64, dark, 0, .353, .03);
    sedanWheels();

    // Curved front and rear glass, a domed roof, and a continuous window surround.
    const roofPositions = [], roofIndices = [];
    for (let z = 0; z <= 5; z++) for (let x = 0; x <= 8; x++) {
      const u = x / 4 - 1, v = z / 2.5 - 1;
      roofPositions.push(u * (.653 - .017 * v * v), 1.493 - .037 * u * u - .018 * v * v, -.018 + v * .609);
      if (x < 8 && z < 5) { const a = z * 9 + x; roofIndices.push(a, a + 9, a + 1, a + 1, a + 9, a + 10); }
    }
    const roof = new THREE.BufferGeometry(); roof.setAttribute('position', new THREE.Float32BufferAttribute(roofPositions, 3)); roof.setIndex(roofIndices); roof.computeVertexNormals(); add(roof, paint);
    curvedGlass(-1.148, -.551, .966, 1.451, .764, .640, true);
    curvedGlass(1.150, .533, .974, 1.452, .768, .642, false);
    box(1.15, .32, 1.57, dark, 0, 1.11, 0);
    const darkerPaint = primaryColor.clone().multiplyScalar(.76);
    for (const side of [-1, 1]) {
      const frontWindow = [[side * .775, .958, -1.105], [side * .643, 1.438, -.524], [side * .647, 1.456, .048], [side * .784, .976, .048]];
      const backWindow = [[side * .784, .976, .14], [side * .649, 1.456, .14], [side * .643, 1.440, .502], [side * .774, .964, 1.105]];
      face(side > 0 ? frontWindow : frontWindow.reverse(), glass);
      face(side > 0 ? backWindow : backWindow.reverse(), glass);
      line([side * .773, .954, -1.150], [side * .638, 1.456, -.556], .021, paint);
      line([side * .652, 1.462, .090], [side * .787, .967, .090], .020, dark);
      const pillar = [[side * .648, 1.445, .502], [side * .657, 1.453, .598], [side * .793, .958, 1.239], [side * .771, .958, 1.100]];
      face(side > 0 ? pillar.reverse() : pillar, paint);
      line([side * .776, .950, -1.139], [side * .783, .968, 1.12], .009, dark);
      line([side * .650, 1.459, -.545], [side * .652, 1.467, .522], .009, chrome);
      // Fine pressed seams are flush with the shell rather than floating skirts.
      line([side * .882, .401, .096], [side * .884, .889, .096], .003, dark);
      line([side * .876, .411, .984], [side * .886, .886, .984], .003, dark);
      box(.021, .020, .123, chrome, side * .891, .842, -.125);
      box(.021, .020, .123, chrome, side * .891, .854, .820);
      line([side * .755, 1.022, -.885], [side * .913, 1.032, -.857], .019, dark);
      sphere(.093, .041, .069, paint, side * .962, 1.048, -.864);
      sphere(.004, .030, .053, chrome, side * 1.049, 1.05, -.849);
      line([side * .476, .966, -1.11], [side * .441, .896, -1.89], .003, paint, darkerPaint);
      const lamp = [[side * .380, .824, -2.161], [side * .736, .840, -2.084], [side * .731, .764, -2.091], [side * .395, .756, -2.157]];
      face(side > 0 ? lamp : lamp.reverse(), lights, '#dfe8e9');
      line([side * .401, .824, -2.169], [side * .708, .834, -2.109], .010, lights, '#f0f2e4');
      const rearLamp = [[side * .38, .849, 2.165], [side * .73, .874, 2.088], [side * .73, .782, 2.091], [side * .38, .778, 2.165]];
      face(side > 0 ? rearLamp.reverse() : rearLamp, lights, '#b82936');
      line([side * .407, .837, 2.173], [side * .713, .865, 2.111], .011, lights, '#dc3940');
      box(.118, .022, .017, lights, side * .526, .812, 2.168, '#dccfbd');
    }
    line([-.616, 1.451, -.547], [.616, 1.451, -.547], .013, dark);
    line([-.624, 1.450, .531], [.624, 1.450, .531], .012, dark);
    line([-.615, .995, -1.121], [-.09, 1.037, -1.067], .006, dark);
    line([.03, .995, -1.121], [.58, 1.037, -1.067], .006, dark);
    roundedRectangle(.86, .106, .018, .026, dark, 0, .748, -2.172);
    for (let i = 0; i < 3; i++) box(.77, .006, .021, chrome, 0, .718 + i * .023, -2.187);
    roundedRectangle(1.02, .107, .018, .028, dark, 0, .523, -2.164);
    box(.89, .01, .025, chrome, 0, .46, -2.145);
    box(1.25, .027, .018, dark, 0, .442, 2.132);
    licencePlate(0, .598, -2.179);
    licencePlate(0, .715, 2.178, true);
    if (type === 'taxi') {
      roundedRectangle(.48, .103, .2, .018, lights, 0, 1.553, -.116, '#f3dfa0');
      if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 64;
        const ctx = canvas.getContext('2d'); ctx.fillStyle = '#f3dfa0'; ctx.fillRect(0, 0, 256, 64);
        ctx.fillStyle = '#26302a'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'bold 47px sans-serif'; ctx.fillText('TAXI', 128, 34);
        const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
        const signMaterial = new THREE.MeshStandardMaterial({ map: texture, roughness: .69 });
        const sign = add(new THREE.PlaneGeometry(.43, .079), signMaterial); sign.position.set(0, 1.554, -.218); sign.rotation.y = Math.PI;
        const back = add(new THREE.PlaneGeometry(.43, .079), signMaterial); back.position.set(0, 1.554, -.012);
      }
    }
    const twoToneTaxi = type === 'taxi' && (greenYellowLivery || primaryColor.g > .15 && primaryColor.g > primaryColor.r * 1.25 && primaryColor.g > primaryColor.b * .95);
    if (twoToneTaxi) {
      const yellow = new THREE.Color('#e8c334');
      for (const part of root.children) {
        if (!part.isMesh || part.material !== paint) continue;
        part.updateMatrix(); const p = new THREE.Vector3();
        for (let i = 0; i < part.geometry.attributes.position.count; i++) {
          p.fromBufferAttribute(part.geometry.attributes.position, i).applyMatrix4(part.matrix);
          if (p.y > .865) part.geometry.attributes.color.setXYZ(i, yellow.r, yellow.g, yellow.b);
        }
      }
    }
    root.userData = { ...root.userData, length: 4.32, width: 1.81, type, wheelRadius: .315 };

  }

  // All vehicles are rigid scenery actors. Six shared material batches keep
  // dozens of authored details affordable without a separate utility import.
  const batches = new Map();
  for (const part of root.children) {
    if (!part.isMesh || part.isInstancedMesh) continue;
    if (!batches.has(part.material)) batches.set(part.material, []);
    batches.get(part.material).push(part);
  }
  for (const [material, parts] of batches) {
    if (parts.length < 2) continue;
    let vertices = 0, indexCount = 0;
    const pieces = parts.map(part => {
      part.updateMatrix();
      const g = part.geometry.clone().applyMatrix4(part.matrix);
      vertices += g.attributes.position.count;
      indexCount += g.index?.count ?? g.attributes.position.count;
      return g;
    });
    const positions = new Float32Array(vertices * 3), normals = new Float32Array(vertices * 3);
    const uvs = new Float32Array(vertices * 2), colors = material.vertexColors ? new Float32Array(vertices * 3) : null;
    const indices = vertices > 65535 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);
    let vertexOffset = 0, indexOffset = 0;
    for (const g of pieces) {
      positions.set(g.attributes.position.array, vertexOffset * 3);
      normals.set(g.attributes.normal.array, vertexOffset * 3);
      if (g.attributes.uv) uvs.set(g.attributes.uv.array, vertexOffset * 2);
      if (colors && g.attributes.color) colors.set(g.attributes.color.array, vertexOffset * 3);
      const count = g.index?.count ?? g.attributes.position.count;
      for (let i = 0; i < count; i++) indices[indexOffset + i] = vertexOffset + (g.index ? g.index.getX(i) : i);
      vertexOffset += g.attributes.position.count; indexOffset += count; g.dispose();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    if (colors) geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1)); geometry.computeBoundingSphere();
    parts.forEach(part => root.remove(part)); add(geometry, material);
  }
  return root;
}

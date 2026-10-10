/** Bangkok commuter motorcycle. Metres, Y up, forward -Z. */
export function createMotorbike(THREE, color = '#28778e') {
  const root = new THREE.Group();
  root.name = 'Commuter motorcycle with helmeted rider';
  const paint = new THREE.MeshPhysicalMaterial({ color: '#ffffff', vertexColors: true, roughness: .29, metalness: .20, clearcoat: .70, clearcoatRoughness: .2 });
  const soft = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .82 });
  const metal = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.3, metalness: 0.78 });
  const lights = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: 0.25, metalness: 0.12, emissive: '#ffffff', emissiveIntensity: 0.025 });
  const primary = new THREE.Color(color);
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  const unitSphere = new THREE.SphereGeometry(1, 10, 6);
  const gray = '#929fa4', charcoal = '#242b2e', skin = '#ba825d';
  function add(geometry, material, tint = primary) {
    const g = geometry.clone();
    const c = tint?.isColor ? tint : new THREE.Color(tint);
    const values = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(values, 3));
    const object = new THREE.Mesh(g, material);
    object.castShadow = material !== lights; object.receiveShadow = true;
    root.add(object); return object;
  }
  function box(w, h, d, x, y, z, material = paint, tint = primary) {
    const object = add(unitBox, material, tint); object.scale.set(w, h, d); object.position.set(x, y, z); return object;
  }
  function ellipsoid(w, h, d, x, y, z, material = paint, tint = primary) {
    const object = add(unitSphere, material, tint); object.scale.set(w, h, d); object.position.set(x, y, z); return object;
  }
  function rod(a, b, radius, material = metal, tint = gray, segments = 4) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
    const direction = end.clone().sub(start);
    const object = add(new THREE.CylinderGeometry(radius, radius, direction.length(), segments), material, tint);
    object.position.copy(start.add(end).multiplyScalar(.5));
    object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    return object;
  }
  function curve(points, radius, material = metal, tint = gray, segments = 14) {
    const path = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
    return add(new THREE.TubeGeometry(path, segments, radius, 4), material, tint);
  }
  function wheel(z) {
    // Thin road tyres and cast-alloy rims are typical of Bangkok commuters.
    const tyre = add(new THREE.TorusGeometry(.222, .053, 8, 20), soft, '#181c1d');
    tyre.position.set(0, .275, z); tyre.rotation.y = Math.PI / 2;
    const rim = add(new THREE.TorusGeometry(.18, .012, 4, 12), metal, gray);
    rim.position.set(0, .275, z); rim.rotation.y = Math.PI / 2;
    rod([-.053, .275, z], [.053, .275, z], .034, metal, '#646e72');
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2;
      rod([0, .275 + Math.cos(a) * .035, z + Math.sin(a) * .035],
        [0, .275 + Math.cos(a + .12) * .178, z + Math.sin(a + .12) * .178], .012, metal, gray);
    }
  }
  wheel(-.715); wheel(.655);
  // Step-through frame, engine and long narrow pillion seat.
  rod([0, .44, .67], [0, .66, -.16], .035, metal, charcoal);
  rod([0, .63, -.49], [0, .57, .4], .032, metal, charcoal);
  box(.20, .16, .25, 0, .43, .035, metal, '#747f81');
  ellipsoid(.12, .11, .13, 0, .48, .12, metal, '#6b7678');
  for (let i = 0; i < 4; i++) box(.23, .012, .21, 0, .423 + i * .029, .007, metal, charcoal);
  curve([[0, .56, -.48], [0, .53, -.15], [0, .67, .17], [0, .69, .48]], .077, paint, primary, 8);
  ellipsoid(.148, .073, .39, 0, .787, .22, paint, primary);
  ellipsoid(.162, .052, .4, 0, .848, .18, soft, '#242627');
  curve([[-.17, .82, .51], [-.17, .88, .63], [0, .90, .69], [.17, .88, .63], [.17, .82, .51]], .014, metal, gray, 7);
  // Raised leg shield and compact headlamp cowl.
  const shieldVertices = [], shieldIndices = [];
  const fairingSections = [[.535, .068, -.386, .041], [.660, .121, -.435, .072], [.828, .154, -.492, .075], [.952, .143, -.531, .056]];
  for (const [y, w, z, d] of fairingSections) for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2; shieldVertices.push(Math.cos(a) * w, y, z + Math.sin(a) * d);
  }
  for (let row = 0; row < 3; row++) for (let i = 0; i < 10; i++) {
    const a = row * 10 + i, b = row * 10 + (i + 1) % 10;
    shieldIndices.push(a, a + 10, b, b, a + 10, b + 10);
  }
  for (let i = 1; i < 9; i++) { shieldIndices.push(0, i, i + 1); shieldIndices.push(30, 30 + i + 1, 30 + i); }
  const shield = new THREE.BufferGeometry(); shield.setAttribute('position', new THREE.Float32BufferAttribute(shieldVertices, 3)); shield.setIndex(shieldIndices); shield.computeVertexNormals(); add(shield, paint, primary);
  const cowl = ellipsoid(.17, .085, .09, 0, 1.015, -.55, paint, primary);
  cowl.rotation.x = .10;
  ellipsoid(.117, .046, .015, 0, 1.021, -.634, lights, '#e6eac7');
  for (const side of [-1, 1]) {
    rod([side * .05, .8, -.53], [side * .05, .275, -.715], .021, metal, gray);
    rod([side * .066, .275, -.715], [side * .066, .545, -.625], .027, metal, '#48565a');
    rod([side * .075, .655, .47], [side * .075, .275, .655], .021, metal, '#b9bfc1');
    rod([side * .077, .61, .50], [side * .077, .39, .60], .030, metal, '#555c60');
    rod([side * .095, .47, .085], [side * .18, .44, -.09], .016, metal, charcoal);
    rod([side * .145, .455, -.085], [side * .225, .455, -.085], .022, soft, '#202728');
    rod([side * .1, 1.02, -.545], [side * .29, 1.065, -.477], .018, metal, gray);
    rod([side * .23, 1.05, -.495], [side * .32, 1.052, -.453], .020, soft, '#1d2527');
    rod([side * .255, 1.064, -.49], [side * .335, 1.255, -.5], .009, metal, gray);
    ellipsoid(.061, .034, .022, side * .342, 1.26, -.5, metal, '#586c71');
    ellipsoid(.031, .022, .024, side * .167, .983, -.567, lights, '#e0a245');
    ellipsoid(.026, .023, .018, side * .134, .714, .699, lights, '#d79734');
  }
  // Curved fenders leave both wheels visibly separate from the motorcycle body.
  const frontFender = add(new THREE.TorusGeometry(.304, .026, 4, 12, Math.PI), paint, primary);
  frontFender.rotation.y = Math.PI / 2; frontFender.position.set(0, .275, -.715); frontFender.scale.z = 1.7;
  const rearFender = add(new THREE.TorusGeometry(.304, .021, 4, 10, Math.PI), soft, '#282c2d');
  rearFender.rotation.y = Math.PI / 2; rearFender.position.set(0, .275, .655); rearFender.scale.z = 1.9;
  const rearMudguard = box(.11, .23, .033, 0, .38, .892, soft, '#272b2d'); rearMudguard.rotation.x = -.13;
  box(.16, .06, .025, 0, .731, .707, lights, '#c5322b');
  const plate = box(.145, .116, .008, 0, .499, .837, lights, '#e3d9b8'); plate.rotation.x = -.13;
  for (let i = 0; i < 4; i++) box(.008, .032, .002, -.045 + i * .03, .507, .845, soft, '#34342d');
  curve([[.087, .40, .08], [.15, .31, .32], [.15, .29, .65], [.145, .30, .82]], .024, metal, '#536168', 7);
  rod([.155, .305, .46], [.155, .302, .79], .044, metal, '#959e9f');

  // One seated adult, with normal adult proportions and a protective helmet.
  const shirt = '#4b555b', pants = '#2b3d4b';
  const torso = ellipsoid(.157, .217, .10, 0, 1.084, .026, soft, '#e9742d'); torso.rotation.x = -.13;
  // Bangkok motorcycle-taxi vest, reflective strips and a plain numbered patch.
  box(.219, .025, .008, 0, 1.139, .132, soft, '#e5dcba');
  box(.219, .021, .008, 0, 1.016, .122, soft, '#e5dcba');
  box(.014, .301, .008, 0, 1.13, -.081, soft, '#374645');
  box(.161, .107, .008, 0, 1.21, .121, soft, '#eddfb2');
  // Graphic strokes read as a two-digit rider number without a texture fetch.
  box(.047, .010, .002, -.034, 1.244, .127, soft, '#34403d');
  box(.010, .034, .002, -.013, 1.229, .127, soft, '#34403d');
  box(.047, .010, .002, -.034, 1.214, .127, soft, '#34403d');
  box(.010, .032, .002, -.055, 1.198, .127, soft, '#34403d');
  box(.047, .010, .002, -.034, 1.183, .127, soft, '#34403d');
  box(.013, .071, .002, .046, 1.213, .127, soft, '#34403d');
  ellipsoid(.128, .065, .102, 0, .881, .076, soft, pants);
  rod([0, 1.265, -.01], [0, 1.334, -.021], .035, soft, skin);
  ellipsoid(.079, .093, .079, 0, 1.411, -.032, soft, skin);
  // Open-face helmet with a tinted face shield and chin strap.
  ellipsoid(.092, .089, .092, 0, 1.46, -.018, paint, '#e4daca');
  ellipsoid(.087, .058, .03, 0, 1.437, -.098, metal, '#243b43');
  ellipsoid(.016, .032, .014, -.077, 1.411, -.028, soft, skin);
  ellipsoid(.016, .032, .014, .077, 1.411, -.028, soft, skin);
  curve([[-.075, 1.412, -.024], [-.049, 1.334, -.036], [.049, 1.334, -.036], [.075, 1.412, -.024]], .006, soft, '#252c2f', 6);
  for (const side of [-1, 1]) {
    const shoulder = [side * .125, 1.207, .019];
    const elbow = [side * .181, 1.097, -.16];
    const hand = [side * .273, 1.06, -.453];
    rod(shoulder, elbow, .045, soft, shirt);
    rod(elbow, hand, .027, soft, skin);
    ellipsoid(.03, .025, .034, ...hand, soft, skin);
    const hip = [side * .086, .88, .067], knee = [side * .137, .689, -.222], ankle = [side * .166, .474, -.037];
    rod(hip, knee, .054, soft, pants); ellipsoid(.05, .055, .048, ...knee, soft, pants);
    rod(knee, ankle, .037, soft, pants);
    ellipsoid(.046, .03, .095, ankle[0], .448, -.102, soft, '#252928');
  }
  // Merge by four materials. Traffic actors remain rigid, inexpensive models.
  const batches = new Map();
  for (const part of root.children) {
    if (!batches.has(part.material)) batches.set(part.material, []);
    batches.get(part.material).push(part);
  }
  for (const [material, parts] of batches) {
    let vertices = 0, count = 0;
    const pieces = parts.map(part => {
      part.updateMatrix(); const g = part.geometry.clone().applyMatrix4(part.matrix);
      vertices += g.attributes.position.count; count += g.index?.count ?? g.attributes.position.count; return g;
    });
    const positions = new Float32Array(vertices * 3), normals = new Float32Array(vertices * 3);
    const colors = new Float32Array(vertices * 3), uvs = new Float32Array(vertices * 2);
    const indices = vertices > 65535 ? new Uint32Array(count) : new Uint16Array(count);
    let vertexOffset = 0, indexOffset = 0;
    for (const g of pieces) {
      positions.set(g.attributes.position.array, vertexOffset * 3); normals.set(g.attributes.normal.array, vertexOffset * 3);
      colors.set(g.attributes.color.array, vertexOffset * 3);
      if (g.attributes.uv) uvs.set(g.attributes.uv.array, vertexOffset * 2);
      const n = g.index?.count ?? g.attributes.position.count;
      for (let i = 0; i < n; i++) indices[indexOffset + i] = vertexOffset + (g.index ? g.index.getX(i) : i);
      vertexOffset += g.attributes.position.count; indexOffset += n; g.dispose();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)); geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1)); geometry.computeBoundingSphere();
    parts.forEach(part => root.remove(part));
    const combined = new THREE.Mesh(geometry, material); combined.castShadow = material !== lights; combined.receiveShadow = true; root.add(combined);
  }
  root.userData = { length: 2, width: .7, type: 'motorcycle' };
  return root;
}

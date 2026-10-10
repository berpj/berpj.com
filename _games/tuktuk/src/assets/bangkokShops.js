/** Authored Bangkok shophouses. Metres, Y up, storefront facing local +Z. */
const templates = new WeakMap();
// Shared with the facade cutout and placement clearance. The shell overlaps the
// surrounding wall by 2 cm so oblique views cannot expose a crack at the join.
export const BANGKOK_SHOP_ENVELOPE = Object.freeze({width: 10, height: 7.8, depth: 6.08, seamOverlap: .02});

export function createBangkokShop(THREE, variant = 0) {
  const style = variant === 0 ? 0 : 1;
  let styles = templates.get(THREE);
  if (!styles) { styles = new Map(); templates.set(THREE, styles); }
  if (!styles.has(style)) styles.set(style, buildShop(THREE, style));
  return styles.get(style).clone(true);
}

function buildShop(THREE, variant) {
  const root = new THREE.Group();
  root.name = variant === 0 ? 'Bangkok 7-Eleven shophouse' : 'Sukhumvit Thai pharmacy';
  const solid = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .81 });
  const metal = new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, roughness: .4, metalness: .63 });
  const lamp = new THREE.MeshBasicMaterial({ color: '#ffffff', vertexColors: true });
  const glass = new THREE.MeshStandardMaterial({ color: '#a3c6c2', roughness: .12, metalness: .12, transparent: true, opacity: .16, depthWrite: false });
  const reflection = new THREE.MeshBasicMaterial({ color: '#e6fff6', transparent: true, opacity: .14, depthWrite: false });
  const cream = '#d6cdb9', faded = variant === 0 ? '#d4cbb7' : '#cabfac';
  const aluminum = '#b8c4c3', charcoal = '#353c38', floor = '#deded4';
  const unitBox = new THREE.BoxGeometry(1, 1, 1);
  const cylinder = new THREE.CylinderGeometry(1, 1, 1, 8);
  const mesh = (geometry, material, color = '#ffffff') => {
    const g = geometry.clone();
    if (material.vertexColors) {
      const c = new THREE.Color(color), values = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < values.length; i += 3) { values[i] = c.r; values[i + 1] = c.g; values[i + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(values, 3));
    }
    const part = new THREE.Mesh(g, material);
    part.castShadow = material === solid || material === metal;
    part.receiveShadow = material !== lamp;
    root.add(part);
    return part;
  };
  const box = (w, h, d, x, y, z, material = solid, color = '#ffffff') => {
    const part = mesh(unitBox, material, color); part.scale.set(w, h, d); part.position.set(x, y, z); return part;
  };
  const rod = (a, b, radius, material = metal, color = aluminum) => {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b), direction = end.clone().sub(start);
    const part = mesh(cylinder, material, color);
    part.scale.set(radius, direction.length(), radius);
    part.position.copy(start.add(end).multiplyScalar(.5));
    part.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    return part;
  };
  const texture = (w, h, draw) => {
    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
    draw(canvas.getContext('2d'), w, h);
    const result = new THREE.CanvasTexture(canvas);
    result.colorSpace = THREE.SRGBColorSpace; result.anisotropy = 4;
    return result;
  };
  const panel = (w, h, x, y, z, material) => {
    const part = mesh(new THREE.PlaneGeometry(w, h), material); part.position.set(x, y, z); return part;
  };
  const logo = (c, x, y, size) => {
    c.fillStyle = '#f8f8e9'; c.fillRect(x, y, size, size);
    c.fillStyle = '#ec622c';
    c.beginPath(); c.moveTo(x + size * .14, y + size * .13); c.lineTo(x + size * .86, y + size * .13);
    c.lineTo(x + size * .73, y + size * .34); c.lineTo(x + size * .14, y + size * .34); c.closePath(); c.fill();
    c.fillStyle = '#d62e2d';
    c.beginPath(); c.moveTo(x + size * .57, y + size * .34); c.lineTo(x + size * .79, y + size * .34);
    c.lineTo(x + size * .48, y + size * .83); c.lineTo(x + size * .25, y + size * .83); c.closePath(); c.fill();
    c.fillStyle = '#087348'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `900 ${Math.round(size * .18)}px Arial,sans-serif`;
    c.fillText('ELEVEN', x + size * .5, y + size * .65, size * .96);
    c.font = `bold ${Math.round(size * .07)}px Tahoma,sans-serif`;
    c.fillText('เปิด 24 ชั่วโมง', x + size * .5, y + size * .91, size * .92);
  };
  const signMap = texture(1536, 256, (c, w, h) => {
    c.fillStyle = variant === 0 ? '#f5f4e9' : '#147963'; c.fillRect(0, 0, w, h);
    if (variant === 0) {
      c.fillStyle = '#ef762e'; c.fillRect(0, 20, w, 34);
      c.fillStyle = '#d93630'; c.fillRect(0, 68, w, 32);
      c.fillStyle = '#058048'; c.fillRect(0, 112, w, 52);
      logo(c, 102, 4, 246);
      c.fillStyle = '#fffef3'; c.fillRect(522, 11, 670, 176);
      c.fillStyle = '#08754c'; c.font = 'bold 116px Arial,sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('7-ELEVEN', 857, 101, 630);
      c.fillStyle = '#286e5b'; c.font = 'bold 34px Tahoma,sans-serif'; c.fillText('อิ่มสะดวก ทุกเวลา · OPEN 24 HOURS', 925, 218, 1070);
    } else {
      c.fillStyle = '#ecfff3'; c.fillRect(48, 91, 148, 60); c.fillRect(92, 47, 60, 148);
      c.fillStyle = '#efffed'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = 'bold 100px Tahoma,sans-serif';
      c.fillText('ร้านยา สุขุมวิท', 840, 86, 1200);
      c.font = 'bold 49px Arial,sans-serif'; c.fillText('PHARMACY   ·   ยาและเวชภัณฑ์', 840, 193, 1200);
      c.fillStyle = '#95d3b9'; c.fillRect(0, h - 9, w, 9);
    }
  });
  const signMaterial = new THREE.MeshBasicMaterial({ map: signMap });
  const productsMap = texture(768, 512, (c, w, h) => {
    c.fillStyle = '#47433b'; c.fillRect(0, 0, w, h);
    const colors = variant === 0 ? ['#da443a', '#edd949', '#387aa5', '#519955', '#eee3c7', '#df9455'] : ['#f1eee1', '#accbdd', '#c5e1bc', '#ecdedc', '#ebe5ae', '#afd4c8'];
    for (let row = 0; row < 4; row++) {
      const base = 115 + row * 118;
      c.fillStyle = '#d0d3c8'; c.fillRect(0, base, w, 10);
      c.fillStyle = '#f4dd9b'; c.fillRect(0, base + 3, w, 4);
      for (let i = 0; i < 19; i++) {
        const x = i * 40 + 5, height = 55 + (i * 13 + row * 7) % 31;
        c.fillStyle = colors[(i + row * 2) % colors.length]; c.fillRect(x, base - height, 29, height - 3);
        c.fillStyle = 'rgba(255,255,242,.58)'; c.fillRect(x + 5, base - height + 9, 19, 11);
        c.fillStyle = 'rgba(31,53,46,.4)'; c.fillRect(x + 7, base - 24, 15, 3);
        c.fillStyle = '#eee9da'; c.fillRect(x + 2, base + 12, 24, 8);
      }
    }
  });
  const products = new THREE.MeshStandardMaterial({ map: productsMap, roughness: .72, emissive: '#ffffff', emissiveMap: productsMap, emissiveIntensity: .11 });
  const drinksMap = texture(384, 512, (c, w, h) => {
    c.fillStyle = '#1c3b41'; c.fillRect(0, 0, w, h);
    const colors = ['#d8222d', '#61a56d', '#bdc7cf', '#e1a133', '#4aa5c3'];
    for (let row = 0; row < 5; row++) {
      const y = 87 + row * 95;
      c.fillStyle = '#c3d8d6'; c.fillRect(0, y, w, 7);
      for (let i = 0; i < 11; i++) {
        const x = 7 + i * 34;
        c.fillStyle = '#a8c9c5'; c.fillRect(x + 8, y - 73, 8, 9);
        c.fillStyle = colors[(i + row) % colors.length]; c.fillRect(x + 2, y - 64, 22, 57);
        c.fillStyle = '#eaf0e5'; c.fillRect(x + 3, y - 46, 20, 20);
        c.fillStyle = '#417966'; c.fillRect(x + 7, y - 40, 12, 3);
      }
    }
  });
  const drinks = new THREE.MeshBasicMaterial({ map: drinksMap });
  const noticesMap = texture(512, 512, (c, w, h) => {
    c.fillStyle = '#ecf0dc'; c.fillRect(0, 0, w, h);
    c.fillStyle = variant === 0 ? '#dd4839' : '#218667'; c.fillRect(0, 0, w, 134);
    c.fillStyle = '#fffdeb'; c.font = 'bold 78px Tahoma,sans-serif'; c.textAlign = 'center'; c.fillText(variant === 0 ? 'โปรโมชั่น' : 'สุขภาพดี', w / 2, 89);
    c.fillStyle = '#237756'; c.font = 'bold 124px Arial,sans-serif'; c.fillText(variant === 0 ? '29.-' : 'ยา', w / 2, 285);
    c.fillStyle = '#3e5146'; c.font = '28px Tahoma,sans-serif'; c.fillText(variant === 0 ? 'อิ่มคุ้ม พร้อมทาน' : 'ปรึกษาเภสัชกร', w / 2, 360);
    c.font = 'bold 24px Arial,sans-serif'; c.fillText(variant === 0 ? 'COFFEE · SNACKS · COLD DRINKS' : 'OPEN DAILY  08:00–22:00', w / 2, 451);
  });
  const notices = new THREE.MeshBasicMaterial({ map: noticesMap });

  // An opaque five-sided shell closes the opening even at grazing angles.
  // Keep its front open for the glazed storefront and visible interior.
  const envelope = BANGKOK_SHOP_ENVELOPE;
  const shellWidth = envelope.width + envelope.seamOverlap * 2;
  const shellHeight = envelope.height + envelope.seamOverlap;
  const wallThickness = .28;
  box(shellWidth, .12, envelope.depth, 0, .06, 0, solid, '#adafa6');
  box(shellWidth, shellHeight, .2, 0, shellHeight / 2, -envelope.depth / 2 + .1, solid, '#ebe9d7');
  for (const side of [-1, 1]) {
    box(wallThickness, shellHeight, envelope.depth, side * (shellWidth - wallThickness) / 2, shellHeight / 2, 0, solid, cream);
  }
  box(shellWidth, .18, envelope.depth, 0, shellHeight - .09, 0, solid, '#a6a899');
  box(9.6, .055, 5.3, 0, .146, -.16, solid, floor);
  box(9.65, .15, 5.45, 0, 3.18, -.16, solid, '#dddcca');
  box(9.68, .18, 5.58, 0, 3.91, -.17, solid, '#b1b0a0');
  box(9.5, 3.45, 5.08, 0, 5.70, -.25, solid, faded);
  box(9.76, .20, 5.4, 0, 7.52, -.2, solid, '#a6a899');
  box(9.75, .13, 5.5, 0, 7.66, -.21, solid, '#788d8b');
  // Separate upper windows, balcony rails, worn concrete bands and air conditioners.
  for (const x of [-3.2, 0, 3.2]) {
    box(2.42, 1.53, .075, x, 5.99, 2.34, solid, '#e6ddc8');
    box(2.21, 1.30, .08, x, 6.0, 2.389, solid, '#4a6869');
    box(.055, 1.32, .09, x, 6.0, 2.442, metal, '#596b66');
    box(2.27, .056, .09, x, 6.0, 2.44, metal, '#596b66');
    box(2.55, .08, .64, x, 5.18, 2.56, solid, '#acae9e');
    rod([x - 1.22, 5.21, 2.84], [x - 1.22, 5.81, 2.84], .024, metal, '#676e60');
    rod([x + 1.22, 5.21, 2.84], [x + 1.22, 5.81, 2.84], .024, metal, '#676e60');
    rod([x - 1.24, 5.81, 2.84], [x + 1.24, 5.81, 2.84], .023, metal, '#676e60');
    for (let i = 0; i < 7; i++) rod([x - 1.03 + i * .34, 5.24, 2.84], [x - 1.03 + i * .34, 5.8, 2.84], .012, metal, '#717869');
    box(.97, .59, .35, x + .54, 4.65, 2.52, solid, '#c7c9b6');
    const fan = mesh(new THREE.TorusGeometry(.17, .018, 4, 12), metal, '#7d8b80');
    fan.position.set(x + .61, 4.66, 2.705);
    for (let i = 0; i < 4; i++) {
      const vent = box(.027, .29, .018, x + .61, 4.66, 2.712, metal, '#848e82'); vent.rotation.z = i * Math.PI / 4;
    }
    for (let i = 0; i < 4; i++) box(.13, .013, .018, x + .24, 4.54 + i * .08, 2.707, metal, '#949d8f');
  }
  box(9.56, .09, .08, 0, 4.09, 2.335, solid, '#b9b5a3');
  for (let i = 0; i < 8; i++) box(.025, .20 + (i % 3) * .12, .009, -4.38 + i * 1.18, 4.6, 2.331, solid, '#b9af99');

  // Real interior volume, refrigerated drinks, stocked gondola shelves and cashier.
  for (const x of [-3.45, -1.90, -.35]) {
    box(1.45, 2.46, .66, x, 1.42, -2.22, solid, '#d7e0d9');
    box(1.34, 2.27, .035, x, 1.45, -1.866, metal, '#465859');
    panel(1.22, 2.14, x, 1.46, -1.842, drinks);
    box(.024, 2.12, .025, x, 1.46, -1.82, metal, '#dcebe3');
    rod([x + .48, .84, -1.798], [x + .48, 1.53, -1.798], .013, metal, '#c7dcd5');
    box(1.35, .10, .71, x, 2.70, -2.20, lamp, '#eefbe7');
  }
  for (const x of [-2.28, .20]) {
    box(1.95, 1.92, .60, x, 1.14, .23, solid, '#d1d4c8');
    panel(1.91, 1.82, x, 1.17, .544, products);
    for (let i = 0; i < 4; i++) box(1.98, .033, .65, x, .45 + i * .47, .23, solid, '#ebe9db');
    box(1.98, .045, .64, x, 2.12, .23, lamp, '#e0e9d8');
  }
  box(2.24, .92, .75, 3.1, .65, -.29, solid, variant === 0 ? '#487467' : '#728e84');
  box(2.38, .065, .86, 3.1, 1.14, -.29, solid, '#edf0db');
  box(.42, .37, .07, 3.27, 1.40, -.10, solid, '#242c2a');
  box(.28, .052, .24, 3.27, 1.20, -.09, solid, '#484d43');
  box(.13, .18, .14, 2.45, 1.27, .01, solid, '#e99843');
  for (const x of [-2.8, 0, 2.8]) box(1.44, .045, .32, x, 3.085, -.55, lamp, '#f2ffdb');

  // Front glass panels and double aluminium entrance doors.
  box(9.11, .115, .14, 0, .24, 2.27, solid, '#486962');
  for (const x of [-3.83, -1.76, 1.79, 3.89]) box(.085, 2.83, .12, x, 1.64, 2.25, metal, aluminum);
  for (const x of [-2.81, 2.83]) {
    box(1.96, 2.38, .012, x, 1.51, 2.264, glass);
    box(1.95, .055, .075, x, 2.72, 2.25, metal, aluminum);
    const glint = panel(.08, 1.89, x - .37, 1.56, 2.285, reflection); glint.rotation.z = -.2;
  }
  for (const x of [-.64, .64]) {
    box(1.19, 2.50, .012, x, 1.59, 2.22, glass);
    box(.04, 2.60, .087, x - .62, 1.59, 2.25, metal, aluminum);
    box(.04, 2.60, .087, x + .62, 1.59, 2.25, metal, aluminum);
    box(1.25, .054, .087, x, 2.87, 2.25, metal, aluminum);
    box(1.25, .054, .087, x, .31, 2.25, metal, aluminum);
    rod([x > 0 ? .17 : -.17, .94, 2.34], [x > 0 ? .17 : -.17, 1.65, 2.34], .016, metal, '#dbe1d6');
  }
  box(9.30, .085, .14, 0, 2.91, 2.27, metal, aluminum);
  box(9.40, .10, .84, 0, 3.04, 2.31, metal, '#b0bfae');
  box(9.42, .66, .26, 0, 3.51, 2.34, solid, '#eef0df');
  panel(9.28, .66, 0, 3.51, 2.48, signMaterial);
  box(9.42, .065, .43, 0, 3.89, 2.33, solid, variant === 0 ? '#12824f' : '#2e6e5b');
  // Window advertisements and a quiet row of price labels.
  panel(.75, .90, -3.46, 1.10, 2.295, notices);
  panel(.62, .74, 3.46, 1.08, 2.295, notices);
  box(1.37, .075, .014, -2.76, .65, 2.292, lamp, variant === 0 ? '#e98536' : '#458d76');
  box(1.37, .043, .014, -2.76, .57, 2.292, lamp, variant === 0 ? '#228658' : '#a0c48c');

  // A projecting sign, ATM, entry mat, rubbish bins and a Bangkok spirit house.
  if (variant === 0) {
    const projecting = texture(256, 256, (c, w) => logo(c, 0, 0, w));
    const projectingMaterial = new THREE.MeshBasicMaterial({ map: projecting });
    box(1.05, 1.07, .13, -4.18, 4.93, 2.64, solid, '#eeeecc');
    panel(.99, .99, -4.18, 4.93, 2.715, projectingMaterial);
    rod([-4.64, 4.95, 2.35], [-3.70, 4.95, 2.62], .038, metal, '#879780');
    box(.61, 1.65, .49, 4.18, 1.0, 2.34, solid, '#43895f');
    box(.65, .19, .52, 4.18, 1.92, 2.34, solid, '#347c54');
    box(.36, .25, .04, 4.18, 1.43, 2.613, solid, '#2c4c53');
    box(.27, .17, .042, 4.18, 1.45, 2.625, lamp, '#79bdd0');
    box(.22, .037, .034, 4.18, 1.01, 2.621, metal, '#b3c5b1');
    box(.38, .09, .14, 4.18, 1.15, 2.64, metal, '#aab7a4');
    const atmText = texture(256, 64, (c, w, h) => { c.fillStyle = '#258056'; c.fillRect(0, 0, w, h); c.fillStyle = '#f4fae6'; c.font = 'bold 48px Arial,sans-serif'; c.textAlign = 'center'; c.fillText('ATM', w / 2, 49); });
    panel(.56, .14, 4.18, 1.93, 2.609, new THREE.MeshBasicMaterial({ map: atmText }));
    // Small shrine kept on the forecourt, outside the driving corridor.
    box(.55, .13, .49, -4.37, .24, 2.35, solid, '#d3cab4');
    box(.15, .92, .15, -4.37, .76, 2.35, solid, '#d7bd77');
    box(.60, .09, .49, -4.37, 1.26, 2.35, solid, '#e4c583');
    box(.34, .33, .28, -4.37, 1.47, 2.35, solid, '#ad6836');
    box(.20, .22, .03, -4.37, 1.48, 2.511, solid, '#3c3729');
    const shrineRoof = mesh(new THREE.ConeGeometry(.40, .24, 4), solid, '#c95d35');
    shrineRoof.position.set(-4.37, 1.78, 2.35); shrineRoof.rotation.y = Math.PI / 4;
    for (const x of [-4.57, -4.17]) {
      rod([x, 1.32, 2.53], [x, 1.69, 2.53], .018, solid, '#e5c77f');
      box(.045, .12, .045, x, 1.40, 2.65, lamp, '#e5b344');
    }
  } else {
    box(.64, 1.32, .52, 4.10, .83, 2.43, solid, '#6a9c94');
    box(.70, .06, .57, 4.10, 1.52, 2.43, solid, '#b7d4c2');
    const jug = mesh(new THREE.CylinderGeometry(.19, .22, .52, 10), solid, '#729eb2'); jug.position.set(4.10, 1.83, 2.43);
    box(.07, .11, .04, 4.10, 1.22, 2.72, metal, '#b2c7c0');
    box(.13, .05, .12, 4.1, 1.07, 2.71, solid, '#e0e4cd');
    box(.80, 1.03, .16, -4.14, 1.03, 2.62, solid, '#eae9d8');
    box(.15, .63, .025, -4.14, 1.05, 2.715, lamp, '#4aab70');
    box(.52, .15, .025, -4.14, 1.05, 2.717, lamp, '#4aab70');
  }
  box(1.68, .017, .50, 0, .215, 2.51, solid, '#696852');
  for (const x of [3.2, 3.67]) {
    box(.36, .58, .38, x, .44, 2.64, solid, x === 3.2 ? '#558e52' : '#9b744c');
    box(.38, .047, .39, x, .745, 2.64, solid, '#606d4e');
    box(.22, .012, .16, x, .776, 2.64, solid, '#2c4134');
  }
  // Efficient rigid scenery: merge every opaque/transparent material into one batch.
  const batches = new Map();
  for (const part of root.children) {
    if (!batches.has(part.material)) batches.set(part.material, []);
    batches.get(part.material).push(part);
  }
  for (const [material, parts] of batches) {
    const pieces = parts.map(part => { part.updateMatrix(); return part.geometry.clone().applyMatrix4(part.matrix); });
    const vertices = pieces.reduce((sum, g) => sum + g.attributes.position.count, 0);
    const count = pieces.reduce((sum, g) => sum + (g.index?.count ?? g.attributes.position.count), 0);
    const positions = new Float32Array(vertices * 3), normals = new Float32Array(vertices * 3), uvs = new Float32Array(vertices * 2);
    const colors = material.vertexColors ? new Float32Array(vertices * 3) : null;
    const indices = vertices > 65535 ? new Uint32Array(count) : new Uint16Array(count);
    let vertexOffset = 0, indexOffset = 0;
    for (const g of pieces) {
      positions.set(g.attributes.position.array, vertexOffset * 3); normals.set(g.attributes.normal.array, vertexOffset * 3);
      if (g.attributes.uv) uvs.set(g.attributes.uv.array, vertexOffset * 2);
      if (colors) colors.set(g.attributes.color.array, vertexOffset * 3);
      const length = g.index?.count ?? g.attributes.position.count;
      for (let i = 0; i < length; i++) indices[indexOffset + i] = vertexOffset + (g.index ? g.index.getX(i) : i);
      vertexOffset += g.attributes.position.count; indexOffset += length; g.dispose();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)); geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); if (colors) geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1)); geometry.computeBoundingSphere();
    for (const part of parts) { root.remove(part); part.geometry.dispose(); }
    const combined = new THREE.Mesh(geometry, material); combined.castShadow = material === solid || material === metal;
    combined.receiveShadow = material !== lamp; root.add(combined);
  }
  unitBox.dispose(); cylinder.dispose();
  root.userData = { width: shellWidth, depth: envelope.depth, height: shellHeight, type: variant === 0 ? 'convenience-store' : 'pharmacy', front: '+Z' };
  return root;
}

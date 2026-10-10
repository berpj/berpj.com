// Authored procedural broadleaf trees. No external textures or asset licenses.
// Coordinates are local world meters; roots start at y=0 and all limbs connect.
function seeded(seed) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function canvasTexture(THREE, width, height, paint) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  paint(canvas.getContext('2d'), width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function barkTexture(THREE) {
  return canvasTexture(THREE, 256, 512, (ctx, w, h) => {
    const random = seeded(7834);
    ctx.fillStyle = '#817d69';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 230; i++) {
      const x = random() * w, y = random() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + 4 - random() * 8, y + 22, x + 5 - random() * 10, y + 55, x + random() * 8, y + 100 + random() * 80);
      ctx.strokeStyle = i % 3 ? 'rgba(47,49,37,.19)' : 'rgba(202,190,161,.24)';
      ctx.lineWidth = 1 + random() * 3;
      ctx.stroke();
    }
    for (let i = 0; i < 450; i++) {
      ctx.fillStyle = random() < .5 ? 'rgba(34,40,30,.14)' : 'rgba(220,211,183,.14)';
      ctx.fillRect(random() * w, random() * h, 1 + random() * 3, 2 + random() * 6);
    }
  });
}

// A spray of many individually shaped leaves gives an irregular cutout edge.
// This is deliberately a twig texture, never a solid sphere or full green card.
function leafSprayTexture(THREE) {
  return canvasTexture(THREE, 512, 512, (ctx, w, h) => {
    const random = seeded(97158);
    ctx.clearRect(0, 0, w, h);
    function leaf(x, y, angle, length, width, tone) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(-width, 0, width, length);
      gradient.addColorStop(0, `hsl(${92 + tone * 13},${29 + tone * 9}%,${34 + tone * 15}%)`);
      gradient.addColorStop(.48, `hsl(${93 + tone * 13},${34 + tone * 7}%,${29 + tone * 13}%)`);
      gradient.addColorStop(1, `hsl(${100 + tone * 12},32%,${21 + tone * 10}%)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-width * .85, length * .18, -width, length * .64, 0, length);
      ctx.bezierCurveTo(width * .85, length * .63, width * .7, length * .21, 0, 0);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, 2);
      ctx.lineTo(0, length * .91);
      ctx.strokeStyle = 'rgba(180,201,124,.36)';
      ctx.lineWidth = .75;
      ctx.stroke();
      ctx.restore();
    }
    for (let spray = 0; spray < 13; spray++) {
      const angle = spray / 13 * Math.PI * 2 + (random() - .5) * .3;
      const originX = 256 + (random() - .5) * 68;
      const originY = 262 + (random() - .5) * 64;
      const length = 125 + random() * 84;
      const dx = Math.sin(angle), dy = Math.cos(angle);
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX + dx * length, originY + dy * length);
      ctx.strokeStyle = 'rgba(105,112,65,.8)';
      ctx.lineWidth = 1.3;
      ctx.stroke();
      for (let pair = 0; pair < 7; pair++) {
        const t = .16 + pair * .115;
        const centerX = originX + dx * length * t;
        const centerY = originY + dy * length * t;
        for (const side of [-1, 1]) {
          const leafAngle = -angle + side * (.68 + random() * .48);
          const leafLength = 23 + random() * 21;
          leaf(centerX, centerY, leafAngle, leafLength, 7 + random() * 7, random());
        }
      }
      leaf(originX + dx * length * .88, originY + dy * length * .88, -angle, 28 + random() * 12, 9 + random() * 5, random());
    }
  });
}

/**
 * Instanced, grounded Bangkok broadleaf street trees.
 * @param {typeof import('three')} THREE
 * @param {{x:number,z:number}[]} positions
 * @param {{mobile?:boolean}} options
 * @returns {import('three').Group}
 */
export function createStreetTrees(THREE, positions, { mobile = false } = {}) {
  const group = new THREE.Group();
  group.name = 'Bangkok broadleaf street trees';
  const locations = positions.filter(p => Number.isFinite(p.x) && Number.isFinite(p.z));
  const chunkSize = 120;
  group.userData = {
    treeCount: locations.length, limbInstances: 0, leafCards: 0,
    chunkSize, chunkCount: 0, drawCallsPerChunk: 2, maxDrawCalls: 0,
    proceduralAssets: true, mobile,
  };
  if (!locations.length) return group;

  const cells = new Map();
  let cell;
  const up = new THREE.Vector3(0, 1, 0);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion();
  const midpoint = new THREE.Vector3(), direction = new THREE.Vector3();
  const scale = new THREE.Vector3();
  function limb(a, b, radius, color) {
    direction.subVectors(b, a);
    const length = direction.length();
    if (length < .015) return;
    quaternion.setFromUnitVectors(up, direction.multiplyScalar(1 / length));
    midpoint.addVectors(a, b).multiplyScalar(.5);
    scale.set(radius, length, radius);
    matrix.compose(midpoint, quaternion, scale);
    cell.limbs.push({ matrix: matrix.clone(), color });
  }

  for (let index = 0; index < locations.length; index++) {
    const p = locations[index];
    const key = `${Math.floor(p.x / chunkSize)},${Math.floor(p.z / chunkSize)}`;
    if (!cells.has(key)) cells.set(key, { key, trees: 0, limbs: [], leaves: [] });
    cell = cells.get(key);
    cell.trees++;
    const random = seeded((Math.round(p.x * 67) ^ Math.round(p.z * 137) ^ (index * 7139) ^ 8851) >>> 0);
    const form = index % 3;
    const crownRadius = (form === 0 ? 3.5 : form === 1 ? 2.5 : 3) * (.88 + random() * .24);
    const height = (form === 0 ? 7.2 : form === 1 ? 8.1 : 6.7) * (.9 + random() * .19);
    const forkHeight = height * (form === 0 ? .43 : .48);
    const trunkRadius = .22 + random() * .12;
    const leanX = (random() - .5) * .42, leanZ = (random() - .5) * .42;
    const woodColor = new THREE.Color().setHSL(.11, .08 + random() * .06, .72 + random() * .12);
    const trunk = [new THREE.Vector3(p.x, -.025, p.z)];
    for (let segment = 1; segment <= 4; segment++) {
      const t = segment / 4;
      trunk.push(new THREE.Vector3(p.x + leanX * t, forkHeight * t, p.z + leanZ * t));
      limb(trunk[segment - 1], trunk[segment], trunkRadius * 1.17 * Math.pow(.9, segment - 1), woodColor);
    }
    // Short buttress roots sit on the pavement and join the base of the trunk.
    for (let root = 0; root < 4; root++) {
      const angle = root * Math.PI / 2 + random() * .3;
      limb(new THREE.Vector3(p.x + Math.sin(angle) * trunkRadius * 2.2, .04, p.z + Math.cos(angle) * trunkRadius * 2.2),
        new THREE.Vector3(p.x, .42, p.z), trunkRadius * .5, woodColor);
    }
    const branchCount = mobile ? 7 : 9;
    const phase = random() * Math.PI * 2;
    for (let branch = 0; branch < branchCount; branch++) {
      const angle = phase + branch / branchCount * Math.PI * 2 + (random() - .5) * .42;
      // One central leader and spreading lateral boughs establish the crown.
      const central = branch === 0;
      const radial = central ? crownRadius * .22 : crownRadius * (.63 + random() * .38);
      const topY = central ? height * .93 : height * (form === 0 ? .8 + random() * .12 : .69 + random() * .28);
      const start = trunk[3 + branch % 2].clone();
      const knee = new THREE.Vector3(p.x + leanX + Math.sin(angle) * radial * .39, forkHeight + (topY - forkHeight) * .47, p.z + leanZ + Math.cos(angle) * radial * .39);
      const tip = new THREE.Vector3(p.x + leanX + Math.sin(angle) * radial, topY, p.z + leanZ + Math.cos(angle) * radial);
      const neck = knee.clone().lerp(tip, .57);
      const radius = trunkRadius * (central ? .69 : .43 + random() * .17);
      limb(start, knee, radius, woodColor);
      limb(knee, neck, radius * .84, woodColor);
      limb(neck, tip, radius * .68, woodColor);

      for (let fork = 0; fork < 3; fork++) {
        const forkAngle = angle + (fork === 0 ? -.7 : .7);
        const anchor = fork === 2 ? neck.clone().lerp(tip, .22).add(new THREE.Vector3(0, .28, 0)) :
          tip.clone().add(new THREE.Vector3(Math.sin(forkAngle) * (.48 + random() * .53), (random() - .25) * .45, Math.cos(forkAngle) * (.48 + random() * .53)));
        limb(neck, anchor, radius * .19, woodColor);
        const cardCount = mobile ? 4 : 6;
        const leafColor = new THREE.Color().setHSL(.205 + random() * .05, .13 + random() * .12, .8 + random() * .17);
        for (let card = 0; card < cardCount; card++) {
          const leafPosition = anchor.clone().add(new THREE.Vector3((random() - .5) * 1.32, (random() - .5) * .93, (random() - .5) * 1.32));
          // Several yaw angles plus upward-facing sprays retain volume overhead.
          const yaw = angle + card * 1.91 + random() * .55;
          const pitch = card % 3 === 0 ? -Math.PI * .42 : -.18 + random() * .65;
          quaternion.setFromEuler(new THREE.Euler(pitch, yaw, (random() - .5) * .55, 'YXZ'));
          const width = 2.05 + random() * .72;
          scale.set(width, width * (.77 + random() * .21), 1);
          matrix.compose(leafPosition, quaternion, scale);
          cell.leaves.push({ matrix: matrix.clone(), color: leafColor });
        }
      }
    }
  }

  function instances(geometry, material, data, name) {
    const mesh = new THREE.InstancedMesh(geometry, material, data.length);
    mesh.name = name;
    data.forEach((entry, index) => {
      mesh.setMatrixAt(index, entry.matrix);
      mesh.setColorAt(index, entry.color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.computeBoundingBox();
    mesh.computeBoundingSphere();
    return mesh;
  }

  const bark = barkTexture(THREE);
  const leafSprays = leafSprayTexture(THREE);
  const limbGeometry = new THREE.CylinderGeometry(.9, 1, 1, mobile ? 6 : 8, 1);
  const limbMaterial = new THREE.MeshStandardMaterial({ map: bark, color: '#d7d4c4', roughness: .96 });
  const leafGeometry = new THREE.PlaneGeometry(1, 1);
  const leafMaterial = new THREE.MeshStandardMaterial({
    map: leafSprays, color: '#f1f5db', side: THREE.DoubleSide,
    alphaTest: .34, alphaToCoverage: true, roughness: .92, metalness: 0,
  });
  leafMaterial.forceSinglePass = true;
  // Independent bounds let Three.js omit trees outside the camera frustum.
  // All cells share the same two geometries, materials, and canvas textures.
  for (const bucket of cells.values()) {
    const chunk = new THREE.Group();
    chunk.name = `Street trees, cell ${bucket.key}`;
    const trunks = instances(limbGeometry, limbMaterial, bucket.limbs,
      'Rooted trunks and connected tapered branches');
    const canopy = instances(leafGeometry, leafMaterial, bucket.leaves,
      'Textured broadleaf sprays');
    chunk.add(trunks, canopy);
    const bounds = trunks.boundingBox.clone().union(canopy.boundingBox);
    const center = bounds.getCenter(new THREE.Vector3());
    const radius = Math.hypot(bounds.max.x - bounds.min.x, bounds.max.z - bounds.min.z) * .5;
    chunk.userData = {
      streetTreeChunk: true, cell: bucket.key, treeCount: bucket.trees,
      center: { x: center.x, z: center.z }, radius,
      bounds: { min: bounds.min.toArray(), max: bounds.max.toArray() },
      drawCalls: 2,
    };
    group.add(chunk);
    group.userData.limbInstances += bucket.limbs.length;
    group.userData.leafCards += bucket.leaves.length;
  }
  group.userData.chunkCount = group.children.length;
  group.userData.visibleChunks = group.children.length;
  group.userData.maxDrawCalls = group.children.length * 2;
  return group;
}

/**
 * Optional distance culling in the same world-meter coordinates as positions.
 * This complements the automatic per-cell camera frustum culling.
 * Whole crowns are kept while their cell bounds intersect the distance limit.
 * @returns {number} Number of enabled tree chunks, before camera frustum culling.
 */
export function updateTreesVisibility(group, position, maxDistance = 250) {
  if (!Number.isFinite(position?.x) || !Number.isFinite(position?.z)) return group.userData.visibleChunks || 0;
  const distance = Number.isNaN(maxDistance) ? 250 : Math.max(0, maxDistance);
  let visible = 0;
  for (const chunk of group.children) {
    if (!chunk.userData.streetTreeChunk) continue;
    const { center, radius } = chunk.userData;
    const dx = center.x - position.x, dz = center.z - position.z;
    chunk.visible = dx * dx + dz * dz <= (distance + radius) ** 2;
    if (chunk.visible) visible++;
  }
  group.userData.visibleChunks = visible;
  return visible;
}

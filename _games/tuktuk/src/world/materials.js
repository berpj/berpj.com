import {assetUrl} from '../game/assetUrl.js';
import * as THREE from 'three';

export const FACADE_STYLES = Object.freeze([
  { name: 'Weathered pale shophouse', category: 'shophouse', meters: [12, 13] },
  { name: 'Glazed office curtain wall', category: 'office', meters: [12, 13] },
  { name: 'Apartment balconies and condensers', category: 'apartment', meters: [12, 13] },
  { name: 'Older ochre shophouse and shutters', category: 'shophouse', meters: [12, 13] },
  { name: 'Pale concrete residential and hotel', category: 'residential', meters: [12, 13] },
  { name: 'Mint shophouse with teak shutters', category: 'shophouse', meters: [12, 13] },
  { name: 'Terracotta tiled shophouse', category: 'shophouse', meters: [12, 13] },
  { name: 'Rose and cream balcony apartments', category: 'apartment', meters: [12, 13] },
  { name: 'Blue glass and bronze office', category: 'office', meters: [12, 13] },
  { name: 'Saffron shop-house with blue shutters', category: 'shophouse', meters: [12, 13] },
]);

function seeded(seed) {
  let value = seed >>> 0;
  return () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}
function canvas(width, height) {
  const result = document.createElement('canvas');
  result.width = width; result.height = height; return result;
}
function fromCanvas(image, { linear = false, repeat = false } = {}) {
  const texture = new THREE.CanvasTexture(image);
  texture.colorSpace = linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  if (repeat) texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}
export function canvasTexture(width, height, draw) {
  const image = canvas(width, height); draw(image.getContext('2d'), width, height);
  return fromCanvas(image);
}

const facadeCache = new Map();
function facadeSet(style) {
  const styleIndex = ((Math.trunc(style) % FACADE_STYLES.length) + FACADE_STYLES.length) % FACADE_STYLES.length;
  const index = [0,1,2,3,4,3,0,2,1,3][styleIndex];
  if (facadeCache.has(styleIndex)) return facadeCache.get(styleIndex);
  const size = 1024;
  const color = canvas(size, size), roughness = canvas(size, size), relief = canvas(size, size);
  const c = color.getContext('2d'), r = roughness.getContext('2d'), b = relief.getContext('2d');
  const random = seeded(61251 + styleIndex * 7411);
  const bases = ['#c7c3b6','#586971','#d1cdbf','#c4b897','#d1d1c7','#70a793','#bd806b','#c8a2a0','#527b89','#d2b469'];
  const value = n => `rgb(${n},${n},${n})`;
  function rect(x, y, width, height, fill, rough = 226, elevation = 145) {
    c.fillStyle = fill; c.fillRect(x, y, width, height);
    r.fillStyle = value(rough); r.fillRect(x, y, width, height);
    b.fillStyle = value(elevation); b.fillRect(x, y, width, height);
  }
  function line(x1, y1, x2, y2, width, fill, rough = 210, elevation = 153) {
    for (const [ctx, ink] of [[c, fill], [r, value(rough)], [b, value(elevation)]]) {
      ctx.strokeStyle = ink; ctx.lineWidth = width;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
  }
  rect(0, 0, size, size, bases[styleIndex]);
  // Fine plaster pores, faded patches and water marks. Data maps stay linear.
  const grain = canvas(256, 256), gc = grain.getContext('2d');
  const pixels = gc.createImageData(256, 256);
  for (let i = 0; i < pixels.data.length; i += 4) {
    const tone = Math.round(100 + random() * 80);
    pixels.data[i] = tone; pixels.data[i + 1] = tone; pixels.data[i + 2] = tone;
    pixels.data[i + 3] = 255;
  }
  gc.putImageData(pixels, 0, 0);
  c.globalAlpha = index === 1 ? .07 : .18;
  c.fillStyle = c.createPattern(grain, 'repeat'); c.fillRect(0, 0, size, size); c.globalAlpha = 1;
  b.globalAlpha = .15; b.fillStyle = b.createPattern(grain, 'repeat'); b.fillRect(0, 0, size, size); b.globalAlpha = 1;
  for (let patch = 0; patch < (index === 1 ? 18 : 100); patch++) {
    const x = random() * size, y = random() * size, radius = 16 + random() * 85;
    const gradient = c.createRadialGradient(x, y, 1, x, y, radius);
    gradient.addColorStop(0, patch % 3 ? 'rgba(82,78,62,.065)' : 'rgba(240,234,213,.12)');
    gradient.addColorStop(1, 'rgba(82,78,62,0)');
    c.fillStyle = gradient; c.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  function drips(x, y, width, severity = 1) {
    for (let i = 0; i < 12; i++) {
      const dx = x + random() * width, length = (8 + random() * 62) * severity;
      const gradient = c.createLinearGradient(0, y, 0, y + length);
      gradient.addColorStop(0, 'rgba(59,60,45,.15)'); gradient.addColorStop(1, 'rgba(59,60,45,0)');
      c.fillStyle = gradient; c.fillRect(dx, y, 1 + random() * 4, length);
    }
  }
  function window(x, y, width, height, { divider = true, curtains = true, frame = '#a7aaa1', office = false } = {}) {
    rect(x - 5, y - 5, width + 10, height + 12, '#8d8c80', 212, 135);
    rect(x - 2, y - 2, width + 4, height + 5, frame, 172, 163);
    rect(x + 2, y + 2, width - 4, height - 4, '#34454b', 72, 86);
    const g = c.createLinearGradient(0, y, 0, y + height);
    g.addColorStop(0, office ? '#73848c' : '#667474');
    g.addColorStop(.38, office ? '#576b76' : '#4c5b5b');
    g.addColorStop(1, office ? '#364e5b' : '#303c3e');
    c.fillStyle = g; c.fillRect(x + 3, y + 3, width - 6, height - 6);
    // Hazy reflected buildings and sky, with different curtains per unit.
    c.save(); c.beginPath(); c.rect(x + 3, y + 3, width - 6, height - 6); c.clip();
    for (let stripe = 0; stripe < 6; stripe++) {
      c.fillStyle = stripe % 2 ? 'rgba(218,229,226,.065)' : 'rgba(11,31,40,.10)';
      c.fillRect(x + random() * width, y + random() * height * .35, 3 + random() * 19, height);
    }
    if (curtains && random() < .65) {
      const side = random() < .5, curtainWidth = width * (.22 + random() * .3);
      const left = side ? x + 3 : x + width - curtainWidth - 3;
      c.fillStyle = random() < .35 ? 'rgba(185,188,178,.52)' : 'rgba(214,203,179,.46)';
      c.fillRect(left, y + 6, curtainWidth, height - 12);
      c.strokeStyle = 'rgba(58,56,44,.15)'; c.lineWidth = 2;
      for (let stripe = left + 5; stripe < left + curtainWidth; stripe += 7) {
        c.beginPath(); c.moveTo(stripe, y + 6); c.lineTo(stripe - 2, y + height - 6); c.stroke();
      }
    }
    c.restore();
    if (divider) line(x + width / 2, y + 2, x + width / 2, y + height - 2, office ? 3 : 4, frame, 153, 159);
    line(x + 2, y + height * .63, x + width - 2, y + height * .63, office ? 2 : 3, frame, 159, 160);
    rect(x - 7, y + height + 2, width + 14, 7, '#c8c6b7', 226, 180);
    const recess = c.createLinearGradient(0, y, 0, y + 14);
    recess.addColorStop(0, 'rgba(15,24,24,.28)'); recess.addColorStop(1, 'rgba(15,24,24,0)');
    c.fillStyle = recess; c.fillRect(x + 3, y + 3, width - 6, 14);
    if (!office) drips(x - 6, y + height + 8, width + 12, .6);
  }
  function condenser(x, y, width = 54, height = 40) {
    rect(x + 3, y + 5, width, height, '#797b6d', 231, 132);
    rect(x, y, width, height, '#b7b7a6', 189, 203);
    rect(x + 4, y + 3, width - 8, height - 6, '#c3c1b1', 182, 208);
    c.strokeStyle = '#74796f'; c.lineWidth = 1.5;
    const radius = height * .32, cx = x + height * .47, cy = y + height * .5;
    c.beginPath(); c.arc(cx, cy, radius, 0, Math.PI * 2); c.stroke();
    for (let offset = -radius + 2; offset < radius; offset += 4) {
      const reach = Math.sqrt(radius * radius - offset * offset);
      c.beginPath(); c.moveTo(cx - reach, cy + offset); c.lineTo(cx + reach, cy + offset); c.stroke();
    }
    for (let louver = 0; louver < 6; louver++) line(x + width - 16, y + 6 + louver * 4, x + width - 5, y + 6 + louver * 4, 1, '#858b7f', 180, 207);
    line(x + 6, y + height + 2, x + 6, y + height + 8, 3, '#697365');
    line(x + width - 7, y + height + 2, x + width - 7, y + height + 8, 3, '#697365');
    const pipeX = x + width + 5;
    line(pipeX, y + height * .4, pipeX + 9, y + height * .4, 3, '#b4b3a2', 213, 164);
    line(pipeX + 9, y + height * .4, pipeX + 9, y + height + 32, 3, '#b4b3a2', 213, 164);
    drips(x, y + height + 6, width, .7);
  }
  function railing(x, y, width, height, light = false) {
    const paint = light ? '#c0c3b7' : '#66776e';
    line(x, y, x + width, y, 5, paint, 174, 211);
    line(x, y + height, x + width, y + height, 4, paint, 174, 211);
    for (let at = 2; at <= width; at += 15) line(x + at, y, x + at, y + height, 2, paint, 171, 210);
  }
  const storey = size / 4, bay = size / 3;
  if (index === 1) {
    // Only this family uses a commercial glazed curtain wall.
    const officeBay = size / 6;
    for (let floor = 0; floor < 4; floor++) {
      const top = floor * storey;
      rect(0, top + storey - 44, size, 44, floor % 2 ? '#748083' : '#7d8889', 175, 153);
      for (let col = 0; col < 6; col++) {
        const left = col * officeBay;
        window(left + 5, top + 5, officeBay - 10, storey - 55, { curtains: false, divider: false, frame: '#929b9b', office: true });
        if (random() < .2) { c.fillStyle = 'rgba(194,203,195,.12)'; c.fillRect(left + 8, top + 8, officeBay - 16, storey - 65); }
        line(left + 1, top, left + 1, top + storey, 4, styleIndex===8?'#ac916e':'#b7bdb8', 128, 179);
      }
      line(0, top + storey - 1, size, top + storey - 1, 3, '#9ca5a2', 169, 165);
    }
  } else {
    for (let floor = 0; floor < 4; floor++) {
      const top = floor * storey;
      for (let col = 0; col < 3; col++) {
        const left = col * bay;
        if (index === 0 || index === 3) {
          const tint = index === 0 ? ['#c9c8bb', '#bfc4b6', '#c9c0b2'][col] : ['#c9bda1', '#bcb49d', '#c2b69f'][col];
          c.globalAlpha = styleIndex>4?.13:.36; c.fillStyle = tint; c.fillRect(left + 3, top + 3, bay - 6, storey - 6); c.globalAlpha = 1;
          const ww = index === 3 ? 137 : 151, wx = left + (bay - ww) / 2, wy = top + 36;
          if (index === 3 && (floor + col) % 3 === 0) {
            rect(wx - 4, wy - 4, ww + 8, 143, '#b3aa93', 221, 166);
            rect(wx, wy, ww, 135, '#777d6a', 217, 120);
            for (let slat = 0; slat < 18; slat++) {
              line(wx + 2, wy + 5 + slat * 7, wx + ww - 2, wy + 5 + slat * 7, 2, '#555f51', 232, 146);
              line(wx + 2, wy + 7 + slat * 7, wx + ww - 2, wy + 7 + slat * 7, 1, '#a1a38a', 219, 161);
            }
            line(wx + ww / 2, wy, wx + ww / 2, wy + 135, 5, '#c0b69d', 214, 173);
          } else window(wx, wy, ww, 135, { frame: index === 3 ? '#c4b99e' : '#9da59b' });
          if (index === 0 && floor % 2 === col % 2) railing(wx - 16, wy + 109, ww + 32, 42);
          if ((floor + col * 2) % 3 === 1) condenser(left + bay - 78, top + 197, 51, 36);
          line(left + 3, top, left + 3, top + storey, 4, '#b4b1a0', 236, 151);
          if (index === 3) {
            line(left + 23, top + 2, left + 23, top + storey - 5, 3, '#a8aa95', 231, 158);
            for (let stain = 0; stain < 9; stain++) drips(left + random() * bay, top + storey - 31, 25, .5);
          }
        } else if (index === 2) {
          const bx = left + 39, by = top + 24, bw = bay - 78;
          rect(bx - 3, by - 4, bw + 6, 189, '#b4b6a7', 240, 132);
          rect(bx + 4, by + 4, bw - 8, 169, '#7f8880', 232, 101);
          window(bx + 15, by + 16, bw - 31, 137, { frame: '#a5afa6' });
          rect(bx - 8, by + 177, bw + 16, 13, '#c7c8b8', 239, 203);
          rect(bx - 8, by + 190, bw + 16, 12, '#9d9f90', 239, 163);
          railing(bx - 1, by + 135, bw + 2, 42, true);
          condenser(left + bay - 81, top + 218, 55, 34);
          if (random() < .3) {
            rect(bx + 16, by + 158, 26, 18, '#8b7b62', 244, 176);
            for (let leaf = 0; leaf < 7; leaf++) line(bx + 29, by + 158, bx + 14 + random() * 31, by + 139 + random() * 13, 3, '#68785d', 243, 169);
          }
          line(left + 9, top + 3, left + 9, top + storey - 3, 9, '#c4c4b6', 238, 158);
        } else {
          const ww = 87, wx = left + 63, wy = top + 39;
          window(wx, wy, ww, 121, { divider: false, frame: '#adb3a9' });
          if ((floor + col) % 3 !== 0) window(wx + 105, wy, 64, 121, { divider: false, frame: '#a8aea5' });
          if ((floor * 3 + col) % 4 === 0) condenser(left + bay - 89, top + 200, 53, 37);
          line(left + bay - 8, top + 5, left + bay - 8, top + storey - 3, 2, '#aeb2a6', 240, 141);
        }
      }
      const slabColor = index === 3 ? '#aaa48b' : '#b8b9a8';
      rect(0, top + storey - 9, size, 7, slabColor, 239, 177);
      rect(0, top + storey - 2, size, 2, '#929987', 238, 145);
      drips(0, top + storey - 12, size, index === 3 ? 1 : .6);
    }
  }
  // Painted shutters, tile courses and screens distinguish the new families.
  if(styleIndex===5||styleIndex===9){
    for(let floor=0;floor<4;floor++)for(let col=0;col<3;col++){
      const x=col*bay+bay/2-76,y=floor*storey+36;
      for(const side of [-1,1]){
        rect(x+(side<0?-35:152),y,31,135,styleIndex===5?'#735846':'#456c81',215,172);
        for(let slat=0;slat<16;slat++)line(x+(side<0?-32:155),y+5+slat*8,x+(side<0?-7:180),y+5+slat*8,2,'#344d50',225,180);
      }
    }
  }
  if(styleIndex===6)for(let floor=0;floor<4;floor++){
    for(let y=floor*storey+181;y<(floor+1)*storey-12;y+=17){
      line(0,y,size,y,2,'#ddac8e',230,146);
      for(let x=(Math.round(y/17)%2)*21;x<size;x+=42)line(x,y,x,y+17,1,'#ddac8e',230,146);
    }
  }
  const downsample = image => {
    const reduced = canvas(512, 512); reduced.getContext('2d').drawImage(image, 0, 0, 512, 512); return reduced;
  };
  const set = {
    color: fromCanvas(color, { repeat: true }),
    roughness: fromCanvas(downsample(roughness), { linear: true, repeat: true }),
    bump: fromCanvas(downsample(relief), { linear: true, repeat: true }),
  };
  set.color.userData = { originalProceduralAsset: true, style: FACADE_STYLES[styleIndex].name, tileMeters: [12, 13] };
  facadeCache.set(styleIndex, set); return set;
}

export function facadeTexture(index = 0) { return facadeSet(index).color; }
export function facadeMaterial(index = 0) {
  const style = ((Math.trunc(index) % FACADE_STYLES.length) + FACADE_STYLES.length) % FACADE_STYLES.length, maps = facadeSet(style);
  const material = new THREE.MeshStandardMaterial({
    map: maps.color, roughnessMap: maps.roughness, bumpMap: maps.bump,
    bumpScale: FACADE_STYLES[style].category === 'office' ? .023 : .055, roughness: 1,
    metalness: FACADE_STYLES[style].category === 'office' ? .045 : .005, color: '#ffffff',
  });
  material.name = FACADE_STYLES[style].name;
  material.userData = {
    facadeStyle: style, category: FACADE_STYLES[style].category,
    tileMeters: [12, 13], facadeMeters: { width: 12, height: 13 },
  };
  return material;
}
export function asphaltTexture() {
  const texture = canvasTexture(256, 256, (c, w, h) => {
    const random = seeded(891); c.fillStyle = '#646963'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 16000; i++) {
      c.fillStyle = i % 2 ? 'rgba(27,32,27,.12)' : 'rgba(193,194,177,.09)';
      c.fillRect(random() * w, random() * h, 1, 1);
    }
  });
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.userData = { originalProceduralAsset: true, tileMeters: [1.5, 1.5] }; return texture;
}
export function signTexture(text, subtitle, bg = '#136658', fg = '#f4eed8') {
  return canvasTexture(768, 288, (c, w, h) => {
    c.fillStyle = bg; c.fillRect(0, 0, w, h);
    const fade = c.createLinearGradient(0, 0, 0, h);
    fade.addColorStop(0, 'rgba(252,244,218,.07)'); fade.addColorStop(1, 'rgba(13,32,28,.08)');
    c.fillStyle = fade; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(255,255,240,.23)'; c.lineWidth = 3; c.strokeRect(13, 13, w - 26, h - 26);
    c.fillStyle = fg; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.font = 'bold 77px sans-serif'; c.fillText(text, w / 2, 113, w - 48);
    c.font = '35px sans-serif'; c.fillText(subtitle, w / 2, 207, w - 48);
  });
}
export function makeMaterials() {
  const loader = new THREE.TextureLoader();
  function texture(path, linear = false) {
    const map = loader.load(assetUrl(path)); map.colorSpace = linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
    map.wrapS = map.wrapT = THREE.RepeatWrapping; map.anisotropy = 4; return map;
  }
  const asphalt = texture('/textures/asphalt-fine-color.jpg');
  const asphaltNormal = texture('/textures/asphalt-fine-normal.jpg', true);
  const asphaltRoughness = texture('/textures/asphalt-fine-roughness.jpg', true);
  const road = new THREE.MeshStandardMaterial({
    map: asphalt, normalMap: asphaltNormal, roughnessMap: asphaltRoughness,
    normalScale: new THREE.Vector2(.12, .12), color: '#c3c5be', roughness: .98,
  });
  road.name = 'Fine granular asphalt'; road.userData = { tileMeters: [2.1, 2.1] };
  const paving = texture('/textures/paving-color.jpg');
  const pavingNormal = texture('/textures/paving-normal.jpg', true);
  const pavingRoughness = texture('/textures/paving-roughness.jpg', true);
  const sidewalk = new THREE.MeshStandardMaterial({
    map: paving, normalMap: pavingNormal, roughnessMap: pavingRoughness,
    normalScale: new THREE.Vector2(.23, .23), color: '#d7d4c6', roughness: 1,
  });
  sidewalk.name = 'Weathered concrete pavers'; sidewalk.userData = { tileMeters: [1.8, 1.8] };
  const concreteMap = texture('/textures/concrete-color.jpg');
  const concreteNormal = texture('/textures/concrete-normal.jpg', true);
  const concreteRoughness = texture('/textures/concrete-roughness.jpg', true);
  const concrete = new THREE.MeshStandardMaterial({
    map: concreteMap, normalMap: concreteNormal, roughnessMap: concreteRoughness,
    normalScale: new THREE.Vector2(.13, .13), color: '#dddccf', roughness: 1,
  });
  concrete.name = 'Pale weathered concrete'; concrete.userData = { tileMeters: [1.15, 1.15] };
  const walls = FACADE_STYLES.map((_, index) => facadeMaterial(index));
  const roof = new THREE.MeshStandardMaterial({
    map: concreteMap, roughnessMap: concreteRoughness,
    normalMap: concreteNormal, normalScale: new THREE.Vector2(.07, .07),
    color: '#c8c7b9', roughness: 1,
  });
  return {
    road, sidewalk, concrete, walls, roof,
    line: new THREE.MeshStandardMaterial({ color: '#ddd9c6', roughness: .95 }),
    yellow: new THREE.MeshStandardMaterial({ color: '#cbb458', roughness: .8 }),
    dark: new THREE.MeshStandardMaterial({ color: '#37413b', roughness: .75 }),
    glass: new THREE.MeshStandardMaterial({ color: '#52686b', metalness: .025, roughness: .19 }),
    facadeStyles: FACADE_STYLES,
  };
}

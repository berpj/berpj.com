import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {FloatType,Vector3} from 'three';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';
import {SKY_ROTATION,SKY_SUN_DIRECTION} from '../src/world/sky.js';

const base=new URL('../public/textures/skies/',import.meta.url);
const provenance=JSON.parse(fs.readFileSync(new URL('provenance.json',base),'utf8'));

for(const asset of provenance.assets)test(`${asset.resolution} sky is a valid bundled HDR and its sun matches the game light`,()=>{
  const bytes=fs.readFileSync(new URL(asset.file,base));
  assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);
  assert.equal(createHash('md5').update(bytes).digest('hex'),asset.source_md5);
  assert.equal(provenance.license,'CC0-1.0');
  assert.equal(bytes.length,asset.bytes);
  assert.ok(bytes.length<(asset.resolution==='1k'?1_500_000:5_600_000));
  const hdr=new HDRLoader().setDataType(FloatType).parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
  assert.equal(hdr.width,asset.resolution==='1k'?1024:2048);
  assert.equal(hdr.width,hdr.height*2,'full seamless equirectangular panorama');
  let peak=0,peakPixel=0;
  for(let i=0;i<hdr.data.length;i+=4){
    for(let channel=0;channel<3;channel++)assert.ok(Number.isFinite(hdr.data[i+channel])&&hdr.data[i+channel]>=0);
    const light=hdr.data[i]*.2126+hdr.data[i+1]*.7152+hdr.data[i+2]*.0722;
    if(light>peak){peak=light;peakPixel=i/4;}
  }
  assert.ok(peak>1000,'retains real HDR sunlight for reflections');
  const u=(peakPixel%hdr.width+.5)/hdr.width,v=1-(Math.floor(peakPixel/hdr.width)+.5)/hdr.height;
  const azimuth=(u-.5)*Math.PI*2,elevation=(v-.5)*Math.PI;
  const direction=new Vector3(Math.cos(elevation)*Math.cos(azimuth),Math.sin(elevation),Math.cos(elevation)*Math.sin(azimuth)).applyAxisAngle(new Vector3(0,1,0),SKY_ROTATION);
  assert.ok(direction.angleTo(SKY_SUN_DIRECTION)<Math.PI/180,'sky sun and shadow direction agree within one degree');
});

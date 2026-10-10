import * as THREE from 'three';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {SurfaceWakes} from '../src/effects.js';
import {createNightWater} from '../src/night.js';
import {createNightBloom} from '../src/postprocessing.js';

const renderer=new THREE.WebGLRenderer({antialias:false});
renderer.setSize(128,128);renderer.toneMapping=THREE.NoToneMapping;
const size=128,target=new THREE.WebGLRenderTarget(size,size,{type:THREE.HalfFloatType,depthBuffer:false});
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,10);camera.position.z=2;
const checks=document.querySelector('#checks');let failures=0;
function check(name,fn){const li=document.createElement('li');try{const detail=fn();li.textContent=`PASS: ${name} (${detail})`;li.className='pass';}catch(error){failures++;li.textContent=`FAIL: ${name}: ${error.message}`;li.className='fail';}checks.append(li);}
function invalidPixels(rt){const pixels=new Uint16Array(rt.width*rt.height*4);renderer.readRenderTargetPixels(rt,0,0,rt.width,rt.height,pixels);let invalid=0;for(let i=0;i<pixels.length;i+=4){if([0,1,2].some(c=>(pixels[i+c]&0x7c00)===0x7c00))invalid++;}return invalid;}
function draw(material){const quad=new FullScreenQuad(material);renderer.setRenderTarget(target);renderer.clear();quad.render(renderer);quad.dispose();return invalidPixels(target);}
function assert(value,message){if(!value)throw Error(message);}

check('wake edges stay finite after interpolation roundoff',()=>{
  const wakes=new SurfaceWakes(new THREE.Scene(),1),geometry=new THREE.PlaneGeometry(2,2);
  geometry.setAttribute('aFade',new THREE.Float32BufferAttribute([1,1,1,1],1));
  const mesh=new THREE.Mesh(geometry,wakes.material);scene.add(mesh);
  let bad=0;
  for(const u of[-.000001,0,1,1.000001]){
    for(let i=0;i<4;i++)geometry.attributes.uv.setX(i,u);geometry.attributes.uv.needsUpdate=true;
    renderer.setRenderTarget(target);renderer.clear();renderer.render(scene,camera);bad+=invalidPixels(target);
  }
  scene.remove(mesh);geometry.dispose();wakes.material.dispose();wakes.geometry.dispose();
  assert(bad===0,`${bad} invalid pixels from UV boundary values`);return '4 boundary values, zero invalid pixels';
});

check('water reflectance tolerates a dot product just above 1',()=>{
  const {water}=createNightWater(new THREE.Scene(),true);
  const block=water.material.fragmentShader.match(/float theta =[\s\S]*?float reflectance =[^;]+;/)?.[0];
  assert(block,'water reflectance shader block not found');
  const material=new THREE.ShaderMaterial({vertexShader:'void main(){gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:`void main(){vec3 eyeDirection=vec3(0.,1.0000002,0.);vec3 surfaceNormal=vec3(0.,1.,0.);${block}gl_FragColor=vec4(vec3(reflectance),1.);}`});
  const bad=draw(material);material.dispose();water.geometry.dispose();water.material.dispose();
  assert(bad===0,`${bad} invalid pixels from rounded normal dot product`);return 'zero invalid pixels';
});

function contaminatedBloom(pass){
  const data=new Float32Array(size*size*4);for(let i=0;i<data.length;i+=4){data[i]=.03;data[i+1]=.06;data[i+2]=.09;data[i+3]=1;}
  // One bad 2x2 sample must never poison the progressively blurred mip chain.
  for(let y=63;y<65;y++)for(let x=63;x<65;x++)for(let c=0;c<3;c++)data[(y*size+x)*4+c]=NaN;
  const texture=new THREE.DataTexture(data,size,size,THREE.RGBAFormat,THREE.FloatType);texture.needsUpdate=true;
  const material=new THREE.ShaderMaterial({uniforms:{source:{value:texture}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:'varying vec2 vUv;uniform sampler2D source;void main(){gl_FragColor=texture2D(source,vUv);}'});
  const sourceBad=draw(material);pass.setSize(size,size);pass.render(renderer,null,target);
  const resultBad=invalidPixels(target);texture.dispose();material.dispose();pass.dispose();
  return {sourceBad,resultBad};
}
check('control reproduces bloom spreading a bad pixel into large patches',()=>{
  const {sourceBad,resultBad}=contaminatedBloom(new UnrealBloomPass(new THREE.Vector2(size,size),.32,.36,1.1));
  assert(sourceBad>0&&resultBad>sourceBad*100,`expected spread, got ${sourceBad} -> ${resultBad}`);return `${sourceBad} source pixels spread to ${resultBad}`;
});
check('night bloom contains invalid pixels before the blur chain',()=>{
  const {sourceBad,resultBad}=contaminatedBloom(createNightBloom(size,size));
  assert(sourceBad>0&&resultBad===sourceBad,`${sourceBad} invalid source pixels spread to ${resultBad}`);return `${sourceBad} source pixels, zero spread`;
});
check('normal HDR lights keep their original bloom',()=>{
  const material=new THREE.ShaderMaterial({vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',fragmentShader:'varying vec2 vUv;void main(){float light=step(.48,vUv.x)*step(vUv.x,.52);gl_FragColor=vec4(vec3(.03,.06,.09)+vec3(8.,3.,1.5)*light,1.);}'});
  const pixels=[];
  for(const pass of[new UnrealBloomPass(new THREE.Vector2(size,size),.32,.36,1.1),createNightBloom(size,size)]){
    draw(material);pass.setSize(size,size);pass.render(renderer,null,target);
    const data=new Uint16Array(size*size*4);renderer.readRenderTargetPixels(target,0,0,size,size,data);pixels.push(data);pass.dispose();
  }
  material.dispose();let changed=0;for(let i=0;i<pixels[0].length;i++)if(pixels[0][i]!==pixels[1][i])changed++;
  assert(changed===0,`${changed} channels changed`);return 'pixel-identical to the original lighting';
});
renderer.setRenderTarget(null);target.dispose();renderer.dispose();
document.querySelector('#result').textContent=failures?`${failures} GPU checks failed`:'All 5 GPU checks passed';

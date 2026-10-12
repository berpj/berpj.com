import * as THREE from 'three';
import {renderNightFrame} from '../src/render-frame.js';
import {FullScreenQuad} from 'three/addons/postprocessing/Pass.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {FXAAPass} from 'three/addons/postprocessing/FXAAPass.js';
import {SurfaceWakes} from '../src/effects.js';
import {createNightWater,createNightSky} from '../src/night.js';
import {createDroneShow,DRONE_CUE} from '../src/drone-show.js';
import {createNightBloom,createNightComposer,createNightFXAA} from '../src/postprocessing.js';
import {VisibleLights,bridgeLightFixtures} from '../src/visible-lights.js';

const renderer=new THREE.WebGLRenderer({antialias:false});
renderer.setSize(128,128);renderer.toneMapping=THREE.NoToneMapping;
const size=128,target=new THREE.WebGLRenderTarget(size,size,{type:THREE.HalfFloatType,depthBuffer:true});
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
check('mobile antialiasing preserves fine detail and still smooths diagonal edges',()=>{
 const material=new THREE.ShaderMaterial({
  vertexShader:'void main(){gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:'void main(){vec2 p=floor(gl_FragCoord.xy);float detail=step(3.,mod(p.x,4.));float diagonal=step(p.x*.37+73.,p.y);float value=p.y<60.?detail:diagonal;gl_FragColor=vec4(vec3(.1+.8*value),1.);}'
 });
 draw(material);
 const output=new THREE.WebGLRenderTarget(size,size,{type:THREE.HalfFloatType}),results=[];
 for(const pass of[new FXAAPass(),createNightFXAA()]){
  pass.setSize(size,size);pass.render(renderer,output,target);
  const pixels=new Uint16Array(size*size*4);renderer.readRenderTargetPixels(output,0,0,size,size,pixels);
  let contrast=0,partial=0;
  const value=(x,y)=>THREE.DataUtils.fromHalfFloat(pixels[(y*size+x)*4]);
  for(let y=8;y<52;y++)for(let x=8;x<120;x+=4)contrast+=value(x+3,y)-value(x+1,y);
  for(let y=70;y<125;y++)for(let x=4;x<124;x++){const v=value(x,y);assert(Number.isFinite(v),'invalid antialiasing output');if(v>.13&&v<.87)partial++;}
  results.push({contrast,partial});pass.dispose();
 }
 material.dispose();output.dispose();
 assert(results[1].contrast>results[0].contrast*1.1,'fine detail is still over-smoothed');
 assert(results[1].partial>50,'diagonal edge smoothing was lost');
 return `${Math.round((results[1].contrast/results[0].contrast-1)*100)}% more fine-pattern contrast; ${results[1].partial} softened edge pixels`;
});
function lightImage(lightScene,lightCamera){
  renderer.setRenderTarget(target);renderer.clear();renderer.render(lightScene,lightCamera);
  const pixels=new Uint16Array(size*size*4);renderer.readRenderTargetPixels(target,0,0,size,size,pixels);
  let energy=0,peak=0;for(let i=0;i<pixels.length;i+=4){const value=THREE.DataUtils.fromHalfFloat(pixels[i]);assert(Number.isFinite(value),'invalid light pixel');energy+=value;peak=Math.max(peak,value);}
  return {energy,peak,pixels};
}
check('moon stays visible in the right-hand sky across phone and desktop headings',()=>{
 const s=new THREE.Scene(),sky=createNightSky(s),c=new THREE.PerspectiveCamera(62,1,.3,8000);
 let minimum=Infinity;
 for(const aspect of[390/844,16/9])for(const heading of[0,1.6,3.14,4.7]){
  c.aspect=aspect;c.updateProjectionMatrix();c.position.set(600,12,-1400);c.lookAt(600+Math.sin(heading)*53,3,-1400+Math.cos(heading)*53);sky.update(12,c);
  const {pixels}=lightImage(s,c);assert(invalidPixels(target)===0,'invalid sky pixels');
  const x=Math.floor(size*.70),y=Math.floor(size*.77);let moon=0;
  for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)moon=Math.max(moon,THREE.DataUtils.fromHalfFloat(pixels[((y+dy)*size+x+dx)*4]));
  minimum=Math.min(minimum,moon);assert(moon>.3,'moon not visible in expected right-hand sky');
 }
 sky.sky.geometry.dispose();sky.sky.material.dispose();return `8 launch views; minimum moon luminance ${minimum.toFixed(2)}`;
});
check('drones stay finite and visible while morphing, and respect building occlusion',()=>{
 const s=new THREE.Scene();s.fog=new THREE.FogExp2(0,.00056);
 const river={sample:(_d,offset=0)=>({x:0,z:offset,width:300,nx:0,nz:1})};
 const show=createDroneShow(s,river,[{kind:'icon-siam',distance:100,side:1}],true),c=new THREE.PerspectiveCamera(62,1,.3,8000);
 for(const distance of[400,1600]){
  c.position.set(0,205,174+distance);c.lookAt(0,205,174);
  for(let cue=0;cue<5;cue++)for(const phase of[4,17,22.999]){
   show.update(cue*DRONE_CUE+phase);const {energy}=lightImage(s,c);
   assert(invalidPixels(target)===0,'invalid drone pixel during morph');assert(energy>2,'drones disappeared in the distance');
  }
 }
 const wall=new THREE.Mesh(new THREE.BoxGeometry(600,600,10),new THREE.MeshBasicMaterial({color:0}));wall.position.set(0,205,1200);s.add(wall);
 assert(lightImage(s,c).energy===0,'drones shine through a solid building');
 wall.geometry.dispose();wall.material.dispose();show.points.geometry.dispose();show.points.material.dispose();return '30 formation/distance views; opaque buildings hide the lights';
});
check('distant bulbs and strips remain visible at 250 to 2000 metres',()=>{
  const s=new THREE.Scene();s.fog=new THREE.FogExp2(0,.00056);
  const c=new THREE.PerspectiveCamera(62,1,.3,8000);
  const lights=new VisibleLights(s,[{a:[-100,0,0],b:[100,0,0],width:.22,color:[3,2,1]},{a:[0,30,0],b:[0,30,0],width:.18,color:[3,2,1]}]);
  for(const distance of[250,500,1000,2000]){c.position.set(0,0,distance);const {peak,energy}=lightImage(s,c);assert(peak>.1&&energy>1,`lights disappeared at ${distance}m`);}
  lights.geometry.dispose();lights.material.dispose();return 'both emitters stay visible';
});
check('thin horizontal lights keep stable brightness across subpixel camera motion',()=>{
  const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(62,1,.3,8000);c.position.z=1000;
  const lights=new VisibleLights(s,[{a:[-200,0,0],b:[200,0,0],width:.22,color:[3,2,1]}]);
  const worldPerPixel=2*1000*Math.tan(THREE.MathUtils.degToRad(31))/size,energy=[];
  for(let i=0;i<16;i++){c.position.y=i/16*worldPerPixel;energy.push(lightImage(s,c).energy);}
  const variation=(Math.max(...energy)-Math.min(...energy))/(energy.reduce((a,b)=>a+b,0)/energy.length);
  assert(variation<.12,`brightness varied ${(variation*100).toFixed(1)}%`);
  lights.geometry.dispose();lights.material.dispose();return `${(variation*100).toFixed(1)}% brightness variation over one pixel`;
});
check('distant lights respect solid occluders and camera clipping',()=>{
  const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(62,1,.3,8000);c.position.z=1000;
  const lights=new VisibleLights(s,[{a:[0,0,0],b:[0,0,0],width:.2,color:[3,2,1]}]);
  assert(lightImage(s,c).energy>1,'initial bulb is missing');
  const wall=new THREE.Mesh(new THREE.BoxGeometry(200,200,10),new THREE.MeshBasicMaterial({color:0}));wall.position.z=500;s.add(wall);
  assert(lightImage(s,c).energy===0,'bulb shines through a building');
  s.remove(wall);c.position.z=-10;assert(lightImage(s,c).energy===0,'behind-camera bulb is visible');
  lights.geometry.dispose();lights.material.dispose();wall.geometry.dispose();wall.material.dispose();return 'no glow through walls or behind the camera';
});
check('bridge-mounted strips stay visible against both concrete decks',()=>{
 const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(62,1,.3,8000);
 const deck=new THREE.Group(),material=new THREE.MeshBasicMaterial({color:0});s.add(deck);
 for(const [y,height,width]of[[19,2.5,29],[23,2,6]]){const m=new THREE.Mesh(new THREE.BoxGeometry(400,height,width),material);m.position.y=y;deck.add(m);}
 const fixtures=bridgeLightFixtures(400,19,'concrete').filter(f=>f.a[2]>0);
 const lights=new VisibleLights(s,fixtures);let worst=1,worstCase='';
 for(const distance of[250,500,1000,2000])for(const angle of[0,.05,.2,.5,1]){
  deck.rotation.y=angle;deck.updateMatrixWorld();const rotation=new THREE.Matrix4().makeRotationY(angle);
  lights.fixtures=fixtures.map(f=>({...f,a:new THREE.Vector3(...f.a).applyMatrix4(rotation).toArray(),b:new THREE.Vector3(...f.b).applyMatrix4(rotation).toArray()}));lights.update();
  c.position.set(0,8,distance);c.lookAt(0,19,0);
  for(let sub=0;sub<8;sub++){
   c.position.y=8+sub/8*2*distance*Math.tan(THREE.MathUtils.degToRad(31))/size;
   const image=lightImage(s,c),columns=[];
   // The decks legitimately occlude the outside of a widened glow. Measure
   // continuity along its visible centre, not energy hidden behind concrete.
   for(let u=.15;u<=.85;u+=.025){
    const point=new THREE.Vector3(-200+400*u,21.9,14.75).applyMatrix4(rotation).project(c);
    const x=Math.floor((point.x*.5+.5)*size),y=Math.floor((point.y*.5+.5)*size);
    if(x<1||x>=size-1||y<5||y>=size-5)continue;
    let energy=0;for(let py=y-4;py<=y+4;py++)energy+=THREE.DataUtils.fromHalfFloat(image.pixels[(py*size+x)*4]);columns.push(energy);
   }
   const ratio=Math.min(...columns)/Math.max(...columns);
   if(ratio<worst){worst=ratio;worstCase=`${distance}m, yaw ${angle}, subpixel ${sub}`;}
  }
 }
 lights.geometry.dispose();lights.material.dispose();deck.children.forEach(m=>m.geometry.dispose());material.dispose();
 // The old depth interpolation dropped to 27.4% on this sweep.
 assert(worst>.5,`strip breaks to ${(worst*100).toFixed(1)}% brightness at ${worstCase}`);
 return `${(worst*100).toFixed(1)}% minimum brightness along the strip, 160 camera positions`;
});
check('main HDR rendering multisamples geometry before postprocessing',()=>{
 const s=new THREE.Scene(),c=new THREE.OrthographicCamera(-1,1,1,-1,.1,10);c.position.z=2;
 const m=new THREE.Mesh(new THREE.PlaneGeometry(1.8,.07),new THREE.MeshBasicMaterial({color:0xffffff}));m.rotation.z=.071;s.add(m);
 const composer=createNightComposer(renderer);composer.renderToScreen=false;composer.addPass(new RenderPass(s,c));composer.setSize(size,size);composer.render();
 const rt=composer.readBuffer,pixels=new Uint16Array(size*size*4);renderer.readRenderTargetPixels(rt,0,0,size,size,pixels);let partial=0;
 for(let i=0;i<pixels.length;i+=4){const v=THREE.DataUtils.fromHalfFloat(pixels[i]);assert(Number.isFinite(v),'invalid resolved geometry');if(v>.01&&v<.99)partial++;}
 if(rt.samples>0)assert(partial>50,`no fractional edge coverage at ${rt.samples} samples`);
 assert(rt.samples<=2,'sample count exceeds the device budget');
 composer.setPixelRatio(.75);composer.setSize(size,size);
 assert(rt.width===96&&rt.height===96,'adaptive resolution did not resize the multisampled buffer');
 composer.render();assert(invalidPixels(rt)===0,'invalid pixels after resize');
 const samples=rt.samples;composer.dispose();m.geometry.dispose();m.material.dispose();
 return `${samples} samples, ${partial} partially covered edge pixels, adaptive resize passed`;
});

check('resolution changes present a drawn frame instead of a cleared black canvas',()=>{
 renderer.setRenderTarget(null);
 const s=new THREE.Scene();s.background=new THREE.Color(.15,.25,.35);
 const c=new THREE.PerspectiveCamera(),composer=createNightComposer(renderer);composer.addPass(new RenderPass(s,c));
 const pixel=()=>{const out=new Uint8Array(4);renderer.getContext().readPixels(20,20,1,1,renderer.getContext().RGBA,renderer.getContext().UNSIGNED_BYTE,out);return out[0]+out[1]+out[2];};
 composer.render();assert(pixel()>30,'control scene is dark');
 renderer.setPixelRatio(.9);assert(pixel()===0,'old post-render resize must reproduce a black drawing buffer');
 const smaa={enabled:true},fxaa={enabled:false};
 for(let i=0;i<60;i++){
  const ratio=[1.5,1.35,1.2,1.05,.9,1.1,1.3][i%7];
  renderNightFrame(renderer,composer,{ratio,size:{width:128+i%3,height:128+i%5},smaa,fxaa});
  assert(pixel()>30,`black output after resolution change ${i}`);
  assert(smaa.enabled||fxaa.enabled,'no antialiasing after quality change');
 }
 composer.dispose();renderer.setPixelRatio(1);renderer.setSize(size,size);
 return 'old ordering reproduces black; 60 DPR/viewport/AA changes stay visible';
});

renderer.setRenderTarget(null);target.dispose();renderer.dispose();
document.querySelector('#result').textContent=failures?`${failures} GPU checks failed`:`All ${checks.children.length} GPU checks passed`;

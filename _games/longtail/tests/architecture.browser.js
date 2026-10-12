import * as THREE from 'three';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {createWorld} from '../src/world.js';
import {River,buildPiers,project} from '../src/river.mjs';
import {MOON_DIRECTION} from '../src/night.js';
import {createNightComposer,createNightBloom,createNightFXAA} from '../src/postprocessing.js';
import {renderNightFrame} from '../src/render-frame.js';

await document.fonts.load('600 32px "Noto Sans Thai"');
const data=await(await fetch('../data/river-course.json')).json(),raw=new River(data.points);
const curve=new THREE.CatmullRomCurve3(data.points.map(p=>{const q=project(...p);return new THREE.Vector3(q.x,0,q.z);}));
const river=new River(curve.getSpacedPoints(320).map(p=>[p.x/108140+100.502,13.733-p.z/111320,raw.nearest(p.x,p.z).width])),piers=buildPiers(river);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x0a101b);scene.fog=new THREE.FogExp2(0x19202b,.00056);
const camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,.3,8000);camera.layers.enable(1);
const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;document.body.prepend(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xa4bcd6,0x4a3e32,.82));const moon=new THREE.DirectionalLight(0x9cbce2,.62);moon.position.copy(MOON_DIRECTION).multiplyScalar(1000);scene.add(moon);const shore=new THREE.DirectionalLight(0xffd49c,.18);shore.position.set(500,220,150);scene.add(shore);
const world=createWorld(scene,river,piers,false),composer=createNightComposer(renderer);composer.addPass(new RenderPass(scene,camera));composer.addPass(createNightBloom(innerWidth,innerHeight));composer.addPass(new OutputPass());composer.addPass(createNightFXAA());
const shift={finished:true},status=document.querySelector('#status');
function addButton(label,fn){const b=document.createElement('button');b.textContent=label;b.onclick=fn;document.querySelector('#views').append(b);return b;}
function landmark(id){const l=world.landmarks.find(l=>l.kind===id),p=river.sample(l.distance+170,-l.side*river.sample(l.distance).width*.28);camera.position.set(p.x,9,p.z);camera.lookAt(l.x,Math.min((l.bounds.max.y)*.4,76),l.z);status.textContent=l.name+' · mapped footprint, authored facade';draw();}
for(const[id,name]of[['millennium-hilton','Hilton & ICONSIAM'],['peninsula','The Peninsula'],['royal-orchid','Royal Orchid Sheraton'],['shangri-la','Shangri-La'],['magnolias','ICONSIAM residences']])addButton(name,()=>landmark(id));
addButton('Thai bridge signs',()=>{const p=project(100.5121,13.7193),n=river.nearest(p.x,p.z),q=river.sample(n.distance-120);camera.position.set(q.x,9,q.z);camera.lookAt(n.x,21,n.z);status.textContent='สะพานสมเด็จพระเจ้าตากสินมหาราช · Thai-first enamel signage';draw();});
addButton('Thai pier signs',()=>{const p=piers[8],n=river.sample(p.distance,0);camera.position.set(n.x,7,n.z);camera.lookAt(p.x+p.nx*15,4,p.z+p.nz*15);status.textContent='ไอคอนสยาม · Thai pier plate';draw();});
addButton('Resolution stress check',async()=>{
 let black=0;const pixels=new Uint8Array(32*32*4),gl=renderer.getContext();
 for(let i=0;i<90;i++){
  await new Promise(requestAnimationFrame);world.update(i/30,camera,shift);
  renderNightFrame(renderer,composer,{ratio:[1.5,1.35,1.2,1.05,.9][i%5]});
  gl.readPixels(Math.floor(renderer.domElement.width*.5),Math.floor(renderer.domElement.height*.5),32,32,gl.RGBA,gl.UNSIGNED_BYTE,pixels);
  if(!pixels.some((value,index)=>index%4!==3&&value>0))black++;
 }
 status.textContent=`${black===0?'PASS':'FAIL'}: ${black} black frames across 90 full-scene resolution changes`;
});
function draw(){world.update(12,camera,shift);composer.render();}
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();world.update(12,camera,shift);renderNightFrame(renderer,composer,{size:{width:innerWidth,height:innerHeight}});});
landmark('millennium-hilton');

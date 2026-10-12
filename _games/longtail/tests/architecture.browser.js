import * as THREE from 'three';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {createWorld} from '../src/world.js';
import {River,buildPiers,project} from '../src/river.mjs';
import {createNightComposer,createNightBloom,createNightFXAA} from '../src/postprocessing.js';
import {renderNightFrame} from '../src/render-frame.js';
import {DRONE_CUE} from '../src/drone-show.js';

await document.fonts.load('600 32px "Noto Sans Thai"');
const data=await(await fetch('../data/river-course.json')).json(),raw=new River(data.points);
const curve=new THREE.CatmullRomCurve3(data.points.map(p=>{const q=project(...p);return new THREE.Vector3(q.x,0,q.z);}));
const river=new River(curve.getSpacedPoints(320).map(p=>[p.x/108140+100.502,13.733-p.z/111320,raw.nearest(p.x,p.z).width])),piers=buildPiers(river);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x0a101b);scene.fog=new THREE.FogExp2(0x19202b,.00056);
const camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,.3,8000);camera.layers.enable(1);
const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;document.body.prepend(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xa4bcd6,0x4a3e32,.82));const shore=new THREE.DirectionalLight(0xffd49c,.18);shore.position.set(500,220,150);scene.add(shore);
const world=createWorld(scene,river,piers,new URLSearchParams(location.search).has('mobile')),composer=createNightComposer(renderer);composer.addPass(new RenderPass(scene,camera));composer.addPass(createNightBloom(innerWidth,innerHeight));composer.addPass(new OutputPass());composer.addPass(createNightFXAA());
const shift={finished:true},status=document.querySelector('#status');
let showLive=false,showTime=0;
function addButton(label,fn){const b=document.createElement('button');b.textContent=label;b.onclick=()=>{showLive=false;fn();};document.querySelector('#views').append(b);return b;}
function landmark(id){showLive=false;const l=world.landmarks.find(l=>l.kind===id),p=river.sample(l.distance+(l.bounds.max.y<100?70:170),l.side*river.sample(l.distance).width*(l.bounds.max.y<100?.07:-.28));camera.position.set(p.x,9,p.z);camera.lookAt(l.x,Math.min((l.bounds.max.y)*.4,76),l.z);status.textContent=l.name+' · mapped footprint, authored facade';draw();}
for(const[id,name]of[['millennium-hilton','Hilton & ICONSIAM'],['peninsula','The Peninsula'],['royal-orchid','Royal Orchid Sheraton'],['shangri-la','Shangri-La'],['magnolias','ICONSIAM residences'],['the-river','The River condos'],['icon-siam','ICONSIAM mall'],['wat-arun','Wat Arun'],['wat-pho','Wat Pho'],['wat-kalayanamit','Wat Kalayanamit'],['mandarin-oriental','Mandarin Oriental']])addButton(name,()=>landmark(id));
function droneView(){const l=world.landmarks.find(l=>l.kind==='icon-siam'),p=river.sample(l.distance+80,-l.side*river.sample(l.distance).width*.42);camera.position.set(p.x,10,p.z);camera.lookAt(world.droneShow.points.position.x,160,world.droneShow.points.position.z);}
for(const [i,f]of world.droneShow.formations.entries())addButton('Drones: '+f.name,()=>{showLive=false;showTime=i*DRONE_CUE+4;droneView();world.update(showTime,camera,shift);composer.render();status.textContent='ICONSIAM · '+f.name+' · 480 drones in one draw';});
addButton('Live drone show',()=>{droneView();showTime=0;showLive=true;});
let previousTime=performance.now();
function animate(now){requestAnimationFrame(animate);const dt=Math.min((now-previousTime)/1000,.1);previousTime=now;if(!showLive)return;showTime+=dt;world.update(showTime,camera,shift);composer.render();status.textContent='ICONSIAM · '+world.droneShow.currentName+' · live formation changes';}requestAnimationFrame(animate);
for(const [id,label]of[['memorial','Memorial Bridge'],['pokklao','Sky Park & Pokklao'],['taksin','Taksin Bridge']])addButton(label,()=>{
 const g=world.bridgeGroups.find(b=>b.group.name==='bridge:'+id).group,n=river.nearest(g.position.x,g.position.z),q=river.sample(n.distance+(id==='memorial'?-135:140),-n.width*.1);
 camera.position.set(q.x,8,q.z);camera.lookAt(n.x,20,n.z);status.textContent=label+' · distinct structure and matched supports';draw();
});
for(const [id,label]of[['icon','ICONSIAM pier'],['arun','Wat Arun pier'],['sathorn','Sathorn pier']])addButton(label,()=>{
 const p=piers.find(p=>p.id===id),n=river.sample(p.distance+18,p.side*(river.sample(p.distance).width/2-47));camera.position.set(n.x,6,n.z);camera.lookAt(p.x+p.nx*19,4.5,p.z+p.nz*19);status.textContent=label+' · connected gangway and clear berth';draw();
});
for(const side of[-1,1])addButton(side===1?'West-bank facades':'East-bank facades',()=>{
 const distance=river.length*.58,p=river.sample(distance,side*(river.sample(distance).width/2-65)),target=river.sample(distance+18,side*(p.width/2+32));
 camera.position.set(p.x,8,p.z);camera.lookAt(target.x,17,target.z);status.textContent='Opaque facades and corner columns from the river';draw();
});
addButton('Harbour overview',()=>{const l=world.landmarks.find(l=>l.kind==='icon-siam'),p=river.sample(l.distance+420,-river.sample(l.distance).width*.3);camera.position.set(p.x,24,p.z);camera.lookAt(l.x,61,l.z);status.textContent='ICONSIAM and the riverside skyline';draw();});
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
function moonLaunch(index){const p=river.sample(piers[index].distance);camera.fov=62;camera.updateProjectionMatrix();camera.position.set(p.x+Math.sin(p.heading)*23,12,p.z+Math.cos(p.heading)*23);camera.lookAt(p.x-Math.sin(p.heading)*30,3,p.z-Math.cos(p.heading)*30);world.setMoonLaunchView(camera);status.textContent='Moon launch view · '+piers[index].name;draw();}
addButton('Moon: Night Shift',()=>moonLaunch(0));addButton('Moon: ICONSIAM view',()=>moonLaunch(8));
addButton('Moon: turn right',()=>{camera.rotateY(-.20);status.textContent='Moon remains in the sky as the camera turns right';draw();});
addButton('Moon: turn around',()=>{camera.rotateY(Math.PI);status.textContent='Moon should be behind the camera';draw();});
addButton('Moon: boost view',()=>{camera.fov=69;camera.updateProjectionMatrix();status.textContent='Boost changes the field of view, not the moon bearing';draw();});
addButton('Building render budget',()=>{
 renderer.info.autoReset=false;renderer.info.reset();draw();
 const {calls,triangles}=renderer.info.render;status.textContent=`Full river scene: ${calls} draws · ${Math.round(triangles/1000)}k triangles · ${renderer.info.memory.textures} textures (includes reflection and postprocessing)`;
 renderer.info.autoReset=true;
});
addButton('Check bank clearance',()=>{
 const failures=[];
 for(const l of world.landmarks){
  const model=scene.getObjectByName('landmark:'+l.kind),bounds=new THREE.Box3();
  for(const mesh of model.children){mesh.geometry.computeBoundingBox();bounds.union(mesh.geometry.boundingBox);}
  for(const x of[bounds.min.x,bounds.max.x])for(const z of[bounds.min.z,bounds.max.z]){
   const v=model.localToWorld(new THREE.Vector3(x,0,z)),bank=river.nearest(v.x,v.z);if(Math.abs(bank.offset)<bank.width/2+3)failures.push(l.name);
  }
 }
 status.textContent=failures.length?'FAIL: waterfront overlaps at '+[...new Set(failures)].join(', '):'PASS: all '+world.landmarks.length+' landmark footprints clear the water';
});
addButton('Hide review controls',()=>{document.querySelector('#views').hidden=true;status.hidden=true;});
window.addEventListener('keydown',e=>{if(e.code==='Escape'){document.querySelector('#views').hidden=false;status.hidden=false;}});
function draw(){world.update(12,camera,shift);composer.render();}
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();world.update(12,camera,shift);renderNightFrame(renderer,composer,{size:{width:innerWidth,height:innerHeight}});});
landmark('millennium-hilton');

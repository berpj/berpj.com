import {assetUrl} from './game/assetUrl.js';
import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import {createBangkokSky,SKY_SUN_DIRECTION} from './world/sky.js';
import {createStreetLife} from './assets/streetLife.js';
import {createTukTuk} from './assets/tukTuk.js';
import {mountUI} from './ui/view.ts';
import {SCOREBOOK_KEY,LEGACY_RECORD_KEY,MODES,normalizeScorebook,bestScore,recordShift} from './game/scores.mjs';
import {renderScoreboard,renderScoreTarget} from './ui/scoreboard.js';
import './ui/style.css';
import {prepareMap} from './world/map.mjs';
import {createWorld,createPerson} from './world/scene.js';
import {Vehicle} from './game/vehicle.js';
import {roadRecoveryPose} from './game/recovery.js';
import {directArrowRotation,fareNavigationTarget} from './game/navigation.mjs';
import {Traffic} from './game/traffic.js';
import {Controls} from './game/input.js';
import {GameAudio} from './game/audio.js';
import {CollisionFX} from './game/collisionFX.js';
import {BurstFX} from './game/burstFX.js';
import {DriftFX} from './game/driftFX.js';
import {createContactShadows} from './world/contactShadows.js';
import {Session,clock,money,distance,clamp} from './game/rules.mjs';

const root=mountUI();
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const show=(id:string,value=true)=>$(id).classList.toggle('hidden',!value);
const mobile=matchMedia('(pointer: coarse)').matches||(innerWidth<900&&innerHeight<560);
const audio=new GameAudio();const session=new Session();
let map:any,renderer:THREE.WebGLRenderer,scene:THREE.Scene,camera:THREE.PerspectiveCamera,physics:RAPIER.World,vehicle:any,tuk:THREE.Group,traffic:any,sun:THREE.DirectionalLight;
let mode='arcade',started=false,paused=false,countdown=0,ready=false,routeLine=true,cameraMotion=true,quality='auto',toastTime=0,lineTime=0,bonusTime=0,uiTime=0,simTime=0,stopping=0,driftAge=0,driftDistance=0,lastCrash=-10;
let streetLife:any,worldDetails:any,collisionFX:any,burstFX:any,driftFX:any,contactShadows:any;let navigationRoute:any=null,navigationTarget:any=null,navigationAge=1;
let route:any=null,pickups:any[]=[],destinationMarker:any,selectedPickup:any=null;
let previous=performance.now(),accumulator=0,fpsFrames=0,fpsElapsed=0,observedFPS=60;const clockStep=1/60;
const cameraTarget=new THREE.Vector3(),cameraDesired=new THREE.Vector3(),sunOffset=SKY_SUN_DIRECTION.clone().multiplyScalar(194);
const cameraLastPlayer=new THREE.Vector3(),cameraLook=new THREE.Vector3(),cameraForward=new THREE.Vector3(),cameraRight=new THREE.Vector3();
let cameraHeading=0,arrowRotation=0;
const settingsKey='bangkok-tuk-tuk:settings:v1';
let scorebook=normalizeScorebook(loadStored(SCOREBOOK_KEY,{}),loadStored(LEGACY_RECORD_KEY,{}));
let runBest=0,runAssisted=false,runId='',runSaved=false,scoresPersistent=true;
const settings=loadStored(settingsKey,{quality:'auto',music:true,auto:mobile,route:true,motion:true});
quality=settings.quality;routeLine=settings.route;cameraMotion=settings.motion;audio.music=settings.music;
const controls=new Controls((force=false)=>togglePause(force),()=>audio.cue('horn'),()=>recover());controls.autoThrottle=settings.auto;
controls.bindTouch(root);root.classList.toggle('manual-throttle',!controls.autoThrottle);

function loadStored(key:string,fallback:any){try{return {...fallback,...JSON.parse(localStorage.getItem(key)||'{}')};}catch{return fallback;}}
function saveStored(key:string,value:any){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;/* Keep this visit's scores even if storage is denied. */}}
function toast(text:string,detail=''){const el=$('toast');el.textContent=text;if(detail){const small=document.createElement('small');small.textContent=detail;el.append(small);}el.classList.add('show');toastTime=1.75;}
function passengerSays(text:string){$('passenger-line').textContent=`“${text}”`;$('passenger-line').classList.add('show');lineTime=3;}
function openDialog(id:string){show('dialog-backdrop');for(const name of ['pause-dialog','settings-dialog','results-dialog'])show(name,name===id);}
function closeDialog(){show('dialog-backdrop',false);for(const name of ['pause-dialog','settings-dialog','results-dialog'])show(name,false);}

$('mode-select').addEventListener('change',()=>{mode=$<HTMLSelectElement>('mode-select').value;updateRecord();});
$('play-button').addEventListener('click',()=>startGame(mode));
$('settings-button').addEventListener('click',()=>openDialog('settings-dialog'));
$('settings-close').addEventListener('click',()=>{quality=$<HTMLSelectElement>('quality-select').value;audio.music=$<HTMLInputElement>('music-toggle').checked;controls.autoThrottle=$<HTMLInputElement>('auto-toggle').checked;root.classList.toggle('manual-throttle',!controls.autoThrottle);routeLine=$<HTMLInputElement>('route-toggle').checked;cameraMotion=$<HTMLInputElement>('motion-toggle').checked;saveStored(settingsKey,{quality,music:audio.music,auto:controls.autoThrottle,route:routeLine,motion:cameraMotion});resize();updateRecord();closeDialog();});
$('recover-button').addEventListener('click',recover);
$('pause-button').addEventListener('click',()=>togglePause());
$('sound-button').addEventListener('click',()=>{audio.setMuted(!audio.muted);$('sound-button').style.opacity=audio.muted?'.45':'1';$('sound-button').setAttribute('aria-label',audio.muted?'Unmute sound':'Mute sound');});
$('resume-button').addEventListener('click',()=>togglePause());
$('restart-button').addEventListener('click',()=>startGame(session.mode));
$('again-button').addEventListener('click',()=>startGame(session.mode));
$('menu-button').addEventListener('click',returnToMenu);$('results-menu').addEventListener('click',returnToMenu);
document.querySelector('.wordmark')!.addEventListener('click',e=>{e.preventDefault();if(started)togglePause();else closeDialog();});
$('data-button').addEventListener('click',()=>{if(started)togglePause();window.open(assetUrl('credits.html'),'_blank');});
for(const [id,key]of [['music-toggle','music'],['auto-toggle','auto'],['route-toggle','route'],['motion-toggle','motion']])$<HTMLInputElement>(id).checked=!!settings[key];$<HTMLSelectElement>('quality-select').value=quality;
window.addEventListener('resize',()=>{resize();if(started&&mobile&&innerHeight>innerWidth)togglePause(true);});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&started)togglePause(true);});

function updateRecord(){renderScoreboard(root,scorebook,mode,controls.autoThrottle,scoresPersistent);}
function resize(){if(!renderer)return;const low=quality==='low'||quality==='auto'&&mobile;const pixelBudget=low?1050000:2200000;const ratio=Math.min(devicePixelRatio,low?1.3:1.5,Math.sqrt(pixelBudget/(innerWidth*innerHeight)));renderer.setPixelRatio(Math.max(.65,ratio));renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}

async function init(){
  const canvas=$<HTMLCanvasElement>('game-canvas');renderer=new THREE.WebGLRenderer({canvas,antialias:!mobile,powerPreference:'high-performance'});renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.04;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();togglePause(true);$('context-hint').textContent='Graphics interrupted. Reload to restore this local game.';});
  scene=new THREE.Scene();scene.background=new THREE.Color('#b6c8d5');scene.fog=new THREE.Fog('#becbd3',240,1150);camera=new THREE.PerspectiveCamera(57,innerWidth/innerHeight,.3,1700);
  const skyReady=createBangkokSky(scene,renderer,{mobile,quality});
  scene.add(new THREE.HemisphereLight('#d7e6f2','#a18e77',.88));sun=new THREE.DirectionalLight('#fff2db',3.05);sun.position.copy(sunOffset);sun.castShadow=true;sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);Object.assign(sun.shadow.camera,{left:-65,right:65,top:65,bottom:-65,near:20,far:350});sun.shadow.bias=-.0001;sun.shadow.normalBias=.04;scene.add(sun,sun.target);
  $('loading-status').textContent='Reading the real Sukhumvit street network…';
  const [data]=await Promise.all([fetch(assetUrl('data/bangkok-sukhumvit.json')).then(r=>{if(!r.ok)throw new Error('Street data could not load');return r.json();}),RAPIER.init(),skyReady]);
  map=prepareMap(data);physics=new RAPIER.World({x:0,y:-9.81,z:0});physics.timestep=clockStep;
  $('loading-status').textContent='Building Bangkok, one soi at a time…';await new Promise(r=>setTimeout(r,20));worldDetails=createWorld(scene,map,physics,RAPIER,{mobile});streetLife=createStreetLife(THREE,map,{mobile,shopfronts:worldDetails.shopfronts});scene.add(streetLife.group);
  tuk=createTukTuk(THREE,{livery:'blue'});scene.add(tuk);vehicle=new Vehicle(physics,RAPIER,tuk,map.spawn);vehicle.body.setEnabled(false);traffic=new Traffic(scene,map,physics,RAPIER,{mobile});collisionFX=new CollisionFX(scene);burstFX=new BurstFX(tuk);driftFX=new DriftFX(scene,{mobile});contactShadows=createContactShadows(scene,traffic,vehicle);createPickups();createDestinationMarker();
  ready=true;resize();updateRecord();updateCamera(1,true);renderer.render(scene,camera);show('loading',false);show('menu');requestAnimationFrame(frame);
  (window as any).__tukTuk={snapshot:()=>({ready,started,paused,phase:session.phase,earnings:session.earnings,deliveries:session.deliveries,failed:session.failed,shiftTime:session.time,passengerTime:session.fare?.remaining,position:{...vehicle.position},speed:vehicle.actualSpeed,heading:vehicle.heading,combo:session.combo,mode:session.mode,assisted:controls.autoThrottle,fps:observedFPS,renderer:renderer.info.render,activeFare:session.fare?{destination:session.fare.to.name,position:{x:session.fare.to.x,z:session.fare.to.z},route:route?.points}:null,nearestPickup:selectedPickup?{name:selectedPickup.anchor.name,x:selectedPickup.anchor.x,z:selectedPickup.anchor.z}:null}),debug:location.search.includes('debug=1')?{teleport:(x:number,z:number,h?:number)=>vehicle.reset({x,z,heading:h??vehicle.heading}),deliveries:()=>map.destinations,route:()=>route,step:(dt:number)=>simulation(dt)}:undefined};
}

function ring(color:string,radius:number){const group=new THREE.Group();const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.75,side:THREE.DoubleSide,depthWrite:false});const disc=new THREE.Mesh(new THREE.RingGeometry(radius-.13,radius,48),material);disc.rotation.x=-Math.PI/2;disc.position.y=.08;group.add(disc);const inner=new THREE.Mesh(new THREE.CircleGeometry(radius-.18,48),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.1,depthWrite:false}));inner.rotation.x=-Math.PI/2;inner.position.y=.075;group.add(inner);return group;}
function markerLabel(text:string,color='#f2cf46'){const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const c=canvas.getContext('2d')!;c.fillStyle=color;c.beginPath();c.roundRect(10,10,108,108,22);c.fill();c.fillStyle='#244834';c.font='bold 68px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(text,64,67);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:t,depthTest:true}));sprite.scale.set(1.7,1.7,1);return sprite;}
function createPickups(){
  if(pickups.length){for(const pickup of pickups){pickup.cooldown=0;pickup.group.visible=true;}return;}
  pickups.forEach(p=>scene.remove(p.group));pickups=[];
  const start={...map.anchors[0],x:map.spawn.x-Math.sin(map.spawn.heading)*12,z:map.spawn.z-Math.cos(map.spawn.heading)*12,name:'Your first passenger'};
  for(const [i,anchor] of [start,...map.anchors.slice(0,30)].entries()){
    if(i>0&&distance(anchor,start)<35)continue;
    const candidates=map.destinations.map((d:any)=>({d,r:map.route(anchor,d)})).filter((x:any)=>x.r&&x.r.length>180&&x.r.length<1700).sort((a:any,b:any)=>a.r.length-b.r.length);let choice=candidates[Math.min(i%4,Math.max(0,candidates.length-1))];
    if(i===0){const target={x:map.spawn.x-Math.sin(map.spawn.heading)*180,z:map.spawn.z-Math.cos(map.spawn.heading)*180};const n=map.nearest(target,map.main.filter((s:any)=>s.dir.x*-Math.sin(map.spawn.heading)+s.dir.z*-Math.cos(map.spawn.heading)>.7));const s=n.segment;const d={x:n.x+s.dir.z*2.2,z:n.z-s.dir.x*2.2,node:s.ia,name:'Sukhumvit Market',id:'authored-market',segment:s,tutorial:true};choice={d,r:map.route(anchor,d)};}
    if(!choice?.r)continue;
    const group=ring(i%3===0?'#f3cf40':i%3===1?'#ff9e42':'#b4dd45',4.5);group.position.set(anchor.x,0,anchor.z);const person=createPerson(['#eac76a','#8c9e7c','#d1886d','#a7bac2','#b9a47c','#d7d5bd','#637567','#b1a2b3'][i%8]);person.position.set(3.4,0,0);group.add(person);const label=markerLabel('฿',i%3===0?'#f3cf40':i%3===1?'#ff9e42':'#b4dd45');label.position.set(3.4,3,0);group.add(label);scene.add(group);pickups.push({anchor,group,label,to:choice.d,route:choice.r,cooldown:0,index:i});
  }
}
function createDestinationMarker(){destinationMarker=ring('#8deb77',7);const cone=new THREE.Mesh(new THREE.ConeGeometry(1.4,2,4),new THREE.MeshBasicMaterial({color:'#e5d449'}));cone.rotation.z=Math.PI;cone.position.y=5;destinationMarker.add(cone);destinationMarker.visible=false;scene.add(destinationMarker);}
function resetPassengers(){for(const p of tuk.userData.passengers||[])p.visible=!!session.fare;}
function startGame(selectedMode:string){if(!ready)return;closeDialog();audio.start();session.reset(selectedMode);mode=selectedMode;$<HTMLSelectElement>('mode-select').value=mode;runAssisted=controls.autoThrottle;runBest=bestScore(scorebook,mode,runAssisted);runId=crypto.randomUUID();runSaved=false;arrowRotation=0;started=true;paused=false;countdown=3;stopping=0;simTime=0;lastCrash=-10;driftAge=0;driftDistance=0;route=null;navigationRoute=null;navigationTarget=null;navigationAge=1;selectedPickup=null;controls.clear();controls.gear=1;controls.enabled=true;vehicle.body.setEnabled(true);vehicle.reset(map.spawn);collisionFX?.reset();burstFX?.reset();driftFX?.reset();traffic.reset(map.spawn);createPickups();destinationMarker.visible=false;resetPassengers();accumulator=0;updateCamera(0,true);
  root.classList.add('playing');show('menu',false);show('hud');show('countdown');$('countdown').textContent='3';$('context-hint').textContent='Stop in the yellow ring to pick up a passenger.';updateHUD();}
function returnToMenu(){audio.update(0,0,false);started=false;paused=false;countdown=0;controls.enabled=false;controls.clear();session.reset();destinationMarker.visible=false;vehicle.reset(map.spawn);vehicle.body.setEnabled(false);driftFX?.reset();resetPassengers();show('menu');show('hud',false);show('countdown',false);closeDialog();root.classList.remove('playing');updateRecord();}
function togglePause(force=false){if(!started||session.phase==='ended'||countdown>0&&!force)return;if(force&&paused)return;paused=force||!paused;controls.clear();if(paused){audio.update(0,0,false);openDialog('pause-dialog');}else{audio.start();closeDialog();countdown=1;show('countdown');}previous=performance.now();accumulator=0;}
function recover(){if(!started||paused||countdown>0)return;session.recover();const safe=vehicle.safe||map.spawn;vehicle.reset(safe);driftFX?.breakTrail();controls.clear();controls.gear=1;toast('BACK ON THE ROAD','−3 seconds');stopping=0;}

function endGame(){
  if(!started||runSaved)return;
  runSaved=true;session.phase='ended';controls.enabled=false;controls.clear();audio.update(0,0,false);show('countdown',false);
  const result=recordShift(scorebook,{mode:session.mode,assisted:runAssisted,id:runId,score:session.earnings,deliveries:session.deliveries,combo:session.maxCombo,at:Date.now()});
  scorebook=result.book;if(result.recorded)scoresPersistent=saveStored(SCOREBOOK_KEY,scorebook);
  $('result-title').textContent=result.isNewBest?(result.previousBest?'New personal best!':'First score banked!'):session.deliveries?'Nice driving.':'Try another shift.';
  $('result-rank').textContent=result.rank?`#${result.rank} ON YOUR ${MODES[session.mode].toUpperCase()} BOARD`:'KEEP CHASING THE RECORD';
  $('result-previous').textContent=money(result.previousBest);$('result-best').textContent=money(result.best);
  $('result-note').textContent=result.isNewBest&&result.previousBest?`${money(session.earnings-result.previousBest)} above your previous best.`:result.previousBest>session.earnings?`${money(result.previousBest-session.earnings)} short of your best. One more shift?`:result.previousBest&&result.previousBest===session.earnings?'You matched your best. Can you beat it?':session.earnings?'Your next target is right here. Go beat it.':'Deliver a passenger to start your score.';
  $('result-money').textContent=money(session.earnings);$('result-deliveries').textContent=String(session.deliveries);$('result-combo').textContent=String(session.maxCombo);
  updateRecord();openDialog('results-dialog');
}

function simulation(dt:number){
  simTime+=dt;const input=controls.poll(dt),position=vehicle.position;const locked=session.phase==='boarding'||session.phase==='unloading';const event=vehicle.step(dt,input,locked);if(event==='dash'){audio.cue('dash');toast('TUK TUK BURST');}
  traffic.step(dt,position);physics.step();traffic.sync(vehicle.position);const impact=vehicle.sync(dt),crash=!!impact;
  if(impact){collisionFX.hit(impact);audio.impact(impact);if(impact.serious&&simTime-lastCrash>.65){lastCrash=simTime;session.crash();toast(impact.type==='bus'?'HEAVY HIT!':impact.type==='motorcycle'?'SCOOTER BUMP':'WATCH THE PAINT!',impact.profile.label);}}
  const p=vehicle.position;if(p.y<-4||!map.inside(p))recover();
  const carrying=session.phase==='carrying';let closest=Infinity;selectedPickup=null;
  for(const pickup of pickups){pickup.cooldown=Math.max(0,pickup.cooldown-dt);const d=distance(p,pickup.anchor);pickup.group.visible=!session.fare&&pickup.cooldown<=0&&d<240;pickup.label.position.y=3+Math.sin(simTime*2+pickup.index)*.15;if(pickup.cooldown<=0&&d<closest){closest=d;selectedPickup=pickup;}}
  if(session.phase==='seeking'&&selectedPickup){if(closest<4.5&&vehicle.actualSpeed<1){stopping+=dt;if(stopping>=.35){const pickup=selectedPickup;const f=session.accept(pickup.anchor,pickup.to,pickup.route.length);if(f){if(pickup.index===0&&session.deliveries===0){f.deadline=65;f.remaining=65;}route=pickup.route;pickup.cooldown=30;destinationMarker.position.set(pickup.to.x,0,pickup.to.z);destinationMarker.visible=true;audio.cue('fare');passengerSays(`To ${pickup.to.name}, please. Let’s go!`);stopping=0;resetPassengers();}}}else stopping=0;}
  else if(carrying&&session.fare){const target=session.fare.to,d=distance(p,target);if(d<7&&vehicle.actualSpeed<1){stopping+=dt;if(stopping>=.35){session.tip('arrival','first',10);const result=session.deliver(dt);if(result){toast(`${result.grade}!`,`${money(result.payout)}${result.extension?` · +${result.extension}s`:''}`);audio.cue('fare');passengerSays(['That was a proper Bangkok ride!','You know these streets!','ขอบคุณ! See you next time.'][session.deliveries%3]);if(result.extension){$('time-bonus').textContent=`+${result.extension}s`;bonusTime=2;}destinationMarker.visible=false;route=null;stopping=0;}}}else stopping=0;
    if(vehicle.driftIntensity>.25&&vehicle.actualSpeed>5.5&&!crash){driftAge+=dt;driftDistance+=vehicle.actualSpeed*dt;if(driftAge>.55&&driftDistance>12){const tip=session.tip('drift',Math.floor(driftDistance/18),8);if(tip){toast('SOI SLIDE',`+${money(tip)}`);audio.cue('tip');}driftAge=0;}}else driftAge=0;
    for(const car of traffic.cars){if(car.distance>2.5&&car.distance<4.2&&vehicle.actualSpeed>8&&!crash){car.nearMissTime=(car.nearMissTime||0)+dt;}else if(car.nearMissTime){if(car.distance>4.2&&car.nearMissTime>.035&&simTime-lastCrash>.45){const tip=session.tip('nearMiss',car.id,5);if(tip){toast('NEAR MISS',`+${money(tip)}`);audio.cue('tip');}}car.nearMissTime=0;}}
  }
  resetPassengers();const outcome=session.step(dt);if(outcome==='fareFailed'){toast('TOO SLOW','Next passenger, fresh start.');audio.cue('fail');destinationMarker.visible=false;route=null;stopping=0;}if(outcome==='ended'){endGame();return;}
  if(vehicle.actualSpeed>3&&!crash&&simTime-lastCrash>1){const safe=roadRecoveryPose(map,p,vehicle.heading);if(safe&&!physics.intersectionWithShape({x:safe.x,y:1,z:safe.z},{x:0,y:Math.sin(safe.heading/2),z:0,w:Math.cos(safe.heading/2)},new RAPIER.Cuboid(.78,.7,1.4),undefined,undefined,vehicle.collider,vehicle.body))vehicle.safe=safe;}
  audio.update(vehicle.actualSpeed,input.throttle,true,vehicle.driftIntensity);
}

function updateCamera(dt:number,instant=false){if(!vehicle)return;const p=vehicle.renderPosition||vehicle.position,h=vehicle.renderHeading??vehicle.heading;
  const driftView=cameraMotion?vehicle.slipAngle*clamp(vehicle.slide,0,1)*.75:0;
  const followHeading=h-driftView;
  cameraHeading+=Math.atan2(Math.sin(followHeading-cameraHeading),Math.cos(followHeading-cameraHeading))*(instant?1:1-Math.exp(-dt*12));
  const forward=cameraForward.set(-Math.sin(cameraHeading),0,-Math.cos(cameraHeading)),right=cameraRight.set(Math.cos(cameraHeading),0,-Math.sin(cameraHeading));
  if(!started){const angle=.3+Math.sin(performance.now()/12000)*.12;cameraDesired.set(p.x,p.y+2.8,p.z).addScaledVector(forward,-6.3).addScaledVector(right,3+angle);cameraTarget.set(p.x,p.y+1.1,p.z).addScaledVector(forward,2.8).addScaledVector(right,-2.6);}
  else{const back=controls.keys.has('KeyC')?1:-1,boostFraming=clamp(vehicle.wheelie/.3,0,1);cameraDesired.set(p.x,p.y+(mobile?2.4:2.3)+boostFraming*.35,p.z).addScaledVector(forward,back*((mobile?5.6:5.2)+Math.min(vehicle.actualSpeed*.018,.4)+boostFraming*1.25+(cameraMotion?vehicle.driftIntensity*.65:0))).addScaledVector(right,.35);cameraTarget.set(p.x,p.y+1.1,p.z).addScaledVector(forward,2.5+vehicle.actualSpeed*.025);}
  if(!instant){camera.position.x+=p.x-cameraLastPlayer.x;camera.position.y+=p.y-cameraLastPlayer.y;camera.position.z+=p.z-cameraLastPlayer.z;cameraLook.x+=p.x-cameraLastPlayer.x;cameraLook.y+=p.y-cameraLastPlayer.y;cameraLook.z+=p.z-cameraLastPlayer.z;}cameraLastPlayer.set(p.x,p.y,p.z);
  camera.position.lerp(cameraDesired,instant?1:1-Math.exp(-dt*(cameraMotion?7:14)));
  if(started){const anchor={x:p.x,y:p.y+1.15,z:p.z};const direction=new THREE.Vector3(camera.position.x-anchor.x,camera.position.y-anchor.y,camera.position.z-anchor.z);const length=direction.length();direction.normalize();const obstruction=physics.castRay(new RAPIER.Ray(anchor,direction),length,true,RAPIER.QueryFilterFlags.EXCLUDE_DYNAMIC,undefined,vehicle.collider,vehicle.body);if(obstruction){const clear=Math.max(.5,obstruction.timeOfImpact-.25);camera.position.set(anchor.x+direction.x*clear,anchor.y+direction.y*clear,anchor.z+direction.z*clear);}}
  if(started&&cameraMotion&&collisionFX?.shake>.001){const shake=collisionFX.shake,t=collisionFX.time;camera.position.y+=Math.sin(t*72)*shake;camera.position.addScaledVector(right,Math.sin(t*59)*shake*.6);}
  cameraLook.lerp(cameraTarget,instant?1:1-Math.exp(-dt*14));camera.lookAt(cameraLook);const targetFov=started?57+Math.min(vehicle.actualSpeed*.12,3)+(vehicle.bursting&&cameraMotion?1.5:0):55;if(Math.abs(camera.fov-targetFov)>.03){camera.fov+=(targetFov-camera.fov)*Math.min(1,dt*3);camera.updateProjectionMatrix();}
  sun.target.position.set(p.x,0,p.z);sun.position.copy(sun.target.position).add(sunOffset);sun.target.updateMatrixWorld();
}
function updateHUD(){
  const destination=fareNavigationTarget(session);navigationAge+=.1;
  if(destination&&(navigationAge>=.6||destination!==navigationTarget)){navigationRoute=map.route(vehicle.position,destination);navigationTarget=destination;navigationAge=0;}
  if(!destination){navigationRoute=null;navigationTarget=null;}
  if(destination){arrowRotation=directArrowRotation(vehicle.position,destination,vehicle.heading,arrowRotation);document.querySelector<SVGElement>('#nav-arrow svg')!.style.transform=`rotate(${arrowRotation}deg)`;}

  $('shift-time').textContent=clock(session.time);document.querySelector('.shift-clock')!.classList.toggle('low',session.time<15);$('earnings').textContent=money(session.earnings);$('deliveries').textContent=String(session.deliveries);renderScoreTarget(root,session.earnings,runBest,session.mode);$('speed').textContent=String(Math.round(vehicle.actualSpeed*3.6));$('gear').innerHTML=`${vehicle.speed<-.1?'R':'D'}${vehicle.bursting?' <span>· BURST!</span>':vehicle.driftIntensity>.12?' <span>· SOI SLIDE</span>':''}`;
  show('drift-indicator',vehicle.driftIntensity>.12&&started&&!paused&&countdown<=0&&session.phase!=='ended');
  const f=session.fare;show('fare-clock',!!f);show('nav-arrow',!!destination);show('combo',session.combo>1);$('combo-count').textContent=String(session.combo);$('combo-multiplier').textContent=`×${Math.min(5,1+Math.floor(session.combo/3))}`;
  if(f){const d=distance(vehicle.position,f.to);$('job-label').textContent=session.phase==='unloading'?'FARE COMPLETE':'DROP OFF';$('job-name').textContent=f.to.name;$('job-distance').textContent=`${Math.round(d)} m · ${money(f.base+f.tips)}`;$('fare-clock').textContent=clock(f.remaining);document.querySelector<HTMLElement>('#fare-progress>span')!.style.width=`${f.remaining/f.deadline*100}%`;
    $('nav-distance').textContent=`${Math.round(d)} m`;
    $('context-hint').textContent=session.phase==='boarding'?'All aboard. Time to move!':d<18?'Brake inside the green ring to drop off.':'Hold burst on the straights. Release for tighter turns.';
  }else{$('job-label').textContent='FIND A PASSENGER';$('job-name').textContent='Choose any customer';$('job-distance').textContent='Customers are the yellow dots on your map';document.querySelector<HTMLElement>('#fare-progress>span')!.style.width='0';$('context-hint').textContent='Stop in any yellow ring to pick up a passenger.';$('nav-distance').textContent='';}
  drawMinimap();
}
function drawMinimap(){const c=$<HTMLCanvasElement>('minimap').getContext('2d')!;const w=280,h=280;c.fillStyle='#182e27';c.fillRect(0,0,w,h);const p=vehicle.position,scale=.55;const xy=(a:any)=>({x:(a.x-p.x)*scale+w/2,y:(a.z-p.z)*scale+h/2});
  c.strokeStyle='#607063';c.lineCap='round';for(const s of map.segments){if(distance(s.a,p)>420&&distance(s.b,p)>420)continue;const a=xy(s.a),b=xy(s.b);c.lineWidth=Math.max(1,s.road.width*scale*.45);c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);c.stroke();}
  if(navigationRoute&&routeLine){c.strokeStyle='#edd14d';c.lineWidth=4;c.beginPath();navigationRoute.points.forEach((a:any,i:number)=>{const point=xy(a);if(i)c.lineTo(point.x,point.y);else c.moveTo(point.x,point.y);});c.stroke();}
  const target=fareNavigationTarget(session);
  if(!target){for(const pickup of pickups){if(pickup.cooldown>0)continue;const a=xy(pickup.anchor);c.fillStyle='#eaca4c';c.beginPath();c.arc(a.x,a.y,3,0,Math.PI*2);c.fill();}}
  if(target){const a=xy(target);c.fillStyle='#a2e27d';c.beginPath();c.arc(a.x,a.y,5,0,Math.PI*2);c.fill();}
  c.save();c.translate(w/2,h/2);c.rotate(-vehicle.heading);c.fillStyle='#fbf3d3';c.strokeStyle='#17382c';c.lineWidth=2;c.beginPath();c.moveTo(0,-10);c.lineTo(6,7);c.lineTo(0,4);c.lineTo(-6,7);c.closePath();c.fill();c.stroke();c.restore();}
function frame(now:number){requestAnimationFrame(frame);controls.pollPause();const raw=(now-previous)/1000,dt=Math.min(.08,raw);previous=now;fpsFrames++;fpsElapsed+=raw;if(fpsElapsed>=1){observedFPS=Math.round(fpsFrames/fpsElapsed);fpsFrames=0;fpsElapsed=0;}
  if(started&&!paused&&session.phase!=='ended'){
    if(countdown>0){countdown-=dt;$('countdown').textContent=countdown>0?String(Math.ceil(countdown)):'GO!';if(countdown<=-.4)show('countdown',false);if(countdown<=0){show('countdown',false);accumulator=0;}}
    else{accumulator+=dt;let steps=0;while(accumulator>=clockStep&&steps++<5){simulation(clockStep);accumulator-=clockStep;if(session.phase==='ended')break;}if(accumulator>clockStep*5)accumulator=0;}
  }else if(!started){traffic.step(dt,vehicle.position);physics.step();traffic.sync(vehicle.position);vehicle.sync(0);audio.update(0,0,false);}else audio.update(0,0,false);
  toastTime-=dt;lineTime-=dt;bonusTime-=dt;if(toastTime<=0)$('toast').classList.remove('show');if(lineTime<=0)$('passenger-line').classList.remove('show');if(bonusTime<=0)$('time-bonus').textContent='';
  const active=started&&!paused&&countdown<=0&&session.phase!=='ended';vehicle.render(active?accumulator/clockStep:1);traffic.render(active?accumulator/clockStep:1);burstFX?.update(paused?0:dt,vehicle);driftFX?.update(paused?0:dt,vehicle,active);
  uiTime+=dt;if(uiTime>.1){if(started)updateHUD();root.dataset.state=JSON.stringify({phase:session.phase,started,paused,ready,countdown,position:{...vehicle.position},speed:vehicle.actualSpeed,heading:vehicle.heading,wheelie:vehicle.wheelie,burst:vehicle.bursting,flames:burstFX?.strength,renderPosition:{...vehicle.renderPosition},time:session.time,passengerTime:session.fare?.remaining,earnings:session.earnings,deliveries:session.deliveries,combo:session.combo,fps:observedFPS,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,inputKeys:[...controls.keys],trafficNearby:traffic.cars.filter((c:any)=>c.distance<160).length,streetLife:streetLife?.group.userData,shopfronts:worldDetails?.shopfrontStats,roads:map.roadMarkingStats,layout:worldDetails?.layoutStats,impact:vehicle.lastImpact?{type:vehicle.lastImpact.type,deltaV:vehicle.lastImpact.deltaV}:null,destination:session.fare?{name:session.fare.to.name,x:session.fare.to.x,z:session.fare.to.z}:null});uiTime=0;}streetLife?.update(paused?0:dt,vehicle.position);worldDetails?.update(vehicle.position);collisionFX?.update(paused?0:dt);updateCamera(dt);if(!started)for(const car of traffic.cars)car.mesh.visible=!!car.segment&&car.distance>18;contactShadows?.update();renderer.render(scene,camera);
}
init().catch(error=>{console.error(error);$('loading-status').textContent=`Could not start: ${error.message}. Reload to try again.`;});

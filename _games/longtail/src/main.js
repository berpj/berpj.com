import * as THREE from 'three';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {createNightBloom,createNightComposer,createNightFXAA} from './postprocessing.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {River,buildPiers,clamp,angleDelta} from './river.mjs';
import {BoatPhysics,Shift,TUNING,collide,capsuleContact,directBearing,cleanScores,saveScore,RECORD_KEY} from './simulation.mjs';
import {createWorld} from './world.js';
import {MOON_DIRECTION} from './night.js';
import {createBoat,boatSpecs} from './boats.js';
import {createCargoBoat,cargoSpecs} from './cargo.js';
import {createFleet,advanceFleet} from './traffic.mjs';
import {createTrafficBoat,updateTrafficDetail} from './traffic-visuals.js';
import {createTowlines} from './towlines.js';
import {simplifyBoatReflections} from './reflections.js';
import {VisibleLights,boatLightFixtures} from './visible-lights.js';
import {Controls} from './input.js';
import {Wake,SurfaceWakes} from './effects.js';
import {RiverAudio} from './audio.js';
import {TrafficWarnings} from './collision-warning.mjs';
import {CrashFeedback,BOAT_NAMES} from './crash-feedback.js';
import './style.css';
import {createFrameMeter} from './frame-meter.js';
import {RenderBudget} from './render-budget.mjs';
import {renderNightFrame} from './render-frame.js';

const $=s=>document.querySelector(s),mobile=matchMedia('(pointer:coarse)').matches||innerWidth<700;
const boatIcon='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 23h32l-7 9H13L4 23Z" stroke="currentColor" stroke-width="1.7"/><path d="m12 20 4-10h14l5 10M20 10v12M6 37q5-4 10 0t10 0t10 0" stroke="currentColor" stroke-width="1.7"/></svg>';
const soundIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5-5 4H2v6h3l5 4V5ZM14 8q5 4 0 8M17 4q9 8 0 16"/></svg>';
const pauseIcon='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';
const brand=`<div class="brand">${boatIcon}<div>BANGKOK<strong>LONGTAIL</strong></div></div>`;
const keys='<span><b>W A S D</b> Pilot</span><span><b>SHIFT</b> Boost</span><span><b>SPACE</b> Slide</span><span><b>H</b> Horn</span><span><b>R</b> Recover</span>';
$('#app').innerHTML=`
<canvas id="scene" aria-label="Bangkok long-tail boat game"></canvas><div id="vignette"></div>
<section id="menu" class="screen">
 <header>${brand}</header>
 <button class="round sound-menu sound-btn" aria-label="Mute sound">${soundIcon}</button>
 <div class="menu-body"><div class="menu-content">
  <h1>LONGTAIL<br><em>AFTER DARK</em></h1>
  <p class="lede">Pick up passengers. Hard crashes end your run.</p>
  <div class="mode-tabs" role="group" aria-label="Game mode"><button id="mode-shift" class="active" aria-pressed="true">NIGHT SHIFT · 3 MIN</button><button id="mode-free" aria-pressed="false">FREE CRUISE</button></div>
  <button id="start" class="primary" disabled>PLAY</button>
  <div id="loading-note" role="status">Loading game…</div>
  <div class="record-preview"><div><div class="micro">BEST SCORE</div><div class="value" id="menu-best">฿ 0</div></div><p id="menu-record-note" hidden></p></div>
 </div></div>
 <footer class="menu-foot"><div class="keys">${keys}</div><a class="credits" href="./credits.html" target="_blank" rel="noopener">Credits</a></footer>
</section>
<div id="hud" hidden><div class="hud-brand">${brand}</div><div class="timer"><div class="micro">NIGHT SHIFT</div><div class="timer-value">03:00</div></div><div class="hud-controls"><button class="round sound-btn" aria-label="Mute sound">${soundIcon}</button><button id="horn" class="round" aria-label="Sound boat horn">♩</button><button id="recover" class="round" aria-label="Recover boat">↻</button><button id="pause" class="round" aria-label="Pause game">${pauseIcon}</button></div><div class="fare-panel"><div class="eyebrow" id="fare-label">FIND YOUR NEXT FARE</div><h2 id="fare-title">Choose any pier</h2><p id="fare-hint">Stop in a golden ring to pick up passengers.</p><div class="fare-row"><span id="fare-detail">Yellow dots on your map</span><strong id="fare-time"></strong></div><div class="fare-progress" hidden><i></i></div></div><div class="score-panel"><div class="micro">TONIGHT’S TAKINGS</div><div class="total" id="earnings">฿ 0</div><div class="fares" id="deliveries">0 FARES</div><div class="best">BEST <b id="hud-best">฿ 0</b></div></div><div id="navigation" hidden><svg viewBox="0 0 48 64" aria-label="Direction to destination"><path d="M24 2 46 30H32v31H16V30H2Z"/></svg><div id="nav-distance"></div></div><div id="stunt" hidden><strong></strong><small></small></div><div id="dock-status" hidden><span>HOLD STEADY</span><progress value="0" max=".65"></progress></div><div id="minimap-shell"><canvas id="minimap" width="352" height="348" aria-label="River map with passenger piers"></canvas><div id="map-caption"><span>● PASSENGERS</span><b>N ↑</b></div></div><div id="speed"><strong>0</strong><span class="unit">KM/H</span><div class="gear">LONGTAIL EXPRESS</div></div><div id="toast" role="status"></div><div id="hud-keys" class="keys">${keys}</div><div class="osm"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a> · <a href="./credits.html" target="_blank" rel="noopener">Credits</a></div><div class="touch"><div class="touch-controls"><div id="steer-pad" aria-label="Slide left or right to steer"><span>◁</span><i></i><span>▷</span></div><div class="touch-actions"><button data-control="drift">SLIDE</button><button data-control="boost">BOOST</button><button data-control="brake">BRAKE / R</button><button class="gas" data-control="gas">THROTTLE</button></div></div></div></div>
<div id="countdown" class="countdown" hidden></div>
<section id="pause-screen" class="screen modal" hidden><div class="dialog"><div class="eyebrow">TAKE A BREATHER</div><h2>River can wait.</h2><div class="setting-row"><span>Night drive soundtrack</span><button id="music-toggle" class="toggle" aria-pressed="true">ON</button></div><p class="modal-keys">W / ↑ accelerate · S / ↓ brake, then reverse<br>A D / ← → steer · Shift boost · Space slide<br>H horn · R recover · Esc pause<br>Gamepad: RT / LT · left stick · A boost · B slide</p><button id="resume" class="primary">BACK TO THE RIVER <span>↗</span></button><button id="quit" class="secondary">End this shift</button><a class="credits" href="./credits.html" target="_blank" rel="noopener">Music & data credits ↗</a></div></section>
<section id="results" class="screen modal" hidden><div class="dialog"><div class="eyebrow" id="result-label">SHIFT COMPLETE</div><h2 id="result-title">Shift complete.</h2><p id="result-reason" hidden></p><div class="result-total" id="result-score">฿ 0</div><div class="result-meta"><div><span class="micro">FARES DELIVERED</span><strong id="result-fares">0</strong></div><div><span class="micro">PERSONAL BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="micro">YOUR BEST NIGHTS</div><ol id="record-list"></ol><button id="again" class="primary">PLAY AGAIN <span>↗</span></button><button id="back-menu" class="secondary">Back to the riverfront</button></div></section>`;

let storage;try{storage=localStorage;}catch{storage={getItem:()=>null,setItem:()=>{}};}
let scores=[];try{scores=cleanScores(JSON.parse(storage.getItem(RECORD_KEY)||'[]'));}catch{}
const best=()=>scores[0]?.score||0,money=v=>`฿ ${Math.round(v).toLocaleString()}`,time=v=>`${Math.floor(v/60).toString().padStart(2,'0')}:${Math.floor(v%60).toString().padStart(2,'0')}`;
function records(){ $('#menu-best').textContent=money(best());$('#hud-best').textContent=money(best());const note=$('#menu-record-note');note.hidden=!scores.length;note.textContent=scores.length?`${scores[0].deliveries} fare${scores[0].deliveries===1?'':'s'}`:'';}
records();
let pendingSize=null;
let frameMeter,fleet,fleetLights,towlines,renderBudget,smaa,fxaa,stillFrame=false;const boatLightPoint=new THREE.Vector3();
let mode='menu',free=false,ready=false,shift,boat,river,piers,world,traffic=[],player,renderer,scene,camera,composer,wake,surfaceWakes;let countdown=0,simTime=0,accumulator=0,previousTime=0,arrowRotation=0,hudAge=0,slideTime=0,toastUntil=0,stuntUntil=0,crashCooldown=0,recorded=false,cameraHeading=0;let previous={x:0,z:0,heading:0};const cameraAim=new THREE.Vector3(),cameraPosition=new THREE.Vector3();const audio=new RiverAudio();const trafficWarnings=new TrafficWarnings(),crashFeedback=new CrashFeedback($('#app'));
const controls=new Controls({pause:force=>togglePause(force),horn:()=>audio.horn(),recover:()=>recover()});controls.bind();
function toast(message,duration=4){$('#toast').textContent=message;toastUntil=simTime+duration;$('#toast').style.opacity='1';}
function stunt(label,detail){$('#stunt strong').textContent=label;$('#stunt small').textContent=detail;$('#stunt').hidden=false;stuntUntil=simTime+1.4;}
function setMode(isFree){free=isFree;$('#mode-free').classList.toggle('active',free);$('#mode-shift').classList.toggle('active',!free);$('#mode-free').setAttribute('aria-pressed',String(free));$('#mode-shift').setAttribute('aria-pressed',String(!free));}
$('#mode-free').onclick=()=>setMode(true);$('#mode-shift').onclick=()=>setMode(false);
for(const button of document.querySelectorAll('.sound-btn'))button.onclick=()=>{const muted=audio.mute();document.querySelectorAll('.sound-btn').forEach(b=>{b.setAttribute('aria-label',muted?'Unmute sound':'Mute sound');b.style.opacity=muted?'.45':'1';});};
$('#music-toggle').onclick=()=>{const enabled=audio.musicToggle();$('#music-toggle').textContent=enabled?'ON':'OFF';$('#music-toggle').setAttribute('aria-pressed',String(enabled));};
$('#pause').onclick=()=>togglePause();$('#resume').onclick=()=>togglePause();$('#recover').onclick=()=>recover();$('#horn').onclick=()=>audio.horn();$('#quit').onclick=()=>endShift('quit');$('#again').onclick=()=>start();$('#back-menu').onclick=()=>menu();$('#start').onclick=()=>start();
function start(){if(!ready)return;crashFeedback.reset();trafficWarnings.reset();crashCooldown=0;recorded=false;shift.reset(free);const p=piers[free?8:0];boat.launch(river,p);previous={x:boat.x,z:boat.z,heading:boat.heading};cameraHeading=boat.heading;cameraPosition.set(boat.x+Math.sin(boat.heading)*23,12,boat.z+Math.cos(boat.heading)*23);cameraAim.set(boat.x-Math.sin(boat.heading)*30,3,boat.z-Math.cos(boat.heading)*30);wake.clear();surfaceWakes.clear();mode='countdown';countdown=2.5;controls.clear();controls.enabled=false;arrowRotation=0;accumulator=0;slideTime=0;for(const sel of['#menu','#results','#pause-screen'])$(sel).hidden=true;$('#hud').hidden=false;$('#countdown').hidden=false;$('#stunt').hidden=true;$('#navigation').hidden=true;$('#toast').style.opacity='0';audio.start();updateHUD();}
function menu(){crashFeedback.reset();trafficWarnings.reset();mode='menu';controls.enabled=false;controls.clear();audio.pause();$('#menu').hidden=false;for(const s of['#hud','#results','#pause-screen','#countdown'])$(s).hidden=true;records();}
function togglePause(force=false){if(!ready)return;if((mode==='playing'||mode==='countdown')){modeBeforePause=mode;mode='paused';controls.enabled=false;controls.clear();audio.pause();$('#pause-screen').hidden=false;}else if(mode==='paused'&&!force){mode=modeBeforePause;controls.enabled=mode==='playing';$('#pause-screen').hidden=true;audio.start();previousTime=performance.now();}}
let modeBeforePause='playing';
function recover(){if(mode!=='playing')return;const n=river.nearest(boat.x,boat.z),p=river.sample(clamp(n.distance,40,river.length-40));let heading=boat.heading;const tangent=n.heading;if(Math.abs(angleDelta(heading,tangent))<Math.PI/2)heading=tangent;else heading=tangent+Math.PI;boat.reset(p.x,p.z,heading);previous={x:boat.x,z:boat.z,heading:boat.heading};shift.crash();shift.remaining=Math.max(0,shift.remaining-3);toast('Back in the channel · −3 seconds');wake.clear();surfaceWakes.clear();}
function endShift(reason='timeout',collisionKind){
 if(recorded)return;recorded=true;
 const crashed=reason==='collision',ranked=!shift.free&&reason!=='quit',oldBest=best();
 mode=crashed?'crashed':'results';controls.enabled=false;controls.clear();audio.event(crashed?'crash':'delivered');audio.pause(crashed?1.2:0);
 if(crashed)crashFeedback.impact({fatal:true,kind:collisionKind,onComplete:()=>{mode='results';$('#results').hidden=false;}});
 shift.finished=true;shift.fare=null;shift.dockHold=0;
 if(ranked)scores=saveScore(storage,shift.earnings,shift.deliveries);
 records();
 $('#result-label').textContent=crashed?'BOAT COLLISION':shift.free?'FREE CRUISE · UNRANKED':!ranked?'SHIFT ENDED · UNRANKED':shift.earnings>oldBest?'A NEW PERSONAL BEST':'SHIFT COMPLETE';
 $('#result-title').textContent=crashed?'You crashed.':ranked&&shift.earnings>oldBest?'New best score.':'Shift complete.';
 $('#result-reason').hidden=!crashed;$('#result-reason').textContent=crashed?`Collision: ${BOAT_NAMES[collisionKind]||'boat'}. Run over.`:'';
 $('#result-score').textContent=money(shift.earnings);$('#result-fares').textContent=String(shift.deliveries);$('#result-best').textContent=money(best());
 const list=$('#record-list');list.replaceChildren();
 for(const [i,s]of scores.entries()){const li=document.createElement('li'),b=document.createElement('b');li.textContent=`${i+1}. ${s.deliveries} fares`;b.textContent=money(s.score);li.append(b);list.append(li);}
 if(!scores.length){const li=document.createElement('li');li.textContent='Complete a fare in Night Shift to set a score.';list.append(li);}
 $('#results').hidden=crashed;$('#pause-screen').hidden=true;$('#countdown').hidden=true;$('#navigation').hidden=true;$('#dock-status').hidden=true;$('#stunt').hidden=true;$('#toast').style.opacity='0';
 updateHUD();
}
function updateHUD(){if(!shift)return;$('.timer-value').textContent=shift.free?'∞':time(shift.remaining);$('.timer .micro').textContent=shift.free?'FREE CRUISE':'NIGHT SHIFT';$('.timer').classList.toggle('low',!shift.free&&shift.remaining<25);$('#earnings').textContent=money(shift.earnings);$('#deliveries').textContent=`${shift.deliveries} FARE${shift.deliveries===1?'':'S'}`;$('#hud-best').textContent=money(shift.free?best():Math.max(best(),shift.earnings));const fare=shift.fare;
 $('#navigation').hidden=!fare;$('.fare-progress').hidden=!fare;$('#map-caption span').textContent=fare?'● DROP OFF':'● PASSENGERS';
 if(fare){const distance=Math.hypot(fare.to.x-boat.x,fare.to.z-boat.z);$('#fare-label').textContent='DROP OFF';$('#fare-title').textContent=fare.to.name;$('#fare-hint').textContent=distance<60?'Easy does it. Stop in the green ring.':fare.to.thai;$('#fare-detail').textContent=`${Math.round(distance)} m · ${money(fare.base+shift.tips)}`;$('#fare-time').textContent=time(fare.time);$('.fare-progress i').style.width=`${fare.time/fare.total*100}%`;arrowRotation=directBearing(boat,fare.to,arrowRotation);$('#navigation svg').style.transform=`rotate(${arrowRotation}rad)`;$('#nav-distance').textContent=`${Math.round(distance)} m`;
 }else{$('#fare-label').textContent='FIND YOUR NEXT FARE';$('#fare-title').textContent='Choose any pier';$('#fare-hint').textContent='Stop in a golden ring to pick up passengers.';$('#fare-detail').textContent='Yellow dots on your map';$('#fare-time').textContent='';}
 $('#speed strong').textContent=String(Math.round(Math.hypot(boat.vx,boat.vz)*3.6));$('#speed').classList.toggle('boost',boat.boosting);$('#speed .gear').textContent=boat.boosting?'FULL SEND':boat.drifting?'STERN SLIDE':boat.speed<-.3?'REVERSE':'LONGTAIL EXPRESS';$('#dock-status').hidden=shift.dockHold===0;$('#dock-status progress').value=shift.dockHold;$('#dock-status span').textContent=shift.fare?'PASSENGERS DISEMBARKING':'PASSENGERS BOARDING';drawMap();}
function drawMap(){const cv=$('#minimap'),c=cv.getContext('2d'),w=cv.width,h=cv.height,pts=river.points,minX=Math.min(...pts.map(p=>p.x))-200,maxX=Math.max(...pts.map(p=>p.x))+200,minZ=Math.min(...pts.map(p=>p.z))-100,maxZ=Math.max(...pts.map(p=>p.z))+100,scale=Math.min((w-38)/(maxX-minX),(h-22)/(maxZ-minZ)),cx=(maxX+minX)/2,cz=(maxZ+minZ)/2;const xy=p=>[w/2+(p.x-cx)*scale,h/2+(p.z-cz)*scale];c.clearRect(0,0,w,h);c.strokeStyle='#355a68';c.lineCap='round';c.lineJoin='round';c.lineWidth=13;c.beginPath();pts.forEach((p,i)=>{const[x,y]=xy(p);i?c.lineTo(x,y):c.moveTo(x,y);});c.stroke();c.strokeStyle='#102f3e';c.lineWidth=8;c.stroke();
 for(const p of piers){if(shift.fare&&shift.fare.to.id!==p.id)continue;if(!shift.fare&&(shift.cooldowns.get(p.id)||0)>shift.clock)continue;const[x,y]=xy(p);c.fillStyle=shift.fare?'#9df3cf':'#ffd18b';c.beginPath();c.arc(x,y,shift.fare?5:3,0,Math.PI*2);c.fill();}const[x,y]=xy(boat);c.save();c.translate(x,y);c.rotate(-boat.heading);c.fillStyle='#fff6dc';c.beginPath();c.moveTo(0,-7);c.lineTo(5,6);c.lineTo(0,3);c.lineTo(-5,6);c.closePath();c.fill();c.restore();}
function makeTraffic(){
 fleet=createFleet(river,{...boatSpecs,...cargoSpecs},mobile);traffic=fleet.traffic;
 for(const t of traffic){t.mesh=t.convoy?createCargoBoat(t.kind,t.variation):createTrafficBoat(t.kind,t.variation,mobile);t.mesh.scale.setScalar(t.scale);scene.add(t.mesh);}
 towlines=createTowlines(scene,fleet.convoys);stepTraffic(0);
 fleetLights=new VisibleLights(scene,traffic.flatMap(t=>boatLightFixtures(t.kind).map(f=>({...f,parent:t.mesh}))),{dynamic:true});
}
function stepTraffic(dt){
 advanceFleet(fleet,river,dt);
 for(const t of traffic){
  const roll=t.towed?.0015:.006,bob=t.towed?.025:.08;
  t.mesh.position.set(t.x,Math.sin(simTime*1.4+t.distance)*bob,t.z);
  t.mesh.rotation.set(Math.sin(simTime+t.distance)*roll*.6,t.heading,Math.sin(simTime*.7+t.distance)*roll);
  t.wakeClock+=dt;
  if(!t.towed&&t.wakeClock>.32&&(t.x-boat.x)**2+(t.z-boat.z)**2<450**2){t.wakeClock=0;wake.emit(t.x+Math.sin(t.heading)*t.length/2,t.z+Math.cos(t.heading)*t.length/2,t.heading,t.actualSpeed,t.width*.12);}
 }
 towlines.update();
}
function step(dt,input){
 if(shift.finished)return;crashCooldown=Math.max(0,crashCooldown-dt);
 previous={x:boat.x,z:boat.z,heading:boat.heading};boat.update(dt,input);let hit=river.constrain(boat,6);
 for(const t of traffic){
  if(Math.hypot(t.x-boat.x,t.z-boat.z)>t.length+18)continue;
  const impact=shift.hitBoat(boat,t);
  if(impact){
   if(impact.type==='crashed'){endShift('collision',t.kind);return;}
   if(impact.severity>.6&&crashCooldown===0){const intensity=clamp(.2+impact.severity/TUNING.fatalImpact,.25,.85);audio.impact(false,intensity);crashFeedback.impact({intensity});toast('Just a bump. Keep going.',1.6);crashCooldown=.75;}
   continue;
  }
  if(Math.abs(boat.speed)>12&&t.nearCooldown===0){const contact=capsuleContact({...boat,length:12,width:2.5},t);if(contact.gap>1.3&&contact.gap<6){const award=shift.stunt('near');t.nearCooldown=8;if(award){audio.event('near');stunt('CLOSE CALL',`+฿ ${award} TIP · ${shift.combo}× COMBO`);}}}
 }
 for(const t of world.bridgeColliders)if(Math.hypot(t.x-boat.x,t.z-boat.z)<28)hit=Math.max(hit,collide(boat,t));if(hit>4&&crashCooldown===0){shift.crash();audio.impact(false);crashFeedback.impact();crashCooldown=1;const nearEnd=river.nearest(boat.x,boat.z).distance;toast(nearEnd<2||nearEnd>river.length-2?'End of this reach. Turn back along the river.':hit>15?'Big boat. Bigger right of way.':'Watch the paintwork!',3);}
 if(boat.drifting&&Math.abs(boat.slip)>2){slideTime+=dt;if(slideTime>.85){slideTime=0;const award=shift.stunt('slide');if(award){stunt('RIVER SLIDE',`+฿ ${award} TIP · ${shift.combo}× COMBO`);audio.event('slide');}}}else slideTime=0;
 const event=shift.update(dt,boat);if(event){audio.event(event.type);if(event.type==='pickup'){toast(`Next stop: ${event.to.name}. Let’s make waves!`,5);stunt('ALL ABOARD',event.to.name.toUpperCase());}if(event.type==='delivered'){stunt('NICE LANDING',`${money(event.paid)} BANKED · +12 SECONDS`);toast('Fare delivered. Choose any yellow pier for your next passengers.',6);}if(event.type==='late')toast('Missed the boat! Find your next passengers.',5);if(event.type==='ended')endShift();}
 if(Math.abs(boat.speed)>2){wake.emit(boat.x+Math.sin(boat.heading)*6,boat.z+Math.cos(boat.heading)*6,boat.heading,Math.abs(boat.speed),boat.boosting?1:.4);if(boat.drifting)wake.emit(boat.x,boat.z,boat.heading,Math.abs(boat.speed),.8);}
}
function drawFrame(frameDt=0,ratio=null){renderNightFrame(renderer,composer,{ratio,size:pendingSize,smaa,fxaa,frameMeter,frameDt});pendingSize=null;}
function animate(now){requestAnimationFrame(animate);const frameDt=(now-previousTime)/1000,dt=Math.min(frameDt||0,.05);previousTime=now;if(!ready)return;const input=controls.read();if(mode==='paused'||mode==='results'||mode==='crashed'){if(!stillFrame){drawFrame();stillFrame=true;}return;}stillFrame=false;simTime+=dt;if(mode==='countdown'){countdown-=dt;$('#countdown').textContent=countdown>1.5?'3':countdown>.7?'2':countdown>.1?'1':'GO!';if(countdown<=0){mode='playing';controls.enabled=true;$('#countdown').hidden=true;toast('Stop at any golden pier. Shift for boost. Space to swing the stern.',6);}}
 stepTraffic(dt);if(mode==='playing'){accumulator+=dt;let steps=0;while(mode==='playing'&&accumulator>=1/60&&steps++<4){step(1/60,input);accumulator-=1/60;}if(mode==='playing'){audio.update(boat.speed,boat.boosting);const warning=trafficWarnings.update(dt,boat,traffic,cameraHeading);if(warning)audio.warningHorn(warning.source.kind,warning);}else accumulator=0;}
 const fraction=mode==='playing'?clamp(accumulator/(1/60),0,1):1;
 if(mode!=='menu'){
  const x=THREE.MathUtils.lerp(previous.x,boat.x,fraction),z=THREE.MathUtils.lerp(previous.z,boat.z,fraction),heading=previous.heading+angleDelta(boat.heading,previous.heading)*fraction;
  player.position.set(x,.1+Math.sin(simTime*2.7)*.085+Math.sin(simTime*4.3)*.035,z);player.rotation.set((boat.boosting?.065:Math.abs(boat.speed)*.0007)+Math.sin(simTime*2)*.008,heading,clamp(boat.yaw*boat.speed*.003,-.12,.12));
  cameraHeading+=angleDelta(heading,cameraHeading)*(1-Math.exp(-4.5*dt));const distance=boat.boosting?24:19,desired=new THREE.Vector3(x+Math.sin(cameraHeading)*distance,7.8+(boat.boosting?1.2:0),z+Math.cos(cameraHeading)*distance);cameraPosition.lerp(desired,1-Math.exp(-8*dt));const ahead=new THREE.Vector3(x-Math.sin(cameraHeading)*26,3,z-Math.cos(cameraHeading)*26);cameraAim.lerp(ahead,1-Math.exp(-9*dt));camera.position.copy(cameraPosition);camera.lookAt(cameraAim);camera.fov=THREE.MathUtils.lerp(camera.fov,boat.boosting?69:62,1-Math.exp(-3*dt));camera.updateProjectionMatrix();
 }else{
  const l=world.landmarks.find(l=>l.kind===(free?'icon-siam':'wat-arun')),p=river.sample(piers[free?8:0].distance-(free?330:140),-34),dx=l.x-p.x,dz=l.z-p.z,len=Math.hypot(dx,dz),rx=-dz/len,rz=dx/len;camera.position.set(p.x+Math.sin(simTime*.06)*8,11.5,p.z+Math.cos(simTime*.06)*6);camera.lookAt(l.x-rx*60,free?70:24,l.z-rz*60);player.position.set(p.x+dx/len*25-rx*7,.1+Math.sin(simTime*2)*.07,p.z+dz/len*25-rz*7);player.rotation.set(.008,Math.atan2(-dx,-dz),Math.sin(simTime)*.009);
 }
 if(player.userData.propeller)player.userData.propeller.rotation.z+=dt*(20+Math.abs(boat.speed)*6);if(player.userData.motor)player.userData.motor.rotation.y=-(input.steer||0)*.18;
 wake.update(dt);
 const nearbyTraffic=[];const boatLights=[];
 function collectLights(actor){actor.updateMatrixWorld();for(const source of actor.userData.lightSources||[]){boatLightPoint.fromArray(source.position);if(actor.userData.kind==='longtail')boatLightPoint.y=1.4;actor.localToWorld(boatLightPoint);boatLights.push({x:boatLightPoint.x,y:boatLightPoint.y,z:boatLightPoint.z,color:source.color,power:source.intensity||18,boat:true,distance:source.distance});}}
 collectLights(player);
 for(const t of traffic){const distance=Math.hypot(t.x-camera.position.x,t.z-camera.position.z);updateTrafficDetail(t.mesh,distance,mobile);if(distance<350)collectLights(t.mesh);if(distance<420&&!t.towed)nearbyTraffic.push({actor:t,distance});}
 nearbyTraffic.sort((a,b)=>a.distance-b.distance);
 const wakeActors=nearbyTraffic.slice(0,mobile?10:16).map(t=>t.actor);if(mode!=='menu')wakeActors.unshift(boat);
 fleetLights.update();surfaceWakes.update(dt,wakeActors);world.update(simTime,camera,shift,boatLights);if(mode==='menu')for(const p of world.pierVisuals){p.ring.visible=false;p.beacon.visible=false;}
 $('#stunt').hidden=mode!=='playing'||simTime>stuntUntil;$('#toast').style.opacity=mode!=='playing'||simTime>toastUntil?'0':'1';hudAge+=dt;if(hudAge>.09){hudAge=0;if(mode!=='menu')updateHUD();}
 drawFrame(frameDt,renderBudget.update(frameDt));
}
async function init(){try{
 await document.fonts.load('600 32px "Noto Sans Thai"');await document.fonts.ready;const response=await fetch(`${import.meta.env.BASE_URL}data/river-course.json`);if(!response.ok)throw new Error('Could not load the river map');const data=await response.json();
 // Smooth interpolation prevents hard heading seams while preserving the measured course.
 const source=data.points,curve=new THREE.CatmullRomCurve3(source.map(p=>{const lat=13.733,lon=100.502;return new THREE.Vector3((p[0]-lon)*108140,0,(lat-p[1])*111320);}));const sampled=curve.getSpacedPoints(320),raw=new River(source),points=sampled.map(p=>[p.x/108140+100.502,13.733-p.z/111320,raw.nearest(p.x,p.z).width]);
 river=new River(points);piers=buildPiers(river);shift=new Shift(piers);boat=new BoatPhysics(piers[0].x,piers[0].z,piers[0].heading);scene=new THREE.Scene();scene.background=new THREE.Color(0x0a101b);scene.fog=new THREE.FogExp2(0x19202b,.00056);camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,.3,8000);camera.layers.enable(1);
 renderer=new THREE.WebGLRenderer({canvas:$('#scene'),antialias:false,powerPreference:'high-performance'});renderBudget=new RenderBudget(devicePixelRatio,mobile);renderer.setPixelRatio(renderBudget.ratio);renderer.setSize(innerWidth,innerHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.outputColorSpace=THREE.SRGBColorSpace;
 scene.add(new THREE.HemisphereLight(0xa4bcd6,0x4a3e32,.82));const moon=new THREE.DirectionalLight(0x9cbce2,.62);moon.position.copy(MOON_DIRECTION).multiplyScalar(1000);scene.add(moon);const shore=new THREE.DirectionalLight(0xffd49c,.18);shore.position.set(500,220,150);scene.add(shore);
 world=createWorld(scene,river,piers,mobile);player=createBoat('longtail',0);scene.add(player);const engineLamp=new THREE.PointLight(0xffc991,3.5,7,2);engineLamp.position.set(0,1.65,4.5);player.add(engineLamp);wake=new Wake(scene,mobile);surfaceWakes=new SurfaceWakes(scene,mobile?30:46);makeTraffic();simplifyBoatReflections(world.water,traffic);
 composer=createNightComposer(renderer);composer.addPass(new RenderPass(scene,camera));composer.addPass(createNightBloom(innerWidth,innerHeight));if(!mobile){smaa=new SMAAPass();composer.addPass(smaa);}composer.addPass(new OutputPass());fxaa=createNightFXAA();fxaa.enabled=mobile;composer.addPass(fxaa);
 const resize=()=>{stillFrame=false;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();pendingSize={width:innerWidth,height:innerHeight};};window.addEventListener('resize',resize);$('#scene').addEventListener('webglcontextlost',e=>{e.preventDefault();togglePause(true);toast('Graphics paused. Reload the page to restore the river.',100);});
 frameMeter=createFrameMeter(renderer);ready=true;$('#start').disabled=false;$('#start').textContent='PLAY';$('#loading-note').textContent='';previousTime=performance.now();requestAnimationFrame(animate);
 if(import.meta.env.DEV&&location.pathname.endsWith('/tests/feedback.html')){
  const {installFeedbackControls}=await import('../tests/feedback-controls.js');
  installFeedbackControls({audio,crashFeedback,bump(glancing=false,freeRun=false){
   setMode(freeRun);start();countdown=.01;const target=traffic.find(t=>t.kind==='ferry'),p=piers[8];
   Object.assign(target,{distance:p.distance,direction:1,lane:0,speed:0,actualSpeed:0,slow:0});stepTraffic(0);
   const fx=-Math.sin(target.heading),fz=-Math.cos(target.heading),rx=Math.cos(target.heading),rz=-Math.sin(target.heading);
   const offset=glancing?(target.width+2.5)/2+.08:-(target.length+12)/2-.08;
   boat.reset(target.x+(glancing?rx:fx)*offset,target.z+(glancing?rz:fz)*offset,target.heading);
   const speed=glancing?53:4;boat.vx=fx*speed-(glancing?rx*2:0);boat.vz=fz*speed-(glancing?rz*2:0);boat.speed=speed;
   previous={x:boat.x,z:boat.z,heading:boat.heading};cameraHeading=boat.heading;
   cameraPosition.set(boat.x-fx*23,12,boat.z-fz*23);cameraAim.set(boat.x+fx*30,3,boat.z+fz*30);
   shift.update(.7,{x:p.x,z:p.z,vx:0,vz:0});shift.stunt('near');const fare=shift.fare,tips=shift.tips;
   return()=>({active:mode==='playing',passenger:shift.fare===fare&&!!fare,tips:shift.tips>=tips});
  },startHornCheck(){setMode(true);start();countdown=.01;},approach(kind,boost=false,{stacked=false}={}){
   setMode(true);start();countdown=.01;const target=traffic.find(t=>t.kind===kind),d=piers[8].distance;
   Object.assign(target,{distance:d+(boost?310:245),direction:-1,lane:0,speed:9,actualSpeed:9,slow:0});
   if(stacked){const second=traffic.find(t=>t.kind==='cruise');Object.assign(second,{distance:target.distance+80,direction:-1,lane:0,speed:9,actualSpeed:9,slow:0});}stepTraffic(0);
   boat.heading=Math.atan2(boat.x-target.x,boat.z-target.z);const speed=boost?53:34;boat.vx=-Math.sin(boat.heading)*speed;boat.vz=-Math.cos(boat.heading)*speed;boat.speed=speed;controls.touch.gas=true;controls.touch.boost=boost;
   previous={x:boat.x,z:boat.z,heading:boat.heading};cameraHeading=boat.heading;
  }});
 }
 }catch(error){console.error(error);$('#loading-note').textContent=`Unable to launch: ${error.message}. Try a browser with WebGL enabled.`;$('#start').textContent='RETRY';$('#start').disabled=false;$('#start').onclick=()=>location.reload();}}
init();

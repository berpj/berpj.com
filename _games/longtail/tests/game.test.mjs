import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {River,buildPiers,angleDelta} from '../src/river.mjs';
import {BoatPhysics,TUNING,Shift,capsuleContact,collide,directBearing,cleanScores,saveScore,RECORD_KEY} from '../src/simulation.mjs';
const source=JSON.parse(fs.readFileSync(new URL('../public/data/river-course.json',import.meta.url),'utf8'));
const river=new River(source.points),piers=buildPiers(river),dt=1/120;
function run(body,seconds,input){for(let t=0;t<seconds;t+=dt)body.update(dt,input);return body;}
function at(p){return{x:p.x,z:p.z,vx:0,vz:0};}
function tick(shift,seconds,body){let event;for(let t=0;t<seconds;t+=dt){const e=shift.update(dt,body);if(e)event=e;}return event;}

test('OSM reach spans Wat Arun to Taksin and all passenger berths are navigable',()=>{assert(river.length>3500&&river.length<5500);assert.equal(piers.length,12);for(const p of piers){const n=river.nearest(p.x,p.z);assert(Math.abs(n.offset)<n.width/2-10,p.name);assert(n.distance>30&&n.distance<river.length-30,p.name);}});
test('sample and nearest agree along the complete route',()=>{for(let d=20;d<river.length;d+=37){const p=river.sample(d,18),n=river.nearest(p.x,p.z);assert(Math.abs(n.distance-d)<4);assert(Math.abs(n.offset-18)<2);}});
test('bank and endpoint collisions keep fast boats inside the reach',()=>{for(const d of[20,600,1800,3000,river.length-20])for(const side of[-1,1]){const p=river.sample(d,side*250),b={...p,vx:p.nx*side*30,vz:p.nz*side*30};river.constrain(b,6);const n=river.nearest(b.x,b.z);assert(Math.abs(n.offset)<n.width/2-4);assert(Number.isFinite(b.vx));}});
test('boat accelerates smoothly and boost stays unlimited but harder to steer',()=>{const b=run(new BoatPhysics(),12,{gas:true});assert(Math.abs(b.speed-TUNING.speed)<.1);const boost=run(new BoatPhysics(),20,{gas:true,boost:true});assert(Math.abs(boost.speed-TUNING.boostSpeed)<.1);const normal=run(new BoatPhysics(),4,{gas:true,steer:1});const turbo=run(new BoatPhysics(),4,{gas:true,boost:true,steer:1});assert(Math.abs(Math.abs(normal.yaw)-1.05)<.005);assert(Math.abs(Math.abs(turbo.yaw)-.254)<.005);});
test('braking stops quickly then reverses without a long dead interval',()=>{const b=run(new BoatPhysics(),4,{gas:true});let time=0,stopDistance=0,stopped=false;while(time<2){const before={x:b.x,z:b.z};b.update(dt,{brake:true});if(!stopped)stopDistance+=Math.hypot(b.x-before.x,b.z-before.z);if(b.speed<.1)stopped=true;if(b.speed<-.1)break;time+=dt;}assert(time<1.1);assert(stopDistance<16);run(b,2,{brake:true});assert(b.speed>=-7.01&&b.speed<-6.8);});
test('powerslides develop visible lateral motion and regrip on release',()=>{const b=run(new BoatPhysics(),3,{gas:true});run(b,.7,{gas:true,steer:1,drift:true});assert(b.drifting);assert(Math.abs(b.slip)>5);run(b,1,{gas:true});assert(Math.abs(b.slip)<1);});
test('physics is stable across 60 and 120 Hz steps',()=>{const a=new BoatPhysics(),b=new BoatPhysics();for(let i=0;i<600;i++)a.update(1/60,{gas:true,steer:.25});for(let i=0;i<1200;i++)b.update(1/120,{gas:true,steer:.25});assert(Math.hypot(a.x-b.x,a.z-b.z)<1.8);assert(Math.abs(a.heading-b.heading)<.02);});
test('capsules catch crossing hulls and collision severity depends on boat size',()=>{const player={x:0,z:0,heading:0,vx:20,vz:0,length:12,width:2.5};const b={x:5,z:0,heading:Math.PI/2,vx:0,vz:0,length:55,width:13,mass:24};assert(capsuleContact(player,b).gap<0);const heavy=collide({...player},b),light=collide({...player},{...b,mass:.45});assert(heavy>light*2);assert(capsuleContact(player,{...b,x:100}).gap>0);});
test('fare lifecycle: any pier, physical stop, tips, delivery, no target afterwards',()=>{const s=new Shift(piers,()=>.3);assert.equal(s.fare,null);tick(s,1,{...at(piers[3]),vx:12});assert.equal(s.fare,null);const e=tick(s,.7,at(piers[3]));assert.equal(e.type,'pickup');assert.equal(s.fare.from.id,piers[3].id);assert.notEqual(s.fare.to.id,piers[3].id);const target=s.fare.to,base=s.fare.base;s.stunt('near');s.stunt('slide');assert(s.tips>0);const delivery=tick(s,.7,at(target));assert.equal(delivery.type,'delivered');assert(s.earnings>base);assert.equal(s.deliveries,1);assert.equal(s.fare,null);assert.equal(s.phase,'seeking');tick(s,1,at(target));assert.equal(s.fare,null,'no immediate reboarding at drop-off');tick(s,.7,at(piers.find(p=>p.id!==target.id)));assert(s.fare);});
test('late fares are not banked and the shift ends once',()=>{const s=new Shift(piers,()=>.4);tick(s,.7,at(piers[0]));s.stunt('near');const distant={x:1e6,z:1e6,vx:0,vz:0};s.fare.time=.01;assert.equal(s.update(.02,distant).type,'late');assert.equal(s.earnings,0);assert.equal(s.fare,null);s.remaining=.01;assert.equal(s.update(.02,distant).type,'ended');assert.equal(s.update(.02,distant),null);});
test('end-of-shift expiration wins over late fare and cannot accept another boarding',()=>{const s=new Shift(piers);s.remaining=.001;assert.equal(s.update(.02,at(piers[0])).type,'ended');assert.equal(s.fare,null);});
test('free cruise is untimed and scores are separated from ranked shifts',()=>{const s=new Shift(piers);s.reset(true);tick(s,200,{x:1e6,z:1e6,vx:0,vz:0});assert(!s.finished);assert.equal(s.remaining,180);const store={getItem:()=>null,setItem:()=>assert.fail('must not write free score')};assert.deepEqual(saveScore(store,100,1,true),[]);});
test('direct destination arrow follows bearing without a full spin at wrap',()=>{const p={x:0,z:0,heading:0};assert.equal(directBearing(p,{x:0,z:-100}),0);assert(Math.abs(directBearing(p,{x:100,z:0})-Math.PI/2)<1e-8);const prev=Math.PI-.02,next=directBearing(p,{x:-1,z:100},prev);assert(Math.abs(next-prev)<.05);});
test('records keep only valid top five and tolerate unavailable storage',()=>{const values=new Map(),store={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)};for(let i=1;i<=8;i++)saveScore(store,i*100,i);const saved=cleanScores(JSON.parse(values.get(RECORD_KEY)));assert.equal(saved.length,5);assert.equal(saved[0].score,800);assert.equal(saved[4].score,400);assert.equal(cleanScores([{score:NaN,deliveries:0,date:'a'},{score:-3,deliveries:1,date:'b'}]).length,0);assert.equal(saveScore({getItem(){throw Error();},setItem(){throw Error();}},88,1).length,1);});

test('releasing boost decelerates smoothly rather than snapping to cruising speed',()=>{const b=run(new BoatPhysics(),8,{gas:true,boost:true}),before=b.speed;b.update(1/60,{gas:true});assert(before-b.speed<.2);run(b,3,{gas:true});assert(Math.abs(b.speed-TUNING.speed)<.1);});
test('first Wat Arun fare goes downstream within an approachable distance',()=>{for(const r of[0,.3,.7,.999]){const s=new Shift(piers,()=>r);tick(s,.7,at(piers[0]));assert(s.fare.to.distance>piers[0].distance);assert(s.fare.to.distance-piers[0].distance<1050);}});
test('simultaneous fare timeout and shift expiration ends the shift immediately',()=>{const s=new Shift(piers);tick(s,.7,at(piers[0]));s.remaining=.001;s.fare.time=.001;assert.equal(s.update(.02,at(piers[0])).type,'ended');assert(s.finished);assert.equal(s.fare,null);});

test('turbo suppresses slide steering and quickly widens an existing turn',()=>{
 const b=run(new BoatPhysics(),3,{gas:true,steer:1,drift:true});
 assert(b.drifting);
 run(b,.4,{gas:true,steer:1,boost:true,drift:true});
 assert(b.boosting);assert(!b.drifting);assert(Math.abs(b.yaw)<.27);
 run(b,.6,{gas:true,steer:1});
 assert(!b.boosting);assert(Math.abs(b.yaw)>TUNING.steer*.98);
});
test('light boat bumps survive in ranked and free runs without losing the fare',()=>{
 for(const free of[false,true])for(const mass of[.45,24,65])for(const speed of[0,2,6]){
  const s=new Shift(piers);s.reset(free);tick(s,.7,at(piers[0]));s.stunt('near');
  const fare=s.fare,tips=s.tips,remaining=s.remaining;
  const player={x:0,z:0,heading:0,vx:speed,vz:0};
  const other={x:2,z:0,heading:0,length:8,width:2,mass,vx:0,vz:0};
  assert.equal(s.hitBoat(player,{...other,x:5}),null,'near misses do not resolve as impacts');
  assert.equal(s.hitBoat(player,other).type,'bumped');
  assert(!s.finished);assert.equal(s.phase,'carrying');assert.equal(s.fare,fare);assert.equal(s.tips,tips);assert.equal(s.remaining,remaining);
  assert(capsuleContact({...player,length:12,width:2.5},other).gap>=0,'hulls are separated');
  assert(player.vx<=speed&&Number.isFinite(player.vx));
  assert.equal(tick(s,.7,at(fare.to)).type,'delivered','the passenger can still be delivered');
 }
});
test('boost-speed glancing scrapes preserve forward motion',()=>{
 const s=new Shift(piers),player={x:0,z:0,heading:0,vx:2,vz:-53};
 const other={x:2,z:0,heading:0,length:55,width:2,mass:24,vx:0,vz:-5};
 const event=s.hitBoat(player,other);assert.equal(event.type,'bumped');assert(!s.finished);
 assert.equal(player.vz,-53);assert.equal(player.speed,53);assert(player.vx<=0,'only the inward velocity bounces');
 assert.equal(s.hitBoat(player,other),null,'a resolved scrape is not hit again');
});
test('boats travelling together can touch gently at high world speed',()=>{
 const s=new Shift(piers),player={x:0,z:0,heading:0,vx:0,vz:-34};
 const other={x:0,z:-9.9,heading:0,length:8,width:2,mass:24,vx:0,vz:-32};
 assert.equal(s.hitBoat(player,other).type,'bumped');assert(!s.finished);
 assert(player.speed>30,'a small relative impact must not stop a fast convoy');
});
test('hard head-on crashes end ranked and free runs once',()=>{
 for(const free of[false,true])for(const mass of[.45,24]){
  const s=new Shift(piers);s.reset(free);
  const player={x:0,z:0,heading:0,vx:0,vz:-53};
  const other={x:0,z:-9.9,heading:Math.PI,length:8,width:2,mass,vx:0,vz:20};
  assert.equal(s.hitBoat(player,other).type,'crashed');assert(s.finished);assert.equal(s.phase,'crashed');
  assert.equal(s.hitBoat(player,other),null,'only one game-over event');
  assert.equal(s.update(1,at(piers[0])),null,'no boarding after crashing');
  s.reset(free);assert(!s.finished);assert.equal(tick(s,.7,at(piers[0])).type,'pickup');
 }
});
test('a heavier hull is more dangerous at the same impact speed',()=>{
 const player={x:0,z:0,heading:0,vx:20,vz:0},other={x:2,z:0,heading:0,length:8,width:2,vx:0,vz:0};
 assert.equal(new Shift(piers).hitBoat({...player},{...other,mass:.45}).type,'bumped');
 assert.equal(new Shift(piers).hitBoat({...player},{...other,mass:24}).type,'crashed');
});
test('a minor bump does not protect against an immediately following hard hit',()=>{
 const s=new Shift(piers),player={x:0,z:0,heading:0,vx:2,vz:0};
 assert.equal(s.hitBoat(player,{x:2,z:0,heading:0,length:8,width:2,mass:24,vx:0,vz:0}).type,'bumped');
 player.vz=-53;
 assert.equal(s.hitBoat(player,{x:player.x,z:-9.9,heading:Math.PI,length:8,width:2,mass:24,vx:0,vz:10}).type,'crashed');
});
test('crashes discard the active fare but preserve previously banked earnings',()=>{
 const s=new Shift(piers,()=>.3);
 tick(s,.7,at(piers[0]));tick(s,.7,at(s.fare.to));
 const earned=s.earnings;assert(earned>0);assert.equal(s.deliveries,1);
 tick(s,.7,at(piers[0]));s.stunt('near');s.dockHold=.64;
 const p={...at(s.fare.to),heading:0,vz:-34};
 s.hitBoat(p,{...p,z:p.z-9.9,heading:Math.PI,length:8,width:2,mass:24,vz:10});
 assert.equal(s.fare,null);assert.equal(s.tips,0);assert.equal(s.combo,0);assert.equal(s.dockHold,0);
 assert.equal(s.update(.05,p),null,'collision wins over a nearly completed drop-off');
 assert.equal(s.earnings,earned);assert.equal(s.deliveries,1);
 assert.equal(s.stunt('near'),0);
});
test('bank impacts and recovery penalties do not end a run',()=>{
 const s=new Shift(piers);tick(s,.7,at(piers[0]));s.stunt('near');s.crash();
 assert(!s.finished);assert(s.fare);assert.equal(s.combo,0);
});

test('normal steering is gentler in both directions while turbo keeps its previous rate',()=>{
 for(const steer of[-1,-.5,.5,1]){
  const normal=run(new BoatPhysics(),4,{gas:true,steer});
  const turbo=run(new BoatPhysics(),4,{gas:true,boost:true,steer});
  assert(Math.abs(normal.yaw-(-steer*1.05))<.002);
  assert(Math.abs(turbo.yaw-(-steer*1.27*.2))<.002);
 }
});

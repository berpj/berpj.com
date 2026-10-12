import test from 'node:test';
import assert from 'node:assert/strict';
import {collisionCourse,warningThreat,TrafficWarnings} from '../src/collision-warning.mjs';
import {BoatPhysics,capsuleContact} from '../src/simulation.mjs';
const player={x:0,z:0,heading:0,vx:0,vz:-34};
const ferry=(overrides={})=>({x:0,z:-95,heading:Math.PI,length:30,width:7,vx:0,vz:10,kind:'ferry',...overrides});
const scan=(manager,boats,who=player,heading=who.heading)=>{
 let result=null;for(let i=0;i<3;i++)result=manager.update(.08,who,boats,heading)||result;return result;
};

test('head-on and boost approaches warn before the hulls touch',()=>{
 const target=ferry(),normal=collisionCourse(player,target),boost=collisionCourse({...player,vz:-53},target);
 assert(normal.time>1.5&&normal.time<1.8);assert(boost.time>1&&boost.time<normal.time);
 assert.equal(collisionCourse({...player,vx:0,vz:0},target),null);
});
test('safe parallel, receding and distant boats stay quiet',()=>{
 assert.equal(collisionCourse(player,ferry({x:15,heading:0,vz:-10})),null);
 assert.equal(collisionCourse(player,ferry({heading:0,vz:-34})),null);
 assert.equal(collisionCourse(player,ferry({z:40,vz:10})),null);
 assert.equal(collisionCourse(player,ferry({z:-600})),null);
 assert.equal(warningThreat(player,ferry({z:-205})),null,'five-second speculative threats stay quiet');
});
test('cruise and turbo wait until the boat enters the closer warning window',()=>{
 for(const [speed,far,close]of[[34,155,120],[53,210,165]]){
  const who={...player,vz:-speed},manager=new TrafficWarnings(),target=ferry({z:-far});
  assert.equal(scan(manager,[target],who),null,'do not honk at the previous longer range');
  target.z=-close;
  assert.equal(scan(manager,[target],who).source,target,'honk once the approaching hull is close');
 }
});
test('front and broadside approaches warn, but a straight stern approach usually does not',()=>{
 assert(warningThreat(player,ferry()));
 const crossing=ferry({x:0,z:-80,vx:2,vz:0,heading:Math.PI/2,length:55,width:13});
 assert(warningThreat(player,crossing),'broadside skipper can see us');
 const stern=ferry({z:-80,heading:0,vz:-8});
 assert(collisionCourse(player,stern),'this is still a physical collision course');assert.equal(warningThreat(player,stern),null);
 assert(warningThreat(player,{...stern,z:-35}).emergency,'exception for very imminent stern contact');
});
test('large hulls can be targeted at the bow without pointing at their centre',()=>{
 const crossingCruise=ferry({x:40,z:-50,heading:Math.PI/2,length:95,width:14,vx:-3,vz:0});
 assert(warningThreat(player,crossingCruise));assert.equal(warningThreat(player,{...crossingCruise,x:120}),null);
});
test('crossing traffic outside our forward aim is not a routine horn target',()=>{
 const crossing=ferry({x:-60,z:-70,vx:30,vz:0,heading:-Math.PI/2});
 assert(collisionCourse(player,crossing));assert.equal(warningThreat(player,crossing),null);
});
test('turning away removes warnings and contact itself never schedules a horn',()=>{
 const target=ferry();assert(warningThreat(player,target));
 assert.equal(warningThreat({...player,vx:25,vz:-12,heading:-Math.PI/3},target),null);
 assert.equal(collisionCourse(player,ferry({z:-10})),null);
});
test('only the foremost threat honks, even while its sound is on cooldown',()=>{
 const manager=new TrafficWarnings(),a=ferry({z:-125}),b=ferry({z:-110}),heard=[];
 for(let i=0;i<70;i++){const warning=manager.update(.08,player,[a,b]);if(warning)heard.push(warning.source);}
 assert(heard.length>=2);assert(heard.every(source=>source===b),'boat behind the primary must not take its cooldown slot');
 manager.reset();assert.equal(scan(manager,[a,b]).source,b);
});
test('small risk changes do not bounce the horn between neighbours',()=>{
 const manager=new TrafficWarnings(),a=ferry({x:1,z:-115}),b=ferry({x:-1,z:-113});
 assert.equal(scan(manager,[a,b]).source,b);
 a.z=-110;const heard=[];for(let i=0;i<50;i++){const event=manager.update(.08,player,[a,b]);if(event)heard.push(event.source);}
 assert(heard.every(source=>source===b));
});
test('a genuinely new urgent obstacle can replace the current threat',()=>{
 const manager=new TrafficWarnings(),a=ferry({z:-120}),b=ferry({x:50,z:-55});
 assert.equal(scan(manager,[a,b]).source,a);
 manager.update(1.2,player,[a,b]);b.x=0;
 assert.equal(scan(manager,[a,b]).source,b);
});
test('clearing one approach allows a new target, with no overlapping horn slots',()=>{
 const manager=new TrafficWarnings(),a=ferry({z:-120}),b=ferry({x:30,z:-115});
 assert.equal(scan(manager,[a,b]).source,a);
 a.x=40;b.x=0;assert.equal(scan(manager,[a,b]),null,'finish the first short horn before a second starts');
 assert.equal(manager.update(1.2,player,[a,b]).source,b);
 a.x=80;b.x=80;for(let i=0;i<40;i++)assert.equal(manager.update(.08,player,[a,b]),null);
});
test('the hull being approached gives its convoy one tug horn',()=>{
 const manager=new TrafficWarnings(),tug=ferry({x:15,z:-150,kind:'tug'}),barge=ferry({z:-120,kind:'barge'}),convoy={tug,barges:[barge]};tug.convoy=barge.convoy=convoy;
 const warning=scan(manager,[barge,tug]);assert.equal(warning.source,tug);assert(warning.pan>0);
 assert.equal(manager.update(1.3,player,[barge,tug]),null);
 manager.reset();assert(scan(manager,[barge],player,Math.PI).pan<0);
});
test('warning scans are bounded for a dense fleet',()=>{
 const manager=new TrafficWarnings(),fleet=Array.from({length:109},(_,i)=>ferry({x:i%5*22-44,z:-40-i*24})),start=performance.now();
 for(let i=0;i<600;i++)manager.update(1/60,player,fleet);
 assert(performance.now()-start<1000);
});
function approachSimulation({boost=false,accelerating=false,avoid=false}={}){
 const boat=new BoatPhysics(),target=ferry({z:accelerating?-260:-430}),warnings=new TrafficWarnings();
 if(!accelerating){boat.vz=boost?-53:-34;boat.speed=-boat.vz;}
 let clock=0,collision=null,first=null,second=null,minGap=Infinity;
 for(let i=0;i<900;i++){
  clock+=1/60;target.z+=target.vz/60;
  // React after .8 s, steer past the boat, then hold the new heading. Continuing
  // to turn for the whole run circles back into traffic after the initial dodge.
  const steer=avoid&&first!==null&&clock-first>=.8&&clock-first<2?1:0;
  boat.update(1/60,{gas:true,boost,steer});
  if(warnings.update(1/60,boat,[target])!==null){if(first===null)first=clock;else second=clock;}
  const gap=capsuleContact({...boat,length:12,width:2.5},target).gap;minGap=Math.min(minGap,gap);
  if(gap<=0){collision=clock;break;}
 }
 return {first,second,collision,minGap};
}
test('closer warnings still leave response time at cruise, boost and during acceleration',t=>{
 for(const boost of [false,true])for(const accelerating of [false,true]){
  const run=approachSimulation({boost,accelerating});assert(run.first!==null&&run.collision!==null);
  const lead=run.collision-run.first;
  assert(lead>1.7&&lead<2.5,`boost=${boost}, accelerating=${accelerating}: ${lead.toFixed(2)} seconds outside the closer warning window`);
  assert(run.second>run.first&&run.second<run.collision);
  t.diagnostic(`boost=${boost}, accelerating=${accelerating}: ${lead.toFixed(2)} seconds warning`);
 }
});
test('a driver can react to the first horn and avoid contact even while boosting',()=>{
 for(const boost of [false,true]){
  const run=approachSimulation({boost,avoid:true});assert(run.first!==null);assert.equal(run.collision,null);assert(run.minGap>1,'the dodge leaves clear water between both hulls');
 }
});
test('a sudden imminent threat does not wait for the confirmation interval',()=>{
 const manager=new TrafficWarnings();assert(manager.update(.016,player,[ferry({z:-48})]));
});

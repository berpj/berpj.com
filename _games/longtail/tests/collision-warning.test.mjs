import test from 'node:test';
import assert from 'node:assert/strict';
import {collisionCourse,TrafficWarnings} from '../src/collision-warning.mjs';
import {BoatPhysics,capsuleContact} from '../src/simulation.mjs';
const player={x:0,z:0,heading:0,vx:0,vz:-34};
const ferry=(overrides={})=>({x:0,z:-95,heading:Math.PI,length:30,width:7,vx:0,vz:10,kind:'ferry',...overrides});

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
});
test('crossing traffic and overtaking use the full hull footprint',()=>{
 assert(collisionCourse(player,ferry({x:-30,z:-65,vx:16,vz:0,heading:-Math.PI/2})));
 assert(collisionCourse(player,ferry({z:-60,heading:0,vz:-8})));
 const crossingCruise=ferry({x:40,z:-50,heading:Math.PI/2,length:95,width:14,vx:-3,vz:0});
 assert(collisionCourse(player,crossingCruise),'bow meets us even though centre passes well to the side');
 assert.equal(collisionCourse(player,{...crossingCruise,x:120}),null);
});
test('current course changes remove warnings and no post-impact horn is scheduled',()=>{
 const target=ferry();assert(collisionCourse(player,target));
 assert.equal(collisionCourse({...player,vx:25,vz:-12,heading:-Math.PI/3},target),null);
 assert.equal(collisionCourse(player,ferry({z:-10})),null);
});
test('warnings confirm the trajectory, throttle the fleet and reset on a new run',()=>{
 const manager=new TrafficWarnings(),a=ferry({z:-220}),b=ferry({x:1,z:-210});
 assert.equal(manager.update(.08,player,[a,b]),null);
 const first=manager.update(.08,player,[a,b]);assert.equal(first.source,b);
 assert.equal(manager.update(.08,player,[a,b]),null);
 assert.equal(manager.update(.85,player,[a,b]).source,a);
 assert.equal(manager.update(.2,player,[a,b]),null);
 assert.equal(manager.update(1.8,player,[a,b]),null);assert.equal(manager.update(.08,player,[a,b]).source,b);
 manager.reset();assert.equal(manager.update(.08,player,[a,b]),null);assert(manager.update(.08,player,[a,b]));
});
test('a barge threat sounds its tug once and direction follows the camera',()=>{
 const manager=new TrafficWarnings(),tug=ferry({x:15,z:-150,kind:'tug'}),barge=ferry({z:-150,kind:'barge'}),convoy={tug,barges:[barge]};tug.convoy=barge.convoy=convoy;
 manager.update(.08,player,[barge,tug]);
 const warning=manager.update(.08,player,[barge,tug]);assert.equal(warning.source,tug);assert(warning.pan>0);
 assert.equal(manager.update(1.3,player,[barge,tug]),null);
 manager.reset();manager.update(.08,player,[barge],Math.PI);assert(manager.update(.08,player,[barge],Math.PI).pan<0);
});
test('warning scans are bounded for a dense fleet',()=>{
 const manager=new TrafficWarnings(),fleet=Array.from({length:109},(_,i)=>ferry({x:i%5*22-44,z:-40-i*24})),start=performance.now();
 for(let i=0;i<600;i++)manager.update(1/60,player,fleet);
 assert(performance.now()-start<1000,'ten simulated seconds should take under a second');
});

function approachSimulation({boost=false,accelerating=false,avoid=false}={}){
 const boat=new BoatPhysics(),target=ferry({z:accelerating?-260:-430}),warnings=new TrafficWarnings();
 if(!accelerating){boat.vz=boost?-53:-34;boat.speed=-boat.vz;}
 let clock=0,collision=null,first=null,second=null;
 for(let i=0;i<900;i++){
  clock+=1/60;target.z+=target.vz/60;
  const steer=avoid&&first!==null&&clock-first>=.8?1:0;
  boat.update(1/60,{gas:true,boost,steer});
  if(warnings.update(1/60,boat,[target])!==null){if(first===null)first=clock;else second=clock;}
  if(capsuleContact({...boat,length:12,width:2.5},target).gap<=0){collision=clock;break;}
 }
 return {first,second,collision};
}
test('rushing players get several real seconds to respond, including during acceleration',()=>{
 for(const boost of [false,true])for(const accelerating of [false,true]){
  const run=approachSimulation({boost,accelerating});
  assert(run.first!==null&&run.collision!==null);
  const lead=run.collision-run.first;
  assert(lead>3.1,`boost=${boost}, accelerating=${accelerating}: warning only ${lead.toFixed(2)} seconds before contact`);
  assert(run.second>run.first&&run.second<run.collision,'persistent threat gets a reminder');
 }
});
test('a driver can react to the first horn and avoid contact even while boosting',()=>{
 for(const boost of [false,true]){
  const run=approachSimulation({boost,avoid:true});
  assert(run.first!==null);assert.equal(run.collision,null,'0.8 second reaction then steer should avoid collision');
 }
});
test('a close new threat does not wait for the early-warning confirmation scan',()=>{
 const manager=new TrafficWarnings();assert(manager.update(.016,player,[ferry({z:-60})]));
});

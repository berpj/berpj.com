import {clamp,angleDelta} from './river.mjs';
export const TUNING=Object.freeze({speed:34,boostSpeed:53,acceleration:13.8,boostAcceleration:24,brake:41,reverseSpeed:7,reverseAcceleration:9,steer:1.27,boostSteer:.6});
export class BoatPhysics{
 constructor(x=0,z=0,heading=0){this.reset(x,z,heading);}
 reset(x,z,heading){Object.assign(this,{x,z,heading,vx:0,vz:0,yaw:0,speed:0,slip:0,boosting:false,drifting:false,brakeHold:0});}
 update(dt,input={}){
  const steer=clamp(input.steer||0,-1,1),throttle=input.gas?1:0,brake=!!input.brake;
  const fx=-Math.sin(this.heading),fz=-Math.cos(this.heading),rx=Math.cos(this.heading),rz=-Math.sin(this.heading);
  let speed=this.vx*fx+this.vz*fz,lateral=this.vx*rx+this.vz*rz;
  this.boosting=!!input.boost&&throttle>0&&!brake&&speed>1;
  this.drifting=!!input.drift&&Math.abs(steer)>.15&&Math.abs(speed)>8&&!brake;
  if(brake){if(speed>.35){speed=Math.max(0,speed-TUNING.brake*dt);this.brakeHold=0;}else{this.brakeHold+=dt;if(this.brakeHold>.1)speed=Math.max(-TUNING.reverseSpeed,speed-TUNING.reverseAcceleration*dt);else speed=0;}lateral*=Math.exp(-8*dt);}
  else{this.brakeHold=0;if(throttle){const cap=this.boosting?TUNING.boostSpeed:TUNING.speed;speed=speed>cap?Math.max(cap,speed-7*dt):Math.min(cap,speed+(this.boosting?TUNING.boostAcceleration:TUNING.acceleration)*dt);}else speed*=Math.exp(-.38*dt);}
  lateral*=Math.exp(-(this.drifting?.7:this.boosting?2.6:5.3)*dt);
  const turning=-steer*TUNING.steer*clamp(Math.abs(speed)/4,0,1)*(speed<0?-1:1)*(this.boosting?TUNING.boostSteer:1)*(this.drifting?1.48:1);
  this.yaw+=(turning-this.yaw)*(1-Math.exp(-7*dt));
  this.vx=fx*speed+rx*lateral;this.vz=fz*speed+rz*lateral;
  this.heading+=this.yaw*dt;this.x+=this.vx*dt;this.z+=this.vz*dt;
  this.speed=this.vx*(-Math.sin(this.heading))+this.vz*(-Math.cos(this.heading));this.slip=this.vx*Math.cos(this.heading)-this.vz*Math.sin(this.heading);
 }
}
function segmentEnds(b){const half=Math.max(0,(b.length-b.width)/2),fx=-Math.sin(b.heading),fz=-Math.cos(b.heading);return [{x:b.x-fx*half,z:b.z-fz*half},{x:b.x+fx*half,z:b.z+fz*half}];}
function closestPoint(p,a,b){const dx=b.x-a.x,dz=b.z-a.z,t=clamp(((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1),0,1);return{x:a.x+t*dx,z:a.z+t*dz};}
export function capsuleContact(a,b){
 const [a0,a1]=segmentEnds(a),[b0,b1]=segmentEnds(b);let pair,dist=Infinity;
 const cross=(u,v)=>u.x*v.z-u.z*v.x,sub=(u,v)=>({x:u.x-v.x,z:u.z-v.z}),r=sub(a1,a0),s=sub(b1,b0),q=sub(b0,a0),den=cross(r,s);
 if(Math.abs(den)>1e-8){const t=cross(q,s)/den,u=cross(q,r)/den;if(t>=0&&t<=1&&u>=0&&u<=1){pair=[{x:a0.x+r.x*t,z:a0.z+r.z*t},{x:a0.x+r.x*t,z:a0.z+r.z*t}];dist=0;}}
 for(const p of [a0,a1]){const c=closestPoint(p,b0,b1),d=Math.hypot(p.x-c.x,p.z-c.z);if(d<dist){dist=d;pair=[p,c];}}
 for(const p of [b0,b1]){const c=closestPoint(p,a0,a1),d=Math.hypot(p.x-c.x,p.z-c.z);if(d<dist){dist=d;pair=[c,p];}}
 const gap=dist-(a.width+b.width)/2;let dx=pair[0].x-pair[1].x,dz=pair[0].z-pair[1].z,d=Math.hypot(dx,dz);
 if(d<.001){dx=a.x-b.x;dz=a.z-b.z;d=Math.hypot(dx,dz);if(d<.001){dx=Math.cos(a.heading);dz=-Math.sin(a.heading);d=1;}}
 return {gap,nx:dx/d,nz:dz/d};
}
export function collide(player,other){
 const c=capsuleContact({...player,length:12,width:2.5},other);if(c.gap>=0)return 0;
 player.x+=c.nx*(-c.gap+.02);player.z+=c.nz*(-c.gap+.02);
 const rel=(player.vx-other.vx)*c.nx+(player.vz-other.vz)*c.nz;if(rel>=0)return 0;
 const massRatio=other.mass/(other.mass+1.2),impulse=-rel*(.65+.7*massRatio);
 player.vx+=impulse*c.nx;player.vz+=impulse*c.nz;
 other.slow=Math.max(other.slow||0,clamp(-rel/(other.mass+2),0,3));
 return -rel*massRatio;
}
export function directBearing(player,target,previous=0){const dx=target.x-player.x,dz=target.z-player.z;if(Math.hypot(dx,dz)<.01)return previous;return previous+angleDelta(Math.atan2(dx,-dz)+player.heading,previous);}

export class Shift{
 constructor(piers,random=Math.random){this.piers=piers;this.random=random;this.reset();}
 reset(free=false){Object.assign(this,{phase:'seeking',free,remaining:180,earnings:0,deliveries:0,tips:0,combo:0,comboTime:0,fare:null,dockHold:0,lastDock:null,finished:false,flash:null,cooldowns:new Map(),clock:0});}
 update(dt,boat){
  if(this.finished)return null;this.clock+=dt;if(!this.free)this.remaining=Math.max(0,this.remaining-dt);
  if(this.comboTime>0){this.comboTime-=dt;if(this.comboTime<=0)this.combo=0;}
  if(!this.free&&this.remaining===0){this.finished=true;this.phase='ended';this.fare=null;return{type:'ended'};}
  if(this.fare){this.fare.time=Math.max(0,this.fare.time-dt);if(this.fare.time===0){this.fare=null;this.phase='seeking';this.dockHold=0;this.tips=0;this.combo=0;return{type:'late'};}}
  const target=this.fare?.to||this.piers.find(p=>(this.cooldowns.get(p.id)||0)<=this.clock&&Math.hypot(p.x-boat.x,p.z-boat.z)<21);
  const stopped=Math.hypot(boat.vx,boat.vz)<2.8;
  if(target&&Math.hypot(target.x-boat.x,target.z-boat.z)<21&&stopped){this.dockHold+=dt;if(this.dockHold>.65){this.dockHold=0;if(this.fare){const paid=this.fare.base+this.tips+Math.round(this.fare.time*1.9);this.earnings+=paid;this.deliveries++;this.remaining+=this.free?0:12;this.fare=null;this.phase='seeking';this.tips=0;this.combo=0;this.cooldowns.set(target.id,this.clock+7);this.lastDock=target;return{type:'delivered',paid};}
   let choices=this.piers.filter(p=>p.id!==target.id&&Math.abs(p.distance-target.distance)>260&&Math.abs(p.distance-target.distance)<2100);
   if(this.deliveries===0&&target.id==='arun'){const easy=choices.filter(p=>p.distance>target.distance&&p.distance-target.distance<1050);if(easy.length)choices=easy;}
   const to=(choices.length?choices:this.piers.filter(p=>p.id!==target.id))[Math.floor(this.random()*(choices.length||this.piers.length-1))];
   if(!to)return null;const distance=Math.max(Math.abs(to.distance-target.distance),Math.hypot(to.x-target.x,to.z-target.z));const time=26+distance/21;
   this.fare={from:target,to,base:Math.round(95+distance*.1),time,total:time};this.phase='carrying';this.tips=0;return{type:'pickup',to};
  }}else this.dockHold=0;return null;
 }
 stunt(kind){if(this.finished||!this.fare)return 0;this.combo=Math.min(this.combo+1,8);this.comboTime=5;const award=(kind==='slide'?12:20)*this.combo;this.tips+=award;return award;}
 crash(){this.combo=0;this.comboTime=0;if(this.fare)this.tips=Math.max(0,this.tips-25);}
}
export const RECORD_KEY='bangkok-longtail:scores:v1';
export function cleanScores(value){if(!Array.isArray(value))return[];return value.filter(s=>s&&Number.isFinite(s.score)&&s.score>0&&s.score<1e7&&Number.isInteger(s.deliveries)&&s.deliveries>=0&&typeof s.date==='string').sort((a,b)=>b.score-a.score).slice(0,5);}
export function saveScore(storage,score,deliveries,free=false){let previous=[];try{previous=cleanScores(JSON.parse(storage.getItem(RECORD_KEY)||'[]'));}catch{}if(free||score<=0)return previous;const list=cleanScores([...previous,{score,deliveries,date:new Date().toISOString()}]);try{storage.setItem(RECORD_KEY,JSON.stringify(list));}catch{}return list;}

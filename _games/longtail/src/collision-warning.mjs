import {capsuleContact} from './simulation.mjs';

// Predict contact using the same hulls as the simulation, including the full
// length of a cruise ship or barge. Re-evaluate as either vessel changes course.
// Keep the warning local: a confirmed approach gets about 2.3 seconds to react.
export function collisionCourse(player,other,horizon=2.5){
 const speed=Math.hypot(player.vx,player.vz);
 if(speed<3)return null;
 const a={...player,length:12,width:2.5},dx=other.x-a.x,dz=other.z-a.z;
 const vx=other.vx-a.vx,vz=other.vz-a.vz,relativeSpeed=Math.hypot(vx,vz),distance=Math.hypot(dx,dz);
 if(relativeSpeed<1||dx*vx+dz*vz>=-distance)return null;
 const margin=Math.min(1.4,Math.max(.65,speed*.025));
 if(distance>relativeSpeed*horizon+(a.length+other.length)/2+margin)return null;
 const gapAt=t=>capsuleContact(a,{...other,x:other.x+vx*t,z:other.z+vz*t}).gap;
 if(gapAt(0)<=0)return null;
 // Distance between two translating convex hulls is convex. Minimise it first,
 // then find the first contact, so fast crossings cannot fall between samples.
 let lo=0,hi=horizon;
 for(let i=0;i<18;i++){
  const left=lo+(hi-lo)/3,right=hi-(hi-lo)/3;
  if(gapAt(left)<gapAt(right))hi=right;else lo=left;
 }
 let closest=(lo+hi)/2;
 if(gapAt(horizon)<gapAt(closest))closest=horizon;
 const clearance=gapAt(closest);
 if(clearance>margin)return null;
 lo=0;hi=closest;
 for(let i=0;i<14;i++){const mid=(lo+hi)/2;if(gapAt(mid)>margin)lo=mid;else hi=mid;}
 return {time:hi,clearance,distance};
}

export function warningThreat(player,other){
 const course=collisionCourse(player,other);
 if(!course)return null;
 const fx=-Math.sin(other.heading),fz=-Math.cos(other.heading),dx=player.x-other.x,dz=player.z-other.z;
 const longitudinal=dx*fx+dz*fz,lateral=dx*fz-dz*fx;
 // A skipper ahead/alongside can see us coming. A straight stern approach
 // stays quiet unless contact is already imminent.
 const behind=longitudinal< -other.length*.25&&Math.abs(lateral)<-longitudinal*.65;
 if(behind&&course.time>.85)return null;
 // Aim at the nearest point of the hull, not its centre: this also recognises
 // a long cruise ship crossing our bow without warning for distant side traffic.
 const half=Math.max(0,(other.length-other.width)/2),along=Math.max(-half,Math.min(half,longitudinal));
 const aimX=other.x+fx*along-player.x,aimZ=other.z+fz*along-player.z;
 const aim=(-Math.sin(player.heading)*aimX-Math.cos(player.heading)*aimZ)/Math.max(1,Math.hypot(aimX,aimZ));
 if(aim<.87&&course.time>.85)return null;
 return {...course,aim,emergency:course.time<.85};
}

export class TrafficWarnings{
 constructor(){this.reset();}
 reset(){this.clock=0;this.scan=0;this.nextHorn=0;this.cooldowns=new Map();this.primary=null;this.pending=null;this.pendingSince=0;}
 update(dt,player,traffic,cameraHeading=player.heading){
  this.clock+=dt;this.scan-=dt;
  if(this.scan>0)return null;
  this.scan=.08;
  const candidates=new Map();
  for(const target of traffic){
   if(target.active===false)continue;
   const source=target.convoy?.tug||target;
   const course=warningThreat(player,target);
   if(course&&(!candidates.has(source)||course.time<candidates.get(source).time))candidates.set(source,{...course,source});
  }
  let warning=[...candidates.values()].sort((a,b)=>a.time-b.time)[0];
  const current=candidates.get(this.primary);
  // Select the actual threat BEFORE applying sound cooldowns. Otherwise a
  // silent primary boat incorrectly gives every boat behind it a turn to honk.
  if(current&&warning?.source!==current.source&&!(warning.time<1.2&&warning.time+.6<current.time))warning=current;
  this.primary=warning?.source||null;
  if(this.pending!==this.primary){this.pending=this.primary;this.pendingSince=this.clock;}
  if(!warning||this.clock<this.nextHorn)return null;
  if(!warning.emergency&&this.clock-this.pendingSince<.14)return null;
  const sinceHorn=this.clock-(this.cooldowns.get(warning.source)??-Infinity);
  if(sinceHorn<(warning.time<1.5?1.8:3.2))return null;
  const dx=warning.source.x-player.x,dz=warning.source.z-player.z,distance=Math.hypot(dx,dz);
  this.cooldowns.set(warning.source,this.clock);this.nextHorn=this.clock+1.15;
  return {...warning,distance,pan:Math.max(-.85,Math.min(.85,(dx*Math.cos(cameraHeading)-dz*Math.sin(cameraHeading))/Math.max(distance,1)))};
 }
}

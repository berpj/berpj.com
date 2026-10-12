import {capsuleContact} from './simulation.mjs';

// Predict contact using the same hulls as the simulation, including the full
// length of a cruise ship or barge. Re-evaluate as either vessel changes course.
export function collisionCourse(player,other,horizon=2.8){
 const speed=Math.hypot(player.vx,player.vz);
 if(speed<3)return null;
 const a={...player,length:12,width:2.5},dx=other.x-a.x,dz=other.z-a.z;
 const vx=other.vx-a.vx,vz=other.vz-a.vz,relativeSpeed=Math.hypot(vx,vz),distance=Math.hypot(dx,dz);
 if(relativeSpeed<1||dx*vx+dz*vz>=-distance)return null;
 if(distance>relativeSpeed*horizon+(a.length+other.length)/2+3)return null;
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
 if(clearance>1.2)return null;
 lo=0;hi=closest;
 for(let i=0;i<14;i++){const mid=(lo+hi)/2;if(gapAt(mid)>1.2)lo=mid;else hi=mid;}
 return {time:hi,clearance,distance};
}

export class TrafficWarnings{
 constructor(){this.reset();}
 reset(){this.clock=0;this.scan=0;this.nextHorn=0;this.cooldowns=new Map();this.pending=new Set();}
 update(dt,player,traffic,cameraHeading=player.heading){
  this.clock+=dt;this.scan-=dt;
  if(this.scan>0)return null;
  this.scan=.08;
  const candidates=new Map();
  for(const target of traffic){
   const source=target.convoy?.tug||target;
   if((this.cooldowns.get(source)||0)>this.clock)continue;
   const course=collisionCourse(player,target);
   if(course&&(!candidates.has(source)||course.time<candidates.get(source).time))candidates.set(source,{...course,source});
  }
  const eligible=[...candidates.values()].filter(c=>this.pending.has(c.source)||c.time<.9);
  this.pending=new Set(candidates.keys());
  if(this.clock<this.nextHorn||!eligible.length)return null;
  eligible.sort((a,b)=>a.time-b.time);
  const warning=eligible[0],dx=warning.source.x-player.x,dz=warning.source.z-player.z,distance=Math.hypot(dx,dz);
  this.cooldowns.set(warning.source,this.clock+6.5);this.nextHorn=this.clock+1.2;
  return {...warning,distance,pan:Math.max(-.85,Math.min(.85,(dx*Math.cos(cameraHeading)-dz*Math.sin(cameraHeading))/Math.max(distance,1)))};
 }
}

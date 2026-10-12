import {clamp,angleDelta} from './river.mjs';
import {capsuleContact} from './simulation.mjs';

export const PATROL_COUNT=Object.freeze({desktop:3,mobile:2});
export const PATROL_SPEED=61;

export function resetPatrols(fleet){
 fleet.patrolClock=4;fleet.patrolSerial=0;
 for(const t of fleet.patrols){t.active=false;t.age=0;t.vx=0;t.vz=0;if(t.mesh)t.mesh.visible=false;}
}

// Return a fixed river lane, never a pursuit target. Plan the entire initial
// pass against predicted hull positions and bridge piers before dispatching it.
export function planPatrol(river,player,traffic,serial=0,blockers=[]){
 const n=river.nearest(player.x,player.z),travel=Math.abs(angleDelta(player.heading,n.heading))<Math.PI/2?1:-1;
 const opposing=serial%3===1,direction=opposing?-travel:travel,speed=opposing?43:PATROL_SPEED;
 const distance=n.distance+(opposing?260:-160)*travel,limit=Math.min(n.width,river.sample(distance).width)*.31;
 // At the bank, route inboard. At the centre, alternate the passing side.
 const preferred=Math.abs(n.offset)>limit-28?-Math.sign(n.offset):serial%2?-1:1;
 const width=3.8*1.18,length=13.8*1.18;
 for(const side of[preferred,-preferred])for(const gap of[12,18,25]){
  const lane=n.offset+side*gap;if(Math.abs(lane)>limit||Math.abs(lane-n.offset)<11)continue;
  let safe=true;
  for(let time=0;time<=8&&safe;time+=.4){
   const d=distance+direction*speed*time,p=river.sample(d,lane),candidate={...p,heading:p.heading+(direction<0?Math.PI:0),width,length};
   // Do not dispatch beyond the authored reach; ordinary fleet wrap remains
   // independent. Near an end, an oncoming pass will be tried on the next cycle.
   if(d<20||d>river.length-20){safe=false;break;}
   for(const obstacle of blockers)if(Math.hypot(p.x-obstacle.x,p.z-obstacle.z)<length+obstacle.length&&capsuleContact(candidate,obstacle).gap<4){safe=false;break;}
   for(const other of traffic){
    if(other.active===false)continue;
    const od=other.distance+other.direction*(other.actualSpeed??other.speed)*time;
    if(Math.abs(od-d)>(length+other.length)/2+12)continue;
    const q=river.sample(od,other.lane);
    if(capsuleContact(candidate,{...other,x:q.x,z:q.z,heading:q.heading+(other.direction<0?Math.PI:0)}).gap<5){safe=false;break;}
   }
  }
  if(safe)return{distance,direction,lane,speed,actualSpeed:speed,active:true,age:0,slow:0,nearCooldown:0,wakeClock:0,pass:opposing?'oncoming':'overtake'};
 }
 return null;
}

export function updatePatrols(fleet,river,dt,player,blockers=[]){
 for(const t of fleet.patrols){
  if(!t.active)continue;t.age+=dt;
  const away=Math.hypot(t.x-player.x,t.z-player.z);
  // Keep every close pass continuous; only recycle outside the nearby view.
  if(t.age>9&&away>600){t.active=false;if(t.mesh)t.mesh.visible=false;}
 }
 fleet.patrolClock-=dt;if(fleet.patrolClock>0)return;
 const idle=fleet.patrols.find(t=>!t.active);if(!idle){fleet.patrolClock=2;return;}
 const route=planPatrol(river,player,fleet.traffic,fleet.patrolSerial,blockers);
 if(!route){fleet.patrolSerial++;fleet.patrolClock=2;return;}
 Object.assign(idle,route);fleet.patrolSerial++;fleet.patrolClock=14;
}

// Alternating soft LED pulses, not global bloom/exposure changes. Period 1 s,
// with a small idle glow so the light bar remains legible between flashes.
export function patrolFlash(time,side,phase=0){
 const t=((time+phase)%1+1)%1;
 return .06+.94*Math.pow(Math.max(0,Math.sin((t+(side? .5:0))*Math.PI*2)),3);
}
export function updatePatrolLamps(actor,time){
 for(const [i,source]of (actor.mesh.userData.lightSources||[]).entries())source.intensity=actor.active?46*patrolFlash(time,i,actor.variation*.21):0;
}
export function patrolLightFixtures(actor){
 return [-.74,.74].map((x,i)=>({a:[x,3.05,.65],b:[x,3.05,.65],width:.55,
  color:i?[.08,.36,3.4]:[3.4,.055,.08],parent:actor.mesh,
  intensity:()=>clamp((actor.mesh.userData.lightSources[i].intensity||0)/46,0,1)}));
}

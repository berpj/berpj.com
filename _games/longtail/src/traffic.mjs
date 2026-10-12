import {clamp} from './river.mjs';

export const TRAFFIC_SPEED_SCALE = 1.14;
export const TRAFFIC_SIZE_SCALE = 1.18;
export const FLEET_SIZE = Object.freeze({desktop:96,mobile:64});
const TYPES=['cruise','ferry','longtail','electric','fishing','ferry','longtail','fishing'];
const OFFSHORE_MARGIN=900;

// Distances are measured from the tug centre. Empty tow-line gaps stay navigable;
// collisions belong to individual hulls, never a single 250 m bounding capsule.
export function convoyOffsets(count,tugLength=16,bargeLength=48){
  if(count!==3&&count!==4)throw new RangeError('A convoy needs three or four barges');
  return Array.from({length:count},(_,i)=>tugLength/2+28+bargeLength/2+i*(bargeLength+12));
}
export function trafficPose(river,distance,lane,direction=1,length=12){
  const point=d=>{
    const at=river.sample(d),p=river.sample(d,clamp(lane,-at.width*.34,at.width*.34));
    const extension=d<0?d:d>river.length?d-river.length:0;
    p.x-=Math.sin(p.heading)*extension;p.z-=Math.cos(p.heading)*extension;return p;
  };
  const p=point(distance),a=point(distance-length*.35),b=point(distance+length*.35);
  return {x:p.x,z:p.z,heading:Math.atan2(a.x-b.x,a.z-b.z)+(direction===1?0:Math.PI)};
}
export function createFleet(river,specs,mobile=false){
  const traffic=[],convoys=[],count=mobile?FLEET_SIZE.mobile:FLEET_SIZE.desktop;
  const actor=(kind,variation,distance,direction,lane,speed)=>({kind,variation,...specs[kind],scale:TRAFFIC_SIZE_SCALE,length:specs[kind].length*TRAFFIC_SIZE_SCALE,width:specs[kind].width*TRAFFIC_SIZE_SCALE,distance,direction,lane,speed,actualSpeed:speed,slow:0,nearCooldown:0,wakeClock:0,x:0,z:0,heading:0,vx:0,vz:0});
  for(let i=0;i<count;i++){
    const kind=TYPES[i%TYPES.length],direction=i%2?1:-1;
    const lane=(direction===1?-1:1)*(kind==='fishing'?74:28+(Math.floor(i/2)%3)*20);
    traffic.push(actor(kind,i,45+(i/count)*(river.length-90),direction,lane,specs[kind].maxSpeed*(.8+(i%4)*.12)*TRAFFIC_SPEED_SCALE));
  }
  for(let i=0;i<(mobile?2:3);i++){
    const count=i%2?4:3,direction=i%2?-1:1;
    const tug=actor('tug',i,1040+i*(river.length-1400)/((mobile?2:3)-1),direction,-direction*13.5,specs.tug.maxSpeed*(.88+i*.03));
    const convoy={tug,barges:[],offsets:convoyOffsets(count,tug.length,specs.barge.length*TRAFFIC_SIZE_SCALE)};
    tug.convoy=convoy;
    for(let j=0;j<count;j++){
      const barge=actor('barge',i*4+j,tug.distance-direction*convoy.offsets[j],direction,tug.lane,tug.speed);
      barge.convoy=convoy;barge.towed=true;convoy.barges.push(barge);
    }
    convoys.push(convoy);traffic.push(tug,...convoy.barges);
  }
  for(const t of traffic)Object.assign(t,trafficPose(river,t.distance,t.lane,t.direction,t.length));
  return {traffic,convoys};
}
export function advanceFleet(fleet,river,dt){
  const {traffic,convoys}=fleet;
  // Resolve speeds from the same frame before moving any hull, so array order
  // cannot make following traffic brake or surge unpredictably.
  for(const t of traffic){
    t.slow=Math.max(0,t.slow-dt*.6);t.nearCooldown=Math.max(0,t.nearCooldown-dt);
    if(t.towed)continue;
    let safeSpeed=t.speed/(1+t.slow);
    if(t.convoy)safeSpeed/=1+Math.max(...t.convoy.barges.map(b=>b.slow))*.15;
    for(const ahead of traffic){
      if(ahead===t||(t.convoy&&ahead.convoy===t.convoy)||ahead.direction!==t.direction||Math.abs(ahead.lane-t.lane)>(ahead.width+t.width)/2+4)continue;
      const centerGap=(ahead.distance-t.distance)*t.direction;
      if(centerGap<=0)continue;
      const gap=centerGap-(ahead.length+t.length)/2;
      if(gap<65)safeSpeed=Math.min(safeSpeed,Math.max(0,(ahead.actualSpeed??ahead.speed)+(gap-14)*.32));
    }
    t.nextSpeed=safeSpeed;
  }
  for(const t of traffic){
    if(t.towed)continue;
    t.actualSpeed=t.nextSpeed;t.distance+=t.actualSpeed*dt*t.direction;
    if(t.distance>river.length+OFFSHORE_MARGIN)t.distance=-OFFSHORE_MARGIN;
    if(t.distance< -OFFSHORE_MARGIN)t.distance=river.length+OFFSHORE_MARGIN;
  }
  for(const convoy of convoys)convoy.barges.forEach((barge,i)=>{
    barge.distance=convoy.tug.distance-convoy.tug.direction*convoy.offsets[i];
    barge.actualSpeed=convoy.tug.actualSpeed;
  });
  for(const t of traffic){
    Object.assign(t,trafficPose(river,t.distance,t.lane,t.direction,t.length));
    t.vx=-Math.sin(t.heading)*t.actualSpeed;t.vz=-Math.cos(t.heading)*t.actualSpeed;
  }
}

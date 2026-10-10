// Coordinates are WGS84; projected locally in metres, east +X and south +Z.
// This compact arcade reach follows the Chao Phraya from Wat Arun to Taksin.
export const ORIGIN={lat:13.733,lon:100.502};
export function project(lon,lat){return {x:(lon-ORIGIN.lon)*108140,z:(ORIGIN.lat-lat)*111320};}
export function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
export const lerp=(a,b,t)=>a+(b-a)*t;
export function angleDelta(a,b){return Math.atan2(Math.sin(a-b),Math.cos(a-b));}
// Replaced with the bundled OSM centreline when the map loads.
export class River{
 constructor(points){
  this.points=points.map(p=>({...project(p[0],p[1]),width:p[2]||310}));this.length=0;
  this.segments=this.points.slice(1).map((b,i)=>{const a=this.points[i],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz);const s={a,b,dx,dz,len,start:this.length};this.length+=len;return s;});
 }
 sample(distance,offset=0){
  const d=clamp(distance,0,this.length);let low=0,high=this.segments.length-1;
  while(low<high){const mid=(low+high)>>1,s=this.segments[mid];if(s.start+s.len<d)low=mid+1;else high=mid;}
  const s=this.segments[low],t=clamp((d-s.start)/s.len,0,1),nx=-s.dz/s.len,nz=s.dx/s.len;
  return {x:lerp(s.a.x,s.b.x,t)+nx*offset,z:lerp(s.a.z,s.b.z,t)+nz*offset,heading:Math.atan2(-s.dx,-s.dz),nx,nz,width:lerp(s.a.width,s.b.width,t),distance:d};
 }
 nearest(x,z){
  let best={distanceSquared:Infinity};for(const s of this.segments){const t=clamp(((x-s.a.x)*s.dx+(z-s.a.z)*s.dz)/(s.len*s.len),0,1),px=s.a.x+s.dx*t,pz=s.a.z+s.dz*t,d2=(x-px)**2+(z-pz)**2;if(d2<best.distanceSquared){const nx=-s.dz/s.len,nz=s.dx/s.len;best={x:px,z:pz,nx,nz,offset:(x-px)*nx+(z-pz)*nz,distance:s.start+t*s.len,width:lerp(s.a.width,s.b.width,t),heading:Math.atan2(-s.dx,-s.dz),distanceSquared:d2};}}
  return best;
 }
 constrain(body,margin=4){
  const n=this.nearest(body.x,body.z),limit=n.width/2-margin,excess=Math.abs(n.offset)-limit;
  let hit=0;if(excess>0){const sign=Math.sign(n.offset),nx=n.nx*sign,nz=n.nz*sign;body.x-=nx*excess;body.z-=nz*excess;const dot=body.vx*nx+body.vz*nz;if(dot>0){hit=dot;body.vx-=nx*dot*1.25;body.vz-=nz*dot*1.25;}}
  // End caps keep the pilot in the authored reach, with a soft bounce.
  const end=n.distance<1?this.sample(0):n.distance>this.length-1?this.sample(this.length):null;
  if(end){const forward={x:-Math.sin(end.heading),z:-Math.cos(end.heading)},side=n.distance<1?-1:1,dot=(body.x-end.x)*forward.x+(body.z-end.z)*forward.z;if(dot*side>0){body.x-=forward.x*dot;body.z-=forward.z*dot;const v=(body.vx*forward.x+body.vz*forward.z)*side;if(v>0){body.vx-=forward.x*side*v*1.1;body.vz-=forward.z*side*v*1.1;hit=Math.max(hit,v);}}}
  return hit;
 }
}
export const PIER_DEFS=[
 {id:'arun',name:'Wat Arun',thai:'วัดอรุณ',lon:100.49015,lat:13.74369,side:1},
 {id:'tien',name:'Tha Tien',thai:'ท่าเตียน',lon:100.4904,lat:13.7460,side:-1},
 {id:'kalaya',name:'Wat Kalayanamit',thai:'วัดกัลยาณมิตร',lon:100.49378,lat:13.73985,side:1},
 {id:'flower',name:'Flower Market',thai:'ปากคลองตลาด',lon:100.49656,lat:13.74073,side:-1},
 {id:'memorial',name:'Memorial Bridge',thai:'สะพานพุทธ',lon:100.49912,lat:13.73911,side:-1},
 {id:'chinatown',name:'Ratchawong',thai:'ท่าราชวงศ์',lon:100.50377,lat:13.73806,side:-1},
 {id:'lhong',name:'Lhong 1919',thai:'ล้ง 1919',lon:100.50712,lat:13.73447,side:1},
 {id:'rivercity',name:'River City',thai:'ริเวอร์ ซิตี้',lon:100.51374,lat:13.73033,side:-1},
 {id:'icon',name:'ICONSIAM',thai:'ไอคอนสยาม',lon:100.51255,lat:13.72665,side:1},
 {id:'oriental',name:'Oriental Pier',thai:'ท่าโอเรียนเต็ล',lon:100.5140,lat:13.72355,side:-1},
 {id:'river',name:'The River',thai:'เดอะ ริเวอร์',lon:100.51115,lat:13.72139,side:1},
 {id:'sathorn',name:'Sathorn Pier',thai:'ท่าสาทร',lon:100.5129,lat:13.71895,side:-1},
];
export function buildPiers(river){return PIER_DEFS.map((p,i)=>{const geo=project(p.lon,p.lat),n=river.nearest(geo.x,geo.z),d=clamp(n.distance,65,river.length-65),c=river.sample(d),s=p.side;return {...p,index:i,distance:d,x:c.x+c.nx*s*(c.width/2-26),z:c.z+c.nz*s*(c.width/2-26),bankX:c.x+c.nx*s*(c.width/2+2),bankZ:c.z+c.nz*s*(c.width/2+2),heading:c.heading,nx:c.nx*s,nz:c.nz*s};});}

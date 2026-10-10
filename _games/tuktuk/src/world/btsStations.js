import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {prepareBuildingLayout} from './layout.mjs';

const STATIONS = [
  {coord:[100.5697129,13.7304345],name:'พร้อมพงษ์',en:'PHROM PHONG',number:'E5'},
  {coord:[100.5603571,13.7370432],name:'อโศก',en:'ASOK',number:'E4'},
];
export const BTS_LEVELS = Object.freeze({street:.2,concourse:6.55,platform:11.6,roof:16.3});
export function stationRectangle(station,x,z,width,depth) {
  const c=Math.cos(station.yaw),s=Math.sin(station.yaw);
  return {x:station.x+x*c+z*s,z:station.z-x*s+z*c,width,depth,yaw:station.yaw};
}
function volume(station,id,x,z,width,depth,baseHeight,topHeight) {
  const rectangle=stationRectangle(station,x,z,width,depth),c=Math.cos(station.yaw),s=Math.sin(station.yaw);
  const outer=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([dx,dz])=>({x:rectangle.x+dx*width/2*c+dz*depth/2*s,z:rectangle.z-dx*width/2*s+dz*depth/2*c}));
  return {id:`bts/${station.number}/${id}`,baseHeight,topHeight,polygons:[{outer,holes:[]}]};
}

/** Entrances adapt to the actual rendered pavement, buildings and crossing sois. */
export function planBtsStations(map,layout=map.layout||prepareBuildingLayout(map)) {
  const clearance=layout.clearance;
  return STATIONS.map(source=>{
    const p=map.project(source.coord),near=map.nearest(p,map.main);
    const station={...source,...p,yaw:Math.atan2(near.segment.dir.x,near.segment.dir.z),entrances:[],walkways:[],supports:[],groundVolumes:[]};
    const buildingClear=(x,z,w,d)=>clearance.isRectangleClearOfBuildings(stationRectangle(station,x,z,w,d),.25);
    for(const side of [-1,1])for(const end of [-1,1]) {
      let entrance=null;
      search: for(let offset=10.5;offset<=25;offset+=.5)for(const at of [22,25,19,28,16,31,13,34,10,7,4])for(const direction of [end,-end]) {
        const x=side*offset,z=end*at,rect=stationRectangle(station,x,z+direction*6.5,2.8,16);
        if(!clearance.isRectangleClear(rect)||!clearance.isRectangleClearOfBuildings(rect,.25))continue;
        if(!buildingClear(side*(8+offset)/2,z,offset-8+2.8,3))continue;
        if(station.entrances.some(e=>Math.abs(e.x-x)<2.8&&Math.abs(e.z+e.direction*6.5-z-direction*6.5)<16))continue;
        entrance={x,z,direction,side,end,number:station.entrances.length+1,footprint:rect};break search;
      }
      if(entrance)station.entrances.push(entrance);
    }
    for(const side of [-1,1]) {
      const pair=station.entrances.filter(e=>e.side===side);
      if(pair.length===2&&pair.every(e=>e.direction===e.end)&&pair[0].x===pair[1].x) {
        const z=(pair[0].z+pair[1].z)/2,depth=Math.abs(pair[1].z-pair[0].z)+3;
        if(buildingClear(pair[0].x,z,2.8,depth))station.walkways.push({x:pair[0].x,z,depth,side});
      }
    }
    // Piers fit in the median. Never put a new support in a traffic lane.
    for(const z of [-30,0,30]) {
      for(const x of [0,-.3,.3,-.6,.6,-.9,.9,-1.2,1.2]) {
        const rect=stationRectangle(station,x,z,.9,1.5);
        if(clearance.isRectangleClear(rect)&&clearance.isRectangleClearOfBuildings(rect)) {station.supports.push({x,z});break;}
      }
    }
    for(const e of station.entrances)station.groundVolumes.push(volume(station,`entrance-${e.number}`,e.x,e.z+e.direction*6.5,2.8,16,0,9.2));
    for(const [i,pier] of station.supports.entries())station.groundVolumes.push(volume(station,`pier-${i}`,pier.x,pier.z,.9,1.5,0,6.55));
    return station;
  });
}

/** Share the complete station envelopes with pole and sagging-wire validation. */
export function stationUtilityVolumes(map,stations=planBtsStations(map)) {
  return stations.flatMap(station=>[
    volume(station,'core',0,0,19.5,88,5.65,17.2),
    ...station.groundVolumes,
    ...station.walkways.map((w,i)=>volume(station,`walkway-${i}`,w.x,w.z,2.8,w.depth,5.85,9.2)),
    ...station.entrances.map(e=>volume(station,`bridge-${e.number}`,(e.x+e.side*8)/2,e.z,Math.abs(e.x)-8+2.8,3,5.85,9.2)),
  ]);
}

/** Authored open-air BTS structure, batched by material for desktop and mobile. */
export function createBtsStation(station,materials,signTexture) {
  const root=new THREE.Group();root.name=`${station.en} BTS station`;
  root.position.set(station.x,0,station.z);root.rotation.y=station.yaw;
  const concrete=materials.concrete;
  const metal=new THREE.MeshStandardMaterial({color:'#aebdbb',roughness:.48,metalness:.58});
  const roof=new THREE.MeshStandardMaterial({color:'#586e78',roughness:.76,side:THREE.DoubleSide});
  const dark=new THREE.MeshStandardMaterial({color:'#334a51',roughness:.68});
  const yellow=new THREE.MeshStandardMaterial({color:'#dfb74b',roughness:.75});
  const glazing=new THREE.MeshStandardMaterial({color:'#46646a',roughness:.32,metalness:.25});
  const unit=new THREE.BoxGeometry(1,1,1),pieces=new Map(),collisionPieces=[];
  const add=(geometry,material,collision=false)=>{
    const tile=material.userData?.tileMeters;
    if(tile){
      const p=geometry.attributes.position,n=geometry.attributes.normal,uv=geometry.attributes.uv;
      for(let i=0;i<p.count;i++){
        if(Math.abs(n.getX(i))>.5)uv.setXY(i,p.getZ(i)/tile[0],p.getY(i)/tile[1]);
        else if(Math.abs(n.getY(i))>.5)uv.setXY(i,p.getX(i)/tile[0],p.getZ(i)/tile[1]);
        else uv.setXY(i,p.getX(i)/tile[0],p.getY(i)/tile[1]);
      }
    }
    if(!pieces.has(material))pieces.set(material,[]);pieces.get(material).push(geometry);
    if(collision)collisionPieces.push(geometry.clone());
  };
  const box=(w,h,d,x,y,z,material=concrete,collision=false,rotation=null)=>{
    const q=rotation?new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)):new THREE.Quaternion();
    const g=unit.clone().applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x,y,z),q,new THREE.Vector3(w,h,d)));
    add(g,material,collision);
  };
  const beam=(a,b,width,depth,material=metal,collision=false)=>{
    const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start);
    const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),direction.clone().normalize());
    const g=unit.clone().applyMatrix4(new THREE.Matrix4().compose(start.add(end).multiplyScalar(.5),q,new THREE.Vector3(width,direction.length(),depth)));
    add(g,material,collision);
  };
  const railing=(a,b)=>{
    for(const h of [.55,1.08])beam([a[0],a[1]+h,a[2]],[b[0],b[1]+h,b[2]],.055,.055);
    const n=Math.ceil(Math.hypot(b[0]-a[0],b[2]-a[2])/1.35);
    for(let i=0;i<=n;i++){const t=i/n;beam([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t],[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t+1.08,a[2]+(b[2]-a[2])*t],.055,.055);}
  };
  const sign=(text,sub,width,height,x,y,z,yaw=0)=>{
    const mat=new THREE.MeshBasicMaterial({map:signTexture(text,sub,'#123e59','#f0f0df')});
    // A sign on each face keeps both travel directions readable.
    for(const flip of [0,Math.PI]){
      const g=new THREE.PlaneGeometry(width,height);g.rotateY(yaw+flip);g.translate(x+Math.sin(yaw+flip)*.06,y,z+Math.cos(yaw+flip)*.06);add(g,mat);
    }
  };
  const {street,concourse,platform}=BTS_LEVELS;
  // Continuous ticket concourse, transverse girders and supported pavement landings.
  box(18,.55,80,0,concourse-.275,0);
  for(const z of [-30,-15,0,15,30])box(18,.35,.8,0,5.825,z);
  for(const p of station.supports){box(.9,5.9,1.5,p.x,2.95,p.z,concrete,true);box(17.8,.45,1.5,0,5.775,p.z);}
  for(const w of station.walkways){
    box(2.8,.5,w.depth,w.x,concourse-.25,w.z);
    for(const side of [-1,1])railing([w.x+side*1.28,concourse,w.z-w.depth/2+2.9],[w.x+side*1.28,concourse,w.z+w.depth/2-2.9]);
    box(2.8,.1,w.depth,w.x,9.03,w.z,roof);
    for(let z=w.z-w.depth/2+4;z<w.z+w.depth/2;z+=8)for(const side of [-1,1])box(.08,2.48,.08,w.x+side*1.26,7.79,z,metal);
  }
  // Each flight has risers, a continuous underside, a mid-landing and handrails.
  const staircase=(x,topZ,direction,low,high,width,count,run,landing=1.4,covered=false,collision=false)=>{
    const flight=count/2,flightRun=flight*run,total=2*flightRun+landing;
    const lowZ=topZ+direction*total,step=(high-low)/count,mid=(low+high)/2;
    for(let i=0;i<count;i++){
      const progress=(i+.5)*run+(i>=flight?landing:0),y=low+(i+1)*step;
      box(width,step+.12,run+.012,x,y-(step+.12)/2,lowZ-direction*progress,concrete,collision);
      box(width,.022,.055,x,y+.012,lowZ-direction*(progress-run/2+.03),yellow);
    }
    const firstEnd=lowZ-direction*flightRun,secondStart=firstEnd-direction*landing;
    box(width,.26,landing+.08,x,mid-.13,(firstEnd+secondStart)/2,concrete,collision);
    for(const [z1,y1,z2,y2] of [[lowZ,low,firstEnd,mid],[secondStart,mid,topZ,high]]){
      beam([x,y1-.17,z1],[x,y2-.17,z2],width,.27,concrete,collision);
      for(const side of [-1,1])railing([x+side*(width/2-.07),y1,z1],[x+side*(width/2-.07),y2,z2]);
      if(covered){beam([x,y1+2.45,z1],[x,y2+2.45,z2],width+.18,.12,roof);for(const t of [0,.5,1])for(const side of [-1,1])box(.065,2.45,.065,x+side*(width/2-.06),y1+(y2-y1)*t+1.225,z1+(z2-z1)*t,metal);}
    }
    for(const side of [-1,1])railing([x+side*(width/2-.07),mid,firstEnd],[x+side*(width/2-.07),mid,secondStart]);
    if(covered)box(width+.18,.12,landing+.05,x,mid+2.45,(firstEnd+secondStart)/2,roof);
    return {lowZ,total};
  };
  for(const e of station.entrances){
    const width=Math.abs(e.x)-8+1.4,cx=(e.x+e.side*8)/2;
    box(width,.5,2.8,cx,concourse-.25,e.z);
    box(width,.22,.35,cx,5.94,e.z-1.1);box(width,.22,.35,cx,5.94,e.z+1.1);
    for(const end of [-1,1])railing([e.side*8.7,concourse,e.z+end*1.3],[e.x-e.side*1.3,concourse,e.z+end*1.3]);
    box(width,.1,2.8,cx,9.03,e.z,roof);
    box(2.8,.5,2.8,e.x,concourse-.25,e.z);
    // The stairs start at the outside edge of the top landing, with no slab over the opening.
    const stairs=staircase(e.x,e.z+e.direction*1.3,e.direction,street,concourse,2.5,36,.30,1.4,true,true);
    box(2.5,.2,1,e.x,.1,stairs.lowZ+e.direction*.5,concrete,true);
    for(const side of [-1,1])box(.2,concourse,.3,e.x+side*1.13,concourse/2,e.z,concrete,true);
    railing([e.x-1.25,concourse,e.z-e.direction*1.28],[e.x+1.25,concourse,e.z-e.direction*1.28]);
    sign('BTS',`${station.number}  ${station.en}  ·  EXIT ${e.number}`,2.7,.72,e.x,street+2.7,stairs.lowZ,e.direction<0?Math.PI:0);
  }
  // Concourse edge railings leave actual openings at every access bridge.
  for(const side of [-1,1]){
    const openings=station.entrances.filter(e=>e.side===side).map(e=>[e.z-1.5,e.z+1.5]).sort((a,b)=>a[0]-b[0]);
    let z=-40;for(const [start,end] of [...openings,[40,40]]){if(start>z)railing([side*8.85,concourse,z],[side*8.85,concourse,start]);z=end;}
  }
  for(const z of [-40,40])railing([-8.85,concourse,z],[8.85,concourse,z]);
  // Side platforms flank the tracks, with real openings for four internal stairs.
  for(const side of [-1,1]){
    const x=side*6.65,w=4.7,stairsX=side*6.3,holes=[[-26,-15.5],[15.5,26]];
    let z=-42;
    for(const [start,end] of [...holes,[42,42]]){
      if(start>z)box(w,.45,start-z,x,platform-.225,(start+z)/2);
      if(end>start){
        const left=x-w/2,right=x+w/2,lo=stairsX-1.15,hi=stairsX+1.15;
        box(lo-left,.45,end-start,(lo+left)/2,platform-.225,(start+end)/2);
        box(right-hi,.45,end-start,(right+hi)/2,platform-.225,(start+end)/2);
        for(const edge of [lo,hi])railing([edge,platform,start],[edge,platform,end]);
      }z=end;
    }
    staircase(stairsX,-26,1,concourse,platform,2.15,30,.30,1.4);
    staircase(stairsX,26,-1,concourse,platform,2.15,30,.30,1.4);
    box(.25,.025,84,side*4.48,platform+.017,0,yellow);
    box(.16,1.05,84,side*8.88,platform+.525,0,dark);
    railing([side*8.88,platform+1.05,-42],[side*8.88,platform+1.05,42]);
    // Platform screen doors, canopy columns and ribbed roof structure.
    for(let z=-39;z<=39;z+=3){box(.075,1.35,.075,side*4.37,platform+.675,z,metal);box(.035,.8,2.65,side*4.37,platform+.55,z+1.35,glazing);}
    for(let z=-36;z<=36;z+=12){box(.2,4.3,.2,side*7.9,13.75,z,metal);beam([side*7.9,15.5,z],[0,16.95,z],.14,.14);}
    box(9.65,.16,87,side*4.72,16.45,0,roof,false,[0,0,-side*.115]);
    for(let z=-42;z<=42;z+=3)beam([side*9.4,15.97,z],[0,17.06,z],.055,.08,metal);
  }
  // Ticket machines and fare gates make the middle storey read as a station.
  for(const side of [-1,1])for(const z of [-5,-3,-1,1,3,5]){box(.5,.9,1.05,side*2.9,concourse+.45,z,metal);box(.05,.55,.6,side*2.6,concourse+.7,z,glazing);}
  for(const x of [-1,0,1]){box(.72,1.8,.55,x,concourse+.9,8,dark);box(.43,.45,.025,x,concourse+1.2,7.7,glazing);}
  for(const z of [-42.7,42.7])sign(station.name,`${station.number}  ${station.en}`,7,1.45,0,8.4,z);
  for(const side of [-1,1])sign(station.name,`${station.number}  ${station.en}`,7,1.05,side*9.06,13.35,0,Math.PI/2);
  for(const [material,geometries] of pieces){
    const geometry=mergeGeometries(geometries);geometry.computeBoundingSphere();
    const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);geometries.forEach(g=>g.dispose());
  }
  unit.dispose();
  root.updateMatrixWorld(true);
  const collision=mergeGeometries(collisionPieces);collision.applyMatrix4(root.matrixWorld);collisionPieces.forEach(g=>g.dispose());
  root.userData={entrances:station.entrances.length,walkways:station.walkways.length,platformStairs:4,drawCalls:root.children.length};
  return {group:root,collision};
}

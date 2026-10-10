import polygonClipping from 'polygon-clipping';
import {districtHash} from './district.mjs';

const bounds=ring=>({minX:Math.min(...ring.map(p=>p[0])),maxX:Math.max(...ring.map(p=>p[0])),minZ:Math.min(...ring.map(p=>p[1])),maxZ:Math.max(...ring.map(p=>p[1]))});
const overlaps=(a,b)=>a.minX<=b.maxX&&a.maxX>=b.minX&&a.minZ<=b.maxZ&&a.maxZ>=b.minZ;
export function districtGreenAreas(map){
  return (map.data.parks||[]).map(park=>{
    const ring=park.coordinates.map(c=>{const p=map.project(c);return[p.x,p.z];});
    if(ring.length<3)return null;
    if(ring[0][0]!==ring.at(-1)[0]||ring[0][1]!==ring.at(-1)[1])ring.push([...ring[0]]);
    return {id:park.id,ring,bounds:bounds(ring)};
  }).filter(Boolean);
}
export function planDistrictInfill(map,clearance){
  const parks=districtGreenAreas(map),water=[];
  for(const line of map.data.waterways||[])for(let i=1;i<line.coordinates.length;i++){
    const a=map.project(line.coordinates[i-1]),b=map.project(line.coordinates[i]);water.push({a,b});
  }
  const nearWater=p=>water.some(({a,b})=>{const dx=b.x-a.x,dz=b.z-a.z,l=dx*dx+dz*dz,t=l?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/l)):0;return Math.hypot(p.x-a.x-dx*t,p.z-a.z-dz*t)<22;});
  const stations=[[100.5697129,13.7304345],[100.5603571,13.7370432]].map(map.project);
  const result=[],cells=new Map();
  // Fill missing frontage with small opaque shophouses, never towers or park infill.
  // Every accepted polygon joins the same layout/collider/cable-clearance pipeline.
  const roads=map.segments.filter(s=>['primary','secondary','tertiary','residential','living_street'].includes(s.road.tags.highway)).sort((a,b)=>a.id.localeCompare(b.id));
  for(const s of roads)for(let at=10;at<s.len-6;at+=17)for(const side of [-1,1]){
    const id=`authored/frontage/${s.id}/${Math.round(at)}/${side}`,seed=districtHash(id);
    const width=9+seed%6,depth=7+seed%4,offset=s.road.width/2+3.6+depth/2;
    const x=s.a.x+s.dir.x*at+s.dir.z*side*offset,z=s.a.z+s.dir.z*at-s.dir.x*side*offset;
    const yaw=Math.atan2(s.dir.x,s.dir.z)+Math.PI/2,c=Math.cos(yaw),sn=Math.sin(yaw);
    const rect={x,z,width,depth,yaw},cell=`${Math.floor(x/100)},${Math.floor(z/100)}`;
    if((cells.get(cell)||0)>=3)continue;
    if(!map.inside({x,z})||stations.some(p=>Math.hypot(p.x-x,p.z-z)<85)||nearWater({x,z}))continue;
    if(!clearance.isRectangleClear(rect,1.5)||!clearance.isRectangleClearOfBuildings(rect,2))continue;
    const ring=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([a,b])=>[x+a*width/2*c+b*depth/2*sn,z-a*width/2*sn+b*depth/2*c]);
    if(!ring.every(([x,z])=>map.inside({x,z})))continue;
    const b=bounds(ring);
    if(parks.some(park=>overlaps(b,park.bounds)&&polygonClipping.intersection([ring],[park.ring]).length))continue;
    const building={id,tags:{building:'retail',authored:'yes'},polygons:[{outer:ring.map(([x,z])=>({x,z})),holes:[]}],baseHeight:0,topHeight:6.5+(seed%4)*3.25,collisionHeight:5,sourceArea:width*depth,renderArea:width*depth};
    result.push(building);cells.set(cell,(cells.get(cell)||0)+1);clearance.setBuildings([building]);
  }
  return result;
}

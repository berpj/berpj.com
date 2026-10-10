import polygonClipping from 'polygon-clipping';
import {districtGreenAreas} from './districtInfill.mjs';
import {districtHash} from './district.mjs';

function inside(p,ring){let yes=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>p.z)!==(b[1]>p.z)&&p.x<(b[0]-a[0])*(p.z-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;}
/** Mapped parks stay green and open; trees never obstruct a road or shop. */
export function planDistrictGreenery(map,layout){
  const parks=districtGreenAreas(map),surfaces=[],trees=[];
  const clip=[[[map.bounds.min.x-140,map.bounds.min.z-140],[map.bounds.max.x+140,map.bounds.min.z-140],[map.bounds.max.x+140,map.bounds.max.z+140],[map.bounds.min.x-140,map.bounds.max.z+140],[map.bounds.min.x-140,map.bounds.min.z-140]]];
  for(const park of parks){
    const clipped=polygonClipping.intersection([park.ring],clip);if(!clipped.length)continue;
    const roads=layout.clearance.candidates(park.bounds).map(c=>c.geometry);
    const geometry=roads.length?polygonClipping.difference(clipped,...roads):clipped;
    surfaces.push({id:park.id,geometry});
    const minX=Math.max(park.bounds.minX,map.bounds.min.x-100),maxX=Math.min(park.bounds.maxX,map.bounds.max.x+100);
    const minZ=Math.max(park.bounds.minZ,map.bounds.min.z-100),maxZ=Math.min(park.bounds.maxZ,map.bounds.max.z+100);
    for(let x=minX+10;x<maxX-8;x+=22)for(let z=minZ+10;z<maxZ-8;z+=22){
      const seed=districtHash(`${park.id}/${Math.round(x)}/${Math.round(z)}`),p={x:x+(seed%9)-4,z:z+(Math.floor(seed/17)%9)-4};
      if(!inside(p,park.ring)||seed%4===0)continue;
      if(layout.clearance.isCircleClear({...p,radius:3})&&layout.clearance.isRectangleClearOfBuildings({...p,width:6,depth:6}))trees.push(p);
    }
  }
  return {surfaces,trees};
}
export function createDistrictGround(THREE,map,layout,materials){
  const plan=planDistrictGreenery(map,layout),group=new THREE.Group();group.name='Mapped green parks and garden grounds';
  const positions=[],uv=[];
  for(const surface of plan.surfaces)for(const polygon of surface.geometry){
    const rings=polygon.map(r=>r.slice(0,-1).map(([x,z])=>new THREE.Vector2(x,z))),vertices=rings.flat();
    for(const face of THREE.ShapeUtils.triangulateShape(rings[0],rings.slice(1))){let [a,b,c]=face.map(i=>vertices[i]);if((b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)>0)[b,c]=[c,b];for(const p of [a,b,c]){positions.push(p.x,.018,p.y);uv.push(p.x*.4,p.y*.4);}}
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.computeVertexNormals();
  const grass=new THREE.MeshStandardMaterial({color:'#698349',roughness:1,map:materials.concrete.map});
  const mesh=new THREE.Mesh(geo,grass);mesh.receiveShadow=true;group.add(mesh);
  group.userData={parks:plan.surfaces.length,trees:plan.trees.length};
  return {group,trees:plan.trees};
}

import {buildingAppearance} from './district.mjs';
import {createDistrictGround} from './districtGround.js';
import {createHumanCharacter} from '../assets/humanCharacter.js';
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {makeMaterials,signTexture} from './materials.js';
import {createStreetTrees,updateTreesVisibility} from '../assets/foliage.js';
import {createBangkokShop,BANGKOK_SHOP_ENVELOPE} from '../assets/bangkokShops.js';
import {createShopfrontSystem} from '../assets/shopfronts.js';
import {distance} from '../game/rules.mjs';
import {prepareBuildingLayout} from './layout.mjs';
import {planUtilityLines,createUtilityLines,stationUtilityVolumes} from './utilityLines.mjs';
import {planRoadMarkings,createRoadMarkings} from './roadMarkings.mjs';
import {planBtsStations,createBtsStation} from './btsStations.js';

const unitBox=new THREE.BoxGeometry(1,1,1);
function box(w,h,d,material,x,y,z,rotation=0){
  let geometry=unitBox;
  const tile=material.userData?.tileMeters;
  if(tile){
    geometry=unitBox.clone();const uv=geometry.attributes.uv,p=geometry.attributes.position,n=geometry.attributes.normal;
    for(let i=0;i<p.count;i++){
      if(Math.abs(n.getX(i))>.5)uv.setXY(i,p.getZ(i)*d/tile[0],p.getY(i)*h/tile[1]);
      else if(Math.abs(n.getY(i))>.5)uv.setXY(i,p.getX(i)*w/tile[0],p.getZ(i)*d/tile[1]);
      else uv.setXY(i,p.getX(i)*w/tile[0],p.getY(i)*h/tile[1]);
    }
  }
  const o=new THREE.Mesh(geometry,material);o.scale.set(w,h,d);o.position.set(x,y,z);o.rotation.y=rotation;o.castShadow=true;o.receiveShadow=true;return o;
}
class Batch {
  constructor(){this.positions=[];this.uvs=[];this.indices=[];this.colors=[];this.tint=null;}
  quad(a,b,c,d,uv=[0,0,1,0,1,1,0,1]){const i=this.positions.length/3;for(const p of [a,b,c,d]){this.positions.push(...p);if(this.tint)this.colors.push(this.tint.r,this.tint.g,this.tint.b);}this.uvs.push(...uv);this.indices.push(i,i+1,i+2,i,i+2,i+3);}
  triangle(a,b,c){const i=this.positions.length/3;for(const p of [a,b,c]){this.positions.push(...p);this.uvs.push(p[0]/8,p[2]/8);if(this.tint)this.colors.push(this.tint.r,this.tint.g,this.tint.b);}this.indices.push(i,i+1,i+2);}
  mesh(material){if(!this.positions.length)return null;const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(this.positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(this.uvs,2));if(this.colors.length===this.positions.length){g.setAttribute('color',new THREE.Float32BufferAttribute(this.colors,3));material.vertexColors=true;}g.setIndex(this.indices);g.computeVertexNormals();const m=new THREE.Mesh(g,material);m.receiveShadow=true;return m;}
}
function ribbon(batch,a,b,width,y,uvscale=.12){const len=distance(a,b);if(len<.01)return;const x=(b.z-a.z)/len*width/2,z=-(b.x-a.x)/len*width/2;batch.quad([a.x-x,y,a.z-z],[b.x-x,y,b.z-z],[b.x+x,y,b.z+z],[a.x+x,y,a.z+z],[(a.x-x)*uvscale,(a.z-z)*uvscale,(b.x-x)*uvscale,(b.z-z)*uvscale,(b.x+x)*uvscale,(b.z+z)*uvscale,(a.x+x)*uvscale,(a.z+z)*uvscale]);}
function segmentBox(a,b,width,height,mat,y){const len=distance(a,b);return box(width,height,len,mat,(a.x+b.x)/2,y,(a.z+b.z)/2,Math.atan2(b.x-a.x,b.z-a.z));}
function mergeStatic(group){
  const byMaterial=new Map();group.updateMatrixWorld(true);const inverse=group.matrixWorld.clone().invert();
  group.traverse(child=>{if(!child.isMesh||Array.isArray(child.material))return;const transform=inverse.clone().multiply(child.matrixWorld);const g=child.geometry.clone().applyMatrix4(transform);if(!byMaterial.has(child.material))byMaterial.set(child.material,[]);byMaterial.get(child.material).push(g);});
  group.clear();for(const [mat,geos]of byMaterial){const merged=mergeGeometries(geos);if(merged){const mesh=new THREE.Mesh(merged,mat);mesh.castShadow=!mat.transparent;mesh.receiveShadow=true;group.add(mesh);}geos.forEach(g=>g.dispose());}
}


export function createWorld(scene,map,physics,RAPIER,{mobile=false}={}){
  const m=makeMaterials();const world=new THREE.Group();scene.add(world);const structures=new THREE.Group();world.add(structures);
  const ground=box(7000,.2,7000,m.sidewalk.clone(),0,-.15,0);ground.castShadow=false;world.add(ground);
  physics.createCollider(RAPIER.ColliderDesc.cuboid(3500,.1,3500).setTranslation(0,-.1,0).setFriction(0));
  const roadPlan=planRoadMarkings(map);
  world.add(createRoadMarkings(THREE,roadPlan,m));map.roadMarkingStats=roadPlan.stats;

  const layout=prepareBuildingLayout(map,{mobile});map.layout=layout;
  const stations=planBtsStations(map,layout);
  // Reserve stairs and piers before shop projections, stalls, trees and crowds.
  layout.clearance.setBuildings(stations.flatMap(station=>station.groundVolumes));
  const shopfrontSystem=createShopfrontSystem(THREE,map,layout,{mobile});world.add(shopfrontSystem.group);
  const featureShops=new THREE.Group(),featureLots=[];world.add(featureShops);
  const wallBatches=Array.from({length:m.walls.length},()=>new Batch()),roofBatch=new Batch(),collisionVertices=[],collisionIndices=[];
  const architectural=new THREE.Group();world.add(architectural);
  const trim=new THREE.MeshStandardMaterial({color:'#c8c3b3',roughness:.88});
  const recess=new THREE.MeshStandardMaterial({color:'#3b4849',roughness:.72});
  const acMaterial=new THREE.MeshStandardMaterial({color:'#b8bbb2',roughness:.63,metalness:.12});
  const balconyRail=new THREE.MeshStandardMaterial({color:'#656d68',metalness:.55,roughness:.5});
  let count=0;
  for(const b of layout.buildings){
    count++;const base=b.baseHeight,height=b.topHeight;
    const {seed,materialIndex,tint,roof}=buildingAppearance(b);
    roofBatch.tint=new THREE.Color(roof);
    const batch=wallBatches[materialIndex],metric=m.walls[materialIndex].userData?.facadeMeters||{width:12,height:13};
    batch.tint=new THREE.Color(m.facadeStyles[materialIndex].category==='office'?'#ffffff':tint);
    for(const polygon of b.polygons){
      const rings=[polygon.outer,...polygon.holes];
      for(const [ringIndex,p]of rings.entries()){
        const area=p.slice(1).reduce((sum,point,i)=>sum+p[i].x*point.z-point.x*p[i].z,0);
        for(let i=1;i<p.length;i++){
          let a=p[i-1],d=p[i];if((area>0)===(ringIndex===0))[a,d]=[d,a];
          const len=distance(a,d);if(len<.05)continue;
          const mid={x:(a.x+d.x)/2,z:(a.z+d.z)/2},road=map.nearest(mid);
          const nx=-(d.z-a.z)/len,nz=(d.x-a.x)/len,yaw=Math.atan2(nx,nz);
          const towardRoad=nx*(road.x-mid.x)+nz*(road.z-mid.z)>0;
          const near=distance(mid,map.spawn)<(mobile?370:600);
          const streetFace=base<.1&&towardRoad&&road.distance<Math.max(28,road.segment.road.width/2+18)&&ringIndex===0;
          const envelope=BANGKOK_SHOP_ENVELOPE,shopInset=envelope.depth/2;
          const shopCenter={x:mid.x-nx*shopInset,z:mid.z-nz*shopInset,width:envelope.width+2*envelope.seamOverlap+.02,depth:envelope.depth+.02,yaw};
          const feature=streetFace&&Math.abs(nx*road.segment.dir.x+nz*road.segment.dir.z)<.55&&height>=8&&len>=10.2&&len<45&&featureLots.length<22&&featureLots.every(p=>distance(p,mid)>65)&&layout.clearance.isRectangleClear(shopCenter)&&layout.clearance.isRectangleClearOfBuildings(shopCenter,0,b.id);
          const facadeHeight=streetFace?Math.min(3.6,height):base;
          const featureHeight=feature?envelope.height:facadeHeight;
          const shopLeft=(len-envelope.width)/2,shopRight=(len+envelope.width)/2;
          if(feature){const shop=createBangkokShop(THREE,featureLots.length%3===1?1:0);shop.position.set(shopCenter.x,0,shopCenter.z);shop.rotation.y=yaw;featureShops.add(shop);featureLots.push(mid);}
          if(facadeHeight>base){
            shopfrontSystem.collectFacade({a,b:d,base,height:facadeHeight,yaw,buildingId:b.id,seed,spans:feature?[[0,shopLeft],[shopRight,len]]:null});
          }
          const wall=(start,end,from,to)=>{if(end-start<.005||to-from<.005)return;const u={x:a.x+(d.x-a.x)*start/len,z:a.z+(d.z-a.z)*start/len},v={x:a.x+(d.x-a.x)*end/len,z:a.z+(d.z-a.z)*end/len};batch.quad([u.x,from,u.z],[v.x,from,v.z],[v.x,to,v.z],[u.x,to,u.z],[start/metric.width,from/metric.height,end/metric.width,from/metric.height,end/metric.width,to/metric.height,start/metric.width,to/metric.height]);};
          // Photo shopfronts are decoration over an unbroken structural wall.
          // Keep that backing when their detail chunks are distance-culled.
          if(feature){wall(0,len,featureHeight,height);wall(0,shopLeft,base,featureHeight);wall(shopRight,len,base,featureHeight);}
          else wall(0,len,base,height);
          // Geometry and collision share the corrected footprint and real ground clearance.
          if(base<4){const v=collisionVertices.length/3;collisionVertices.push(a.x,base,a.z,d.x,base,d.z,d.x,Math.min(height,5),d.z,a.x,Math.min(height,5),a.z);collisionIndices.push(v,v+1,v+2,v,v+2,v+3);}
          if(!near||ringIndex>0||!towardRoad||road.distance>70||len<3)continue;
          // Solid slab edges, ledges and balcony rails give facades real depth at street level.
          // Keep all projections behind the reserved road edge.
          const detailClear=layout.clearance.isRectangleClear({x:mid.x+nx*.16,z:mid.z+nz*.16,width:len,depth:.65,yaw});
          if(!detailClear)continue;
          const step=3.25;
          for(let y=Math.max(base+step,Math.ceil(facadeHeight/step)*step);y<Math.min(height,35);y+=step){
            architectural.add(box(len,.13,.36,trim,mid.x+nx*.13,y,mid.z+nz*.13,yaw));
            if(m.facadeStyles[materialIndex].category==='office')continue;
            for(let at=1.6;at<len-1.5;at+=3.2){
              const px=a.x+(d.x-a.x)*at/len,pz=a.z+(d.z-a.z)*at/len;
              if(m.facadeStyles[materialIndex].category==='apartment'&&len>5){
                architectural.add(box(2.5,.12,.65,trim,px+nx*.22,y+.12,pz+nz*.22,yaw));
                architectural.add(box(2.35,.075,.055,balconyRail,px+nx*.55,y+.94,pz+nz*.55,yaw));
                for(const along of [-1.05,0,1.05])architectural.add(box(.045,.84,.045,balconyRail,px+nx*.55+nz*along,y+.5,pz+nz*.55-nx*along,yaw));
              }else if((Math.round(at/3.2)+Math.round(y/step)+seed)%3===0){
                architectural.add(box(.82,.5,.34,acMaterial,px+nx*.2,y+.54,pz+nz*.2,yaw));
                architectural.add(box(.55,.29,.02,recess,px+nx*.38,y+.53,pz+nz*.38,yaw));
              }
            }
          }
          architectural.add(box(len,.34,.26,trim,mid.x,height+.1,mid.z,yaw));
        }
      }
      const contour=polygon.outer.slice(0,-1).map(p=>new THREE.Vector2(p.x,p.z));
      const holes=polygon.holes.map(r=>r.slice(0,-1).map(p=>new THREE.Vector2(p.x,p.z)));
      const vertices=[...contour,...holes.flat()];
      for(const tri of THREE.ShapeUtils.triangulateShape(contour,holes)){
        let [a,c,d]=tri.map(i=>vertices[i]);
        if((c.x-a.x)*(d.y-a.y)-(c.y-a.y)*(d.x-a.x)>0)[c,d]=[d,c];
        roofBatch.triangle([a.x,height,a.y],[c.x,height,c.y],[d.x,height,d.y]);
      }
    }
  }
  mergeStatic(featureShops);mergeStatic(architectural);
  shopfrontSystem.finish();
  for(let i=0;i<m.walls.length;i++){const mesh=wallBatches[i].mesh(m.walls[i]);if(mesh){mesh.material.side=THREE.DoubleSide;mesh.castShadow=true;world.add(mesh);}}
  const roofs=roofBatch.mesh(m.roof);if(roofs){roofs.castShadow=true;world.add(roofs);}
  if(collisionVertices.length)physics.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(collisionVertices),new Uint32Array(collisionIndices)).setFriction(.2));

  // Real BTS alignment, authored editable viaduct geometry and street detail.
  const railways=map.data.railways.filter(r=>r.tags.bridge==='viaduct'&&r.tags['name:en']==='BTS Sukhumvit Line');const rail=railways.find(r=>r.id==='way/156261395')||railways[0];
  // Source ways are individual tracks. Their midpoint is the viaduct centre,
  // rather than putting its columns below just one track in a traffic lane.
  const otherTrack=railways.find(r=>r.id!==rail?.id)?.coordinates.map(map.project)||[];
  const otherSegments=[];for(let i=1;i<otherTrack.length;i++){const a=otherTrack[i-1],b=otherTrack[i],len=distance(a,b);if(len>.01)otherSegments.push({a,b,len,dir:{x:(b.x-a.x)/len,z:(b.z-a.z)/len}});}
  const railPoints=(rail?.coordinates.map(map.project).filter(p=>map.inside(p))||[]).map(p=>{const paired=map.nearest(p,otherSegments);return paired&&paired.distance<25?{x:(p.x+paired.x)/2,z:(p.z+paired.z)/2}:p;});const railSegments=[];
  for(let i=1;i<railPoints.length;i++){const a=railPoints[i-1],b=railPoints[i],len=distance(a,b);if(len<.1)continue;railSegments.push({a,b,len,dir:{x:(b.x-a.x)/len,z:(b.z-a.z)/len}});structures.add(segmentBox(a,b,8.3,1.2,m.concrete,10.4));structures.add(segmentBox(a,b,8.5,.45,m.concrete,11.05));
    for(const offset of [-4.1,4.1]){const x=(b.z-a.z)/len*offset,z=-(b.x-a.x)/len*offset;structures.add(segmentBox({x:a.x+x,z:a.z+z},{x:b.x+x,z:b.z+z},.2,.65,m.concrete,11.4));}}
  const samples=[];let travel=0;
  for(const s of railSegments){
    for(let at=(34-travel%34)%34;at<s.len;at+=34){
      const p={x:s.a.x+s.dir.x*at,z:s.a.z+s.dir.z*at,dir:s.dir};samples.push(p);
      const yaw=Math.atan2(s.dir.x,s.dir.z);
      const offsets=[0];for(let n=1;n<=24;n++)offsets.push(-n*.15,n*.15);
      const support=offsets.map(offset=>({x:p.x+s.dir.z*offset,z:p.z-s.dir.x*offset,width:1.08,depth:1.8,yaw})).find(rect=>layout.clearance.isRectangleClear(rect));
      if(!support)continue;
      structures.add(box(1.08,9.6,1.8,m.concrete,support.x,4.8,support.z,yaw));
      structures.add(box(7.4,.8,2.2,m.concrete,support.x,9.65,support.z,yaw));
      physics.createCollider(RAPIER.ColliderDesc.cuboid(.54,4.8,.9).setTranslation(support.x,4.8,support.z).setRotation({x:0,y:Math.sin(yaw/2),z:0,w:Math.cos(yaw/2)}));
    }
    travel+=s.len;
  }
  const lamps=new THREE.Group();world.add(lamps);
  const chrome=new THREE.MeshStandardMaterial({color:'#7e8780',metalness:.5,roughness:.55});
  const lampLight=new THREE.MeshStandardMaterial({color:'#e7e4cc',emissive:'#f1d99d',emissiveIntensity:.2});
  const signedRoads=new Set();
  for(const s of map.main)for(const id of [s.ia,s.ib]){
    const node=map.nodes.get(id),sideRoad=(map.graph.get(id)||[]).find(e=>!map.main.includes(e.segment)&&e.segment.road.tags.name);
    if(!sideRoad||distance(node,map.spawn)>1000||signedRoads.has(sideRoad.segment.road.id))continue;
    const source=sideRoad.segment.road.tags;
    const candidates=[-1,1].map(side=>({x:node.x+s.dir.z*side*(s.road.width/2+1.5)+s.dir.x*5,z:node.z-s.dir.x*side*(s.road.width/2+1.5)+s.dir.z*5,radius:.2}));
    const site=candidates.find(p=>layout.clearance.isCircleClear(p)&&!layout.clearance.isPointInBuilding(p));
    if(!site)continue;signedRoads.add(sideRoad.segment.road.id);
    const sign=new THREE.MeshStandardMaterial({map:signTexture(source['name:th']||source.name,source['name:en']||'SUKHUMVIT','#19528c','#f5f4e5'),roughness:.58});
    lamps.add(box(.085,3.2,.085,chrome,site.x,1.6,site.z));
    lamps.add(box(2.25,.85,.06,sign,site.x,3.05,site.z,Math.atan2(-s.dir.x,-s.dir.z)));
  }
  const districtGround=createDistrictGround(THREE,map,layout,m);world.add(districtGround.group);
  const treePositions=[...districtGround.trees],hedges=[];
  for(let i=0;i<samples.length;i++){
    const p=samples[i];
    for(const side of [-1,1]){
      const yaw=Math.atan2(-p.dir.z*side,p.dir.x*side);
      const tree={x:p.x+p.dir.z*side*18,z:p.z-p.dir.x*side*18};
      const treeClear=layout.clearance.isRectangleClear({...tree,width:4.5,depth:1.35,yaw});
      if(treeClear&&layout.clearance.isRectangleClearOfBuildings({...tree,width:4.5,depth:1.35,yaw})){treePositions.push(tree);hedges.push({...tree,yaw});}
      // Find the real outside curb, not a fixed offset that can land in a crossing soi.
      const lampCandidates=[15.6,18,20.5].map(off=>({x:p.x+p.dir.z*side*off,z:p.z-p.dir.x*side*off,radius:.2}));
      const lamp=lampCandidates.find(v=>layout.clearance.isCircleClear(v)&&(!layout.clearance.isPointInBuilding||!layout.clearance.isPointInBuilding(v)));
      if(!lamp)continue;
      const lx=lamp.x,lz=lamp.z;
      lamps.add(box(.13,6.6,.13,chrome,lx,3.3,lz));
      lamps.add(box(2.2,.1,.13,chrome,lx+p.dir.z*-side,6.4,lz-p.dir.x*-side,yaw));
      lamps.add(box(.7,.12,.35,lampLight,lx+p.dir.z*-side*1.8,6.32,lz-p.dir.x*-side*1.8,yaw));
    }
  }
  mergeStatic(lamps);
  const streetTrees=createStreetTrees(THREE,treePositions,{mobile});world.add(streetTrees);updateTreesVisibility(streetTrees,map.spawn,mobile?190:300);
  const hedgeMat=new THREE.MeshStandardMaterial({color:'#51683b',roughness:1});for(const h of hedges){structures.add(box(4.2,.5,1.05,hedgeMat,h.x,.4,h.z,h.yaw));structures.add(box(4.5,.25,1.35,m.concrete,h.x,.13,h.z,h.yaw));}
  const stationStats=[];
  for(const station of stations){
    const asset=createBtsStation(station,m,signTexture);world.add(asset.group);
    const collision=asset.collision;
    physics.createCollider(RAPIER.ColliderDesc.trimesh(collision.attributes.position.array,collision.index.array).setFriction(.6));
    collision.dispose();stationStats.push({name:station.en,...asset.group.userData});
  }
  // Authored utilities follow real sidewalks and bends. Validate every sagging
  // segment against the rendered building volumes before batching it for culling.
  const utilityPlan=planUtilityLines(map,layout.buildings,{mobile,clearance:layout.clearance,extraVolumes:stationUtilityVolumes(map,stations)});
  world.add(createUtilityLines(THREE,utilityPlan,{mobile}));
  mergeStatic(structures);
  return {group:world,materials:m,railPoints,buildingCount:count,layoutStats:layout.stats,stationStats,shopfronts:shopfrontSystem.sites,shopfrontStats:shopfrontSystem.group.userData,update:player=>{updateTreesVisibility(streetTrees,player,mobile?190:300);shopfrontSystem.update(player);}};
}

export function createCar(color='#d9dccf',type='car'){
  const g=new THREE.Group(),paint=new THREE.MeshStandardMaterial({color,roughness:.34,metalness:.35}),dark=new THREE.MeshStandardMaterial({color:'#28322d',roughness:.7}),glass=new THREE.MeshStandardMaterial({color:'#345d63',roughness:.22,metalness:.3}),chrome=new THREE.MeshStandardMaterial({color:'#afbab1',metalness:.75,roughness:.3});const bus=type==='bus',w=bus?2.45:1.75,l=bus?9:4.3;
  g.add(box(w,bus?2.1:.6,l,paint,0,bus?1.5:.7,0));g.add(box(w*.92,bus?1.1:.8,l*.62,glass,0,bus?2.3:1.35,-.15));g.add(box(w*.91,.12,l*.6,paint,0,bus?2.9:1.8,-.15));g.add(box(w*.93,.16,.12,chrome,0,.52,l/2));
  const wheelGeo=new THREE.CylinderGeometry(bus?.45:.34,bus?.45:.34,.18,12);for(const x of [-w/2,w/2])for(const z of [-l*.31,l*.31]){const wheel=new THREE.Mesh(wheelGeo,dark);wheel.rotation.z=Math.PI/2;wheel.position.set(x,bus?.45:.34,z);g.add(wheel);}
  for(const x of [-w*.35,w*.35]){g.add(box(.24,.13,.08,new THREE.MeshBasicMaterial({color:'#dc4639'}),x,bus?1:.74,l/2+.01));g.add(box(.25,.12,.08,new THREE.MeshBasicMaterial({color:'#e9e2b5'}),x,bus?1:.74,-l/2-.01));}
  if(type==='taxi'){g.add(box(.42,.2,.3,new THREE.MeshStandardMaterial({color:'#ebe5ce'}),0,1.95,0));}
  mergeStatic(g);g.userData={length:l,width:w,type};return g;
}

export function createPerson(color='#e5bb8b'){
  return createHumanCharacter(THREE,{shirtColor:color,pose:'standing'});
}

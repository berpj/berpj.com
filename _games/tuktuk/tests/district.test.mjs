import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import polygonClipping from 'polygon-clipping';
import {prepareMap} from '../src/world/map.mjs';
import {prepareBuildingLayout} from '../src/world/layout.mjs';
import {buildingAppearance} from '../src/world/district.mjs';
import {districtGreenAreas} from '../src/world/districtInfill.mjs';
import {planDistrictGreenery} from '../src/world/districtGround.js';
import {createShopfrontSystem,SHOP_STYLES} from '../src/assets/shopfronts.js';
const source=JSON.parse(fs.readFileSync(new URL('../public/data/bangkok-sukhumvit.json',import.meta.url)));
const map=prepareMap(source),desktop=prepareBuildingLayout(map),mobile=prepareBuildingLayout(map,{mobile:true});

test('compact district is 25 percent smaller and retains all 540 pickup-to-destination routes',()=>{
  const a=source.bbox,b=map.district.bbox;
  const ratio=((b[2]-b[0])*(b[3]-b[1]))/((a[2]-a[0])*(a[3]-a[1]));
  assert.ok(Math.abs(ratio-.75)<.0001);assert.equal(map.anchors.length,36);assert.equal(map.destinations.length,15);
  for(const pickup of map.anchors)for(const destination of map.destinations){
    const route=map.route(pickup,destination);assert.ok(route&&route.length>0,`${pickup.id} -> ${destination.name}`);
    assert.ok(route.points.every(p=>map.inside(p)));
  }
});
test('desktop and mobile retain the same complete building coverage with an outside scenery apron',()=>{
  assert.deepEqual(desktop.buildings.map(b=>b.id),mobile.buildings.map(b=>b.id));
  const eligible=source.buildings.filter(b=>b.coordinates.some(c=>map.insideScenery(map.project(c))));
  assert.equal(desktop.stats.selected,eligible.length);
  assert.ok(desktop.stats.selected>4000);assert.equal(desktop.stats.rejectedInvalid,0);
  assert.ok(desktop.buildings.some(b=>b.polygons[0].outer.every(p=>!map.inside(p))));
});
test('infill has no overlaps with roads, other buildings or mapped parks',()=>{
  const infill=desktop.buildings.filter(b=>b.id.startsWith('authored/')),parks=districtGreenAreas(map);
  assert.ok(infill.length>250&&infill.length<800);
  for(const b of infill){
    const p=b.polygons[0].outer;
    const width=Math.hypot(p[1].x-p[0].x,p[1].z-p[0].z),depth=Math.hypot(p[2].x-p[1].x,p[2].z-p[1].z);
    const rect={x:(p[0].x+p[2].x)/2,z:(p[0].z+p[2].z)/2,width,depth,yaw:Math.atan2(-(p[1].z-p[0].z),p[1].x-p[0].x)};
    assert.ok(desktop.clearance.isRectangleClear(rect,1.5),b.id);
    assert.ok(desktop.clearance.isRectangleClearOfBuildings(rect,0,b.id),b.id);
    const ring=p.map(v=>[v.x,v.z]);
    for(const park of parks)assert.equal(polygonClipping.intersection([ring],[park.ring]).length,0,b.id);
    assert.ok(p.every(map.inside));
  }
});
test('mapped green spaces have tree cover without obstructing traffic or buildings',()=>{
  const plan=planDistrictGreenery(map,desktop);assert.ok(plan.surfaces.length>=2);assert.ok(plan.trees.length>100);
  for(const p of plan.trees){assert.ok(desktop.clearance.isCircleClear({...p,radius:3}));assert.ok(desktop.clearance.isRectangleClearOfBuildings({...p,width:6,depth:6}));}
});
test('the district uses every facade family and multiple roof colours',()=>{
  const appearances=desktop.buildings.map(buildingAppearance);
  assert.equal(new Set(appearances.map(a=>a.materialIndex)).size,10);
  assert.equal(new Set(appearances.map(a=>a.roof)).size,4);
});
test('all twelve shop styles appear with finite geometry and atlas UVs confined to their cells',()=>{
  const system=createShopfrontSystem(THREE,{spawn:{x:0,z:0}},{clearance:{isRectangleClear:()=>true,isRectangleClearOfBuildings:()=>true,isPointInBuilding:()=>false}});
  for(let i=0;i<12;i++)system.collectFacade({a:{x:-12,z:i*10},b:{x:12,z:i*10},height:3.6,yaw:0,buildingId:`block-${i}`});
  const sites=system.finish();assert.equal(new Set(sites.map(s=>s.type)).size,SHOP_STYLES.length);assert.equal(SHOP_STYLES.length,12);
  system.group.traverse(mesh=>{
    if(!mesh.isMesh)return;
    for(const attr of Object.values(mesh.geometry.attributes))assert.ok([...attr.array].every(Number.isFinite));
    if(mesh.material.name==='Local Bangkok shop atlas'){
      const uv=mesh.geometry.attributes.uv;
      for(let i=0;i<uv.count;i++)assert.ok(uv.getX(i)>0&&uv.getX(i)<1&&uv.getY(i)>0&&uv.getY(i)<1);
      for(let i=0;i<uv.count;i+=4){const cells=new Set();for(let j=0;j<4;j++)cells.add(`${Math.floor(uv.getX(i+j)*3)},${Math.floor(uv.getY(i+j)*2)}`);assert.equal(cells.size,1);}
    }
  });
});

import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {VisibleLights,collectLightFixture,transformLightFixtures,boatLightFixtures} from '../src/visible-lights.js';
import {createTrafficBoat,updateTrafficDetail} from '../src/traffic-visuals.js';

test('rotated bridge strips preserve endpoints, thickness and HDR colour',()=>{
  const fixtures=[],matrix=new THREE.Matrix4().compose(new THREE.Vector3(40,18,60),new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),.6),new THREE.Vector3(300,.22,.22));
  const glow=new THREE.MeshBasicMaterial({color:new THREE.Color(0xffcc88).multiplyScalar(3)});
  assert(collectLightFixture(fixtures,new THREE.BoxGeometry(1,1,1),glow,matrix));
  const light=fixtures[0];assert(Math.abs(new THREE.Vector3(...light.a).distanceTo(new THREE.Vector3(...light.b))-300)<1e-5);
  assert(Math.abs(light.width-.22)<1e-6);assert(light.color[0]>1);
  const translated=transformLightFixtures(fixtures,new THREE.Matrix4().makeTranslation(10,0,-20))[0];
  assert.equal(translated.a[0],light.a[0]+10);assert.equal(translated.b[2],light.b[2]-20);
  assert(!collectLightFixture(fixtures,new THREE.BoxGeometry(),new THREE.MeshStandardMaterial()));
});

test('lights survive traffic LOD changes and follow the enlarged hull transforms',()=>{
  const scene=new THREE.Scene(),boat=createTrafficBoat('cruise');scene.add(boat);boat.position.set(120,0,-300);boat.scale.setScalar(1.18);boat.rotation.y=.4;
  const fixtures=boatLightFixtures('cruise').map(f=>({...f,parent:boat})),lights=new VisibleLights(scene,fixtures,{dynamic:true});
  const before=lights.geometry.attributes.lightStart.array.slice();
  updateTrafficDetail(boat,1000);lights.update();assert.equal(boat.userData.detail,'far');
  assert.deepEqual(lights.geometry.attributes.lightStart.array,before);assert.equal(lights.mesh.visible,true);
  assert(Math.abs(lights.geometry.attributes.lightWidth.getX(0)-fixtures[0].width*1.18)<1e-6);
  boat.position.x+=50;lights.update();assert(Math.abs(lights.geometry.attributes.lightStart.getX(0)-before[0]-50)<1e-5);
  assert.equal(lights.geometry.instanceCount,fixtures.length);assert.equal(lights.material.depthTest,true);assert.equal(lights.material.depthWrite,false);
});

test('every traffic class retains a finite light rig without adding individual point lights',()=>{
  for(const kind of['longtail','cruise','ferry','electric','fishing','tug','barge']){
    const fixtures=boatLightFixtures(kind);assert(fixtures.length>0);assert(fixtures.length<70);
    for(const fixture of fixtures){assert([...fixture.a,...fixture.b,...fixture.color,fixture.width].every(Number.isFinite));assert(fixture.width>0);}
  }
});

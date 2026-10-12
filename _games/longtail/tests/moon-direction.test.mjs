import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {moonDirectionAtLaunch} from '../src/moon-direction.mjs';
import {createNightSky,createNightWater} from '../src/night.js';

function launchCamera(aspect,heading){
 const camera=new THREE.PerspectiveCamera(62,aspect,.3,8000),x=1800,z=-3400;
 camera.position.set(x+Math.sin(heading)*23,12,z+Math.cos(heading)*23);
 camera.lookAt(x-Math.sin(heading)*30,3,z-Math.cos(heading)*30);
 return camera;
}
function screenPosition(direction,camera){camera.updateMatrixWorld();return direction.clone().multiplyScalar(4000).add(camera.position).project(camera);}

test('moon starts in the right-hand sky across launch headings and phone layouts',()=>{
 for(const aspect of[390/844,844/390,16/9])for(const heading of[-2.525262564,-3.031742896]){
  const camera=launchCamera(aspect,heading),direction=moonDirectionAtLaunch(camera),screen=screenPosition(direction,camera);
  assert(Math.abs(screen.x-.4)<1e-8&&Math.abs(screen.y-.54)<1e-8);
  assert(direction.y>0);assert(Math.abs(direction.length()-1)<1e-8);
 }
});
test('turning, boost zoom and resizing cannot drag the moon or its lighting',()=>{
 const scene=new THREE.Scene(),sky=createNightSky(scene),nightWater=createNightWater(scene,true),camera=launchCamera(390/844,-2.525262564);
 sky.setLaunchView(camera);const bearing=sky.direction.clone(),light=sky.moonlight.position.clone();
 const before=screenPosition(bearing,camera);
 camera.rotateY(.16);camera.position.add(new THREE.Vector3(400,2,-300));
 sky.update(12,camera);nightWater.update(12,camera,[],sky.direction);
 assert(Math.abs(screenPosition(sky.direction,camera).x-before.x)>.3,'moon is still pinned to the screen during a turn');
 for(const aspect of[16/9,390/844])for(const fov of[69,62]){
  camera.aspect=aspect;camera.fov=fov;camera.updateProjectionMatrix();sky.update(13,camera);
  assert.deepEqual(sky.direction,bearing);assert.deepEqual(sky.moonlight.position,light);
  assert.deepEqual(nightWater.water.material.uniforms.sunDirection.value,bearing);
 }
 camera.rotateY(Math.PI);camera.updateMatrixWorld();
 assert(bearing.clone().transformDirection(camera.matrixWorldInverse).z>0,'turning away should leave the moon behind the camera');
 // A new run may choose its own launch bearing, but ordinary frames never do.
 sky.setLaunchView(launchCamera(16/9,-3.031742896));assert(sky.direction.distanceTo(bearing)>.1);
 sky.sky.geometry.dispose();sky.sky.material.dispose();nightWater.water.geometry.dispose();nightWater.water.material.dispose();
});

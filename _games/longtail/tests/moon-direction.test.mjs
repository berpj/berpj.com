import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {moonDirectionForCamera} from '../src/moon-direction.mjs';

test('moon stays in the right-hand sky across launch headings, mobile and boost framing',()=>{
 for(const aspect of[390/844,844/390,16/9])for(const fov of[62,69])for(const heading of[0,.7,Math.PI,4.6])for(const height of[7.8,12]){
  const camera=new THREE.PerspectiveCamera(fov,aspect,.3,8000),x=1800,z=-3400;
  camera.position.set(x+Math.sin(heading)*23,height,z+Math.cos(heading)*23);
  camera.lookAt(x-Math.sin(heading)*30,3,z-Math.cos(heading)*30);
  const direction=moonDirectionForCamera(camera),screen=direction.clone().multiplyScalar(4000).add(camera.position).project(camera);
  assert(Math.abs(screen.x-.4)<1e-8&&Math.abs(screen.y-.54)<1e-8);
  assert(direction.y>0,'moon must stay above the world horizon');
  assert(Math.abs(direction.length()-1)<1e-8);
 }
});

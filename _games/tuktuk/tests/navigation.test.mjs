import test from 'node:test';
import assert from 'node:assert/strict';
import {directArrowRotation,fareNavigationTarget} from '../src/game/navigation.mjs';
import {Session} from '../src/game/rules.mjs';
const origin={x:0,z:0};
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-8,`${actual} should be ${expected}`);

test('direct navigation points ahead, right, behind and left toward the target',()=>{
  close(directArrowRotation(origin,{x:0,z:-100},0),0);
  close(directArrowRotation(origin,{x:100,z:0},0),90);
  close(Math.abs(directArrowRotation(origin,{x:0,z:100},0)),180);
  close(directArrowRotation(origin,{x:-100,z:0},0),-90);
  close(directArrowRotation(origin,{x:100,z:-100},0),45);
});

test('direction follows the actual target displacement and the vehicle heading',()=>{
  const position={x:35,z:80},target={x:135,z:80};
  close(directArrowRotation(position,target,-Math.PI/2),0);
  close(directArrowRotation(position,{x:35,z:-20},-Math.PI/2),-90);
  close(directArrowRotation(position,target,Math.PI/2),180);
  close(directArrowRotation(position,target,4*Math.PI),90);
});

test('crossing the rear bearing and heading seams takes a short turn in either direction',()=>{
  const target=degrees=>({x:Math.sin(degrees*Math.PI/180)*100,z:-Math.cos(degrees*Math.PI/180)*100});
  const before=directArrowRotation(origin,target(179),0);
  close(directArrowRotation(origin,target(-179),0,before),181);
  close(directArrowRotation(origin,target(179),0,-179),-181);
  close(directArrowRotation(origin,target(0),-179*Math.PI/180,179),181);
  let previous=0;
  for(let heading=0;heading<Math.PI*10;heading+=.05){
    const next=directArrowRotation(origin,target(0),heading,previous);
    assert.ok(Math.abs(next-previous)<3,'continuous turns cannot trigger a 360-degree CSS spin');
    previous=next;
  }
});

test('stopping exactly on a passenger or destination keeps the last direction stable',()=>{
  close(directArrowRotation(origin,origin,0,75),75);
  close(directArrowRotation(origin,{x:.001,z:0},Math.PI,75),75);
});


test('guidance starts only after accepting a customer and clears immediately on delivery',()=>{
  const session=new Session();const customer={x:20,z:5},firstDestination={x:100,z:10};
  assert.equal(fareNavigationTarget(session),null,'searching does not choose a customer');
  session.accept(customer,firstDestination,300);
  assert.equal(fareNavigationTarget(session),firstDestination,'boarding has a chosen destination');
  session.step(.7);assert.equal(session.phase,'carrying');assert.equal(fareNavigationTarget(session),firstDestination);
  assert.ok(session.deliver());assert.equal(session.phase,'unloading');assert.ok(session.fare);
  assert.equal(fareNavigationTarget(session),null,'the paid fare must not keep the arrow or route visible');
  session.step(.7);assert.equal(session.phase,'seeking');assert.equal(fareNavigationTarget(session),null);
  const anotherCustomer={x:-50,z:70},anotherDestination={x:-90,z:-20};
  session.accept(anotherCustomer,anotherDestination,500);
  assert.equal(fareNavigationTarget(session),anotherDestination,'any next customer can supply the next destination');
});

test('expired fares and completed shifts clear their destination guidance',()=>{
  const session=new Session();session.reset('180');session.accept({x:0,z:0},{x:100,z:100},400);session.step(.7);
  assert.equal(session.step(100),'fareFailed');assert.equal(fareNavigationTarget(session),null);
  session.reset('180');session.accept({x:0,z:0},{x:100,z:100},400);session.step(181);
  assert.equal(session.phase,'ended');assert.equal(fareNavigationTarget(session),null);
});

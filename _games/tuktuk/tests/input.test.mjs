import test from 'node:test';
import assert from 'node:assert/strict';
import {Controls} from '../src/game/input.js';

function setup(t,onHorn=()=>{}){
  const handlers={},pads=[];
  const globals={window:{addEventListener:(name,fn)=>handlers[name]=fn},navigator:{getGamepads:()=>pads},matchMedia:()=>({matches:false}),HTMLInputElement:class {},HTMLSelectElement:class {}};
  for(const [name,value] of Object.entries(globals)){
    const descriptor=Object.getOwnPropertyDescriptor(globalThis,name);
    Object.defineProperty(globalThis,name,{value,configurable:true,writable:true});
    t.after(()=>descriptor?Object.defineProperty(globalThis,name,descriptor):delete globalThis[name]);
  }
  return {controls:new Controls(()=>{},onHorn,()=>{}),handlers,pads};
}
test('keyboard burst is held across polls, immediately reusable, and cleared on blur',t=>{
  const {controls:c,handlers:h}=setup(t);
  for(const code of ['ShiftLeft','ShiftRight']){
    h.keydown({code,repeat:false,target:{}});
    for(let i=0;i<120;i++)assert.equal(c.poll(1/60).dash,true);
    h.keyup({code});assert.equal(c.poll(1/60).dash,false);
    h.keydown({code,repeat:false,target:{}});assert.equal(c.poll(1/60).dash,true);
    h.blur();assert.equal(c.poll(1/60).dash,false);
  }
});
test('gamepad burst remains held instead of using only the button edge',t=>{
  const {controls:c,pads}=setup(t);
  const buttons=Array.from({length:10},()=>({pressed:false,value:0}));
  pads.push({connected:true,axes:[0],buttons});buttons[2].pressed=true;
  for(let i=0;i<120;i++)assert.equal(c.poll(1/60).dash,true);
  buttons[2].pressed=false;assert.equal(c.poll(1/60).dash,false);
  buttons[2].pressed=true;assert.equal(c.poll(1/60).dash,true);
  pads.length=0;assert.equal(c.poll(1/60).dash,false);
});
test('touch burst holds and releases on up, cancel, capture loss and pause clearing',t=>{
  const {controls:c}=setup(t),handlers={};
  const pad={addEventListener(){},style:{setProperty(){}}};
  const button={dataset:{touch:'dash'},classList:{add(){},remove(){}},setPointerCapture(){},addEventListener:(name,fn)=>handlers[name]=fn};
  c.bindTouch({querySelector:()=>pad,querySelectorAll:()=>[button]});
  for(const end of ['pointerup','pointercancel','lostpointercapture','clear']){
    handlers.pointerdown({preventDefault(){},pointerId:1});
    for(let i=0;i<120;i++)assert.equal(c.poll(1/60).dash,true);
    if(end==='clear')c.clear();else handlers[end]();
    assert.equal(c.poll(1/60).dash,false);
  }
});

test('H honks once per press, can be used again, and ignores typing in settings',t=>{
  let honks=0;
  const {handlers:h}=setup(t,()=>honks++);
  h.keydown({code:'KeyH',repeat:false,target:{}});
  assert.equal(honks,1);
  for(let i=0;i<10;i++)h.keydown({code:'KeyH',repeat:true,target:{}});
  assert.equal(honks,1);
  h.keyup({code:'KeyH'});
  h.keydown({code:'KeyH',repeat:false,target:{}});
  assert.equal(honks,2);
  for(const target of [new HTMLInputElement(),new HTMLSelectElement()]){
    h.keydown({code:'KeyH',repeat:false,target});
  }
  assert.equal(honks,2);
});

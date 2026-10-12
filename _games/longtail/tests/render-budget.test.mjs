import test from 'node:test';import assert from 'node:assert/strict';
import {RenderBudget} from '../src/render-budget.mjs';
const run=(budget,seconds,fps)=>{for(let i=0;i<seconds*fps;i++)budget.update(1/fps);};
test('sustained slow rendering reduces resolution within desktop/mobile bounds',()=>{
 for(const mobile of[false,true]){const budget=new RenderBudget(2,mobile);const initial=budget.ratio;run(budget,3,30);assert.equal(budget.ratio,initial,'ignore shader warmup');run(budget,10,35);assert(budget.ratio<initial);run(budget,40,25);assert.equal(budget.ratio,budget.minimum);}
});
test('brief stalls and paused tabs do not permanently reduce resolution',()=>{
 const budget=new RenderBudget(1.5);run(budget,10,60);budget.update(2);budget.update(NaN);run(budget,8,60);assert.equal(budget.ratio,1.5);
});
test('resolution recovers slowly only with sustained frame-rate headroom',()=>{
 const budget=new RenderBudget(2);run(budget,11,35);const reduced=budget.ratio;run(budget,8,60);assert.equal(budget.ratio,reduced);run(budget,15,60);assert(budget.ratio>reduced&&budget.ratio<=reduced+.1);
});
test('retina phones preserve foreground detail even under sustained load',()=>{
 const phone=new RenderBudget(3,true);
 assert.equal(phone.ratio,1.75);
 run(phone,60,25);
 assert.equal(phone.ratio,1.25,'never upscale a sub-CSS-resolution foreground');
 assert(Math.floor(390*phone.ratio)>=487,'retain at least 487 pixels across a 390px phone');
});
test('resolution floors respect low-density displays without undersampling them',()=>{
 for(const mobile of[false,true]){
  const screen=new RenderBudget(1,mobile);run(screen,60,25);
  assert.equal(screen.ratio,1);
 }
});

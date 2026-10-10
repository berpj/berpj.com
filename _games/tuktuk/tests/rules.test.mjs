import test from 'node:test';
import assert from 'node:assert/strict';
import {Session,fareFor} from '../src/game/rules.mjs';
const origin={x:0,z:0},destination={x:500,z:0};
function carrying(mode='arcade'){const s=new Session();s.reset(mode);s.accept(origin,destination,500);s.step(.7);return s;}
test('a fare is paid exactly once and Arcade time is capped',()=>{const s=carrying();s.tip('nearMiss','vehicle-1',5);const payout=s.deliver();assert.ok(payout.payout>payout.extension);assert.equal(s.deliver(),null);assert.equal(s.deliveries,1);assert.ok(s.time<=120);});
test('fixed duration modes never receive delivery time extensions',()=>{const s=carrying('180');const before=s.time;const payout=s.deliver();assert.equal(payout.extension,0);assert.equal(s.time,before);});
test('a failed passenger forfeits pending tips without removing banked money',()=>{const s=carrying();s.earnings=250;s.tip('drift','run-1',8);s.fare.remaining=.05;assert.equal(s.step(.1),'fareFailed');assert.equal(s.earnings,250);assert.equal(s.fare,null);assert.equal(s.phase,'seeking');assert.equal(s.failed,1);});
test('the same traffic entity cannot be farmed and total tips are bounded',()=>{const s=carrying();assert.equal(s.tip('nearMiss','car',5),5);assert.equal(s.tip('nearMiss','car',5),0);for(let i=0;i<200;i++)s.tip('drift',i,8);assert.equal(s.fare.tips,s.fare.base*2);});
test('an expired shift cannot pay an unfinished fare',()=>{const s=carrying();s.time=0;assert.equal(s.deliver(),null);assert.equal(s.earnings,0);});
test('drop-off after a deadline inside the current tick cannot pay',()=>{const s=carrying();s.fare.remaining=.01;assert.equal(s.deliver(1/60),null);assert.equal(s.earnings,0);});
test('simultaneous shift and passenger expiration ends immediately',()=>{const s=carrying();s.time=.01;s.fare.remaining=.01;assert.equal(s.step(1/60),'ended');assert.equal(s.phase,'ended');});
test('recovery deducts both clocks and clears the combo',()=>{const s=carrying();s.tip('nearMiss','car',5);const a=s.time,b=s.fare.remaining;s.recover();assert.equal(s.time,a-3);assert.equal(s.fare.remaining,b-3);assert.equal(s.combo,0);});
test('fares are based on approved route length with bounded deadlines',()=>{assert.deepEqual(fareFor(500),{base:100,deadline:45});assert.equal(fareFor(0).deadline,25);assert.equal(fareFor(10000).deadline,120);});
test('free ride has no shift deadline',()=>{const s=carrying('free');s.step(1000);assert.equal(s.time,Infinity);assert.notEqual(s.phase,'ended');});

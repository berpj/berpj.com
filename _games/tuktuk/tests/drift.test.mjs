import test from 'node:test';
import assert from 'node:assert/strict';
import RAPIER from '@dimforge/rapier3d-compat';
import * as THREE from 'three';
import {Vehicle,VEHICLE_TUNING} from '../src/game/vehicle.js';
import {DriftFX} from '../src/game/driftFX.js';
await RAPIER.init();

function setup(t){
  const world=new RAPIER.World({x:0,y:-9.81,z:0});
  world.createCollider(RAPIER.ColliderDesc.cuboid(10000,.1,10000).setTranslation(0,-.1,0));
  const v=new Vehicle(world,RAPIER,new THREE.Group(),{x:0,z:0,heading:0});
  t.after(()=>world.free());
  return {v,run(seconds,input={},locked=false){
    for(let i=0;i<Math.round(seconds*60);i++){
      v.step(1/60,{steer:0,gear:1,throttle:1,...input},locked);world.step();v.sync(1/60);v.render(1);
    }
  }};
}

test('left and right drifts have visible slip beyond normal steering and recover grip on release',t=>{
  for(const steer of [-.65,.65]){
    const normal=setup(t),drift=setup(t);
    for(const s of [normal,drift])s.run(3);
    normal.run(1,{steer});drift.run(1,{steer,drift:true});
    assert.ok(Math.abs(normal.v.slipAngle)<.02);
    assert.ok(Math.abs(drift.v.slipAngle)>.3,'at least 17 degrees of actual sideways slip');
    assert.ok(Math.abs(drift.v.slipAngle)<.68,'controlled slide rather than a spin');
    assert.equal(Math.sign(drift.v.slipAngle),-Math.sign(steer));
    assert.ok(drift.v.driftIntensity>.5);assert.ok(drift.v.actualSpeed>22,'keeps useful cornering speed');
    const before=drift.v.slipAngle;drift.run(1/60,{steer});
    assert.ok(Math.abs(drift.v.slipAngle)>.5*Math.abs(before),'release should not snap instantly straight');
    drift.run(.6,{steer});
    assert.ok(Math.abs(drift.v.slipAngle)<.02);assert.equal(drift.v.driftIntensity,0);
  }
});

test('stationary, straight, reversing and boarding do not create a drift',t=>{
  const s=setup(t);
  s.run(1,{throttle:0,steer:1,drift:true});assert.equal(s.v.driftIntensity,0);
  s.run(3,{drift:true});assert.equal(s.v.driftIntensity,0);
  s.run(.8,{drift:true,steer:.7},true);assert.equal(s.v.drifting,false);assert.equal(s.v.driftIntensity,0);
  s.v.reset({x:0,z:0,heading:0});s.run(3,{gear:-1,steer:.7,drift:true});
  assert.equal(s.v.drifting,false);assert.equal(s.v.driftIntensity,0);
});

test('countersteering changes slide direction and braking stops a slide without destabilizing the chassis',t=>{
  const s=setup(t);s.run(3);s.run(1,{steer:.7,drift:true});
  assert.ok(s.v.slipAngle<-.3);
  s.run(1.3,{steer:-.7,drift:true});assert.ok(s.v.slipAngle>.3);
  s.run(.6,{steer:-.7,drift:true,brake:1,throttle:0});
  assert.ok(s.v.actualSpeed<.2);assert.equal(s.v.drifting,false);assert.equal(s.v.driftIntensity,0);
  assert.ok(s.v.position.y>.5&&s.v.position.y<.65);
});

test('sustained turbo drift respects top speed, steering restriction and reset',t=>{
  const s=setup(t);s.run(3);s.run(5,{dash:true,steer:1,drift:true});
  assert.ok(s.v.actualSpeed<=VEHICLE_TUNING.burstTopSpeed+.05);
  assert.ok(Math.abs(s.v.slipAngle)<.45);
  s.v.reset({x:100,z:100,heading:2});
  assert.equal(s.v.slipAngle,0);assert.equal(s.v.driftIntensity,0);assert.equal(s.v.drifting,false);
});

for(const mobile of [false,true])test(`${mobile?'mobile':'desktop'} tire effects stay bounded, trail both rear wheels and stop on release/recovery`,()=>{
  const scene=new THREE.Scene(),fx=new DriftFX(scene,{mobile});
  const v={position:{x:0,z:0},heading:0,actualSpeed:20,driftIntensity:0,body:{linvel:()=>({x:0,y:0,z:-20})}};
  fx.update(1/60,v);assert.equal(fx.markCount,0);assert.equal(fx.smokeCount,0);
  v.driftIntensity=1;
  for(let i=0;i<1800;i++){v.position.z-=20/60;fx.update(1/60,v);}
  assert.equal(scene.children.length,2,'only two effect draw calls');
  assert.equal(fx.markCount,fx.markCapacity);assert.ok(fx.smokeCount>0&&fx.smokeCount<=fx.particles.length);
  for(const mesh of scene.children)for(const attribute of Object.values(mesh.geometry.attributes))assert.ok(attribute.array.every(Number.isFinite));
  const positions=fx.markPositions;
  for(let i=0;i<positions.length;i+=18){
    assert.ok(Math.abs((positions[i]+positions[i+3])/2)>.5,'marks follow the two rear tires');
    assert.ok(Math.hypot(positions[i]-positions[i+6],positions[i+2]-positions[i+8])<1,'no disconnected ribbon jumps');
    assert.equal(positions[i+1],positions[i+7]);assert.ok(positions[i+1]>.05,'marks clear the asphalt');
  }
  const count=fx.nextMark;v.position.x+=200;fx.breakTrail();fx.update(1/60,v);assert.equal(fx.nextMark,count);
  v.driftIntensity=0;fx.update(.08,v);assert.equal(fx.nextMark,count);
  for(let i=0;i<100;i++)fx.update(1/60,v);assert.equal(fx.smokeCount,0);
  fx.reset();assert.equal(fx.markCount,0);assert.ok(fx.markStrengths.every(v=>v===0));assert.ok(fx.smokeAlphas.every(v=>v===0));
});

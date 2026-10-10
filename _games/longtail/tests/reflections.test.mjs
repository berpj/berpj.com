import test from 'node:test';import assert from 'node:assert/strict';
import {simplifyBoatReflections} from '../src/reflections.js';
test('reflection substitutes low-detail hulls and restores the main scene even after errors',()=>{
 const a={visible:true},b={visible:false},c={visible:false},d={visible:true};
 const traffic=[{mesh:{isLOD:true,levels:[{object:a},{object:b}]}},{mesh:{isLOD:true,levels:[{object:c},{object:d}]}},{mesh:{isGroup:true}}];
 const sentinel={};const water={onBeforeRender(value){assert.equal(this,water);assert.equal(value,sentinel);assert(!a.visible&&b.visible&&!c.visible&&d.visible);throw Error('render failed');}};
 simplifyBoatReflections(water,traffic);assert.throws(()=>water.onBeforeRender(sentinel));assert(a.visible&&!b.visible&&!c.visible&&d.visible);
});

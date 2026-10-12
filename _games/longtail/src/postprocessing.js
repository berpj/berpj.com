import {Vector2} from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {FXAAPass} from 'three/addons/postprocessing/FXAAPass.js';

export function createNightFXAA(){
  const pass=new FXAAPass();
  // Retain edge antialiasing, but avoid averaging away fine wood, wake and
  // window detail. MSAA already supplies partial coverage for geometry edges.
  pass.material.fragmentShader=pass.material.fragmentShader.replace(
    'float _SubpixelBlending = 1.0;', 'float _SubpixelBlending = 0.35;'
  );
  return pass;
}

// Post-process AA cannot recover thin geometry that missed every scene sample.
// Keep multisampling on the main HDR buffers only, not the water reflection or bloom mip chain.
export function createNightComposer(renderer){
  const composer=new EffectComposer(renderer),gl=renderer.getContext();
  const supported=gl.getInternalformatParameter(gl.RENDERBUFFER,gl.RGBA16F,gl.SAMPLES)||[];
  const budget=2;
  const samples=Math.max(0,...Array.from(supported).filter(n=>n<=budget));
  composer.renderTarget1.samples=composer.renderTarget2.samples=samples;
  return composer;
}

export function createNightBloom(width,height){
  const bloom=new UnrealBloomPass(new Vector2(width,height),.32,.36,1.1);
  // Reject invalid HDR samples before downsampling. A single NaN otherwise
  // contaminates every blur level, creating large black patches far from its source.
  // This runs inside the existing bright-pass shader, adding no render pass.
  const shader=bloom.materialHighPassFilter;
  shader.fragmentShader=`
    float finiteBloomChannel(float value){
      return value>=0.0 ? min(value,64.0) : 0.0;
    }
    ${shader.fragmentShader}`.replace(
      'vec4 texel = texture2D( tDiffuse, vUv );',
      `vec4 texel = texture2D( tDiffuse, vUv );
       texel=vec4(finiteBloomChannel(texel.r),finiteBloomChannel(texel.g),finiteBloomChannel(texel.b),1.0);`
    );
  return bloom;
}

import {Vector2} from 'three';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';

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

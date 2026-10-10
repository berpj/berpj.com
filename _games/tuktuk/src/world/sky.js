import * as THREE from 'three';
import {HDRLoader} from 'three/addons/loaders/HDRLoader.js';
import {Sky} from 'three/addons/objects/Sky.js';
import {assetUrl} from '../game/assetUrl.js';

// The photographed sun is at this equirectangular UV. Rotate both the sky and
// reflections together, then use that exact direction for the shadow light.
const sunU=.59521484375,sunV=.7666015625;
const azimuth=(sunU-.5)*Math.PI*2,elevation=(sunV-.5)*Math.PI;
export const SKY_ROTATION=azimuth-Math.atan2(-55,-95);
export const SKY_SUN_DIRECTION=new THREE.Vector3(
  Math.cos(elevation)*Math.cos(azimuth),Math.sin(elevation),Math.cos(elevation)*Math.sin(azimuth)
).applyAxisAngle(new THREE.Vector3(0,1,0),SKY_ROTATION);

function fallbackSky(){
  const sky=new Sky();sky.scale.setScalar(5000);sky.frustumCulled=false;
  const u=sky.material.uniforms;
  u.turbidity.value=3.6;u.rayleigh.value=2;u.mieCoefficient.value=.004;u.mieDirectionalG.value=.8;
  u.sunPosition.value.copy(SKY_SUN_DIRECTION).multiplyScalar(450000);
  return sky;
}

export async function createBangkokSky(scene,renderer,{mobile=false,quality='auto'}={}){
  const fallback=fallbackSky();scene.add(fallback);
  const pmrem=new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const small=mobile||quality==='low';
  const loader=new HDRLoader();
  const load=resolution=>loader.loadAsync(assetUrl(`textures/skies/tropical-clouds-${resolution}.hdr`));
  try{
    // Versioned local assets: no live imagery service or third-party runtime call.
    const texture=await load(small?'1k':'2k').catch(error=>{if(small)throw error;return load('1k');});
    texture.mapping=THREE.EquirectangularReflectionMapping;
    const environment=pmrem.fromEquirectangular(texture);
    scene.background=texture;scene.backgroundRotation.set(0,SKY_ROTATION,0);
    scene.backgroundIntensity=1;scene.backgroundBlurriness=0;
    scene.environment=environment.texture;scene.environmentRotation.set(0,SKY_ROTATION,0);
    scene.environmentIntensity=.45;
    scene.remove(fallback);fallback.geometry.dispose();fallback.material.dispose();
    return {texture,environment};
  }catch(error){
    // A missing sky must never prevent driving. Keep a sun-aligned daylight sky.
    console.warn('Photographic sky unavailable; using daylight atmosphere.',error);
    const lighting=new THREE.Scene();lighting.add(fallback.clone());
    const environment=pmrem.fromScene(lighting,.04);
    scene.environment=environment.texture;scene.environmentIntensity=.45;
    return {texture:null,environment};
  }finally{pmrem.dispose();}
}

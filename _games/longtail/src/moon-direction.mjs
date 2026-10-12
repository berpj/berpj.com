import {Vector3} from 'three';

export const MOON_DIRECTION=new Vector3(.30,.26,.918).normalize();

// Frame the moon in the right-hand sky in portrait and landscape, including
// both launch headings. Use this same world ray for the water and moonlight.
export function moonDirectionForCamera(camera,target=new Vector3()){
 camera.updateMatrixWorld();
 return target.set(.40,.54,.5).unproject(camera).sub(camera.position).normalize();
}

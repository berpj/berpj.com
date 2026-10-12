import {Vector3} from 'three';

export const MOON_DIRECTION=new Vector3(.30,.26,.918).normalize();

// Choose a world bearing once at launch. Never recalculate it while steering,
// boosting or resizing: the moon and its lighting must stay fixed in the sky.
export function moonDirectionAtLaunch(camera,target=new Vector3()){
 camera.updateMatrixWorld();
 return target.set(.40,.54,.5).unproject(camera).sub(camera.position).normalize();
}

import * as THREE from 'three';

// Small ground contact shadows survive the shaded areas under the BTS viaduct.
// One instanced draw call for the entire traffic fleet, including mobile.
export function createContactShadows(scene,traffic,vehicle){
  const canvas=document.createElement('canvas');canvas.width=64;canvas.height=64;
  const c=canvas.getContext('2d'),gradient=c.createRadialGradient(32,32,5,32,32,32);
  gradient.addColorStop(0,'rgba(12,17,21,.48)');gradient.addColorStop(.55,'rgba(12,17,21,.31)');gradient.addColorStop(1,'rgba(12,17,21,0)');
  c.fillStyle=gradient;c.fillRect(0,0,64,64);
  const texture=new THREE.CanvasTexture(canvas);
  const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
  const mesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1).rotateX(-Math.PI/2),material,traffic.cars.length+1);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;scene.add(mesh);
  const object=new THREE.Object3D();
  return {update(){
    for(let i=0;i<=traffic.cars.length;i++){
      const car=traffic.cars[i],player=i===traffic.cars.length,p=player?vehicle.renderPosition:car.mesh.position;
      object.position.set(p.x,.055,p.z);object.rotation.set(0,player?vehicle.renderHeading:car.mesh.rotation.y,0);
      object.scale.set(player?2.3:car.mesh.userData.width*1.55,1,player?3.35:car.mesh.userData.length*1.08);
      if(!player&&!car.mesh.visible)object.scale.set(0,0,0);
      object.updateMatrix();mesh.setMatrixAt(i,object.matrix);
    }
    mesh.instanceMatrix.needsUpdate=true;
  }};
}

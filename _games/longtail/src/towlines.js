import * as THREE from 'three';

export function createTowlines(scene,convoys){
  const segments=10,connections=[];
  for(const convoy of convoys){let previous=convoy.tug;for(const barge of convoy.barges){connections.push([previous,barge]);previous=barge;}}
  const positions=new Float32Array(connections.length*segments*2*3);
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));
  const ropes=new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color:0x887f66}));
  ropes.name='articulated-convoy-towlines';ropes.frustumCulled=false;scene.add(ropes);
  const start=new THREE.Vector3(),end=new THREE.Vector3();
  return {update(){let index=0;for(const [leader,follower]of connections){
    leader.mesh.updateMatrixWorld();follower.mesh.updateMatrixWorld();
    leader.mesh.localToWorld(start.fromArray(leader.mesh.userData.towPoints.stern));
    follower.mesh.localToWorld(end.fromArray(follower.mesh.userData.towPoints.bow));
    for(let j=0;j<segments;j++)for(const t of[j/segments,(j+1)/segments]){
      positions[index++]=THREE.MathUtils.lerp(start.x,end.x,t);
      positions[index++]=Math.max(.35,THREE.MathUtils.lerp(start.y,end.y,t)-Math.sin(t*Math.PI)*.65);
      positions[index++]=THREE.MathUtils.lerp(start.z,end.z,t);
    }
  }geometry.attributes.position.needsUpdate=true;}};
}

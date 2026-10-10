import baked from './roadMarkings.data.json' with {type:'json'};
import {roadMapSignature} from './roadMarkingsSignature.mjs';

export function planRoadMarkings(map){
  if(roadMapSignature(map)!==baked.mapSignature)throw new Error('Road surface data is stale. Rebuild with node tools/world/build-road-markings.mjs.');
  return baked;
}

function surfaceGeometry(THREE,groups,{y,uvScale=1,raised=false}={}){
  const positions=[],uvs=[],colors=[];const palette={red:new THREE.Color('#ad4940'),white:new THREE.Color('#ded9ca'),yellow:new THREE.Color('#dfc469')};
  const add=(a,b,c,color)=>{for(const p of [a,b,c]){positions.push(...p);uvs.push(p[0]*uvScale,p[2]*uvScale);if(color)colors.push(color.r,color.g,color.b);}};
  for(const {geometry,color}of groups)for(const polygon of geometry){
    const rings=polygon.map(r=>r.slice(0,-1).map(([x,z])=>new THREE.Vector2(x,z))),vertices=rings.flat(),tint=palette[color];
    for(const face of THREE.ShapeUtils.triangulateShape(rings[0],rings.slice(1))){let [a,b,c]=face.map(i=>vertices[i]);if((b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x)>0)[b,c]=[c,b];add([a.x,y,a.y],[b.x,y,b.y],[c.x,y,c.y],tint);}
    // Stripe end caps are internal faces. Omit them rather than draw two
    // coplanar red/white walls at every shared colour boundary.
    if(raised)for(const ring of polygon)for(let i=1;i<ring.length;i++){const [ax,az]=ring[i-1],[bx,bz]=ring[i];if(Math.hypot(bx-ax,bz-az)<.50)continue;add([ax,.015,az],[ax,y,az],[bx,y,bz],tint);add([ax,.015,az],[bx,y,bz],[bx,.015,bz],tint);}
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));if(colors.length)g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();g.computeBoundingSphere();return g;
}

export function createRoadMarkings(THREE,plan,materials){
  const group=new THREE.Group();group.name='Joined road surfaces, continuous kerbs and lane paint';
  const add=(geometry,material,name)=>{if(!geometry.attributes.position.count){geometry.dispose();return;}const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.receiveShadow=true;group.add(mesh);};
  add(surfaceGeometry(THREE,[{geometry:plan.sidewalk}],{y:.012,uvScale:.55}),materials.sidewalk,'Union sidewalk paving');
  add(surfaceGeometry(THREE,[{geometry:plan.asphalt}],{y:.033,uvScale:.38}),materials.road,'Union asphalt with clean junctions');
  const curbMaterial=new THREE.MeshStandardMaterial({color:'#ffffff',vertexColors:true,roughness:1,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
  add(surfaceGeometry(THREE,plan.curbs,{y:.115,raised:true}),curbMaterial,'Single continuous red-white kerb mesh');
  const paintMaterial=new THREE.MeshBasicMaterial({color:'#ffffff',vertexColors:true,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:false});
  add(surfaceGeometry(THREE,[{geometry:plan.white,color:'white'},{geometry:plan.yellow,color:'yellow'}],{y:.0345}),paintMaterial,'Lane and crossing paint with stable depth');
  group.userData=plan.stats;return group;
}

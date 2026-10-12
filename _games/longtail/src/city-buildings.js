import * as THREE from 'three';
import {FACADE_PROFILES} from './facade-materials.js';

// Metre-scaled walls avoid stretching a fixed number of tiny windows across
// buildings of unrelated heights. All parts feed the existing material batch.
export function addCityBuilding(batch,{x,z,width,depth,height,heading,variant,material,wall,trim,roof,glass,detail=true}){
 const profile=FACADE_PROFILES[material.userData.facade.style],floorHeight=profile.floorHeight;
 const co=Math.cos(heading),si=Math.sin(heading),base=3;
 const box=(m,lx,y,lz,w,h,d)=>batch.box(m,x+lx*co+lz*si,base+y,z-lx*si+lz*co,w,h,d,heading);
 // The four opaque facades are the walls. A nearly coincident backing box
 // loses depth precision at river distances and flickers through the windows.
 // Keep only the underside here; the existing roof closes the top.
 const underside=new THREE.PlaneGeometry(width,depth).rotateX(Math.PI/2);
 batch.add(underside,wall,x,base,z,1,1,1,heading);underside.dispose();
 const faces=[[0,depth/2,width,0],[0,-depth/2,width,Math.PI],[width/2,0,depth,Math.PI/2],[-width/2,0,depth,-Math.PI/2]];
 for(const [lx,lz,length,angle]of faces){
  const geometry=new THREE.PlaneGeometry(length,height),uv=geometry.attributes.uv;
  for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*length/(material.userData.facade.columns*profile.bayWidth)+(variant%3)/material.userData.facade.columns,uv.getY(i)*height/(material.userData.facade.rows*floorHeight));
  batch.add(geometry,material,x+lx*co+lz*si,base+height/2,z-lx*si+lz*co,1,1,1,heading+angle);geometry.dispose();
 }
 const residential=material.userData.facade.style==='condo',floors=Math.floor(height/floorHeight);
 if(detail){
  // Projecting slabs give balcony depth; broad dark rails conceal the lower
  // part of glazing instead of outlining every apartment with bright lines.
  for(let floor=1;floor<=floors;floor++){
   const y=floor*floorHeight;
   if(residential){
    box(trim,0,y,0,width+1.25,.24,depth+1.25);
    if(floor<floors)for(const [lx,lz,length,angle]of[[0,depth/2+.56,width+1.1,0],[0,-depth/2-.56,width+1.1,Math.PI],[width/2+.56,0,depth+1.1,Math.PI/2],[-width/2-.56,0,depth+1.1,-Math.PI/2]]){
     const rail=new THREE.PlaneGeometry(length,.82);
     batch.add(rail,glass,x+lx*co+lz*si,base+y+.62,z-lx*si+lz*co,1,1,1,heading+angle);rail.dispose();
    }
   }else if(floor%2===0||height<26)box(trim,0,y,0,width+.25,.20,depth+.25);
  }
  for(const sign of[-1,1]){
   // Corner columns must not form another full side wall behind the facade.
   for(const end of[-1,1])box(wall,sign*(width/2-.16),height/2,end*(depth/2-.16),.64,height,.64);
   if(residential)box(wall,sign*width*.23,height/2,depth/2+.45,.23,height,1.1);
  }
  // A recessed entry, small canopy, rooftop service room and parapets.
  box(glass,0,1.9,depth/2+.03,Math.min(width*.4,8),3.6,.13);
  box(trim,0,3.9,depth/2+.8,Math.min(width*.55,11),.3,2.1);
  box(wall,width*.15,height+1.5,-depth*.1,width*.31,3,depth*.33);
 }
 box(roof,0,height+.16,0,width+.45,.35,depth+.45);
 for(const sign of[-1,1]){
  box(trim,0,height+.6,sign*depth/2,width,.85,.28);
  box(trim,sign*width/2,height+.6,0,.28,.85,depth);
 }
}

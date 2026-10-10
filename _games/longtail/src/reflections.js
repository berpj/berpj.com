// Reflections are intentionally lower resolution. Small railings, passengers and
// engine parts cannot be resolved there, so render the shared boat silhouettes
// during Water's nested pass, then restore the exact main-camera LOD choices.
export function simplifyBoatReflections(water,traffic){
  const entries=traffic.filter(t=>t.mesh.isLOD).map(t=>({near:t.mesh.levels[0].object,far:t.mesh.levels[1].object,nearVisible:false,farVisible:false}));
  const reflect=water.onBeforeRender;
  water.onBeforeRender=function(...args){
    for(const e of entries){e.nearVisible=e.near.visible;e.farVisible=e.far.visible;e.near.visible=false;e.far.visible=true;}
    try{return reflect.apply(this,args);}finally{
      for(const e of entries){e.near.visible=e.nearVisible;e.far.visible=e.farVisible;}
    }
  };
}

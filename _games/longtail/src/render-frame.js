// A canvas resize clears its drawing buffer immediately. Apply every size/DPR
// change before drawing, including while paused, so no cleared frame is presented.
export function renderNightFrame(renderer,composer,{ratio=null,size=null,smaa,fxaa,frameMeter,frameDt=0}={}){
  if(ratio!==null){
    renderer.setPixelRatio(ratio);composer.setPixelRatio(ratio);
    if(smaa){
      if(ratio<=1.1){smaa.enabled=false;fxaa.enabled=true;}
      else if(ratio>=1.25){smaa.enabled=true;fxaa.enabled=false;}
    }
  }
  if(size){renderer.setSize(size.width,size.height);composer.setSize(size.width,size.height);}
  frameMeter?.begin();composer.render();frameMeter?.end(frameDt);
}

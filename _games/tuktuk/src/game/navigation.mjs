// Clockwise screen rotation relative to the tuk-tuk's forward direction (-Z).
// Unwrap onto the nearest turn so CSS never animates a full circle at +/-180.
export function directArrowRotation(position,target,heading,previous=0){
  const dx=target.x-position.x,dz=target.z-position.z;
  if(Math.hypot(dx,dz)<.01)return previous;
  const bearing=Math.atan2(dx,-dz)+heading;
  const delta=bearing-previous*Math.PI/180;
  return previous+Math.atan2(Math.sin(delta),Math.cos(delta))*180/Math.PI;
}

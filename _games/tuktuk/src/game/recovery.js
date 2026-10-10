export function roadRecoveryPose(map,position,heading) {
  const nearest=map.nearest(position);
  if(!nearest||nearest.distance>Math.max(3,nearest.segment.road.width/2-1.1))return null;
  const s=nearest.segment;
  const oneWay=['yes','1','true','-1'].includes(s.road.tags.oneway);
  let sign=s.road.tags.oneway==='-1'?-1:1;
  if(!oneWay&&s.dir.x*-Math.sin(heading)+s.dir.z*-Math.cos(heading)<0)sign=-1;
  const dir={x:s.dir.x*sign,z:s.dir.z*sign};
  const offset=oneWay?Math.min(2.2,s.road.width/2-2):Math.min(1.5,s.road.width/4);
  return {x:nearest.x+dir.z*offset,z:nearest.z-dir.x*offset,heading:Math.atan2(-dir.x,-dir.z)};
}

/** Deterministic fingerprint of every input used by the static road-surface bake. */
export function roadMapSignature(map){
  let a=2166136261,b=3339675911;
  const feed=text=>{for(const c of String(text)){a=Math.imul(a^c.charCodeAt(0),16777619);b=Math.imul(b^c.charCodeAt(0),2246822519);}};
  for(const s of map.segments)feed([s.id,s.ia,s.ib,s.a.x.toFixed(6),s.a.z.toFixed(6),s.b.x.toFixed(6),s.b.z.toFixed(6),s.road.width.toFixed(3),s.road.tags.highway,s.road.tags['name:en']||s.road.tags.name,s.road.tags.lanes,s.road.tags.oneway].join('|'));
  feed(map.main.map(s=>s.id).join('|'));feed(`${map.spawn.x.toFixed(6)}|${map.spawn.z.toFixed(6)}`);
  return (a>>>0).toString(16).padStart(8,'0')+(b>>>0).toString(16).padStart(8,'0');
}

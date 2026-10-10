// A compact playable crop of the unchanged OSM database, plus a scenery apron.
export const DISTRICT_BBOX = Object.freeze([100.5545,13.7255,100.5755,13.7435]);
export const SCENERY_MARGIN = 140;
export const districtHash = value => {let h=2166136261;for(const c of String(value))h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0;};

// Authored visual families respect mapped use, with variation within each family.
export function buildingAppearance(building){
  const seed=districtHash(building.id),type=building.tags.building||'',height=building.topHeight;
  const family=height>32?(type==='apartments'||type==='residential'?[2,7]:type==='hotel'?[4,7,6]:[1,8]):[0,3,4,5,6,7,9];
  const materialIndex=family[seed%family.length];
  const tint=['#fff5e5','#ffffff','#e7edcf','#d8ebde','#f7daca','#d7e5ef'][Math.floor(seed/19)%6];
  return {seed,materialIndex,tint,roof:['#a8b6aa','#c3b6a3','#ae765b','#798f92'][seed%4]};
}

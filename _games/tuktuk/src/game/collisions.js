// Mass includes a rider/driver. Rapier uses these values for both vehicles in a hit.
export const COLLISION_PROFILES = Object.freeze({
  motorcycle: {mass:230, label:'SCOOTER', pitch:420, resonance:1.2, shake:.48, particles:5},
  car: {mass:1350, label:'CAR', pitch:170, resonance:.8, shake:.8, particles:12},
  taxi: {mass:1450, label:'TAXI', pitch:170, resonance:.8, shake:.8, particles:12},
  bus: {mass:11000, label:'BUS', pitch:70, resonance:.52, shake:1, particles:18},
  wall: {mass:Infinity, label:'SOLID OBJECT', pitch:95, resonance:.35, shake:1, particles:14},
});

export function contactImpact(world,collider,playerMass=580) {
  let strongest=null;
  world.contactPairsWith(collider,other=>{
    world.contactPair(collider,other,(manifold,flipped)=>{
      const n=manifold.normal();
      // Ground support and suspension settling are not crashes.
      if(Math.abs(n.y)>.55)return;
      let impulse=0;
      for(let i=0;i<manifold.numContacts();i++)impulse+=manifold.contactImpulse(i);
      const deltaV=impulse/playerMass;
      if(deltaV<.55||strongest&&strongest.deltaV>=deltaV)return;
      const type=other.parent()?.userData?.vehicleType||'wall';
      const profile=COLLISION_PROFILES[type]||COLLISION_PROFILES.wall;
      const point=manifold.numSolverContacts()?manifold.solverContactPoint(0):collider.translation();
      const sign=flipped?-1:1;
      strongest={type,profile,deltaV,impulse,handle:other.handle,
        normal:{x:n.x*sign,y:n.y*sign,z:n.z*sign},point:{...point},
        strength:Math.min(1,deltaV/12),serious:deltaV>2.4};
    });
  });
  return strongest;
}

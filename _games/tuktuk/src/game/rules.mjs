export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
export const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export const money = n => `฿ ${Math.round(n).toLocaleString('en-US')}`;
export const clock = n => Number.isFinite(n) ? `${Math.floor(Math.max(0,n)/60).toString().padStart(2,'0')}:${Math.floor(Math.max(0,n)%60).toString().padStart(2,'0')}` : '∞';
export function fareFor(length, turns=0) {
  return { base: Math.round(40 + .12 * length), deadline: clamp(Math.ceil(10 + 1.25 * length / 18 + 2 * turns), 25, 120) };
}
export class Session {
  mode='arcade'; earnings=0; deliveries=0; failed=0; combo=0; maxCombo=0; elapsed=0; phase='seeking'; time=90;
  constructor() { this.reset('arcade'); }
  reset(mode='arcade') {
    this.mode=mode; this.phase='seeking'; this.time=mode==='free'?Infinity:mode==='arcade'?90:Number(mode)||180;
    this.earnings=0; this.deliveries=0; this.failed=0; this.fare=null; this.combo=0; this.comboAge=0; this.maxCombo=0; this.elapsed=0; this.nextId=1; this.awards=new Set();
  }
  accept(from,to,length) {
    if(this.phase!=='seeking'||this.time<=0) return null;
    const f=fareFor(length); this.fare={id:this.nextId++,from,to,length,...f,remaining:f.deadline,tips:0,events:new Set()}; this.phase='boarding'; this.animation=.65; this.combo=0; return this.fare;
  }
  tip(kind,entity,amount) {
    if(this.phase!=='carrying'||!this.fare) return 0;
    const key=`${kind}:${entity}`; if(this.fare.events.has(key)) return 0;
    this.fare.events.add(key); const multiplier=Math.min(5,1+Math.floor(this.combo/3));
    const award=Math.min(amount*multiplier, Math.max(0,this.fare.base*2-this.fare.tips));
    this.fare.tips+=award; this.combo++; this.comboAge=0; this.maxCombo=Math.max(this.maxCombo,this.combo); return award;
  }
  crash() { this.combo=0; this.comboAge=0; }
  deliver(tickOffset=0) {
    const f=this.fare;
    if(this.phase!=='carrying'||!f||f.remaining<=0||this.time<=0||f.remaining<tickOffset||this.time<tickOffset||this.awards.has(f.id)) return null;
    this.awards.add(f.id); const payout=f.base+f.tips+2*Math.floor(f.remaining);
    const extension=this.mode==='arcade'?clamp(Math.round(.55*f.deadline+.5*f.remaining),12,70):0;
    const grade=f.remaining/f.deadline>=.4?'SPEEDY':f.remaining/f.deadline>=.15?'GOOD':'JUST IN TIME';
    this.earnings+=payout; this.deliveries++; this.time=Math.min(this.mode==='arcade'?120:Infinity,this.time+extension);
    this.phase='unloading';this.animation=.6;this.combo=0;
    return {payout,extension,grade,id:f.id};
  }
  recover() { if(Number.isFinite(this.time))this.time=Math.max(0,this.time-3);if(this.fare)this.fare.remaining=Math.max(0,this.fare.remaining-3);this.crash(); }
  step(dt) {
    if(this.phase==='ended')return null;
    this.elapsed+=dt;this.time=Math.max(0,this.time-dt);this.comboAge+=dt;if(this.comboAge>4)this.combo=0;
    if(this.time<=0){this.phase='ended';return 'ended';}
    if(this.phase==='boarding'||this.phase==='unloading'){this.animation-=dt;if(this.animation<=0){if(this.phase==='boarding')this.phase='carrying';else{this.phase='seeking';this.fare=null;}}}
    else if(this.phase==='carrying'&&this.fare){this.fare.remaining=Math.max(0,this.fare.remaining-dt);if(this.fare.remaining<=0){this.failed++;this.fare=null;this.phase='seeking';this.crash();return 'fareFailed';}}
    if(this.time<=0){this.phase='ended';return 'ended';}return null;
  }
}
export function seeded(seed=731) { let s=seed>>>0; return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;}; }

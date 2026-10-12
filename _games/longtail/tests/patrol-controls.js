export function installPatrolChecks({start,state,freeze}){
 const panel=document.createElement('aside');panel.style.cssText='position:fixed;left:8px;bottom:8px;z-index:20;max-width:360px;background:#07111eec;color:white;padding:8px;font:12px system-ui';
 const button=document.createElement('button');button.textContent='Capture close patrol pass';button.style.cssText='padding:8px;background:#28465c;color:white;border:1px solid #fff6';
 const status=document.createElement('output');status.style.cssText='display:block;white-space:pre-wrap;padding-top:6px';
 panel.append(button,status);document.body.append(panel);let capture=false;
 button.onclick=()=>{start();capture=true;status.textContent='Waiting for a natural close pass…';};
 const frame=()=>{requestAnimationFrame(frame);if(!capture)return;const s=state();
  status.textContent=`${s.mode} · ${s.patrols.length} active patrols\n`+s.patrols.map(t=>`${t.pass}: ${t.distance.toFixed(0)} m · ${(t.speed*3.6).toFixed(0)} km/h`).join('\n');
  if(s.patrols.some(t=>t.forward>15&&t.forward<34&&t.distance<44)){
   capture=false;freeze();panel.hidden=true;
  }
 };requestAnimationFrame(frame);
}

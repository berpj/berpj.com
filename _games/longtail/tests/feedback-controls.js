import {RiverAudio} from '../src/audio.js';
import {makeImpactNoise,playCrashImpact,playWarningHorn} from '../src/sound-effects.js';

export function installFeedbackControls({approach,audio,crashFeedback,startHornCheck}){
 const panel=document.createElement('aside');panel.style.cssText='position:fixed;left:8px;bottom:8px;z-index:20;max-width:370px;background:#07111eec;color:white;padding:8px;font:12px system-ui;border:1px solid #fff5';
 const status=document.createElement('output');status.style.cssText='display:block;max-height:180px;overflow:auto;white-space:pre-wrap';
 let firstHorn=null,checkingAudio=false;
 function report(message){status.textContent+=message+'\n';}
 function begin(kind,boost=false,options={}){firstHorn=null;approach(kind,boost,options);}
 function button(name,fn){const b=document.createElement('button');b.textContent=name;b.style.cssText='padding:5px;background:#24384a;color:white;border:1px solid #fff4;margin:3px';b.onclick=fn;panel.append(b);}
 for(const kind of ['ferry','cruise','longtail'])button(`Approach ${kind}`,()=>{status.textContent='Approaching '+kind+'\n';begin(kind);});
 button('Boost toward ferry',()=>{status.textContent='Boosting toward ferry\n';begin('ferry',true);});
 button('Two boats ahead',()=>{status.textContent='Ferry first, cruise behind it\n';begin('ferry',true,{stacked:true});});
 button('Check H key',()=>{status.textContent='Press H to sound your boat horn.\n';startHornCheck();});
 button('Player horn mix',async()=>{status.textContent='';try{report(await checkMix(true));}catch(e){report('FAIL '+e.message);throw e;}});
 button('Audio checks',async()=>{status.textContent='';try{report(await checkAudio());}catch(e){report('FAIL '+e.message);throw e;}});
 button('Warning mix check',async()=>{status.textContent='';try{report(await checkMix());}catch(e){report('FAIL '+e.message);throw e;}});
 button('Audio lifecycle',async()=>{
  status.textContent='';checkingAudio=true;
  const music=audio.musicEnabled;audio.musicEnabled=false;audio.muted=true;
  try{
   await audio.start();audio.warningHorn('ferry',{});audio.horn();audio.impact();
   if(audio.effects.size)throw Error('muted effects were created');report('PASS mute suppresses warning and impact voices');
   audio.muted=false;audio.sync();audio.update(53,true);await new Promise(resolve=>setTimeout(resolve,450));
   if(audio.engine.gain.value<.42||audio.engine.gain.value>.44)throw Error('boost engine is not at the quieter level');
   report(`PASS boost engine ${ (20*Math.log10(audio.engine.gain.value/.95)).toFixed(1)} dB below previous level`);
   audio.warningHorn('ferry',{});audio.warningHorn('cruise',{});await Promise.resolve();
   if(audio.warningEffects.size!==1||audio.effects.size!==1)throw Error('overlapping warning voices');report('PASS only one warning voice');
   await new Promise(resolve=>setTimeout(resolve,180));
   if(audio.ambience.gain.value!==1||Math.abs(audio.musicGain.gain.value-.64)>1e-6||audio.master.gain.value<.49)throw Error('horn changed background volume');
   report('PASS music and background stay at full volume during horn');
   const playerEffect=audio.horn();if(!playerEffect)throw Error('player horn did not start');
   if(audio.horn())throw Error('rapid H taps stacked horns');report('PASS player horn responds and limits repeated taps');
   audio.impact();audio.pause(1.2);await Promise.resolve();
   if(audio.warningEffects.size||audio.effects.size!==1)throw Error('crash tail or horn cancellation incorrect');report('PASS crash keeps impact tail and stops horns');
   await audio.start();if(audio.effects.size)throw Error('retry retained impact voices');report('PASS retry clears the crash tail');
   audio.warningHorn('tug',{});audio.pause();await Promise.resolve();if(audio.effects.size||audio.warningEffects.size)throw Error('pause retained warning voices');report('PASS pause cleans up all voices');
  }catch(e){report('FAIL '+e.message);throw e;}finally{audio.pause();audio.musicEnabled=music;audio.muted=false;checkingAudio=false;}
 });
 button('Capture impact',()=>{panel.hidden=true;begin('cruise');});
 button('Capture warning',()=>{panel.querySelectorAll('button').forEach(b=>b.hidden=true);status.textContent='Full-boost warning test\n';begin('ferry',true);});
 button('Reset feedback',()=>crashFeedback.reset());
 panel.append(status);document.body.append(panel);
 const playerHorn=audio.horn.bind(audio);audio.horn=()=>{const effect=playerHorn();if(!checkingAudio)report(`Player horn: ${effect?'triggered':'ignored'}, audio ${audio.ctx?.state}, ${audio.active?'active':'inactive'}`);return effect;};
 window.addEventListener('keydown',e=>{if(e.code==='KeyH'||e.key?.toLowerCase()==='h')report(`Key received: ${e.code} / ${e.key}`);});
 const horn=audio.warningHorn.bind(audio);audio.warningHorn=(kind,warning)=>{if(!checkingAudio){firstHorn??=performance.now();report(`Warning: ${kind}, ${(warning.time??0).toFixed(2)} s before predicted contact, pan ${(warning.pan??0).toFixed(2)}`);}horn(kind,warning);};
 const impact=audio.impact.bind(audio);audio.impact=fatal=>{if(!checkingAudio){report(`Impact: ${fatal===false?'bank':'fatal'}${firstHorn===null?'':`, ${((performance.now()-firstHorn)/1000).toFixed(2)} s after first horn`}`);firstHorn=null;}impact(fatal);};
 new MutationObserver(()=>{if(document.querySelector('#results').hidden===false)report('Results: '+document.querySelector('#result-title').textContent);}).observe(document.querySelector('#results'),{attributes:true,attributeFilter:['hidden']});
 report('Ready. Approaches run real traffic, physics, warning audio and end-of-run UI.');
}

async function checkAudio(){
 const rows=[];
 for(const kind of ['cruise','tug','ferry','electric','longtail','fishing','crash','cancelled']){
  const ctx=new OfflineAudioContext(2,48000*2,48000),master=ctx.createGain();master.gain.value=.5;master.connect(ctx.destination);
  const voice=kind==='crash'?playCrashImpact(ctx,master,makeImpactNoise(ctx)):playWarningHorn(ctx,master,kind==='cancelled'?'ferry':kind,{pan:.7,distance:300});
  if(kind==='cancelled')voice.stop();
  const buffer=await ctx.startRendering(),channels=[buffer.getChannelData(0),buffer.getChannelData(1)],energy=[0,0];let peak=0,tail=0;
  for(let c=0;c<2;c++)for(let i=0;i<channels[c].length;i++){
   const sample=channels[c][i];if(!Number.isFinite(sample))throw Error(kind+' nonfinite audio');
   peak=Math.max(peak,Math.abs(sample));energy[c]+=sample*sample;if(i>48000*1.4)tail=Math.max(tail,Math.abs(sample));
  }
  if(peak>=.95||tail>1e-6)throw Error(kind+' clips or does not end');
  if(kind==='cancelled'){if(peak!==0)throw Error('cancelled warning remains audible');}
  else{if(peak<.1)throw Error(kind+' too quiet at warning range');if(kind!=='crash'&&energy[1]<energy[0]*2)throw Error(kind+' stereo direction wrong');}
  rows.push(`PASS ${kind}: peak ${peak.toFixed(3)}, tail ${tail.toFixed(3)}`);
 }
 return rows.join('\n');
}

async function checkMix(player=false){
 const sampleRate=48000,decode=new OfflineAudioContext(2,sampleRate,sampleRate),music=await decode.decodeAudioData(await (await fetch(`${import.meta.env.BASE_URL}audio/exit-the-premises.mp3`)).arrayBuffer());
 const water=decode.createBuffer(1,sampleRate*3,sampleRate),noise=water.getChannelData(0);let seed=42,v=0;
 for(let i=0;i<noise.length;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;v=(v+seed/4294967296*.12-.06)*.97;noise[i]=v;}
 async function render({horn=false,bed=false,kind='tug',distance=300,pan=0,warning=false}={}){
  const c=new OfflineAudioContext(2,sampleRate*3,sampleRate),master=c.createGain(),ambience=c.createGain();master.gain.value=.5;ambience.connect(master).connect(c.destination);
  if(bed){
   const source=c.createBufferSource(),gain=c.createGain();source.buffer=music;gain.gain.value=.64;source.connect(gain).connect(ambience);source.start(0,35);source.stop(3);
   const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1000;filter.connect(ambience);
   for(const [i,level]of [.12,.045,.025].entries()){const o=c.createOscillator(),g=c.createGain();o.type=i===0?'sawtooth':'triangle';o.frequency.value=186*(i+1);g.gain.value=level*.43;o.connect(g).connect(filter);o.start();o.stop(3);}
   const n=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();n.buffer=water;f.type='highpass';f.frequency.value=280;g.gain.value=.06+53*.009;n.connect(f).connect(g).connect(ambience);n.start();
  }
  if(horn){if(player){const a=new RiverAudio();a.ctx=c;a.master=master;a.active=true;a.horn();}else playWarningHorn(c,master,kind,{pan,distance});}
  if(warning)playWarningHorn(c,master,'tug',{pan:.85,distance:30});
  const buffer=await c.startRendering();return [buffer.getChannelData(0),buffer.getChannelData(1)];
 }
 const normal=await render({bed:true}),rows=['Real soundtrack + full-boost engine + water'];
 const rms=(data,from,to)=>{let total=0;for(let i=Math.round(sampleRate*from);i<Math.round(sampleRate*to);i++)total+=data[i]*data[i];return Math.sqrt(total/(sampleRate*(to-from)));};
 for(const [kind,distance,pan] of (player?[['player',0,0]]:[['tug',300,0],['ferry',200,0],['longtail',30,0],['cruise',30,.85],['tug',30,-.85],['fishing',30,.85]])){
  const horn=await render({horn:true,kind,distance,pan}),mix=await render({bed:true,horn:true,kind,distance,pan});
  const channel=pan>0?1:0,from=player?.04:.33,to=player?.22:.65,prominence=20*Math.log10(rms(horn[channel],from,to)/rms(normal[channel],from,to));let peak=0,backgroundError=0;
  for(let c=0;c<2;c++)for(let i=0;i<mix[c].length;i++){if(!Number.isFinite(mix[c][i]))throw Error('nonfinite mixed audio');peak=Math.max(peak,Math.abs(mix[c][i]));backgroundError=Math.max(backgroundError,Math.abs(mix[c][i]-horn[c][i]-normal[c][i]));}
  if(prominence<0||backgroundError>1e-6||peak>.95)throw Error(`mix: ${kind}, prominence ${prominence}, background error ${backgroundError}, peak ${peak}`);
  rows.push(`PASS ${kind} ${distance} m: horn +${prominence.toFixed(1)} dB, peak ${peak.toFixed(3)}; background unchanged`);
 }
 if(player){const both=await render({horn:true,bed:true,warning:true});let peak=0;for(const channel of both)for(const sample of channel)peak=Math.max(peak,Math.abs(sample));if(peak>.95)throw Error(`simultaneous horns clip: ${peak}`);rows.push(`PASS player + NPC horn together: peak ${peak.toFixed(3)}`);}
 return rows.join('\n');
}

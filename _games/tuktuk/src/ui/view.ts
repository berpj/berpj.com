import {assetUrl} from '../game/assetUrl.js';
export const icons={pause:'<svg viewBox="0 0 20 20"><path d="M6 4v12M14 4v12"/></svg>',sound:'<svg viewBox="0 0 20 20"><path d="M3 8h3l5-4v12l-5-4H3zM14 6c3 2 3 6 0 8"/></svg>',arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',pin:'<svg viewBox="0 0 20 20"><path d="M10 17s6-6 6-10a6 6 0 0 0-12 0c0 4 6 10 6 10z"/><circle cx="10" cy="7" r="2"/></svg>'};
export function mountUI(){
  const root=document.querySelector<HTMLDivElement>('#app')!;
  root.innerHTML=`
  <canvas id="game-canvas" aria-label="Bangkok Tuk Tuk driving game"></canvas>
  <div class="vignette"></div>
  <header class="topbar"><a class="wordmark" href="#" aria-label="Return to menu"><span class="brand-icon">TT</span><span>BANGKOK <b>TUK TUK</b><small>STREET ARCADE · สุขุมวิท</small></span></a><div class="top-actions"><span class="live-location"><i></i> SUKHUMVIT, BANGKOK</span><button id="sound-button" class="icon-button" aria-label="Mute sound" title="Mute sound">${icons.sound}</button><button id="recover-button" class="icon-button recover-button" aria-label="Recover to road" title="Recover to road (R)">↻</button><button id="pause-button" class="icon-button" aria-label="Pause game" title="Pause">${icons.pause}</button></div></header>
  <div id="loading" class="loading"><div class="loading-mark">TT</div><h1>Bangkok is calling.</h1><p id="loading-status">Loading Sukhumvit streets…</p><div class="loading-track"><span></span></div></div>
  <main id="menu" class="menu hidden">
    <div class="eyebrow"><span>01 / SUKHUMVIT</span><span class="edition">BROWSER EDITION</span></div>
    <h1>BANGKOK<br><em>TUK TUK.</em></h1><p class="menu-intro">Every soi is a shortcut.<br>Pick up. Drift hard. Beat the clock.</p>
    <div class="mode-label">CHOOSE YOUR SHIFT</div>
    <div class="modes" role="group" aria-label="Game mode"><button class="selected" data-mode="arcade">Arcade<small>90s + extra time</small></button><button data-mode="180">3 min<small>Quick run</small></button><button data-mode="300">5 min<small>Long shift</small></button><button data-mode="600">10 min<small>Go all out</small></button><button data-mode="free">Free ride<small>No pressure</small></button></div>
    <div class="customize"><div><span class="mode-label">YOUR RIDE</span><div class="liveries"><button data-livery="blue" class="swatch blue selected" aria-label="Blue tuk-tuk"></button><button data-livery="red" class="swatch red" aria-label="Red tuk-tuk"></button><button data-livery="green" class="swatch green" aria-label="Green tuk-tuk"></button><span id="ride-name">Sukhumvit Blue</span></div></div><button id="settings-button" class="text-button">Settings ↗</button></div>
    <button id="play-button" class="play-button"><span>START YOUR SHIFT</span>${icons.arrow}</button>
    <div class="menu-secondary"><span id="best-score">PERSONAL BEST · ฿ 0</span></div>
    <div class="control-hints"><span><kbd>WASD</kbd> DRIVE</span><span><kbd>SHIFT</kbd> BURST</span><span><kbd>SPACE</kbd> DRIFT</span><span class="gamepad-hint">GAMEPAD READY</span></div>
  </main>
  <div id="hud" class="hud hidden">
    <section class="job-panel"><div class="job-heading">${icons.pin}<span id="job-label">FIND A PASSENGER</span></div><h2 id="job-name">Your next fare awaits</h2><div class="job-details"><span id="job-distance">Stop in a yellow ring</span><span id="fare-clock" class="fare-clock hidden">00:45</span></div><div id="fare-progress" class="fare-progress"><span></span></div></section>
    <div class="shift-clock"><span>SHIFT TIME</span><strong id="shift-time">01:30</strong><div id="time-bonus"></div></div>
    <div class="earnings"><span>TOTAL EARNED</span><strong id="earnings">฿ 0</strong><small><span id="deliveries">0</span> DELIVERIES</small></div>
    <div id="nav-arrow" class="nav-arrow hidden"><svg viewBox="0 0 64 64"><path d="M32 3 59 40H42v20H22V40H5z"/></svg><span id="nav-distance"></span></div>
    <div class="mini-map"><canvas id="minimap" width="280" height="280"></canvas><div><span><i></i> SUKHUMVIT</span><b>N ↑</b></div></div>
    <div class="speedometer"><div><strong id="speed">0</strong><span>KM/H</span></div><div class="speed-line"><span id="speed-bar"></span></div><small id="gear">D <span>· READY TO BURST</span></small></div>
    <div id="combo" class="combo hidden"><span id="combo-count">3</span> COMBO <b id="combo-multiplier">×2</b></div>
    <div id="toast" class="toast"></div><div id="passenger-line" class="passenger-line"></div>
    <div id="context-hint" class="context-hint">Stop in the yellow ring to pick up a passenger.</div>
    <div class="desktop-shortcuts"><span>SHIFT <b>Burst</b></span><span>SPACE <b>Drift</b></span><span>S <b>Brake / reverse</b></span><span>R <b>Recover</b></span><span>ESC <b>Pause</b></span></div>
    <div id="touch-controls" class="touch-controls"><div id="steering-pad"><span>‹</span><i></i><span>›</span></div><div class="touch-actions"><button data-touch="drift" class="drift-button">DRIFT</button><button data-touch="dash" class="burst-button">BURST</button><button data-touch="gas" class="gas-button">GAS</button><button data-touch="brake" class="brake-button">BRAKE<small>HOLD TO REVERSE</small></button></div></div>
  </div>
  <div id="countdown" class="countdown hidden">3</div>
  <div id="dialog-backdrop" class="dialog-backdrop hidden">
    <section id="pause-dialog" class="dialog hidden"><span class="eyebrow">TAKE A BREATHER</span><h2>Shift paused.</h2><p>The streets will wait.</p><button id="resume-button" class="play-button">BACK TO BANGKOK ${icons.arrow}</button><button class="dialog-link" id="restart-button">Restart shift</button><button class="dialog-link" id="menu-button">Return to garage</button></section>
    <section id="settings-dialog" class="dialog hidden"><span class="eyebrow">MAKE IT YOURS</span><h2>Your setup.</h2><label>Graphics<select id="quality-select"><option value="auto">Auto</option><option value="high">High</option><option value="low">Performance</option></select></label><label>Music<input id="music-toggle" type="checkbox" checked></label><label>Auto throttle<input id="auto-toggle" type="checkbox"></label><label>Route guidance<input id="route-toggle" type="checkbox" checked></label><label>Camera motion<input id="motion-toggle" type="checkbox" checked></label><button class="play-button" id="settings-close">ALL SET ${icons.arrow}</button><p class="dialog-note">WASD / arrows · Hold brake to reverse<br>Q / E manual gears<br>Shift burst · Space drift · H horn · R recovery</p></section>
    <section id="results-dialog" class="dialog hidden"><span class="eyebrow">SHIFT COMPLETE</span><h2 id="result-title">Nice driving.</h2><div class="result-money" id="result-money">฿ 0</div><div class="result-stats"><span><b id="result-deliveries">0</b> fares</span><span><b id="result-combo">0</b> best combo</span></div><p id="result-note"></p><button class="play-button" id="again-button">ONE MORE SHIFT ${icons.arrow}</button><button class="dialog-link" id="results-menu">Return to garage</button></section>
  </div>
  <div id="rotate-prompt" class="rotate-prompt"><span>↻</span><h2>Turn into Bangkok.</h2><p>Rotate your phone to landscape to drive.</p></div>
  <footer class="credits"><span>REAL STREETS. ARCADE SPIRIT.</span><a href="${assetUrl('data/bangkok-sukhumvit.provenance.json')}" target="_blank">© OpenStreetMap contributors</a><button id="data-button">Data & credits</button></footer>`;
  return root;
}

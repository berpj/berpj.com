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
    <section class="menu-play" aria-label="Start a shift">
      <h1>BANGKOK<br><em>TUK TUK.</em></h1>
      <p class="menu-intro">Pick up passengers. Beat your best.</p>
      <label class="shift-select" for="mode-select"><span>YOUR SHIFT</span><select id="mode-select"><option value="arcade">Arcade · 90s + bonus time</option><option value="180">3-minute shift</option><option value="300">5-minute shift</option><option value="600">10-minute shift</option><option value="free">Free ride · no timer</option></select></label>
      <button id="play-button" class="play-button"><span>LET’S DRIVE</span>${icons.arrow}</button>
      <div class="menu-tools"><button id="settings-button" class="text-button">Settings</button><span class="menu-controls">WASD drive · Shift burst · Space drift · H horn</span><span class="menu-touch-hint">Touch controls when you drive</span></div>
    </section>
    <section class="scoreboard" aria-label="Your previous best scores">
      <div id="score-mode" class="score-mode">Arcade · Manual throttle</div>
      <h2 id="best-label">YOUR PERSONAL BEST</h2><strong id="best-score" class="best-score">฿ 0</strong>
      <p id="last-score" class="last-score">How much can you earn in one shift?</p>
      <div id="score-history"><h3>YOUR TOP 5</h3><ol id="score-list" class="score-list" aria-label="Top five scores"></ol><p id="score-empty" class="score-empty">Finish a shift to set your first record.</p></div>
      <p id="score-storage" class="score-storage">Your best shifts, saved in this browser.</p>
    </section>
  </main>
  <div id="hud" class="hud hidden">
    <section class="job-panel"><div class="job-heading">${icons.pin}<span id="job-label">FIND A PASSENGER</span></div><h2 id="job-name">Your next fare awaits</h2><div class="job-details"><span id="job-distance">Stop in a yellow ring</span><span id="fare-clock" class="fare-clock hidden">00:45</span></div><div id="fare-progress" class="fare-progress"><span></span></div></section>
    <div class="shift-clock"><span>SHIFT TIME</span><strong id="shift-time">01:30</strong><div id="time-bonus"></div></div>
    <section id="earnings-panel" class="earnings" aria-label="Shift score"><span>SHIFT SCORE</span><strong id="earnings">฿ 0</strong><div class="hud-best" id="hud-best">BEST ฿ 0</div><div class="score-progress hidden" id="score-progress"><i id="score-progress-fill"></i></div><div class="hud-score-status" id="hud-score-status">SET YOUR FIRST BEST</div><small><span id="deliveries">0</span> DELIVERIES</small></section>
    <div id="nav-arrow" class="nav-arrow hidden"><svg viewBox="0 0 64 64"><path d="M32 3 59 40H42v20H22V40H5z"/></svg><span id="nav-distance"></span></div>
    <div class="mini-map"><canvas id="minimap" width="280" height="280"></canvas><div><span><i></i> SUKHUMVIT</span><b>N ↑</b></div></div>
    <div class="speedometer"><div><strong id="speed">0</strong><span>KM/H</span></div><small id="gear">D</small></div>
    <div id="drift-indicator" class="drift-indicator hidden">SOI SLIDE<small>RELEASE DRIFT TO GRIP</small></div>
    <div id="combo" class="combo hidden"><span id="combo-count">3</span> COMBO <b id="combo-multiplier">×2</b></div>
    <div id="toast" class="toast"></div><div id="passenger-line" class="passenger-line"></div>
    <div id="context-hint" class="context-hint">Stop in the yellow ring to pick up a passenger.</div>
    <div class="desktop-shortcuts"><span>SHIFT <b>Hold to burst</b></span><span>SPACE + turn <b>Drift</b></span><span>S <b>Brake / reverse</b></span><span>H <b>Horn</b></span><span>R <b>Recover</b></span><span>ESC <b>Pause</b></span></div>
    <div id="touch-controls" class="touch-controls"><div id="steering-pad"><span>‹</span><i></i><span>›</span></div><div class="touch-actions"><button data-touch="drift" class="drift-button" aria-label="Hold drift while steering">DRIFT<small>HOLD + STEER</small></button><button data-touch="dash" class="burst-button" aria-label="Hold to burst">BURST</button><button data-touch="gas" class="gas-button">GAS</button><button data-touch="brake" class="brake-button">BRAKE<small>HOLD TO REVERSE</small></button></div></div>
  </div>
  <div id="countdown" class="countdown hidden">3</div>
  <div id="dialog-backdrop" class="dialog-backdrop hidden">
    <section id="pause-dialog" class="dialog hidden"><span class="eyebrow">TAKE A BREATHER</span><h2>Shift paused.</h2><p>The streets will wait.</p><button id="resume-button" class="play-button">BACK TO BANGKOK ${icons.arrow}</button><button class="dialog-link" id="restart-button">Restart shift</button><button class="dialog-link" id="menu-button">Back to scores</button></section>
    <section id="settings-dialog" class="dialog hidden"><span class="eyebrow">MAKE IT YOURS</span><h2>Your setup.</h2><label>Graphics<select id="quality-select"><option value="auto">Auto</option><option value="high">High</option><option value="low">Performance</option></select></label><label>Thai radio<input id="music-toggle" type="checkbox" checked></label><p class="radio-note">Traditional piphat · 24-minute live recording<br><a href="${assetUrl('credits.html#sound')}" target="_blank" rel="noopener">About the music ↗</a></p><label>Auto throttle<input id="auto-toggle" type="checkbox"></label><label>Minimap route<input id="route-toggle" type="checkbox" checked></label><label>Camera motion<input id="motion-toggle" type="checkbox" checked></label><button class="play-button" id="settings-close">ALL SET ${icons.arrow}</button><p class="dialog-note">WASD / arrows · Hold brake to reverse<br>Q / E manual gears<br>Hold Shift to burst · Space + turn to drift · H horn · R recovery</p></section>
    <section id="results-dialog" class="dialog hidden"><span class="eyebrow">SHIFT COMPLETE</span><h2 id="result-title">Nice driving.</h2><div class="result-money" id="result-money">฿ 0</div><span id="result-rank" class="result-rank"></span><div id="result-comparison" class="result-comparison"><div><span>PREVIOUS BEST</span><strong id="result-previous">฿ 0</strong></div><div><span>ALL-TIME BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="result-stats"><span><b id="result-deliveries">0</b> fares</span><span><b id="result-combo">0</b> best combo</span></div><p id="result-note"></p><button class="play-button" id="again-button">ONE MORE SHIFT ${icons.arrow}</button><button class="dialog-link" id="results-menu">Back to scores</button></section>
  </div>
  <div id="rotate-prompt" class="rotate-prompt"><span>↻</span><h2>Turn into Bangkok.</h2><p>Rotate your phone to landscape to drive.</p></div>
  <footer class="credits"><span>REAL STREETS. ARCADE SPIRIT.</span><a href="${assetUrl('data/bangkok-sukhumvit.provenance.json')}" target="_blank">© OpenStreetMap contributors</a><button id="data-button">Data & credits</button></footer>`;
  return root;
}

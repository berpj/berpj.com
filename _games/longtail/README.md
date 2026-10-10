# Longtail After Dark

A standalone browser arcade boat game for `https://berpj.com/longtail/`.

Pilot a traditional wooden long-tail through the real Chao Phraya river reach from Wat Arun to Taksin/Sathorn Bridge, near The River condominium. Night Shift offers three minutes plus delivery bonuses; Free Cruise starts at ICONSIAM and has no overall timer. Stop in any golden pier ring to board, deliver passengers to the green ring, and earn tips through near misses and stern slides. Between fares, the minimap shows all available passenger piers and the arrow is hidden. The arrow points directly to the destination during a fare.

## Build and run

```sh
npm ci
npm test
npm run dev
npm run build
```

Vite serves `/longtail/`. The build writes the static game to `../../longtail` at the repository root. Commit editable source and generated output together, then push `main` for the existing GitHub Pages deployment. To build somewhere else, set `LONGTAIL_OUT_DIR` to an absolute output directory.

No backend, API key, subscription or runtime map service. The installed dependencies are pinned to Three.js 0.180.0 and Vite 7.1.9.

## Controls

- W / up: throttle. S / down: strong brake, then reverse after a short stop.
- A D / left right: steer. Shift: unlimited boost with reduced steering. Space: stern slide.
- H: boat horn. R: recover to the channel, three-second penalty. Esc: pause.
- Touch: horizontal steering pad, throttle, brake/reverse, boost and slide buttons. Holding touch Boost or Slide also applies throttle, so two thumbs are sufficient.
- Gamepad: left stick, RT throttle, LT brake, A boost, B slide, Y horn, X recover, Start pause.

Scores use `bangkok-longtail:scores:v1` in localStorage, separate from Tuk Tuk. Only naturally completed Night Shifts save top-five scores; Free Cruise and quitting early are unranked. Storage failures do not prevent play. Visibility loss pauses the shift and its audio.

## Implementation

- `src/simulation.mjs`: fixed-step water handling, hull capsule contacts, mass-dependent impacts, fare timers, tip combos, records. Pure functions/classes tested with Node.
- `src/river.mjs`: local metre projection, centreline sampling, bank/end-cap collisions and boarding berths.
- `src/world.js`: reflective water, night atmosphere, shore blocks, piers, three bridges and authored landmark placement.
- `src/landmarks.js`: merged architectural landmark meshes.
- `src/boats.js`: curved wooden long-tail and four distinct river traffic classes.
- `src/effects.js`: pooled wake/spray particles.
- `src/audio.js`: full-length licensed music, engine/horn/water/game audio and independent music/master mute.
- `src/main.js`: keyboard/touch/gamepad, interpolated chase camera, traffic, UI, minimap and session transitions.

Reflections render at 512 px desktop / 256 px mobile, pixel ratio is capped, static geometry is merged, and traffic is reduced on mobile. Dynamic whole-scene shadows are avoided for browser performance.

## Geographic and asset scope

River centreline and widths are derived from OpenStreetMap, with source queries/raw extracts/reproduction script retained. See `public/data/README.md`. Landmarks use approximate recognisable architectural meshes, aligned behind smoothed riverbanks; they are not surveyed digital twins. The 280 m optional upstream approach width is authored, the Wat Arun to Taksin section is derived from shoreline data. Boarding points are gameplay positions, not actual navigation aids.

The intended bridge is Taksin/Sathorn, which connects to Krung Thon Buri Road beside The River; it is not Krung Thon Bridge farther north.

The music is “Exit the Premises” by Kevin MacLeod, CC BY 4.0. Full credit, source links and transcode details are visible in `public/credits.html` and `public/audio/provenance.json`. Barlow fonts are SIL OFL. Riverside shop texture is reused generated art from the existing game, with provenance bundled. All boats, other building surfaces and sound effects are original procedural work.

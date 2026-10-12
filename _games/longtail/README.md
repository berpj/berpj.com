# Longtail After Dark

A standalone browser arcade boat game for `https://berpj.com/longtail/`.

Pilot a traditional wooden long-tail through the real Chao Phraya river reach from Wat Arun to Taksin/Sathorn Bridge, near The River condominium. Night Shift offers three minutes plus delivery bonuses; Free Cruise starts alongside ICONSIAM and has no overall timer. Both modes start in the middle of the river, facing downstream, clear of the docks. Stop in any golden pier ring to board, deliver passengers to the green ring, and earn tips through near misses and stern slides. Light bumps and glancing scrapes push the boat clear without losing its passengers, fare or tips. Hard collisions end the run, including in Free Cruise; the fare in progress is lost, while completed fares remain banked. Severity uses relative closing speed across the hull and the other boat's mass, so a fast sideswipe is not automatically fatal. Between fares, the minimap shows all available passenger piers and the arrow is hidden. The arrow points directly to the destination during a fare.

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
- A D / left right: steer. Shift: unlimited boost with a much wider turning radius. Normal steering is 1.05 rad/s; boost keeps its previous 0.254 rad/s turn rate. Space: stern slide (unavailable during boost).
- H: boat horn. R: recover to the channel, three-second penalty. Esc: pause.
- Touch: horizontal steering pad, throttle, brake/reverse, boost and slide buttons. Holding touch Boost or Slide also applies throttle, so two thumbs are sufficient.
- Gamepad: left stick, RT throttle, LT brake, A boost, B slide, Y horn, X recover, Start pause.

Scores use `bangkok-longtail:scores:v1` in localStorage, separate from Tuk Tuk. Night Shifts ending at the timer or in a boat collision save top-five scores from completed fares; Free Cruise and quitting early are unranked. Storage failures do not prevent play. Visibility loss pauses the shift and its audio.

## Implementation

- `src/simulation.mjs`: fixed-step water handling, hull capsule contacts, mass-dependent impacts, fare timers, tip combos, records. Pure functions/classes tested with Node.
- `src/river.mjs`: local metre projection, centreline sampling, bank/end-cap collisions and boarding berths.
- `src/world.js`: shore blocks, piers, three bridges with moving traffic, pooled local lighting and authored landmark placement.
- `src/night.js`: camera-independent clouded night sky with a softly textured moon, multiscale river ripples, live reflections and lamp glints. Moon, directional illumination and water highlights share the same bearing. The sky projects at far depth so the horizon cannot be clipped by the camera.
- `src/riverfront.js`: restaurant terraces, Thai signage, festoon lights and instanced animated pedestrians.
- `src/fountains.js`: animated illuminated water jets at ICONSIAM.
- `src/landmarks.js`: merged architectural landmark meshes.
- `src/mapped-architecture.js`: six riverside hotels/condos with original OSM footprints, mapped condo heights and authored facade/crown details.
- `src/signs.js`: Thai-first bridge and pier enamel plates using bundled Noto Sans Thai.
- `src/render-frame.js`: applies adaptive resolution and viewport changes before drawing, preventing cleared black canvas frames.
- `src/boats.js`: curved wooden long-tail and four distinct river traffic classes.
- `src/cargo.js`: low-draw-call tugboats and covered cargo barges with towing hardware.
- `src/traffic.mjs`: denser traffic, speed following and articulated three/four-barge convoys. Every hull has its own collision capsule; tow gaps remain open.
- `src/traffic-visuals.js`: shared near models and inexpensive distant boat silhouettes.
- `src/visible-lights.js`: batched, depth-tested bulbs and light strips with analytic edge smoothing and a minimum pixel width, independent of boat detail distance.
- `src/render-budget.mjs`: gradual pixel-density adaptation with warmup and hysteresis.
- `src/reflections.js`: lower-detail boat geometry used only inside the reflection pass.
- `src/postprocessing.js`: bloom with invalid HDR samples rejected before the blur chain.
- `src/effects.js`: pooled wake/spray particles.
- `src/audio.js` / `src/sound-effects.js`: licensed music, engine/water audio, directional vessel horns and layered hull-impact sounds with independent music/master mute.
- `src/collision-warning.mjs`: hull-contact prediction, confirmed approach warnings and per-vessel/fleet horn cooldowns. Barge warnings sound from their tug.
- `src/crash-feedback.js`: brief impact freeze, dark red edge vignette and crash caption before the results, cleared on retry.
- `src/main.js`: keyboard/touch/gamepad, interpolated chase camera, traffic, UI, minimap and session transitions.

The fleet has 109 hulls on desktop and 73 on mobile, including tug-led strings of three or four cargo barges. Other boats are 18% larger, with matching collision capsules and adjusted convoy spacing; the player boat keeps its original size. Player cruise/boost caps are 34/53 m/s; ordinary traffic runs 14% faster, while loaded convoys stay below 3.2 m/s. Braking scales with the faster player boat. Boost has no screen-glow overlay.

The main HDR scene uses up to 2× MSAA when supported, including at reduced pixel density; water reflections and bloom targets remain single-sampled. SMAA runs before tone mapping on desktop, and FXAA runs after tone mapping on mobile or under sustained GPU pressure. Antialiasing stays enabled in both modes. FXAA uses reduced subpixel blending to retain fine hull, wake and window detail while continuing to smooth diagonal edges. Reflections render at 512 px desktop / 256 px mobile with mipmap filtering and boat silhouettes, with small particles and pedestrians excluded. Pixel density adapts gradually to sustained frame-rate pressure without changing traffic or physics. Mobile starts at up to 1.75x pixel density and keeps a 1.25x floor on high-density screens; desktop uses 1x to 1.5x. Neither exceeds device pixel density. Nearby objects stay sharp; atmospheric haze still fades the distant riverfront. Static geometry and repeated signs are merged; nearby boat detail is retained at 220 m desktop / 160 m mobile. Bridge light bands use narrow analytic strips outside their deck faces, with depth extrapolated across the antialiased endpoint padding to prevent self-clipping at oblique angles. Visible shore and vessel fixtures use two shared render batches and stay visible beyond the detail range, while respecting building/hull occlusion and atmospheric haze. Near-field illumination uses a fixed pool (three desktop, two mobile); secondary animations update at 24-30 Hz. Pausing stops repeated scene renders.

For local rendering measurements, open `/longtail/?stats` on the Vite dev server. The visible readout includes every reflection and postprocessing draw. It is removed from production builds.

For GPU regression checks, open `/longtail/tests/rendering.html` on the dev server. Its twelve checks execute the actual shaders, exercise wake UV roundoff and water reflectance boundaries, reproduce NaN propagation in an unprotected bloom pass, and verify that the protected pass contains it without changing normal lighting. They also compare fine-detail contrast and edge smoothing in the mobile antialiasing pass, and check distant lights at 250-2000 m, stable strip brightness during subpixel camera movement, solid occlusion and camera clipping. A black-frame regression reproduces the previous after-draw resize bug, then verifies 60 resolution/viewport changes. `/longtail/tests/architecture.html` provides landmark/sign views and a 90-frame full-scene resolution stress check. These development fixtures are not included in the production build.

## Geographic and asset scope

River centreline and widths are derived from OpenStreetMap, with source queries/raw extracts/reproduction script retained. See `public/data/README.md`. Six modern landmarks use OSM building footprints in their original geographic orientation: Millennium Hilton, The Peninsula, Royal Orchid Sheraton, Shangri-La, Magnolias Waterfront and The Residences at Mandarin Oriental. The two condo heights come from OSM; hotel heights and crown details are approximate, with their sources recorded in `public/data/riverside-buildings.json`. Landmark placement is adjusted only where necessary to clear smoothed riverbanks; models are not surveyed digital twins or photogrammetric scans. The ICONSIAM mall retains its authored terraced/gold facade with its towers now separate. Generic foreground blocks are lower around the modern waterfront to preserve the real skyline. The 280 m optional upstream approach width is authored, the Wat Arun to Taksin section is derived from shoreline data. Boarding points are gameplay positions, not actual navigation aids.

The intended bridge is Taksin/Sathorn, which connects to Krung Thon Buri Road beside The River; it is not Krung Thon Bridge farther north.

The music is “Exit the Premises” by Kevin MacLeod, CC BY 4.0. Full credit, source links and transcode details are visible in `public/credits.html` and `public/audio/provenance.json`. Barlow and Noto Sans Thai fonts are SIL OFL. Riverside shop texture is reused generated art from the existing game, with provenance bundled. All boats, other building surfaces and sound effects are original procedural work.

## Collision feedback checks

`/longtail/tests/feedback.html` provides deterministic gentle bumps, high-speed scrapes, ferry, cruise, long-tail and two-boat approaches using the actual fleet, physics, audio and result transitions. Warning horns look up to 3.8 seconds ahead with a small speed-dependent clearance margin. They respond to a confirmed approach toward a boat's bow or side; straight stern approaches and threats outside the player's forward aiming cone remain quiet except for contact less than 0.85 seconds away. One primary vessel retains priority while it remains a threat, including during its own horn cooldown. An exceptionally urgent new obstacle can replace it. Warnings repeat after 3.2 seconds, or 1.8 seconds for urgent reminders, with a 1.15-second fleet-wide gap. Quiet passing, receding, stern and stationary-player cases, priority changes and convoy sources are covered in Node tests, along with measured warning-to-impact time from normal, boosted and accelerating approaches and an avoidance manoeuvre after 0.8 seconds of reaction time. The fixture's Audio checks render all vessel profiles and impacts offline to verify finite samples, headroom, stereo direction, silence after decay and cancellation. `/longtail/tests/feedback-mobile.html` runs the same game in a 390 px phone viewport. Fixture controls are gated to development and removed from production.

Fatal collisions freeze the impact view for 850 ms with a dark red edge vignette, a CRASHED caption and a hull crack/thud/splash. Results then appear over the frozen river, retaining the damage edges. Survivable boat bumps use a softer impact sound and fading vignette scaled to the hit, with a short feedback cooldown to prevent chatter while rubbing a hull. They do not grant invulnerability against a subsequent hard collision. Bank impacts also use a fading vignette without ending the run. Reduced-motion mode keeps the edge effect static. Retry and the menu clear the effect and cancel any remaining warning/impact voices.

Warning horns use a short/long double blast with midrange harmonics for small speakers. Only one NPC warning voice can play at a time. Music, engine and water stay at their normal levels throughout the warning, with no volume ducking. The engine itself is about 7 dB quieter at full throttle and boost than before; music volume is unchanged. The feedback fixture checks the real soundtrack, full-boost engine and water mix, verifies that the background samples stay unchanged during horns, checks headroom and exercises mute, voice replacement, crash-tail, retry and pause cleanup.

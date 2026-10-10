# Bangkok Tuk Tuk

A browser arcade driving game set on real Sukhumvit street geometry around Asok and Phrom Phong. Drive a three-wheel tuk-tuk, pick up passengers, drift around Bangkok traffic and deliver fares before the clock runs out.

## Run locally

Node.js 20.19+ or 22.12+ and npm are required.

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173/tuktuk/. To play on a phone on the same network, use the printed Network URL. Phones use landscape touch controls. No API keys or account are required.

```sh
npm test
npm run build
npm run preview
```

## Controls

| Action | Keyboard | Gamepad |
| --- | --- | --- |
| Steering | A/D or left/right arrows | Left stick |
| Accelerator | W or up arrow | Right trigger |
| Brake, then reverse while held | S or down arrow | Left trigger |
| Reverse / drive | Q / E | South / east face buttons |
| Unlimited burst | Hold Shift | Hold west face button |
| Drift | Space while steering | Right shoulder |
| Horn | H | North face button |
| Look back | C | Keyboard only |
| Recover | R | Pause and restart if needed |
| Pause | Escape | Menu/start button |

Touch controls use a steering pad, Burst, Drift and Brake. Hold Burst for unlimited turbo, then release for tighter steering. Burst has no recharge or cooldown on any input device. Auto-throttle is enabled on touch devices by default and can be changed in Settings. Hold brake after stopping to engage reverse after a brief 0.12-second pause. Reverse accelerates at 8 m/s² and stays capped at 25 km/h; release brake to drive forward again. The same brake-to-reverse behavior works on keyboard and gamepad. The ↻ button or R returns the tuk-tuk to a checked position on the road.

Stop inside a yellow passenger ring to accept a fare. The arrow always points straight toward the passenger or destination, independent of the road layout. Its rotation follows the shortest turn when you steer or pass a target. The minimap shows the street route, which can be disabled with Minimap route in Settings. Stop inside the green destination ring to bank the fare. Successful deliveries extend an Arcade shift. Fixed 3, 5 and 10-minute modes and Free Ride are available. Personal bests and settings stay in local browser storage.

Vehicle, wheel and traffic poses interpolate between fixed physics ticks; the chase camera follows the interpolated pose. The tuk-tuk reaches about 120 km/h normally and 180 km/h while holding burst, with quicker acceleration. Normal steering is 50% stronger, engages at lower speeds and responds faster for a tighter turning circle. Burst reduces steering and drift response to 48% so releasing it helps with tight corners. Strong brakes keep full-speed stops under 10 m normally and 22 m from burst speed on level road before hold-to-reverse engages. Traffic cruises at about 44 km/h for buses, 47 to 68 km/h for cars and taxis, and 68 to 88 km/h for scooters, slowing for vehicles ahead. Bursts emit procedural exhaust flames and smoothly pivot the tuk-tuk around its rear axle. Physics remains stable and planar during the visual wheelie.

## Deployment

This game is maintained in `berpj.com/_games/tuktuk/` and published at https://berpj.com/tuktuk/. Run `npm ci`, `npm test`, and `npm run build` from this directory. The Vite base path and public asset resolver keep all game files under `/tuktuk/`. The homepage and cat game remain separate static pages.

## Geography and art

The checked-in OSM district contains source road/node IDs, real building footprints and BTS alignment. Widths and missing heights are estimated for game rendering. Tuk-tuk, traffic, shops, station structures and characters are authored procedural meshes. Roadside life includes walking pedestrians, street-food vendors, black cats and soi dogs. The 7-Eleven and pharmacy storefronts are authored Bangkok references placed into the game scene, not a verified inventory of businesses at those coordinates. Traffic keeps 64 desktop or 44 mobile vehicles around the player, with a mix of motorcycles, sedans, taxis and buses. Twelve generated shopfront styles add Thai massage, barbers, suit makers, pizza shops, laundries, vacant shutters, noodle kitchens, coffee shops, bakeries, florists, hardware shops and fruit stalls. New styles share one texture atlas to limit draw calls. Ten facade families mix mint and saffron shutters, terracotta tilework, rose apartments and glazed offices; roofs have varied muted colours. Individual bays have 3D frames, thresholds and varied awnings; sleeping cats rest beside selected closed shops. These fictional shop placements are not a surveyed business directory. Image-generation prompts are in `public/textures/generated-art.json` and `public/textures/shopfronts/provenance.json`. It is an arcade interpretation of the district.

The playable crop is 25% smaller than the source data extent, while preserving all 36 pickups and 15 destinations. Desktop and mobile retain the same building footprints, including a 140 m scenery apron, instead of dropping distant blocks to meet a count cap. Missing frontage gets small authored shophouses checked against roads, buildings, mapped parks, canals and BTS access. Mapped parks receive grass and culled tree cover; open paving replaces bare grey ground. The original downloaded OSM database remains unchanged.

Building footprints are clipped against the rendered road corridors with a 35 cm margin. Concave outlines and courtyard holes survive; the same corrected walls feed rendering and physics. Elevated BTS source footprints are replaced by station geometry, and the viaduct follows the midpoint between the two mapped tracks. Street furniture and shop geometry must pass complete footprint clearance checks. Widths without a source measurement use 2.9 m lanes plus 0.4 m edge allowance; this is a gameplay estimate, not a street survey.

Phrom Phong and Asok have four covered pavement entrances each, continuous stairs and landings, access bridges into a shared concourse, and four internal stairs through openings in the side platforms. Railings, structural supports, roof ribs, platform screens, fare gates and Thai/English signs complete the stations. Their authored arrangement follows the BTS [street, concourse and platform design](https://www.bts.co.th/eng/library/system-design.html), with entrances fitted to the game map rather than surveyed exit positions. Stair and support footprints are reserved against roads, buildings and street furniture; the same structures are included in cable clearance checks. Station meshes are merged by material for mobile rendering.

Traffic is physically simulated with finite masses: 230 kg scooters with riders, 1,350 kg cars, 1,450 kg taxis and 11,000 kg buses against the 580 kg tuk-tuk. A force-limited controller guides vehicles back to their lanes after contact. Impact impulse controls shake, body wobble and particles; collision sounds vary by vehicle type, with a separate solid-object profile. Gentle contacts do not trigger the heavy crash penalty. Pedestrians and animals stay on the outside sidewalks of divided carriageways, with eased walking turns, articulated limbs, distinct cat/dog anatomy and idle poses. Utility poles follow validated sidewalk paths, and every sagged wire segment is checked against building volumes; selected blocks carry dense, irregular bundles and slack loops.

Road and sidewalk junctions use merged surfaces; curb colors share a single mesh with continuous phase and no overlapping paint faces. Road geometry is precomputed from the checked-in map so polygon union does not stall game startup. Rebuild after map or width changes with `node tools/world/build-road-markings.mjs`.

Map source, license and coverage reports are in `public/data/`; reproduction tools are in `tools/world/`. Surface textures are CC0 from Poly Haven, with attribution and hashes in `public/textures/licenses.json`. Open the in-game Data & credits page for notices and a downloadable geography database.

## Implementation specifications

[Design and technical specifications](docs/bangkok-tuk-tuk/README.md) include the visual direction, full launch targets and later production gates. This local build implements the core game and a procedural Bangkok district. Physical iPhone/Android thermal validation, external fun testing and fluent Thai review still need to be completed before making the full release-quality claims in those specifications.

The prior camera application has been replaced. The game is a static client and does not use the old Python/ML services or environment credentials. The production build is written to `../../tuktuk/` for berpj.com. Commit that generated directory together with source changes; pushing `main` triggers the existing GitHub Pages deployment. Development scripts do not deploy.

Hold Space while steering at road speed to drift (or hold the mobile DRIFT button while steering). The chassis rotates across its retained momentum; releasing drift restores grip. Paired tire marks, pooled rear-tire smoke, tire squeal and a travel-biased camera show the actual slide. Effects and drift tips require real lateral slip, not just holding the button. Burst still reduces turning response.

The daylight sky uses a bundled CC0 Poly Haven HDR panorama, with natural cloud detail and a hazy horizon. The same panorama lights reflections, and the sun/shadows match its photographed sun direction. Desktop loads 2K (5.45 MB); mobile and initial Performance quality load 1K (1.44 MB). No external service is requested at runtime. A procedural daylight sky remains available if both sky files fail to load. See `public/textures/skies/provenance.json` for authors, source URLs and hashes.

The Thai radio streams a real 24-minute piphat ensemble recording by Tevaprapas (2007), licensed CC BY-SA 3.0, in place of the short synthesized music sequence. It starts on the player's Start gesture, stops while paused or in menus, and resumes its position across shifts. The radio shares the master mute control and can be disabled separately in Settings. Its bundled mono MP3 is streamed rather than decoded into a large in-memory buffer. Credits and the downloadable audio adaptation retain CC BY-SA 3.0; source and processing details are in `public/audio/provenance.json`. The performance was recorded in Uttaradit, not Bangkok.

H and the gamepad horn button play a bundled 0.62-second recorded vehicle honk (about 40 KB), with quick retrigger fades to avoid overlapping blasts. The Thai radio dips briefly underneath it, then recovers automatically. Muting silences the horn too. The sample is from Work With Sounds / Technical Museum of Slovenia (Boštjan Troha), CC BY 4.0; see `public/audio/horn-provenance.json`. A short synthesized fallback keeps the control responsive if the sample fails to load.

The start screen focuses on Play, a compact shift selector and a personal leaderboard. Color selection has been removed; the default blue tuk-tuk remains. Each timed mode keeps its five best completed shifts and its last score, separated by manual/auto throttle. Existing v1 best scores migrate without inventing missing run details. The HUD shows the previous best and the amount needed to beat it; results compare the completed shift with the old and new best. Free Ride is unranked; quitting and restarting do not create leaderboard entries. Scores use local browser storage, with in-memory fallback if saving is denied.

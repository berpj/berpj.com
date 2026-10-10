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
| Acceleration burst | Shift | West face button |
| Drift | Space while steering | Right shoulder |
| Horn | H | North face button |
| Look back | C | Keyboard only |
| Recover | R | Pause and restart if needed |
| Pause | Escape | Menu/start button |

Touch controls use a steering pad, Burst, Drift and Brake. Auto-throttle is enabled on touch devices by default and can be changed in Settings. Hold brake after stopping to reverse continuously, then release it to drive forward again. The same brake-to-reverse behavior works on keyboard and gamepad. The ↻ button or R returns the tuk-tuk to a checked position on the road.

Stop inside a yellow passenger ring to accept a fare. Follow the street route shown by the arrow and minimap. Turning route guidance off restores the direct destination arrow. Guidance also leads to the next passenger. Stop inside the green destination ring to bank the fare. Successful deliveries extend an Arcade shift. Fixed 3, 5 and 10-minute modes and Free Ride are available. Personal bests and settings stay in local browser storage.

Vehicle, wheel and traffic poses interpolate between fixed physics ticks; the chase camera follows the interpolated pose. The tuk-tuk reaches about 100 km/h normally and 140 km/h with a burst, with quicker acceleration. Braking at 100 km/h stops in about 8.9 m / 0.67 s on level road before hold-to-reverse engages. Traffic cruises at about 35 km/h for buses, 38 to 54 km/h for cars and taxis, and 54 to 70 km/h for scooters, slowing for vehicles ahead. Bursts emit procedural exhaust flames and smoothly pivot the tuk-tuk around its rear axle. Physics remains stable and planar during the visual wheelie.

## Deployment

This game is maintained in `berpj.com/_games/tuktuk/` and published at https://berpj.com/tuktuk/. Run `npm ci`, `npm test`, and `npm run build` from this directory. The Vite base path and public asset resolver keep all game files under `/tuktuk/`. The homepage and cat game remain separate static pages.

## Geography and art

The checked-in OSM district contains source road/node IDs, real building footprints and BTS alignment. Widths and missing heights are estimated for game rendering. Tuk-tuk, traffic, shops, station structures and characters are authored procedural meshes. Roadside life includes walking pedestrians, street-food vendors, black cats and soi dogs. The 7-Eleven and pharmacy storefronts are authored Bangkok references placed into the game scene, not a verified inventory of businesses at those coordinates. Traffic keeps 64 desktop or 44 mobile vehicles around the player, with a mix of motorcycles, sedans, taxis and buses. Six additional generated shopfront textures add Thai massage, barbers, suit makers, pizza shops, laundries and vacant shutters. Individual bays have 3D frames, thresholds and varied awnings; sleeping cats rest beside selected closed shops. These fictional shop placements are not a surveyed business directory. Image-generation prompts are in `public/textures/generated-art.json` and `public/textures/shopfronts/provenance.json`. It is an arcade interpretation of the district.

Building footprints are clipped against the rendered road corridors with a 35 cm margin. Concave outlines and courtyard holes survive; the same corrected walls feed rendering and physics. Elevated BTS source footprints are replaced by station geometry, and the viaduct follows the midpoint between the two mapped tracks. Street furniture and shop geometry must pass complete footprint clearance checks. Widths without a source measurement use 2.9 m lanes plus 0.4 m edge allowance; this is a gameplay estimate, not a street survey.

Phrom Phong and Asok have four covered pavement entrances each, continuous stairs and landings, access bridges into a shared concourse, and four internal stairs through openings in the side platforms. Railings, structural supports, roof ribs, platform screens, fare gates and Thai/English signs complete the stations. Their authored arrangement follows the BTS [street, concourse and platform design](https://www.bts.co.th/eng/library/system-design.html), with entrances fitted to the game map rather than surveyed exit positions. Stair and support footprints are reserved against roads, buildings and street furniture; the same structures are included in cable clearance checks. Station meshes are merged by material for mobile rendering.

Traffic is physically simulated with finite masses: 230 kg scooters with riders, 1,350 kg cars, 1,450 kg taxis and 11,000 kg buses against the 580 kg tuk-tuk. A force-limited controller guides vehicles back to their lanes after contact. Impact impulse controls shake, body wobble and particles; collision sounds vary by vehicle type, with a separate solid-object profile. Gentle contacts do not trigger the heavy crash penalty. Pedestrians and animals stay on the outside sidewalks of divided carriageways, with eased walking turns, articulated limbs, distinct cat/dog anatomy and idle poses. Utility poles follow validated sidewalk paths, and every sagged wire segment is checked against building volumes; selected blocks carry dense, irregular bundles and slack loops.

Road and sidewalk junctions use merged surfaces; curb colors share a single mesh with continuous phase and no overlapping paint faces. Road geometry is precomputed from the checked-in map so polygon union does not stall game startup. Rebuild after map or width changes with `node tools/world/build-road-markings.mjs`.

Map source, license and coverage reports are in `public/data/`; reproduction tools are in `tools/world/`. Surface textures are CC0 from Poly Haven, with attribution and hashes in `public/textures/licenses.json`. Open the in-game Data & credits page for notices and a downloadable geography database.

## Implementation specifications

[Design and technical specifications](docs/bangkok-tuk-tuk/README.md) include the visual direction, full launch targets and later production gates. This local build implements the core game and a procedural Bangkok district. Physical iPhone/Android thermal validation, external fun testing and fluent Thai review still need to be completed before making the full release-quality claims in those specifications.

The prior camera application has been replaced. The game is a static client and does not use the old Python/ML services or environment credentials. The production build is written to `../../tuktuk/` for berpj.com. Commit that generated directory together with source changes; pushing `main` triggers the existing GitHub Pages deployment. Development scripts do not deploy.

# Bangkok Tuk Tuk technical specification

Revision 1, 9 October 2026. All budgets are implementation targets pending measurement. Game rules are defined in the [game design](game-design.md).

## Technology decisions

| Layer | Selected technology | Reason and boundary |
| --- | --- | --- |
| Language and build | Strict TypeScript, Vite, npm lockfile | Direct browser integration, a small static deployment and reproducible dependency versions |
| Renderer | Three.js WebGLRenderer using WebGL2 | Mature path for the required desktop and mobile baseline; detailed control over streaming, instancing and budgets |
| Physics | Rapier 3D through WebAssembly | Collision queries, rigid bodies and raycast vehicle support; custom arcade controller owns handling |
| UI | Semantic HTML and CSS with small TypeScript controllers | Accessible menus, responsive touch layout and readable text without a second scene graph |
| Input | Pointer Events, keyboard events and Gamepad API | One normalized command stream for all platforms |
| Audio | Native Web Audio plus streamed music through HTMLAudioElement | Low-latency effects and engine layers; avoids decoding an entire soundtrack into RAM |
| Local saves | IndexedDB; tiny preference fallback in localStorage | Versioned local records and settings; no mandatory account or database service |
| Cache | Versioned service worker and Cache Storage | Repeat-load savings and optional downloaded-district play; handle eviction explicitly |
| Art | Blender, glTF 2.0 / GLB | Free modeling, rigging, animation and export; source art stays editable |
| Asset optimization | glTF Transform, Meshopt, KTX2/Basis | Compress geometry and GPU textures, build separate quality variants |
| Geography build | Osmium CLI, Python, pyosmium, Shapely, pyproj | Extract and validate map data; produce local coordinates and baked game geometry offline |
| Supplementary buildings | Overture building release, queried by bounding box with DuckDB when needed | Fill verified OSM footprint gaps; retain feature provenance and licenses |
| Testing | Vitest for rules, Playwright for browser flows, real-device profiling | Separates deterministic behavior from browser and hardware integration |
| Hosting | Static Cloudflare Pages deployment | No game server or runtime mapping bill required for launch |

Three.js is MIT-licensed and Rapier's JavaScript package is Apache-2.0. Neither requires a commercial engine subscription. Rapier supplies a raycast vehicle controller; it does not supply the desired arcade feel automatically. [Three.js license](https://github.com/mrdoob/three.js/blob/dev/LICENSE), [Rapier license](https://github.com/dimforge/rapier.js/blob/master/LICENSE), [vehicle API](https://rapier.rs/javascript3d/classes/DynamicRayCastVehicleController.html).

Use the stable toolchain available at implementation kickoff, pin exact versions and include them in the build manifest. Do not put guessed future package numbers into the spec. Vite's current Node requirements must be checked when bootstrapping. [Vite setup](https://vite.dev/guide/).

## Renderer choice and alternatives

WebGPU is an optional later optimization, not a launch dependency. Three.js currently documents WebGPURenderer as experimental despite its WebGL2 fallback, and its material/postprocessing model differs from the classic renderer. Switching renderers is not a configuration-only promise. Launch on WebGL2, profile actual scenes, and evaluate a WebGPU branch only after feature and visual parity tests. [Three.js renderer guidance](https://threejs.org/manual/pages/webgpurenderer), [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).

Babylon.js is the closest alternative: it includes broader game-engine facilities and WebGL/WebGPU support. It would be reasonable for an editor-oriented team. Three.js is selected here because this bounded game needs custom road streaming and vehicle logic either way, and the proposed stack already has a coherent rendering/physics split. This is a project choice, not a claim that Three.js is universally faster. [Babylon.js capabilities](https://www.babylonjs.com/specifications/).

Godot is a viable free native-first alternative, but its web export has its own platform and rendering constraints. We prefer direct control of mobile browser loading, audio, input and asset residency for this browser-only product. Unity or Unreal is not required. [Godot web-export constraints](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html).

Do not introduce React Three Fiber, a general ECS framework, a networked game server or an external navigation service in the first implementation unless profiling or a concrete feature establishes a need. Use small, typed systems and explicit ownership first.

## Package and module boundaries

The future package lives under `game/`, independently of the existing Python camera application. The following is a proposed layout, not files created by this specification task.

```text
game/
  src/
    app/          loading, menus, session lifecycle, pause and results
    input/        keyboard, gamepad, touch and maneuver input buffers
    simulation/   fixed clock, vehicle, traffic, passengers, fares and scoring
    rendering/    scene, camera, LOD, materials, shadows and particles
    world/        chunk registry, route graphs, colliders and spawn anchors
    audio/        engine layers, effects, voices and music
    ui/           HUD and accessible menus
    persistence/  preferences, records, migrations and downloaded-world state
  tools/world/    offline extraction, validation, compilation and reports
  content/       editable district manifest, tuning and authored overrides
  public/assets/ versioned optimized game assets and attribution
  tests/         rules, data validation, browser flows and recorded scenarios
```

Simulation owns authoritative pose, input state, clocks, bookings and score. Rendering observes those states and interpolates; it cannot award score or advance a timer. Input adapters emit the same semantic commands and assistance flag. World loading reports readiness; it cannot silently remove a physical road while the player is using it.

The runtime should expose typed events such as `fareAccepted`, `maneuverStarted`, `trickValidated`, `collisionAccepted`, `fareCompleted`, `fareFailed` and `shiftEnded`. Every scoring event carries a unique event ID, fare ID and simulation tick. There is one payout transaction per fare.

## Simulation and vehicle

Use meters, kilograms and seconds. Coordinates are right-handed, Y-up, with X east and negative Z north. Convert geographic coordinates into a local metric frame during the build; keep render and physics coordinates near the district origin.

Run authoritative physics and game rules at 60 Hz on all devices. A 30 FPS phone renders every other simulation step. Interpolate visuals between completed states. Allow at most four catch-up steps per render; if backlog persists, pause into a performance-recovery state or lower graphics, rather than silently slowing the shift clock while awarding normal scores. Start a fresh time accumulator after pause/resume.

The chassis is a dynamic rigid body with simple convex colliders, continuous collision detection where needed, and a lower center of mass. Start by evaluating Rapier's dynamic raycast vehicle controller with three wheel contacts. If its lateral grip behavior limits the required moves, implement custom suspension and tire forces using Rapier queries while keeping the same game controller interface.

The arcade layer controls steering response, lateral grip, yaw assistance, impulses, speed ceilings and roll stabilization. Physical state and visual lean are separate. Clamp the energy added by tricks. Do not teleport velocity, rotate the collision chassis through obstacles or use animation root motion to drive the vehicle.

One collider set defines blocking collision, another sensor/query layer defines near misses and pickup zones. Exclude the chassis from its own suspension queries. Use simple road slabs and static ground meshes; keep visual curb bevels out of the collision mesh unless they affect play. Never create a separate rigid body for every decorative object.

Replay files include seed, rules hash, world hash, assistance mode, input commands and periodic pose/state checkpoints. Replays are debugging aids. Do not assume exact cross-browser, cross-version physics determinism or treat an unverified client replay as secure online anti-cheat.

## Traffic and route computation

Represent traffic as a lane graph derived from road geometry and then repaired at intersections. Nodes include elevation/layer; edges include direction, width, curvature, speed class and available turns. Traffic follows left-side lanes. Routing uses A* with precomputed district connectivity and a spatial index for nearby edges.

Most traffic uses kinematic motion with collision-aware longitudinal control. Nearby collisions can briefly promote a vehicle to a dynamic body, then return it to a valid lane after recovery outside the player's immediate path. Active traffic has stable IDs for scoring. A shared seed and fixed simulation ticks govern spawning.

Target at most 24 nearby collision-active traffic vehicles on both standard desktop and mobile gameplay presets. Additional distant cars are decorative and cannot score. Reduce offscreen update frequency and visual complexity before reducing the shared nearby obstacle population.

Pathfinding and map decoding can run in workers. Keep physics on the main thread initially to avoid message latency and shared-memory deployment requirements; move it only if a measured CPU bottleneck justifies the complexity. No launch feature requires SharedArrayBuffer or cross-origin isolation.

## World data selection

| Source | Use | Cost and license | Quality decision |
| --- | --- | --- | --- |
| OpenStreetMap via Geofabrik | Road centerlines, names, junction connectivity, railways, water, footprints and selected POIs | Free download; ODbL | Primary geography; audit tags and missing links locally |
| Overture buildings | Footprints and available height/part fields | Free open data; current buildings theme is ODbL with source notices | Optional gap-fill, not a second overlapping building layer |
| Own local photos and measurements | Tuk-tuk details, shopfronts, station structures, signs and approximate clearances | No API charge; capture and art time | Preferred source for authored Bangkok detail |
| Mapillary | Optional street-level reference or specifically licensed image derivatives | Imagery under CC BY-SA; retain author and image attribution and applicable share-alike terms | Audit coverage, image license and API terms before integration |
| Poly Haven and ambientCG | Asphalt, concrete, metal, painted surfaces and small environment assets | CC0 assets | Optimize aggressively; generic material sources do not establish Bangkok architecture |
| Kenney | UI, temporary props and prototyping assets | CC0 asset pages | Useful for the handling prototype; replace visually mismatched assets before art approval |

Primary sources: [Geofabrik Thailand](https://download.geofabrik.de/asia/thailand.html), [OSM license](https://www.openstreetmap.org/copyright), [Overture buildings](https://docs.overturemaps.org/guides/buildings/), [Overture attribution](https://docs.overturemaps.org/attribution/), [Mapillary imagery license](https://help.mapillary.com/hc/en-us/articles/115001770409-CC-BY-SA-license-for-open-data), [Poly Haven](https://polyhaven.com/license), [ambientCG](https://docs.ambientcg.com/license/), [Kenney](https://kenney.nl/support).

No selected source has yet been measured for complete coverage of the proposed district. The first milestone must quantify missing footprints, road tags, bridge information and usable reference imagery before locking the playable boundary. Building-height availability is not assumed.

Google Street View and Google 3D Tiles are excluded from the asset-generation pipeline. Their standard terms restrict scraping, caching and creating content from Google Maps content, and they would introduce platform dependence. Do not feed scraped Google imagery into a reconstruction or generative model. [Google Maps Platform terms](https://cloud.google.com/maps-platform/terms).

Aerial photogrammetry, Gaussian-splat city reconstruction and citywide live streaming are not launch dependencies. The road surface and collisions must remain clean, editable and predictable.

## District authoring rules

Start with a 400 to 600 m playable Sukhumvit corridor and one connected side-street loop. Expand to the final polygon only after this slice passes handling, art and mobile performance gates. The final approximately 4 km² area is a planning envelope, not a requirement to fill every parcel with unique art.

Preserve real street names, principal bearings, recognizable intersections, BTS alignment, landmark locations and true soi connectivity. Keep geographic scale near 1:1. Adjust road width, clutter placement, pickup placement, curb collision and small corner radii for play. Record each change as an authored override rather than silently changing source data.

Required scene layers are road surface, sidewalk/curb, block massing, authored landmark, elevated infrastructure, street furniture, vegetation, signs, gameplay anchors and collision. A facade is visual art; it is not the source of traffic topology.

Treat bridge, tunnel and layer tags as topology hints, not measured clearance values. Build smooth authored height profiles and clearances. A road and a railway crossing in 2D must not become a navigable junction. Inspect every grade-separated crossing. Infer missing widths from road class and lane count, flag the inference and review important intersections.

Use a mostly level authored ground surface for the initial slice. Low-resolution elevation grids are not an adequate substitute for underpass, curb or ramp geometry. Add terrain variation only where a verified feature or gameplay requirement needs it.

## Offline world pipeline

1. Download and pin a dated Thailand OSM extract. Record URL, extract timestamp, SHA-256, license and clipping polygon. Use bounded downloads and a local cache, not live map calls during gameplay.
2. Extract the district with Osmium while preserving necessary ways and relations. Keep an outer buffer for context, route validation and clean boundary transitions. [Osmium tools](https://osmcode.org/osmium-tool/).
3. Normalize supported tags, names, units and travel modes. Resolve relations and one-way direction. Produce a report of unknown, contradictory or missing required attributes.
4. Project to WGS84/UTM zone 47N for build calculations, subtract a chosen local origin, and convert to the runtime axis convention. Preserve original source coordinates in the provenance layer.
5. Build traffic-legal and player-traversable graphs separately. Connect only valid same-level junctions; apply authored overrides with source IDs and a reason. Verify reachability before generating missions.
6. Generate road ribbons, junction polygons, sidewalks and simple road colliders. Manually author the critical junctions and elevated structures; an automated import is a starting point.
7. Merge building footprints by source priority and spatial overlap. Prefer reviewed OSM footprints, add Overture only where it fills a gap, resolve duplicates and reject footprints intersecting the carriageway. Height priority is verified measurement, explicit height, levels-derived estimate, then authored district default.
8. Place modular art and special landmarks. Keep a reserved road/sidewalk envelope; never randomly place utility poles, trees or food carts in the player corridor.
9. Validate pickup/drop-off anchors, route alternatives, boundaries and recovery points. Drive every mission route family and manually inspect every major junction.
10. Bake 128 m spatial chunks, glTF render assets, collision data, navigation graphs, LOD variants, minimap geometry, spawn anchors and a manifest. Hash all outputs for reproducible builds.

Release a data-quality report with counts of roads, intersections, disconnected components, reviewed crossings, missing attributes, inferred heights, imported/removed footprints and validated destinations. Keep real-data corrections separate from fictional game additions.

## Content contracts

| Artifact | Required fields and invariants |
| --- | --- |
| District manifest | Schema version, world hash, origin, projection, bounds, source snapshots, chunk inventory, asset hashes, graph paths, quality variants and licenses |
| Road edge | Stable ID, source IDs, directed endpoints, layer, height profile, width, lane count, access flags, speed class, collision reference and authored override references |
| Building | Source IDs, footprint, height value, height provenance, module assignment and per-source license references |
| Pickup anchor | Stable ID, position, heading, stop zone, valid destination IDs, spawn visibility constraints and safe approach path |
| Destination | Stable ID, display names, stopping polygon, road connection, landmark reference and validated recovery/exit path |
| Asset record | Asset ID, creator, source URL/file, license, modifications, download/capture date, attribution text, export hash and source-art location |
| Tuning file | Version, movement constants, recognizer windows, score rules, traffic density and accessibility presets |
| Saved record | Save schema, mode, assistance, score, seed, rules/world hashes, date and interruption/recovery flags |

Validate these schemas at build time. Runtime should reject incompatible content with a helpful retry/update message rather than partially loading a broken district.

## Rendering and asset direction

Use physically plausible materials with realistic proportions, a coherent warm daylight setup, modest ambient fill and baked ambient occlusion. Choose one directional sun. Use a small moving shadow region around the player on phones and a larger region on desktop; static structure shading can be baked. Avoid real-time global illumination, multiple shadowed local lights and full-screen ray-marched effects.

Use instancing for repeated props and building modules, merged geometry per chunk/material, frustum culling, distance LOD and texture atlases. Limit transparent foliage overdraw and avoid dozens of separate shop-window materials. Use simple cubemap reflections on paint and chrome. No live reflections are required.

Export a high, medium and low LOD for the tuk-tuk, traffic and large props. Keep skinning counts low; nearby passengers need expressive upper bodies, while distant pedestrians use reduced rigs and update rates. Display Thai text using locally bundled Noto Sans Thai and shaped browser-rendered sign textures, rather than assembling unshaped glyph sprites. [Font project and OFL](https://github.com/notofonts/thai/blob/main/OFL.txt).

Use Meshopt for geometry/animation compression and KTX2/Basis for textures. Inspect compressed signage and normals for artifacts. Select ETC1S or UASTC according to material needs and quality tier; do not assume one setting fits all textures. Cache transcoder initialization and prewarm required shaders before starting the clock. [glTF Transform tools](https://gltf-transform.dev/cli), [Khronos texture guidance](https://github.com/KhronosGroup/3D-Formats-Guidelines/blob/main/subpages/KTXArtistGuide_glTF-Transform.md).

## Initial performance budgets

These are ceilings for the art and engineering team to test, not guarantees of engine performance. Frame time is the final authority.

| Metric | Mobile standard | Desktop standard |
| --- | --- | --- |
| Reference hardware class | iPhone 13 class and Snapdragon 778G / 6 GB Android class | Apple M1 / 8 GB laptop class; separate Windows integrated-GPU check |
| Sustained rendering | 30 FPS | 60 FPS |
| Frame interval p95 after warmup | At most 36 ms | At most 20 ms |
| Internal resolution | Adaptive 0.6 to 1.0 scale, usually 720p to 900p landscape | Adaptive up to 1080p standard; higher optional |
| Pixel-ratio ceiling | 1.5, further constrained by internal pixel budget | 1.5 standard |
| Visible triangles | At most approximately 300,000 | At most approximately 800,000 |
| Draw calls including shadows | At most 180 | At most 350 |
| Resident GPU textures estimate | At most 160 MiB | At most 320 MiB |
| Resident GPU geometry estimate | At most 64 MiB | At most 128 MiB |
| JS heap target where measurable | At most 200 MiB | At most 300 MiB |
| Nearby gameplay traffic | Up to 24 | Same up to 24 |
| Visible pedestrians | Up to 12 with reduced distant animation | Up to 30; additional figures cosmetic |
| Physics plus game logic CPU | Target p95 under 5 ms per fixed step | Target p95 under 4 ms per fixed step |
| Main render preparation CPU | Target p95 under 5 ms per rendered frame | Target p95 under 4 ms per rendered frame |
| Long stalls after warmup | No repeated stalls over 100 ms | No repeated stalls over 100 ms |

Measure input-to-visible-response with filmed input/action comparisons on representative hardware: initial targets are under 120 ms on standard mobile and under 80 ms on standard desktop. This includes browser scheduling and display latency, not only the controller function's execution time. A p95 frame target alone does not establish responsive input.

Additional authoring targets: player tuk-tuk LOD0 at most approximately 25,000 triangles; LOD1 approximately 12,000; distant LOD approximately 3,000. Traffic models use approximately 2,000 to 8,000 triangles nearby and simpler distant forms. Default prop textures are 512 or 1024 square; reserve 2048 textures for assets that visibly need them.

Measure ten continuous minutes of representative play on physical phones at normal power settings, including station shadows, a busy junction, a drift, a collision and streaming. Record thermal degradation, frame-time distributions, asset residency and input behavior. Browser-reported heap values alone do not prove total memory safety; observe OS termination and context-loss behavior as well.

If mobile misses its budget, reduce texture sizes, transparent foliage, shadow distance, distant animation, postprocessing and internal resolution before changing gameplay. Quality changes must preserve important signs, route markers, vehicle silhouettes and nearby obstacles. Do not launch a phone version whose only solution is to disable the traffic game.

## Streaming and download budgets

Initial compressed playable payload target is at most 18 MB, including runtime, WASM, player, essential audio and the starting corridor. Target interactive play within 12 seconds on a measured 20 Mbps connection with 80 ms latency, including decode and shader preparation. Show actual progress and a retry path. The clock begins only when the initial play corridor and its collisions are ready.

Target the full mobile district at at most 70 MB transferred and desktop standard at at most 120 MB. These totals include shared assets and streamed audio. Individual output files should normally be under 8 MiB and always under the hosting provider's 25 MiB limit. Separate reusable art from chunk instance data to avoid downloading the same facade texture repeatedly.

Load the current chunk and surrounding chunks, prefetch along velocity and possible junction exits at least 250 m ahead, and retain collisions until the player and relevant traffic have cleared them. Graphs and simple road safety geometry should load before detailed facades. A visible facade may simplify while loading; a road cannot disappear.

If a required road section cannot be made ready in time, pause with a reconnect/loading state before entry, preserving score and clocks. Avoid invisible barriers and falling through unloaded ground. During a run, never atomically switch to a new content version. Activate service-worker updates at the menu.

Downloaded play is optional and explicitly initiated. Show estimated download size and completion state. Cache eviction and quota errors are normal conditions, so do not promise permanent offline availability. [Browser storage limits and eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Browser and mobile behavior

Launch test matrix: current and previous supported releases of Chrome, Edge, Firefox and Safari on desktop; current and previous supported iOS Safari and Android Chrome. Feature-detect WebGL2 and WASM, then show a clear unsupported-device page if necessary. Embedded social browsers are best-effort, with an Open in browser path.

Use Pointer Events with pointer capture for independent controls. Handle `pointercancel`, visibility changes, orientation changes and navigation gestures. Use safe-area padding and dynamic viewport units with a fallback. Menu focus, keyboard activation and touch targets must remain usable at 200% UI scale. [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).

Create/resume the audio context from the user's Play gesture, handle suspension and resume, and keep game clocks synchronized with the pause state. Silence must not prevent play. Test iOS interruption by lock screen, calls and app switching. [Web Audio practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices).

Provide separate voice/music/effects controls, reduced camera motion, scalable HUD, color-plus-shape fare markers and subtitles. Do not require motion sensors, vibration, orientation lock, pointer lock, fullscreen, a controller or installation to complete a run.

## Persistence and service boundary

Launch stores settings and personal bests locally. Save after completed fares and at results, with schema migration and recoverable errors. An interrupted run can resume only from a coherent checkpoint marked as resumed; it cannot be submitted to a future competitive board without separate validation.

No login, payment, player geolocation, live traffic, runtime AI, remote speech synthesis or online leaderboard is required. Offline/local scores are user-editable and are not presented as tamper-proof. A future shared leaderboard requires a separate server design, abuse controls and cost review.

For static hosting, Cloudflare currently documents free unlimited static asset requests, a 25 MiB per-file cap, 20,000 files on the free plan and 500 builds per month. Functions are a different billed/quota-bearing product and are not needed here. Recheck the terms at deployment. [Static pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/).

## Attribution and data distribution

Show OpenStreetMap contributor attribution and a license link in a clearly accessible credits/data screen. Preserve source notices for every imported dataset and asset. Keep source geography, derived geography, independently authored art and game code separable in the repository and build manifest.

Plan to publish the distributed OSM/Overture-derived game geography database, including applicable map modifications, under ODbL with an accessible download and notices. Treat a recoverable graph/footprint dataset as a database; do not claim that renaming it to a game asset removes obligations. Produced visual works and the surrounding program have different considerations. [OSM licensing FAQ](https://osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ), [Produced Work guidance](https://osmfoundation.org/wiki/Licence/Community_Guidelines/Produced_Work_-_Guideline).

Mapillary images or adapted textures require asset-specific CC BY-SA handling. The lowest-complexity path is owned reference capture and original facades. An unknown-license model or image is not approved just because it can be downloaded for free. Store a license manifest beside final assets.

## Verification

| Area | Required evidence |
| --- | --- |
| Clocks and scoring | Fixed-step tests for expiration boundaries, pause/resume, exactly-once payment, tip caps and failure forfeiture |
| Skill inputs | Window-boundary cases, 30/60/120 FPS render schedules, held-button rejection, input precedence and assisted/expert parity of force limits |
| Vehicle behavior | Recorded straight-line acceleration, braking, slalom, drift recovery, narrow turn, ramp and collision scenarios |
| Geography | All approved pickup/destination pairs reachable; no cross-layer false junction; no out-of-bounds destination; no colliders missing at chunk seams |
| Traffic | No spawn in the forbidden player corridor, stable scoring IDs, bounded deadlock recovery and identical nearby gameplay population across quality presets |
| Browser | Cold load, failed fetch/retry, mute, pause, context loss/recovery, gamepad disconnect, touch cancellation, rotation, background/resume and save failure |
| Performance | Physical desktop and mobile runs meeting the measured frame-time and memory targets; developer emulation is insufficient |
| Presentation | Screenshot review at matched reference viewpoints and Thai-language/local review of the district |

Development overlays should show road layers, lane arrows, collider edges, chunk residency, pickup polygons, recovery anchors, maneuver windows and frame timing. They are diagnostic tools, not shipping HUD elements.

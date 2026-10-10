# Bangkok Tuk Tuk production plan

Revision 1, 9 October 2026. This plan delivers the [game design](game-design.md) under the [technical constraints](technical-spec.md). It authorizes no purchases or deployments.

## Cost conclusion

No paid engine, map service, AI subscription, hosted database or game server is necessary for the specified launch. A zero-cash build is possible when the team supplies its own labor and already has access to development and test hardware. High-quality art, audio and playtesting still require real work.

| Requirement | Free path | When money might be useful or necessary |
| --- | --- | --- |
| Game engine and build tools | Three.js, Rapier, TypeScript and Vite | No paid replacement required |
| Geographic data | OSM download, optional Overture infill | No paid map API required |
| Modeling and animation | Blender and original assets | A purchased or commissioned tuk-tuk/character asset may save time if the team cannot meet the art bar |
| Generic materials | CC0 assets from Poly Haven and ambientCG | Optional specialized art pack after asset review |
| Thai streets and signage | Own phone photos, original artwork, local review | Travel, capture help or an artist if existing access is insufficient |
| Sound effects | Own recordings, synthesized effects or individually verified CC0 files | A clean engine recording or voice session if the available audio fails quality review |
| Music | Original production using existing/free tools, or a specifically licensed free track | Optional commissioned/licensed tracks; never assume the reference game's songs are included |
| Fonts | Noto Sans Thai with its OFL notice | No paid font required |
| Hosting | Static Cloudflare Pages and its provided subdomain | A custom domain is optional; additional services need a new cost decision |
| Testing | Existing or borrowed iPhone, Android phone, desktop browsers and gamepad | Device purchase/rental if representative physical devices cannot be borrowed |
| Online services | Local records, local settings and static delivery | A server becomes a separate requirement only if shared rankings, accounts or multiplayer are added |

The underlying licenses and provider limits are linked in the [technical specification](technical-spec.md). The current Cloudflare static-asset pricing supports a free initial hosting plan, subject to provider terms and limits; this is not a promise about future pricing. [Cloudflare pricing](https://developers.cloudflare.com/pages/functions/pricing/).

No asset shopping is necessary for the handling prototype. If spending becomes useful, propose an exact asset or commission, show the license, demonstrate the quality gap it fills, and give the full price before purchase. Do not open metered map, AI or database accounts merely to make a prototype run.

## Work that cannot be skipped

The visual target requires a convincing tuk-tuk hero asset, coherent Bangkok streets, legible Thai signs, lively passengers and good sound. Map extrusion alone will not meet it. A free generic vehicle pack is acceptable for early mechanics but is not a final Thai tuk-tuk.

The minimum team capabilities are browser game programming, vehicle/gameplay tuning, Blender modeling and optimization, basic animation, sound editing, and fluent Thai/Bangkok review. One person can cover multiple roles. If the team lacks art production, commissioning a focused hero vehicle and street kit is the most useful potential expense.

Access to a physical iPhone and a representative Android phone is necessary to validate the launch promise. Desktop device emulation can validate layout but cannot establish thermal performance, iOS audio recovery or reliable multitouch.

## Art inventory

| Asset group | Initial launch inventory | Acceptance requirement |
| --- | --- | --- |
| Player tuk-tuk | One finished chassis, three liveries, three LODs | Correct Thai silhouette, three wheels, open passenger bench, working steering/wheels, readable rear view |
| Characters | One driver rig and eight passenger variants using shared rigs | Seated/boarding/exiting/leaning/bracing/cheering/annoyed states, no obvious clipping at normal camera distances |
| Traffic | At least six silhouettes with reusable liveries | Recognizable Bangkok mix and stable simplified colliders |
| Shop kit | Approximately 12 facade modules, 20 sign variants and six awning variants | Cohesive scale, locally plausible frontage, repeated modules not obvious along the main play corridor |
| Infrastructure | BTS pillars, guideway, station/stairs/footbridge modules; road, median and sidewalk kit | Correct relationships to lanes and pedestrians, reviewed underpass clearances |
| Landmarks | At least three distinctive station/landmark assemblies in the district | Recognizable at normal driving speed; exact set follows survey and district boundaries |
| Street props | Approximately 20 reusable items | Food carts, poles/cables, bins, planters, bollards and lamps placed with purpose |
| Vegetation | Approximately five optimized species/shapes | Adequate shade and street character without heavy transparent overdraw |
| Audio | Engine/load loops, horn, skid, impacts, ambience, UI cues, reactions and at least two music loops | No clipping, plausible tuk-tuk character, no constant repetition, clear priority during countdown |

Inventory counts are production targets, not requirements to model every item from scratch. Reuse suitable licensed work, and eliminate assets that do not contribute to the playable corridor. Keep final assets editable and record provenance.

## Milestones and exit gates

Each milestone produces a browser build for both desktop and phones, an evidence note, and a short playable review. Passing a feature checklist does not replace the playtest gates.

### M0 Data and platform audit

Create a small static shell, verify WebGL2/WASM/audio/touch on the reference devices, and obtain a pinned district extract. Inventory map completeness and identify a connected 400 to 600 m corridor with one side loop. Check the chosen free asset sources and create the asset-license register.

Exit when the corridor's roads, crossings and destination anchors are understood; the district has a credible expansion boundary; the static build runs on physical iOS and Android; and there are no hidden API dependencies. Deliver the coverage report and a measured empty-scene baseline.

### M1 Driving and touch prototype

Use simple road shapes and a temporary tuk-tuk. Implement fixed-step driving, bursts, chain timing, drifts, fast stops, reverse moves, camera, collisions, recovery, keyboard, gamepad and two-thumb controls. Add engine and skid feedback early.

Exit when driving works on every input family, burst/drift/stop behavior is repeatable, and three testers can enjoy a short driving session before scenery is added. Capture acceleration, stopping and slalom evidence. Do not expand the city to hide unsatisfying handling.

### M2 Complete arcade loop

Implement passengers, five fare categories, both clocks, success/failure, navigation, scoring, combos, local records, replay/debug capture, pause/resume and menus. Build at least five useful route choices on the test loop. Remove the mockup's consumable boost gauge.

Exit when a full shift can be started, played, ended and restarted without developer intervention on a phone. Verify exactly-once payouts, timer boundaries and anti-farming rules. Repeated deliveries must remain more profitable than exploits.

### M3 Polished Bangkok slice

Replace temporary art along the first corridor with the finished tuk-tuk, passengers, BTS modules, shopfronts, appropriate vehicles, signs, audio and lighting. Introduce actual chunk loading, compression and LODs. Complete a mobile-specific HUD review.

Exit when the scene reads as Bangkok with the title hidden, matches the agreed mockup direction at comparable viewpoints, and sustains the mobile/desktop budgets for ten minutes. A screenshot by itself cannot pass this milestone.

### M4 District and content completion

Expand to the audited approximately 4 km² polygon. Add at least 30 pickup anchors, 15 destinations, traffic routes, diverse passenger pairs, three liveries and all launch modes. Author useful short routes and deliberate shortcuts without inventing real-world connectivity.

Exit when all destination pairs are reachable, every major junction is reviewed, the final data/asset manifests are complete, and every launch mode works on mobile. Check that no particular fare pair dominates the scoring economy.

### M5 Playtest and release readiness

Run the external playtest described in the game design, tune the economy and handling, review Thai language, profile physical devices, and test slow networks, interruption, storage failure and browser compatibility. Finalize credits, downloadable map-data notices and cache/update behavior.

Exit when fun, art, performance and reliability gates pass together. Prepare a static release artifact and deployment instructions. Public deployment occurs only when separately requested.

## Planning range

As an initial human-production estimate, allow roughly 3 to 5 months for an experienced small team with game engineering plus ongoing art/audio help. A mostly solo effort creating its own art can take substantially longer. This is not a vendor quote, a commitment or a claim about autonomous-agent delivery speed.

The first meaningful decision point is the driving prototype, followed by one polished corridor. Re-estimate after M1 and M3 using measured throughput. Map size should be reduced before sacrificing touch controls, frame pacing, vehicle feel or Bangkok identity.

## Release acceptance matrix

| Category | Required evidence |
| --- | --- |
| Mechanics | Every specified skill move, both timers, pickup/drop-off, pending tips, combos, grades and failure rules implemented |
| Input | Keyboard, gamepad, Assisted Touch and manual-throttle touch can complete a full shift; touch has no lost/stuck-input defects |
| Mobile parity | Same fare rules, nearby traffic and physics limits; all content accessible without keyboard or controller |
| Art | Approved comparison captures, consistent material/lighting style, correct tuk-tuk silhouette, locally reviewed Thai signs |
| Bangkok | Real street topology and landmark placements within the chosen district, documented gameplay edits, local recognition gate passed |
| Performance | Ten-minute physical-device captures meet sustained frame targets and show no progressive memory growth or repeated severe stalls |
| Network | Start payload and district budgets measured, retry works, incomplete chunks cannot create missing-road hazards |
| Lifecycle | App switching, orientation, lock screen, audio interruption, gamepad loss and graphics context loss produce recoverable states |
| Scoring | No duplicated payment, pause-time gain, repeated near-miss farming, stationary drift farming or recovery shortcut exploit |
| Fun | External playtest thresholds met; weak results trigger another tuning pass |
| Distribution | All assets have usable licenses; OSM/Overture obligations fulfilled; no unapproved metered services |

## Main risks and responses

| Risk | Early evidence | Response |
| --- | --- | --- |
| Generic taxi simulator instead of arcade fun | Testers do not use or enjoy skill moves | Improve controller, camera, audio and input feedback before more content |
| Scene looks like a generic city | Bangkok reviewers cannot recognize it | Invest in tuk-tuk, BTS, signage, local vehicle mix and facade rhythm |
| Mobile overheating or memory pressure | Ten-minute physical runs degrade or crash | Lower overdraw, shadows, resolution and residency; keep core gameplay intact |
| Imported roads are not drivable | Junction seams, floating roads, false bridge links | Author critical geometry and crossings; shrink the first polygon if needed |
| Repeated facade art looks cheap | Main routes expose obvious module repetition | Add targeted variants and authored landmark sections, not uniform detail everywhere |
| Good scores come from exploits | One repeated move or fare dominates | Use event IDs, progress constraints, route cooldowns and scored-run analysis |
| Free assets do not match the visual bar | Silhouettes/materials look inconsistent | Rework in Blender or propose one narrowly scoped purchase/commission |
| Large download hurts first play | Measured cold start exceeds the budget | Separate starting corridor, stream music/art and compress assets before adding services |

## Inputs needed for implementation

No additional paid service is required to begin. The implementation team needs access to representative desktop/iOS/Android hardware, permission to use chosen reference photos and recordings, and a way to obtain local Thai/Bangkok review.

The remaining technical discoveries belong to M0: exact district boundary, actual map completeness, available height information, suitable tuk-tuk source art, reference-device frame budgets and the right facade kit. They do not block building the handling test course.

The current spec is the launch baseline. Adding online rankings, a citywide map, licensed real-world branding, paid music or multiplayer must produce an explicit scope and cost amendment rather than silently expanding the free static game.

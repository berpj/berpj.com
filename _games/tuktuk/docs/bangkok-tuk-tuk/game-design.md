# Bangkok Tuk Tuk game design

Revision 1, 9 October 2026. Product and technical boundaries are in the [overview](README.md).

## Experience and reference

Deliver the urgency, immediate feedback and expressive driving of an arcade taxi game. Every journey should involve a choice of fare, a readable destination, an opportunity for a skill move, and the possibility of improving a route on the next attempt. The tuk-tuk's open cabin, short wheelbase and passenger reactions are central to its identity.

The official Crazy Taxi manual documents timed deliveries, pickup and destination stop zones, directional guidance, distance-based base fares, driving tips, remaining-time bonuses, acceleration bursts and forward/reverse drift techniques. Those are the reference behaviors. The rules and values below are our implementation design, including deliberate browser and touch adaptations. [SEGA manual distributed with the PC game](https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/71230/manuals/DC_CT_PC_MG_EFIGS_FINAL_lr.pdf).

The priorities, in order, are responsive handling, understandable objectives, interesting routes, readable traffic, expressive audiovisual feedback, and scenery detail. A pretty city with dull driving does not satisfy the brief.

## Launch content

| Content | Launch requirement |
| --- | --- |
| District | One contiguous approximately 4 km² Asok/Phrom Phong area; exact playable polygon fixed after data audit |
| Vehicle | One fully finished Thai tuk-tuk chassis, one driver and three cosmetic liveries; identical performance |
| Passengers | Eight reusable character variants with boarding, seated, leaning, cheering, annoyed and exit reactions |
| Pickup locations | At least 30 authored safe pickup anchors, with 8 to 12 active locally; selection depends on reachability |
| Destinations | At least 15 verified reachable curbside destinations; never inside buildings or on railway platforms |
| Traffic | At least six vehicle silhouettes, including taxis, car, pickup, bus, motorcycle and another tuk-tuk |
| Modes | Arcade Shift, 3/5/10 Minute Shift and Free Ride |
| Atmosphere | One polished daylight setup with locally appropriate streets, signs, vehicles and sound |
| Records | Local personal bests, separated by mode, input assistance, district version and rules version |
| Languages | English and Thai UI; readable Thai street signs; subtitles for spoken reactions |

Rain, full day/night cycles, multiplayer, online rankings, a second district, vehicle upgrades and a citywide map are later features. They must not delay a strong first district.

## Round flow and clocks

The state machine is `menu -> loading -> countdown -> seeking -> boarding -> carrying -> unloading -> seeking`, with transitions to `paused` and `results`. Passenger failure returns `carrying -> seeking` after a short reaction. An ending shift goes to results from any active driving state.

Arcade Shift begins with 90 seconds. This is the shift clock. A successful delivery adds time; it is possible for a skilled player to keep a shift running through successive deliveries. The displayed clock is capped at 120 seconds. There is no artificial maximum run duration.

Each accepted fare has a separate passenger clock. It begins when boarding finishes, counts down while carrying, and is not extended by tricks. Missing that deadline forfeits the current fare and pending tips, but previously banked earnings remain. Both clocks must be visible during a fare.

At zero shift time, end immediately after resolving that simulation tick. A delivery whose stopping condition completed on or before the tick deadline is credited; a partial stop is not. There is no hidden overtime. Fixed-duration modes use 180, 300 or 600 seconds and never award shift extensions. Free Ride has no shift clock and no ranked score.

Active gameplay, boarding and unloading consume shift time. Pausing, tab backgrounding, device interruption and a genuine loading stall freeze both clocks and simulation together. Resume with a short countdown. An interruption never grants extra time.

## Finding and accepting passengers

Represent available customers with a floating fare symbol and a ground ring. Use five distance categories with labels and shapes as well as color: red XS, orange S, yellow M, yellow-green L, green XL. Map categories to route-length quantiles within the current district, rather than hardcoding geography-specific distances.

Show estimated base fare and trip category before accepting. Choose a passenger by stopping inside their ring: chassis center within 4.5 m, speed below 1 m/s continuously for 0.35 seconds, no active passenger. If rings overlap, select the closest reachable anchor in the vehicle's forward half-space; show the selected ring before the stop completes.

Boarding takes approximately 0.65 seconds. Avoid menus and confirmation dialogs. Lock acceptance to one fare ID so that an animation, reconnect or double input cannot award two fares. One booking can carry one or two visible passengers to the same destination; launch does not support multiple independent bookings.

Destinations are selected from a prevalidated reachable table. Suppress immediate A-to-B-to-A farming and a recently completed pair for the next three deliveries. Keep a mixture of short, medium and long options. At least two distinct fare choices should normally be visible within ten seconds of finishing a delivery. Respawn passengers outside the immediate camera view.

## Routes and navigation

Use a large directional arrow pointing toward the destination and a smaller distance readout. It deliberately indicates the objective rather than dictating every turn. An optional route line on the minimap can help new players; leave the same option available across input devices and record the assist setting.

Player movement is physically free. One-way markings, turn restrictions and left-hand traffic guide the simulated traffic and the baseline route, but the arcade player may break those conventions. Do not teleport the player onto a route or impose traffic fines. Curbs, collision geometry, medians and authored shortcuts determine what is physically possible.

Maintain separate traffic-legal and player-traversable route graphs. Fare feasibility uses the legal graph; shortcuts can improve on that baseline. Real sois must preserve their observed connections and dead ends. Added playable connectors must be explicitly tagged as fictional in world-authoring data and never written back as real OSM facts.

Destination arrows must remain correct under bridges and after leaving the suggested route. Use world-space direction, not a rotating camera-space bearing. The minimap is rendered from the local game graph without a third-party map service.

## Fare and score rules

The following initial formulas make implementation deterministic. They are tuning proposals, not real Bangkok taxi tariffs.

Let `L` be the approved legal route length in meters, `H` the authored count of difficult turns, `T0` the initial passenger deadline, and `Tr` the remaining passenger time on successful drop-off.

| Quantity | Initial rule |
| --- | --- |
| Base fare | `round(40 + 0.12 * L)` game baht, fixed at pickup |
| Passenger deadline | `clamp(ceil(10 + 1.25 * L / 18 + 2 * H), 25, 120)` seconds |
| Timeliness bonus | `2 * floor(Tr)` game baht |
| Successful payout | Base fare + accepted pending trick tips + timeliness bonus |
| Arcade time extension | `clamp(round(0.55 * T0 + 0.5 * Tr), 12, 70)` seconds, then apply the 120-second shift cap |
| Drop-off requirement | Vehicle center inside the authored destination polygon and speed below 1 m/s for 0.35 seconds |
| Unloading | Approximately 0.6 seconds, one payout event, then immediate return to seeking |

Hand-calibrate every route family after driving it. Reject a generated fare when a competent run cannot complete it inside its deadline. Validate that long trips remain strategically useful with the global clock; change the coefficients if short-trip repetition dominates. In the first minute, ensure at least one forgiving short fare is available.

Show SPEEDY for at least 40% passenger time remaining, GOOD for 15% to under 40%, and JUST IN TIME below 15%. These are presentation grades; the formula above controls payment. Missing the deadline pays zero for that booking. Do not pay for circles, detours or extra distance traveled.

## Driving feel

Use an arcade vehicle with a dynamic collision chassis, three suspension contacts and explicit steering/grip assists. Tune for controlled play rather than real tuk-tuk instability.

| Parameter | Initial target |
| --- | --- |
| Ordinary top speed | About 100 km/h |
| Timed maneuver speed ceiling | About 140 km/h, with drag returning speed toward the ordinary range |
| Reverse top speed | About 25 km/h; brief reverse burst up to 40 km/h |
| Ordinary 0 to 50 km/h | Approximately 3 seconds |
| Launch burst 0 to 50 km/h | Approximately 1.5 seconds |
| Normal stop from 60 km/h | Approximately 18 to 24 m on dry road |
| Skilled stop from 60 km/h | Approximately 9 to 13 m |
| Steering | Tight at parking speed, progressively reduced at speed, immediate input response |
| Controlled slide | Approximately 15 to 40 degrees slip angle, recoverable with countersteering |
| Camera | Spring-follow chase view, speed-dependent look-ahead, small field-of-view increase during bursts |

These outcomes take precedence over physical constants. A low center of mass, roll assistance and capped collision impulses prevent routine cornering from overturning the tuk-tuk. Visual body lean can exaggerate forces while the collision shape stays predictable. A two-wheel moment is a controlled visual flourish or authored stunt, not a random physics failure.

There is no fuel, repair bill or vehicle health bar. Crashes cost speed and combo opportunity. Passengers react, loose props bounce, and the player recovers quickly. Pedestrians evade and do not form solid roadblocks.

## Skill moves and input recognizers

All timings use simulation time and input edges, independent of render rate. Buffer input edges for 120 ms, consume each edge once and expose the recognizer state in a development overlay. These windows are initial tuning values.

| Move | Expert input and eligibility | Result |
| --- | --- | --- |
| Launch burst | Release throttle and brake for at least 60 ms, select Drive, then press throttle within 180 ms | Short forward acceleration impulse while retaining steering; no consumable fuel meter |
| Chain burst | After a burst, release throttle, tap Reverse then Drive within 220 ms, and reapply throttle within 180 ms; at least 450 ms since previous burst | Refresh forward momentum up to the maneuver ceiling; rewards repeated timing |
| Drift | Above 20 km/h, tap Reverse then Drive within 220 ms while steering magnitude exceeds 0.35 | Enter reduced rear lateral grip with controlled yaw assistance |
| Fast stop | While moving forward, Reverse and brake edges within 150 ms, steering below 0.3 | Strong deceleration to a stop; do not instantly propel backward |
| Reverse burst | Within 300 ms after a launch burst, select Reverse and apply throttle | Rapid but clamped braking into reverse acceleration; no instantaneous velocity sign flip |
| Reverse slide | While moving forward, Drive then Reverse within 220 ms with steering above 0.35 | Controlled pivot into reverse motion, with bounded yaw and speed |

Maneuver precedence is fast stop, reverse slide, drift, chain burst, launch burst, reverse burst according to their eligible states; refine the recognizer so one input sequence cannot trigger two impulses. Suppress the reverse-burst recognizer once a drift or chain sequence has claimed the Reverse edge. Unit tests must cover those conflicts.

Holding a gear button or an accelerator never generates repeated bursts. Each maneuver needs new input edges. Drift exits on countersteer and grip recovery, low speed, braking, collision or an upper duration limit of 2.5 seconds. A slide must not preserve speed forever. Brief in-game control hints introduce bursts, drifting and stopping during ordinary play.

The launch game has no dedicated jump button. Small jumps arise from authored ramps and road features. The player's chassis must clear them without requiring physics exploits.

## Desktop and gamepad controls

| Action | Keyboard | Standard gamepad |
| --- | --- | --- |
| Steer | A/D or left/right arrows | Left stick |
| Accelerate | W or up arrow | Right trigger |
| Brake | S or down arrow | Left trigger |
| Reverse gear | Q | South face button |
| Drive gear | E | East face button |
| Assisted burst | Left Shift | West face button |
| Assisted drift | Space with steering | Right shoulder |
| Horn | H | North face button |
| Look behind | C, hold | Left shoulder, hold |
| Recovery | R, hold 0.75 seconds | Menu action |
| Pause | Escape | Start/menu button |

All bindings are remappable. Keyboard steering uses a fast input ramp rather than instant full lock. Gamepad steering has adjustable deadzone and sensitivity. Menus switch prompts when the active input device changes. Gamepad disconnect pauses the game.

## Mobile touch controls

Landscape play is required; portrait shows an unobtrusive rotate prompt and pauses an active run. The game must still function if orientation locking or fullscreen APIs are unavailable. Respect notches, rounded corners, browser bars and safe-area insets.

Default Assisted Touch is designed for two thumbs. The left thumb controls a horizontal steering pad. The right thumb uses a large brake pad with adjacent Burst and Drift buttons. Auto-throttle drives while the right thumb is not braking. Holding brake after reaching near-zero speed for 0.65 seconds selects reverse and applies gentle reverse torque while held; releasing returns to Drive. A manual-throttle layout is also available.

Assisted Burst schedules a 60 ms throttle release followed by a legal Drive/throttle sequence. Chaining requires a new tap in a visible timing window, not holding the button. Assisted Drift enters the same slide state only when speed and steering conditions are met; it does not steer the corner or award a guaranteed tip. Sliding the right thumb from Burst to Brake within the reverse-burst window requests a reverse burst. Sliding from Drift to Brake with steering above 0.35 requests a reverse slide; with steering below 0.3 it requests a fast stop. In the gap between those steering thresholds it performs ordinary braking. Teach these gestures and provide optional separate buttons in the adjustable layout. The physical force limits, collision rules, fares and timers remain identical.

Expert Touch exposes throttle/brake and separate D/R buttons for manual timing. It is optional; no required content may depend on a three-finger gesture. Keyboard and gamepad users can select the same assisted moves. Record assistance mode with each local score and keep separate record lists.

Touch targets are at least 56 CSS pixels with at least 8 pixels between action regions. Capture independent pointer IDs, handle pointer cancellation, and allow steering plus action input simultaneously. Prevent scrolling only on the game surface. On finger release, app interruption or focus loss, clear held input. Offer left-handed layout, control scaling, steering sensitivity and reduced camera movement.

All driving maneuvers and passenger deliveries must remain accessible using the standard touch controls. There is no separate driving-school mode.

## Tips and combos

| Event | Initial qualification | Initial tip |
| --- | --- | --- |
| Near miss | Clean pass within 0.4 to 1.2 m surface clearance, relative speed above 5 m/s, no contact in a 0.4-second validation window | ฿5 |
| Controlled drift | At least 0.5 seconds of qualified slide above 20 km/h, ending cleanly with at least 6 m displacement | ฿8 |
| Clean air | More than 0.3 seconds airborne above an authored ramp surface, followed by stable landing | ฿10 |
| Precision arrival | Complete the destination stop on the first entry without collision or backing out | ฿10 |

Multiply each accepted event by `min(5, 1 + floor(comboEvents / 3))`, using the number of prior accepted events in the current combo before incrementing it. The combo expires after 4 seconds without a new accepted event and resets on a meaningful crash or recovery. For the first implementation, a meaningful crash means a collision-induced speed loss above 3 m/s or a chassis contact lasting over 0.25 seconds; exclude suspension/ground support contacts. Accrued tips remain pending until successful delivery; a crash resets the multiplier, not all pending tips. At drop-off, bank only validated events; discard any near-miss candidate still inside its validation window so payment stays atomic.

Only occupied trips earn tips. A near miss can score once per traffic entity per fare. Repeated passes around the same vehicle cannot farm tips. Drift requires route progress of at least 12 m since the last drift award; each authored ramp can award once per fare. Cap total trick tips at twice the base fare until playtesting justifies a change. A stationary skid, driving against a wall or cosmetic lean alone awards nothing.

Use brief sound and animation feedback, with at most three concurrent score popups. Keep the center of the driving view clear.

## Traffic and street activity

Drive traffic on the left using authored lane paths, junction turns and signals. Use buses and slower vehicles to create readable passing decisions. Motorcycles can use narrow gaps but cannot abruptly intersect the player's lane without warning.

Spawn vehicles outside the camera and at least 40 m ahead of the player. No spawn is allowed in the predicted two-second player corridor. Never create unavoidable stationary walls across all available routes. Author intersections for occasional gaps rather than a perfect congestion simulation.

The same gameplay traffic population must exist at equivalent local positions on desktop and mobile for the same seed. Lower graphics settings may simplify meshes, animation and distant decorative traffic, but must not remove nearby obstacles or change scoring opportunities.

Pedestrians walk on sidewalks, look at the tuk-tuk and evade its approach. Traffic collisions can cause short disruptions, with stranded vehicles cleared outside the camera after a timeout. Offscreen simulation resumes consistently without visibly teleporting vehicles.

If the tuk-tuk is immobilized for 3 seconds, offer recovery. A requested recovery costs 3 seconds on both active clocks, clears the combo and places the vehicle on the last safe road pose, never closer to the destination than the pre-recovery best progress. A fall outside valid world bounds auto-recovers under the same rules.

## Bangkok identity and presentation

The district must be recognizable without a city-name label. Prioritize a Thai three-wheel tuk-tuk silhouette, open passenger bench, BTS guideway and station structures, left-side traffic, pink and green/yellow taxis, plausible buses, Thai and English signage, narrow sois, shophouse rhythm, awnings, utility cables, plants and street-food carts.

Use street and station names verified against the chosen data or a local survey. Landmark exteriors should be authored from owned or permitted references. Ordinary shops can use original fictional names with locally reviewed Thai lettering. Bangkok must not become a random collection of temples, neon signs and generic skyscrapers.

The camera stays roughly 4 to 6 m behind the tuk-tuk, with a 2 to 3 m height and a small lateral offset that reveals passengers. Use collision avoidance under the BTS and at corners. Limit camera lag so steering remains readable; expose motion reduction and shake controls.

HUD priority is shift time, destination direction, passenger time, next maneuver feedback and banked earnings. On mobile, shrink the minimap and move speed/gear information above the touch controls. Never place a fare marker behind a finger zone. Replace the mockup boost bar with gear and maneuver timing feedback.

## Sound and animation

Layer engine idle, acceleration and load loops with tire slip, suspension rattle, horn, traffic and station ambience. Pitch changes must follow the fictional drivetrain smoothly. Distinguish burst success, combo growth, low time, successful payment and failed fare by short original sounds.

Passenger reactions need a cooldown and variation to avoid repetition. Animate a shared seated rig with additive lean, bracing and cheering rather than expensive full-body physics. The driver steers visibly. Do not interrupt control for reaction cutscenes.

Use energetic original or suitably licensed music, with a target tempo around 150 to 180 BPM. Music should be present in the polished slice because rhythm and attitude affect the evaluation of fun. Include independent music, effects and voice volumes, subtitles and mute. Thai-language lines need a fluent review.

## Fun acceptance tests

Use at least ten external playtesters across desktop and mobile, including people familiar with Crazy Taxi and people familiar with Bangkok. These are directional release gates, not statistically conclusive research.

| Question | Initial acceptance target |
| --- | --- |
| Can a newcomer understand the loop? | At least 8 of 10 complete a fare within their first three minutes after the short tutorial |
| Is the vehicle expressive? | At least 8 of 10 intentionally trigger a burst and a controlled drift within ten minutes |
| Does learning help? | Median earnings improve by at least 20% between an initial scored run and a later run on the same seed |
| Does the game invite another attempt? | At least 7 of 10 voluntarily start another shift |
| Does it feel responsive? | Median handling rating at least 4/5 on each input family; investigate every report of lost touch input |
| Does it read as Bangkok? | At least 4 of 5 Bangkok-familiar reviewers identify the intended setting from gameplay with the title hidden |
| Does expertise matter? | Skilled players use route choice and timing to beat a basic-driving baseline; no dominant stationary or repeated-event exploit |

If these gates fail, spend the next iteration on handling, traffic spacing, route choices, sound and feedback. Adding more square kilometers does not resolve those failures.

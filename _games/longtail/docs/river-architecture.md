# Riverside architecture references

The game uses compact, authored geometry guided by exterior references, not photogrammetry or exact surveys. Mapped hotels and ICONSIAM's residential towers retain their bundled OpenStreetMap footprints and heights. The compact mall, The River podium and Oriental frontage anchor their entrance edge to the waterfront; a centre-point POI otherwise leaves an oversized empty setback when used with a smaller model.

References inspected for this pass:

- [Benoy, ICONSIAM](https://www.benoy.com/projects/iconsiam): glazed retail frontage, planted setbacks and sculptural gilded crown.
- [HB Design, The River](https://www.hbdesign.biz/portfolio-item/the-river/): offset towers, curved curtain-wall side, recessed balcony side and shared landscaped podium. Tower heights are approximate game dimensions.
- [Hilton, Millennium Hilton Bangkok](https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/): round river-end rooftop lounge. Additional hotel references and OSM records are in `public/data/riverside-buildings.json`.
- [HistoricBridges, Memorial Bridge](https://historicbridges.org/bridges/browser/?bridgebrowser=thailand/memorial_bridge/): segmented green through-trusses, portal bracing and concrete cutwaters.
- [Phra Pok Klao Bridge](https://en.wikipedia.org/wiki/Phra_Pok_Klao_Bridge) and [Taksin Bridge](https://en.wikipedia.org/wiki/Taksin_Bridge): separate carriageways around the central Sky Park or BTS alignment. The pier and temple details are authored approximations of local forms.

No reference photographs are bundled. Existing source and asset attribution remains in `public/ATTRIBUTION.txt`.

Static parts share materials and are merged. Pier illumination uses the existing small pool of nearby lights. Bridge emitter strips retain analytic screen-space antialiasing. New tests cover bridge traffic lanes, central vessel clearance, support colliders, connected sloped gangways, finite geometry and draw/triangle budgets. `tests/architecture.html` and `tests/architecture-mobile.html` provide inspectable local review views; Escape restores hidden review controls.

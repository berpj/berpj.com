# Chao Phraya course data

Copyright OpenStreetMap contributors. Data is available under ODbL 1.0:
https://opendatacommons.org/licenses/odbl/1-0/
Attribution guidance: https://www.openstreetmap.org/copyright

## Files

- `river-course.json`: compact runtime data; `points` contain `[longitude, latitude, widthMetres]`, ordered north to south; `outline` contains `[longitude, latitude]` shoreline points clipped to this course.
- `landmarks.json`: 13 named OSM footprint extracts, including exact footprint bounding-box centers as `[latitude, longitude]`, original OSM tags, geometry, and direct source URLs.
- `river-centerline.json`: 48 original centerline nodes as `[latitude, longitude]`, way IDs and provenance.
- `river-source.json`: original small Overpass response for river centerlines, OSM base timestamp 2026-05-31T22:37:44Z.
- `river-outline-source.json`: original OSM API response for water multipolygon relation14038959.
- `kalayanamit-source.json`: original OSM API response used by the derivation script for the final temple.

The course widths are ray intersections with the mapped water polygon along normals to the mapped river centerline. Centerline nodes above the polygon northern boundary use a documented authored280m approach width. The playable section from Wat Arun to Taksin Bridge has measured shoreline widths, roughly163m to233m. These are map widths, not surveyed navigation-channel widths or water-depth data. Exact shoreline has dock recesses that an arcade game may smooth.

Regenerate the runtime course and complete landmark list with `python3 tools/build-river-data.py`.

## Source queries

Centerline GET endpoint:
https://overpass.private.coffee/api/interpreter
Query: `[out:json][timeout:25];way[waterway=river](13.715,100.480,13.752,100.530);out geom;`
Only ways named Chao Phraya River are used. All kept nodes progress south through the bend.

Water geometry:
https://api.openstreetmap.org/api/0.6/relation/14038959/full.json

Landmark footprint URLs are recorded on each object in `landmarks.json`. All were fetched directly from OSM API on2026-10-10. The shape centers represent sites/buildings, not boarding piers. The chosen southern endpoint is Taksin/Sathorn Bridge, next to The River and connected to Krung Thon Buri Road; this is distinct from Krung Thon Bridge farther north.

No map tiles, satellite imagery, Street View images, or third-party photographs are bundled. Architecture and artistic effects are authored game approximations.

## Riverside architecture update, 12 October 2026

`riverside-buildings.json` contains six additional mapped building outlines, their original OSM tags, exact geographic centers, metre-space footprints, and individual source/reference URLs. These outlines drive the actual rendered wall/roof geometry, rather than serving only as location markers. The original orientation is retained; riverbank clearance may move the building slightly inland.

- Millennium Hilton: way 342556929, 32 mapped levels; approximate 121 m model.
- The Peninsula: way 134464576, within hotel site 342554731; approximate 151 m model. Facade uses the operator's 37-storey reference rather than the OSM 40-level tag.
- Royal Orchid Sheraton: way 1537453215; approximate 94 m, 28-floor facade.
- Shangri-La: way 1340837007, within hotel site 342200086; approximate 86 m model. Facade uses the operator's 25-storey reference rather than the OSM 24-level tag.
- Magnolias Waterfront: way 680736465; OSM height 317.95 m, 70 mapped levels.
- The Residences at Mandarin Oriental: way 680739268; OSM height 272.2 m, 52 mapped levels.

Building extract: `https://overpass.private.coffee/api/interpreter`, query `[out:json][timeout:30];way[building](13.720,100.508,13.731,100.516);out tags geom;`. Hotel sites were verified with `https://api.openstreetmap.org/api/0.6/map?bbox=100.5085,13.7205,100.515,13.7256`. Extracted geometry and source tags are retained in the JSON.

Facades, balconies, rooftop lounges, plant and signs are original authored approximations based on exterior references, not licensed photo textures or scanned 3D models. Architectural references include Hilton's official hotel page, Peninsula's official exterior gallery, Shangri-La's official wing description, Marriott's Royal Orchid page and Benoy's ICONSIAM project description: https://www.benoy.com/projects/iconsiam . Bridge Thai names come from the existing OSM bridge tags. Phra Pok Klao Bridge and its Chao Phraya Sky Park are labelled separately.

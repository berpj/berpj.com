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

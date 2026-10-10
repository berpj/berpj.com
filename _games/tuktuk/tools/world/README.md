# Bangkok source geography

The local game uses an actual OpenStreetMap extract around Asok and Phrom Phong. The source database contains no generated road or building geometry. Independently authored game scenery and estimated heights belong in the game renderer, outside this source dataset.

## Files

- `public/data/bangkok-sukhumvit.json`: compact WGS84 source geometry, stable OSM IDs, original tags, and derived `drivable` flags.
- `public/data/bangkok-sukhumvit.provenance.json`: endpoint, query, retrieval time, hashes, license, counts, and coverage limitations.
- `public/data/bangkok-sukhumvit.validation.json`: structural validation, original-node graph connectivity, and a tested Asok to Phrom Phong route.
- `tools/world/source/bangkok-sukhumvit.osm.xml.gz`: exact original API reply, losslessly compressed; the source SHA-256 is computed before compression.
- `prepare_osm.py`: standard-library-only converter for OSM XML or Overpass JSON.
- `validate_osm.py`: standard-library-only geometry and connectivity checks.
- `sukhumvit.overpassql`: equivalent bounded Overpass selection for future refreshes. The initial public Overpass endpoints returned HTTP 406 or 500, so this snapshot came from the direct OSM API.

## Schema

The bbox is `[100.553, 13.724, 100.577, 13.745]` in `[minLon,minLat,maxLon,maxLat]` order. The suggested local origin is `[100.565,13.7345]`. Every point uses `[longitude,latitude]`, EPSG:4326, with original OSM precision of seven decimal places. `geometryExtent` can exceed `bbox` because the selection retains complete ways, including long railway lines. Filter or clip the rendered view; preserve the source database.

| Collection | Shape | Contents |
| --- | --- | --- |
| `roads` | `{id,tags,coordinates,nodeIds,drivable}` | Motor-road classes, including restricted private drives which have `drivable=false` |
| `paths` | `{id,tags,coordinates,nodeIds,drivable}` | Footways, steps, pedestrian ways and cycleways |
| `buildings` | `{id,tags,coordinates}` | Closed building exterior; relation buildings also include `outerRings` and `innerRings` |
| `landmarks` | `{id,tags,coordinates}` | Original point nodes for stations, named amenities/tourism and malls |
| `railways` | `{id,tags,coordinates}` | Tracks and station platforms; inspect bridge/tunnel tags |
| `waterways` | `{id,tags,coordinates}` | Mapped water lines or polygons |
| `parks` | `{id,tags,coordinates}` | Mapped park polygons |

`nodeIds[i]` identifies `coordinates[i]`. Shared node IDs define actual road graph connections. Geometry crossings do not establish a junction by themselves. Preserve `oneway`, `access`, `vehicle`, `motor_vehicle`, `layer`, `bridge`, and `tunnel` tags when building a game graph. Turn restrictions are not imported in this prototype dataset.

Do not assume every road is public: `drivable` rejects `access=private/no` with motor-vehicle-specific access taking precedence. For through-road gameplay the validation excludes `service=parking_aisle/driveway` as well. Small disconnected components remain present and should not be used for mission anchors without review.

## Measured coverage

The snapshot has 1,523 road ways, 674 paths, 4,621 building records, 859 landmark points, 13 railways, 45 water features, and 5 parks. Only 3 road ways specify `width`, 149 specify `lanes`, and 24 specify `layer`. There are 175 buildings with explicit height and 931 with building levels. Missing widths, road elevations and building heights require authored game defaults. All building outlines are closed. One incomplete building relation was skipped because its member geometry was unavailable in the bounded export.

The selected public through-road graph has 879 ways and 3,509 nodes in 18 components. The largest component has 849 ways and 3,398 nodes. Asok to Phrom Phong is reachable using one-way tags, with a 1,275 m route between the closest road nodes. This is a source-graph validation, not proof of finished lane or intersection geometry.

The source JSON is 2,793,629 bytes and compresses to 444,558 bytes with gzip. HTTP compression should be enabled by the local/static server.

## Useful real features

| Feature | OSM ID | Location or tags |
| --- | --- | --- |
| Asok BTS station | `node/5391625873` | `[100.5603571,13.7370432]` |
| Phrom Phong BTS station | `node/5391626093` | `[100.5697129,13.7304345]` |
| Sukhumvit MRT station | `node/5391691787` | `[100.561498,13.7374671]` |
| BTS track 2 | `way/156261395` | `name:en=BTS Sukhumvit Line`, `bridge=viaduct`, `layer=3` |
| BTS track 1 | `way/1306290560` | `name:en=BTS Sukhumvit Line`, `bridge=viaduct`, `layer=3` |
| BTS siding near origin | `way/1392287988` | `bridge=viaduct`, `layer=3` |
| MRT Blue Line tracks | `way/156261336`, `way/1382574086` | `tunnel=yes`, `layer=-2` |
| Terminal 21 | `way/157656710`, `way/445167456` | Overlapping mapped main/part outlines; avoid drawing both as duplicate solids |
| EmQuartier | `way/318785712` | `height=42`, `building:levels=11` |
| EMSPHERE | `way/405853851` | `building:levels=5` |
| Emporium | `way/1195022785` | Original footprint available |

BTS tracks use `railway=subway` in OSM despite being elevated here. Respect `bridge=viaduct` and `layer=3` rather than hiding everything tagged subway. MRT tracks have the explicit tunnel tags.

Near the local origin, Sukhumvit's westbound carriageway includes `way/452045739` and `way/749981039`; the eastbound carriageway includes `way/749981040`, `way/970310343`, `way/751471422`, and `way/693449409`. The validation JSON records the complete tested way sequence.

## Reproduce the current snapshot

```sh
python3 tools/world/prepare_osm.py tools/world/source/bangkok-sukhumvit.osm.xml.gz
python3 tools/world/validate_osm.py
node tools/world/build-road-markings.mjs
```

## Refresh from public OSM

Refreshes are manual build actions, never browser gameplay requests. The direct API has a node limit, so keep this district bounded. Use the Geofabrik Thailand extract and local filtering for broader coverage.

```sh
curl --fail --location --max-time 80 'https://api.openstreetmap.org/api/0.6/map?bbox=100.553,13.724,100.577,13.745' -o /tmp/bangkok-osm-map.xml
python3 tools/world/prepare_osm.py /tmp/bangkok-osm-map.xml
python3 tools/world/validate_osm.py
node tools/world/build-road-markings.mjs
```

The road-marking bake stores joined asphalt, sidewalks, lane paint and continuous red/white curb geometry in `src/world/roadMarkings.data.json`. Re-run it after changing the map, estimated road widths or the road planner. The browser verifies its map signature and reads the precomputed geometry. Source hashes and ODbL provenance are embedded in the file. Clipper is an offline development dependency.

## License and attribution

The source and derived geography database are available under **Open Database License 1.0 (ODbL-1.0)**. Keep a visible `© OpenStreetMap contributors` credit and an accessible link to the data license. Game code and independently authored art are separate from this geography database.

Primary sources: [OSM copyright and attribution](https://www.openstreetmap.org/copyright), [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/), [OSM map API](https://wiki.openstreetmap.org/wiki/API_v0.6#Retrieving_map_data_by_bounding_box:_GET_/api/0.6/map), [Overpass documentation](https://dev.overpass-api.de/overpass-doc/en/), [Thailand bulk extract](https://download.geofabrik.de/asia/thailand.html).

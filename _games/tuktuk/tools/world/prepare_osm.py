#!/usr/bin/env python3
"""Build the compact, attributed Bangkok source geography from an Overpass reply.

No generated streets or building footprints are mixed into this source database.
Coordinates are original WGS84 longitude/latitude, rounded to OSM's 7 decimals.
Usage: python3 tools/world/prepare_osm.py /tmp/osm.json --endpoint URL
"""
import argparse
import collections
import datetime
import gzip
import hashlib
import json
import pathlib
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parents[2]
BOUNDS = [100.553, 13.724, 100.577, 13.745]
ORIGIN = [100.565, 13.7345]
DRIVABLE = {
    "motorway", "motorway_link", "trunk", "trunk_link", "primary", "primary_link",
    "secondary", "secondary_link", "tertiary", "tertiary_link", "residential",
    "unclassified", "living_street", "service", "road",
}


def coordinates(element):
    return [[round(p["lon"], 7), round(p["lat"], 7)] for p in element.get("geometry", []) if p]


def stitch(parts):
    """Join member ways without inventing vertices; retain separate outer rings."""
    pending = [p for p in parts if len(p) > 1]
    rings = []
    while pending:
        ring = pending.pop(0)
        changed = True
        while changed and ring[0] != ring[-1]:
            changed = False
            for i, part in enumerate(pending):
                if ring[-1] == part[0]:
                    ring += part[1:]
                elif ring[-1] == part[-1]:
                    ring += list(reversed(part[:-1]))
                elif ring[0] == part[-1]:
                    ring = part[:-1] + ring
                elif ring[0] == part[0]:
                    ring = list(reversed(part[1:])) + ring
                else:
                    continue
                pending.pop(i)
                changed = True
                break
        rings.append(ring)
    return rings


def read_osm_xml(raw_bytes):
    """Adapt the public OSM map API's XML to the same geometry-bearing source schema."""
    root = ET.fromstring(raw_bytes)
    nodes = {}
    ways = {}
    elements = []
    for xml in root.findall("node"):
        tags = {tag.attrib["k"]: tag.attrib["v"] for tag in xml.findall("tag")}
        element = {"type": "node", "id": int(xml.attrib["id"]), "tags": tags,
                   "lon": float(xml.attrib["lon"]), "lat": float(xml.attrib["lat"])}
        nodes[element["id"]] = element
        if (tags.get("railway") in {"station", "halt"} or
            tags.get("public_transport") == "station" or
            ("name" in tags and ("amenity" in tags or "tourism" in tags)) or
            tags.get("shop") == "mall"):
            elements.append(element)
    for xml in root.findall("way"):
        tags = {tag.attrib["k"]: tag.attrib["v"] for tag in xml.findall("tag")}
        node_ids = [int(nd.attrib["ref"]) for nd in xml.findall("nd")]
        if not all(node_id in nodes for node_id in node_ids):
            continue
        element = {"type": "way", "id": int(xml.attrib["id"]), "tags": tags,
                   "nodes": node_ids, "geometry": [nodes[n] for n in node_ids]}
        ways[element["id"]] = element
        if (any(key in tags for key in ("highway", "building", "railway", "waterway")) or
            tags.get("natural") == "water" or tags.get("leisure") == "park"):
            elements.append(element)
    incomplete_relations = 0
    for xml in root.findall("relation"):
        tags = {tag.attrib["k"]: tag.attrib["v"] for tag in xml.findall("tag")}
        if "building" not in tags:
            continue
        members = []
        incomplete = False
        for member in xml.findall("member"):
            if member.attrib["type"] != "way":
                continue
            way = ways.get(int(member.attrib["ref"]))
            if way is None:
                incomplete = True
                break
            members.append({"type": "way", "ref": way["id"], "role": member.attrib.get("role", ""),
                            "geometry": way["geometry"]})
        if incomplete:
            incomplete_relations += 1
            continue
        elements.append({"type": "relation", "id": int(xml.attrib["id"]), "tags": tags, "members": members})
    note = root.find("note")
    meta = root.find("meta")
    return {"generator": root.attrib.get("generator"), "elements": elements,
            "sourceFormat": "OSM API 0.6 XML",
            "incompleteBuildingRelationsSkipped": incomplete_relations,
            "osm3s": {"timestamp_osm_base": meta.attrib.get("osm_base") if meta is not None else None,
                      "copyright": note.text if note is not None else None}}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=pathlib.Path)
    parser.add_argument("--endpoint", default=None)
    args = parser.parse_args()
    raw_bytes = args.source.read_bytes()
    if raw_bytes.startswith(b"\x1f\x8b"):
        raw_bytes = gzip.decompress(raw_bytes)
    raw = read_osm_xml(raw_bytes) if raw_bytes.lstrip().startswith(b"<?xml") else json.loads(raw_bytes)
    if raw.get("remark"):
        raise SystemExit("Overpass returned an incomplete response: " + raw["remark"])
    data = {
        "schemaVersion": 1,
        "name": "Bangkok Sukhumvit: Asok to Phrom Phong",
        "bbox": BOUNDS,
        "origin": ORIGIN,
        "coordinateOrder": "longitude,latitude",
        "crs": "EPSG:4326",
        "attribution": "© OpenStreetMap contributors",
        "license": "ODbL-1.0",
        "licenseUrl": "https://opendatacommons.org/licenses/odbl/1-0/",
        "roads": [], "paths": [], "buildings": [], "landmarks": [],
        "railways": [], "waterways": [], "parks": [],
    }
    seen = set()
    for element in raw.get("elements", []):
        element_id = f'{element["type"]}/{element["id"]}'
        if element_id in seen:
            continue
        seen.add(element_id)
        tags = element.get("tags", {})
        feature = {"id": element_id, "tags": tags}
        if element["type"] == "node":
            feature["coordinates"] = [round(element["lon"], 7), round(element["lat"], 7)]
            data["landmarks"].append(feature)
            continue
        if element["type"] == "relation":
            if "building" not in tags:
                continue
            parts = {"outer": [], "inner": []}
            for member in element.get("members", []):
                role = member.get("role") or "outer"
                if role in parts:
                    parts[role].append(coordinates(member))
            outer = stitch(parts["outer"])
            inner = stitch(parts["inner"])
            if not outer:
                continue
            feature["coordinates"] = outer[0]
            feature["outerRings"] = outer
            feature["innerRings"] = inner
            data["buildings"].append(feature)
            continue
        coords = coordinates(element)
        if len(coords) < 2:
            continue
        feature["coordinates"] = coords
        if "highway" in tags:
            feature["nodeIds"] = element.get("nodes", [])
            access = tags.get("motor_vehicle", tags.get("vehicle", tags.get("access", "yes")))
            feature["drivable"] = tags["highway"] in DRIVABLE and access not in {"no", "private"}
            data["roads" if tags["highway"] in DRIVABLE else "paths"].append(feature)
        elif "building" in tags:
            data["buildings"].append(feature)
        elif "railway" in tags:
            data["railways"].append(feature)
        elif "waterway" in tags or tags.get("natural") == "water":
            data["waterways"].append(feature)
        elif tags.get("leisure") == "park":
            data["parks"].append(feature)
    all_points = []
    for category in ("roads", "paths", "buildings", "railways", "waterways", "parks"):
        for feature in data[category]:
            all_points.extend(feature["coordinates"])
    all_points.extend(f["coordinates"] for f in data["landmarks"])
    data["geometryExtent"] = [min(p[0] for p in all_points), min(p[1] for p in all_points),
                              max(p[0] for p in all_points), max(p[1] for p in all_points)]
    counts = {category: len(data[category]) for category in
              ("roads", "paths", "buildings", "landmarks", "railways", "waterways", "parks")}
    road_types = dict(collections.Counter(f["tags"]["highway"] for f in data["roads"]))
    quality = {
        "counts": counts,
        "roadTypes": road_types,
        "drivableRoads": sum(f["drivable"] for f in data["roads"]),
        "roadsWithName": sum("name" in f["tags"] for f in data["roads"]),
        "roadsWithWidth": sum("width" in f["tags"] for f in data["roads"]),
        "roadsWithLanes": sum("lanes" in f["tags"] for f in data["roads"]),
        "roadsWithLayer": sum("layer" in f["tags"] for f in data["roads"]),
        "buildingsWithHeight": sum("height" in f["tags"] for f in data["buildings"]),
        "buildingsWithLevels": sum("building:levels" in f["tags"] for f in data["buildings"]),
        "unclosedBuildingOutlines": sum(f["coordinates"][0] != f["coordinates"][-1]
                                          for f in data["buildings"]),
    }
    query = ROOT / "tools/world/sukhumvit.overpassql"
    output = ROOT / "public/data/bangkok-sukhumvit.json"
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n")
    provenance = {
        "source": "OpenStreetMap",
        "endpoint": args.endpoint or (
            "https://api.openstreetmap.org/api/0.6/map?bbox=100.553,13.724,100.577,13.745"
            if raw.get("sourceFormat") == "OSM API 0.6 XML"
            else "https://overpass-api.de/api/interpreter"),
        "retrievedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "osmBaseTimestamp": raw.get("osm3s", {}).get("timestamp_osm_base"),
        "generator": raw.get("generator"),
        "queryFile": "tools/world/sukhumvit.overpassql" if "sourceFormat" not in raw else None,
        "query": query.read_text() if "sourceFormat" not in raw else "GET /api/0.6/map?bbox=100.553,13.724,100.577,13.745",
        "sourceFormat": raw.get("sourceFormat", "Overpass JSON"),
        "sourceSha256": hashlib.sha256(raw_bytes).hexdigest(),
        "outputSha256": hashlib.sha256(output.read_bytes()).hexdigest(),
        "outputBytes": output.stat().st_size,
        "bbox": BOUNDS,
        "geometryExtent": data["geometryExtent"],
        "license": "ODbL-1.0",
        "licenseUrl": data["licenseUrl"],
        "copyrightUrl": "https://www.openstreetmap.org/copyright",
        "attribution": data["attribution"],
        "transformations": [
            "Category separation; original stable element IDs and tags retained",
            "Original WGS84 vertices retained at 7-decimal precision",
            "Relation member ways joined at identical endpoints without generated vertices",
            "Boolean drivable flag derived from highway and access tags; tags remain authoritative",
        ],
        "limitations": [
            "OSM is community mapping, not a surveyed or complete reconstruction",
            "Selection bbox intersects ways; complete ways may extend outside bbox",
            "Missing road widths, lanes, elevations and building heights require authored game defaults",
            "Landmarks include only selected mapped nodes; named building tags also identify destinations",
            "No Google imagery, Street View geometry, or synthetic streets in this source database",
        ],
        "quality": quality,
    }
    source_archive = ROOT / "tools/world/source/bangkok-sukhumvit.osm.xml.gz"
    if raw.get("sourceFormat") == "OSM API 0.6 XML":
        source_archive.parent.mkdir(parents=True, exist_ok=True)
        source_archive.write_bytes(gzip.compress(raw_bytes, mtime=0))
        provenance["sourceFile"] = "tools/world/source/bangkok-sukhumvit.osm.xml.gz"
        provenance["sourceCompressedBytes"] = source_archive.stat().st_size
    provenance["outputGzipBytes"] = len(gzip.compress(output.read_bytes(), mtime=0))
    provenance["quality"]["incompleteBuildingRelationsSkipped"] = raw.get("incompleteBuildingRelationsSkipped", 0)
    (output.parent / "bangkok-sukhumvit.provenance.json").write_text(
        json.dumps(provenance, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"output": str(output), "bytes": output.stat().st_size, "quality": quality,
                      "geometryExtent": data["geometryExtent"]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

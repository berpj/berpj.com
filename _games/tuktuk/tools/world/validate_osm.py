#!/usr/bin/env python3
"""Validate the checked-in geography and report actual node-ID road connectivity."""
import collections
import gzip
import hashlib
import heapq
import json
import math
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SOURCE = ROOT / "public/data/bangkok-sukhumvit.json"


def distance(a, b):
    return 6371000 * math.hypot(
        math.radians(a[0] - b[0]) * math.cos(math.radians((a[1] + b[1]) / 2)),
        math.radians(a[1] - b[1]),
    )


def route(graph, start, goal):
    costs = {start: 0}
    queue = [(0, start)]
    previous = {}
    while queue:
        cost, node = heapq.heappop(queue)
        if cost != costs.get(node):
            continue
        if node == goal:
            break
        for target, edge_cost, way in graph[node]:
            total = cost + edge_cost
            if total < costs.get(target, float("inf")):
                costs[target] = total
                previous[target] = (node, way)
                heapq.heappush(queue, (total, target))
    if goal not in costs:
        return {"reachable": False}
    ways = []
    node = goal
    while node != start:
        node, way = previous[node]
        if not ways or ways[-1] != way:
            ways.append(way)
    return {"reachable": True, "distanceMeters": round(costs[goal]), "ways": list(reversed(ways))}


def main():
    source_bytes = SOURCE.read_bytes()
    data = json.loads(source_bytes)
    nodes = {}
    seen_ids = set()
    for category in ("roads", "paths", "buildings", "landmarks", "railways", "waterways", "parks"):
        for feature in data[category]:
            assert feature["id"] not in seen_ids, feature["id"]
            seen_ids.add(feature["id"])
            points = [feature["coordinates"]] if category == "landmarks" else feature["coordinates"]
            assert points
            assert all(len(p) == 2 and -180 <= p[0] <= 180 and -90 <= p[1] <= 90
                       and all(math.isfinite(c) for c in p) for p in points)
            if category in {"roads", "paths"}:
                assert len(feature["nodeIds"]) == len(points), feature["id"]
                for node, point in zip(feature["nodeIds"], points):
                    if node in nodes:
                        assert nodes[node] == point, node
                    nodes[node] = point
            if category == "buildings":
                assert len(points) >= 4 and points[0] == points[-1], feature["id"]
    roads = [f for f in data["roads"] if f["drivable"]
             and f["tags"].get("service") not in {"parking_aisle", "driveway"}]
    graph = collections.defaultdict(list)
    directed = collections.defaultdict(list)
    for feature in roads:
        oneway = feature["tags"].get("oneway", "no")
        for a, b in zip(feature["nodeIds"], feature["nodeIds"][1:]):
            cost = distance(nodes[a], nodes[b])
            graph[a].append((b, cost, feature["id"]))
            graph[b].append((a, cost, feature["id"]))
            if oneway not in {"-1", "reverse"}:
                directed[a].append((b, cost, feature["id"]))
            if oneway not in {"yes", "true", "1"}:
                directed[b].append((a, cost, feature["id"]))
    components = []
    seen = set()
    for node in graph:
        if node in seen:
            continue
        queue = [node]
        seen.add(node)
        component = []
        while queue:
            node = queue.pop()
            component.append(node)
            for target, _, _ in graph[node]:
                if target not in seen:
                    seen.add(target)
                    queue.append(target)
        components.append(component)
    components.sort(key=len, reverse=True)
    main_component = set(components[0])
    stations = {}
    for feature in data["landmarks"]:
        name = feature["tags"].get("name:en")
        if name in {"Asok", "Phrom Phong"} and feature["tags"].get("railway") == "station":
            nearest = min(main_component, key=lambda n: distance(nodes[n], feature["coordinates"]))
            stations[name] = {"id": feature["id"], "coordinates": feature["coordinates"],
                              "nearestRoadNodeId": nearest, "nearestRoadNodeCoordinates": nodes[nearest],
                              "distanceToRoadNodeMeters": round(distance(nodes[nearest], feature["coordinates"]), 1)}
    start = stations["Asok"]["nearestRoadNodeId"]
    goal = stations["Phrom Phong"]["nearestRoadNodeId"]
    report = {
        "dataSha256": hashlib.sha256(source_bytes).hexdigest(),
        "bytes": len(source_bytes), "gzipBytes": len(gzip.compress(source_bytes, mtime=0)),
        "assertions": ["Stable IDs unique", "Coordinate values finite WGS84 longitude/latitude",
                       "Road node IDs exactly match coordinate arrays", "Shared node IDs have identical coordinates",
                       "Building exterior outlines closed"],
        "roadSelection": "drivable=true, excludes service=parking_aisle and service=driveway",
        "selectedRoads": len(roads), "selectedNodes": len(graph), "components": len(components),
        "largestComponentNodes": len(main_component),
        "largestComponentRoads": sum(any(n in main_component for n in f["nodeIds"]) for f in roads),
        "topComponentSizes": [len(c) for c in components[:10]],
        "stations": stations,
        "AsokToPhromPhongUndirected": route(graph, start, goal),
        "AsokToPhromPhongWithOnewayTags": route(directed, start, goal),
        "notes": ["Graph joins only original shared OSM node IDs; crossing lines do not create synthetic junctions",
                  "Reachability is a source-graph check, not proof of game lane/intersection geometry",
                  "One-way validation uses OSM oneway tags; turn restrictions are not imported",
                  "Disconnected small components include isolated drives; use the largest component for missions"],
    }
    assert report["AsokToPhromPhongWithOnewayTags"]["reachable"]
    output = SOURCE.with_name("bangkok-sukhumvit.validation.json")
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

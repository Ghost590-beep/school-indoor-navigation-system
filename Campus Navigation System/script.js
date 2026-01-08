// ========= Floor graphs =========
const floors = {
  // Minimal Floor 1 (add more nodes later)
  "floor-1": {
    nodes: {
      "stairs-floor-1": { x: 120, y: 520 },  // approximate
      "hall-floor-1": { x: 200, y: 500 }     // simple waypoint
    },
    graph: {
      "stairs-floor-1": ["hall-floor-1"],
      "hall-floor-1": ["stairs-floor-1"]
    }
  },

  // Your full Floor 2
  "floor-2": {
    nodes: {
      // Doors
      "lecture-room-1": { x: 200, y: 235 },
      "byrd-hall": { x: 500, y: 235 },
      "computer-lab": { x: 800, y: 235 },
      "chumbow-hall": { x: 355, y: 455 },
      "cisco-lab": { x: 645, y: 455 },
      "restroom": { x: 105, y: 305 },
      "stairs-floor-2": { x: 500, y: 505 },

      // Hallway waypoints
      "hall-main-left": { x: 200, y: 300 },
      "hall-main-center": { x: 500, y: 300 },
      "hall-main-right": { x: 800, y: 300 },
      "hall-vertical-top": { x: 500, y: 350 },
      "hall-vertical-mid": { x: 500, y: 455 },
      "hall-vertical-bottom": { x: 500, y: 505 }
    },
    graph: {
      "lecture-room-1": ["hall-main-left"],
      "byrd-hall": ["hall-main-center"],
      "computer-lab": ["hall-main-right"],
      "restroom-2": ["hall-main-left"],
      "chumbow-hall": ["hall-vertical-mid"],
      "cisco-lab": ["hall-vertical-mid"],
      "stairs-floor-2": ["hall-vertical-bottom"],

      "hall-main-left": ["hall-main-center", "lecture-room-1", "restroom"],
      "hall-main-center": ["hall-main-left", "hall-main-right", "hall-vertical-top", "byrd-hall"],
      "hall-main-right": ["hall-main-center", "computer-lab"],
      "hall-vertical-top": ["hall-main-center", "hall-vertical-mid"],
      "hall-vertical-mid": ["hall-vertical-top", "hall-vertical-bottom", "chumbow-hall", "cisco-lab"],
      "hall-vertical-bottom": ["hall-vertical-mid", "stairs-floor-2"]
    }
  },

  // Minimal Floor 3 to support cross-floor traversal
  "floor-3": {
    nodes: {
      "stairs-floor-3": { x: 500, y: 300 },   // center placeholder
      "hall-floor-3": { x: 520, y: 320 }
    },
    graph: {
      "stairs-floor-3": ["hall-floor-3"],
      "hall-floor-3": ["stairs-floor-3"]
    }
  },

  // Your full Floor 4
  "floor-4": {
    nodes: {
      // Doors (using door centers from your SVG)
      "vc-office": { x: 210, y: 165 },          // right wall door
      "pa-vc": { x: 270, y: 155 },              // bottom wall door
      "admin-assistant": { x: 340, y: 195 },    // right wall door
      "conference-hall-1": { x: 415, y: 155 },  // bottom door 1
      "conference-hall-2": { x: 515, y: 155 },  // bottom door 2
      "marketing-dir": { x: 635, y: 155 },      // bottom wall door
      "deputy-vc": { x: 712, y: 135 },          // left wall door
      "finance-office": { x: 625, y: 368 },     // top wall door
      "quality-control": { x: 712, y: 435 },    // left wall door
      "bursary": { x: 625, y: 448 },            // top wall door
      "store-room": { x: 218, y: 485 },         // right wall door
      "restroom-4": { x: 88, y: 295 },          // right wall door
      "transcript-store": { x: 218, y: 395 },   // right wall door
      "pa-rector": { x: 288, y: 395 },          // left wall door
      "rector-francophone": { x: 288, y: 485 }, // left wall door

      // Stairs
      "stairs-floor-4": { x: 490, y: 495 },

      // Hallways (aligned to your hallway rects)
      "hall-top-left": { x: 200, y: 300 },
      "hall-top-center": { x: 500, y: 300 },
      "hall-top-right": { x: 800, y: 300 },

      "hall-vert-main-top": { x: 490, y: 350 },
      "hall-vert-main-mid": { x: 490, y: 420 },
      "hall-vert-main-bottom": { x: 490, y: 510 },

      "hall-vert-left-top": { x: 252, y: 350 },
      "hall-vert-left-mid": { x: 252, y: 435 },
      "hall-vert-left-bottom": { x: 252, y: 530 }
    },
    graph: {
      // Doors → nearest hallway
      "vc-office": ["hall-top-left"],
      "pa-vc": ["hall-top-left", "hall-vert-left-top"],
      "admin-assistant": ["hall-top-left", "hall-vert-left-top"],
      "conference-hall-1": ["hall-top-center"],
      "conference-hall-2": ["hall-top-center"],
      "marketing-dir": ["hall-top-right"],
      "deputy-vc": ["hall-top-right"],
      "restroom-4": ["hall-top-left"],

      "transcript-store": ["hall-vert-left-mid"],
      "store-room": ["hall-vert-left-bottom"],
      "pa-rector": ["hall-vert-left-mid"],
      "rector-francophone": ["hall-vert-left-bottom"],

      "finance-office": ["hall-vert-main-mid"],
      "bursary": ["hall-vert-main-mid"],
      "quality-control": ["hall-vert-main-mid"],
      "stairs-floor-4": ["hall-vert-main-bottom"],

      // Corridors connectivity
      "hall-top-left": ["hall-top-center", "vc-office", "pa-vc", "admin-assistant", "restroom-4", "hall-vert-left-top"],
      "hall-top-center": ["hall-top-left", "hall-top-right", "conference-hall-1", "conference-hall-2", "hall-vert-main-top"],
      "hall-top-right": ["hall-top-center", "marketing-dir", "deputy-vc"],

      "hall-vert-left-top": ["hall-top-left", "hall-vert-left-mid"],
      "hall-vert-left-mid": ["hall-vert-left-top", "hall-vert-left-bottom", "transcript-store", "pa-rector"],
      "hall-vert-left-bottom": ["hall-vert-left-mid", "store-room"],

      "hall-vert-main-top": ["hall-top-center", "hall-vert-main-mid"],
      "hall-vert-main-mid": ["hall-vert-main-top", "hall-vert-main-bottom", "finance-office", "bursary", "quality-control"],
      "hall-vert-main-bottom": ["hall-vert-main-mid", "stairs-floor-4"]
    }
  },

  // Minimal Basement
  "basement": {
    nodes: {
      "stairs-basement": { x: 140, y: 560 },
      "hall-basement": { x: 160, y: 540 }
    },
    graph: {
      "stairs-basement": ["hall-basement"],
      "hall-basement": ["stairs-basement"]
    }
  }
};

// ========= Cross-floor links via stairs =========
const crossFloorGraph = {
  "stairs-floor-1": ["stairs-floor-2", "stairs-basement"],
  "stairs-floor-2": ["stairs-floor-1", "stairs-floor-3"],
  "stairs-floor-3": ["stairs-floor-2", "stairs-floor-4"],
  "stairs-floor-4": ["stairs-floor-3"],
  "stairs-basement": ["stairs-floor-1"]
};

// ========= Helpers =========
function showFloor(floorId) {
  document.querySelectorAll(".floor").forEach(f => {
    f.style.display = f.id === floorId ? "block" : "none";
  });
}
function getCurrentFloor() {
  return document.getElementById("floorSelect").value;
}
function setCurrentFloor(floorId) {
  document.getElementById("floorSelect").value = floorId;
  showFloor(floorId);
}
function getNodeFloor(nodeId) {
  for (const floor in floors) {
    if (floors[floor].nodes[nodeId]) return floor;
  }
  return null;
}

// ========= Multi-floor BFS =========
function bfsMultiFloor(start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === end) return path;
    if (visited.has(node)) continue;
    visited.add(node);

    // Intra-floor neighbors
    for (const floor in floors) {
      const neighbors = floors[floor].graph[node];
      if (neighbors) {
        for (const n of neighbors) {
          if (!visited.has(n)) queue.push([...path, n]);
        }
      }
    }

    // Cross-floor neighbors
    const cross = crossFloorGraph[node];
    if (cross) {
      for (const n of cross) {
        if (!visited.has(n)) queue.push([...path, n]);
      }
    }
  }
  return null;
}

// ========= Multi-floor drawing (per-floor segments) =========
function drawPathMultiFloor(path) {
  document.querySelectorAll(".nav-path, .nav-node").forEach(el => el.remove());
  if (!path || path.length < 2) return;

  // Split into per-floor segments
  const segments = [];
  let seg = [path[0]];
  for (let i = 1; i < path.length; i++) {
    const pf = getNodeFloor(path[i - 1]);
    const cf = getNodeFloor(path[i]);
    if (pf && cf && pf === cf) {
      seg.push(path[i]);
    } else {
      segments.push(seg);
      seg = [path[i]];
    }
  }
  if (seg.length) segments.push(seg);

  // Draw each segment on its floor
  segments.forEach(segment => {
    const floorId = getNodeFloor(segment[0]);
    if (!floorId) return;
    if (getCurrentFloor() !== floorId) setCurrentFloor(floorId);

    const svgGroup = document.getElementById(floorId);
    const points = segment
      .map(id => {
        const node = floors[floorId].nodes[id];
        return node ? `${node.x},${node.y}` : null;
      })
      .filter(Boolean)
      .join(" ");

    // Need at least 2 points to draw a line
    const numPoints = points.trim().split(/\s+/).length;
    if (numPoints >= 2) {
      const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polyline.setAttribute("points", points);
      polyline.setAttribute("class", "nav-path");
      svgGroup.appendChild(polyline);
    }

    // Draw nodes
    segment.forEach(id => {
      const node = floors[floorId].nodes[id];
      if (!node) return;
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", node.x);
      c.setAttribute("cy", node.y);
      c.setAttribute("r", 4);
      c.setAttribute("class", "nav-node");
      svgGroup.appendChild(c);
    });
  });
}

// ========= Name normalization =========
const baseNameMap = {
  // Floor 2
  "lecture room 1": "lecture-room-1",
  "byrd hall": "byrd-hall",
  "computer lab": "computer-lab",
  "chumbow hall": "chumbow-hall",
  "cisco lab": "cisco-lab",
  "restroom": "restroom",

  // Floor 4
  "vc office": "vc-office",
  "p.a. to vc": "pa-vc",
  "admin assistant": "admin-assistant",
  "conference hall": "conference-hall-1", // default to door 1
  "conference hall 1": "conference-hall-1",
  "conference hall 2": "conference-hall-2",
  "marketing director": "marketing-dir",
  "deputy vc": "deputy-vc",
  "restroom floor 4": "restroom-4",
  "transcript store": "transcript-store",
  "store room": "store-room",
  "p.a. to rector": "pa-rector",
  "francophone rector": "rector-francophone",
  "finance office": "finance-office",
  "bursary": "bursary",
  "quality control": "quality-control"
};

const roomMap = {
  // Floor 2
  "lecture room 1": "lecture-room-1",
  "byrd hall": "byrd-hall",
  "computer lab": "computer-lab",
  "chumbow hall": "chumbow-hall",
  "cisco lab": "cisco-lab",
  "restroom": "restroom",

  // Floor 4
  "vc office": "vc-office",
  "p.a. to vc": "pa-vc",
  "admin assistant": "admin-assistant",
  "conference hall": "conference-hall-1",
  "conference hall 1": "conference-hall-1",
  "conference hall 2": "conference-hall-2",
  "marketing director": "marketing-dir",
  "deputy vc": "deputy-vc",
  "restroom floor 4": "restroom-4",
  "transcript store": "transcript-store",
  "store room": "store-room",
  "p.a. to rector": "pa-rector",
  "francophone rector": "rector-francophone",
  "finance office": "finance-office",
  "bursary": "bursary",
  "quality control": "quality-control"
};

const hallMap = {
  // Floor 2 halls
  "main hall left": "hall-main-left",
  "main hall center": "hall-main-center",
  "main hall right": "hall-main-right",
  "vertical hall top": "hall-vertical-top",
  "vertical hall mid": "hall-vertical-mid",
  "vertical hall bottom": "hall-vertical-bottom",

  // Floor 4 halls
  "hall top left": "hall-top-left",
  "hall top center": "hall-top-center",
  "hall top right": "hall-top-right",
  "hall vert main top": "hall-vert-main-top",
  "hall vert main mid": "hall-vert-main-mid",
  "hall vert main bottom": "hall-vert-main-bottom",
  "hall vert left top": "hall-vert-left-top",
  "hall vert left mid": "hall-vert-left-mid",
  "hall vert left bottom": "hall-vert-left-bottom",
  "main hall": "hall-main-center",
"vertical hall": "hall-vertical-mid"

};


function normalize(input) {
  const key = input.trim().toLowerCase();

  // Dynamic stairs mapping to current floor
  if (key === "stairs") {
    const curr = getCurrentFloor();
    if (curr === "basement") return "stairs-basement";
    return `stairs-${curr}`; // e.g., "stairs-floor-4"
  }

  return baseNameMap[key] || key;
}

// ========= Controls =========
document.getElementById("navigateBtn").addEventListener("click", () => {
  const start = normalize(document.getElementById("startRoom").value);
  const end = normalize(document.getElementById("endRoom").value);

  const path = bfsMultiFloor(start, end);
  drawPathMultiFloor(path);

  if (!path) {
    console.warn("No path found. Check names or graph connections.", { start, end });
  }
});

document.getElementById("floorSelect").addEventListener("change", function () {
  showFloor(this.value);
});

// Rotate currently visible floor
let angle = 0;
function rotateMap() {
  angle = (angle + 90) % 360;
  const current = getCurrentFloor();
  const group = document.getElementById(current);
  if (group) group.style.transform = `rotate(${angle}deg)`;
}
document.getElementById("rotateBtn").addEventListener("click", rotateMap);

// Default: show only Floor 1
showFloor("floor-1");

document.getElementById("hallSearchBtn").addEventListener("click", () => {
  const input = document.getElementById("hallSearch").value.trim().toLowerCase();

  document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));

  const hallId = hallMap[input];
  const roomId = roomMap[input];
  const targetId = hallId || roomId;

  if (targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      el.classList.add("highlight");
      setTimeout(() => el.classList.remove("highlight"), 3000);
    }
  } else {
    alert("Not found. Try a hall (Main Hall Center, Vertical Hall Mid) or a room (VC Office, Chumbow Hall).");
  }
});

let worldAngle = 0;
function rotateWorldMap() {
  worldAngle = (worldAngle + 90) % 360;
  const map = document.getElementById("worldMap");
  map.style.transform = `rotate(${worldAngle}deg)`;
  map.style.transformOrigin = "50% 50%";
}

document.getElementById("schoolMarker").addEventListener("click", () => {
  // Hide world map, show indoor navigation
  document.getElementById("worldMapContainer").style.display = "none";
  document.getElementById("building-svg").style.display = "block";
  showFloor("floor-1");
});



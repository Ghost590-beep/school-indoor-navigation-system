// ========= Floor graphs =========
const floors = {
  // Minimal Floor 1 (add more nodes later)
 "floor-1": {
  nodes: {
    // Doors
    "sick-bay":        { x: 205, y: 200 },
    "george-mbarika":  { x: 290, y: 355 },
    "library":         { x: 715, y: 360 },
    "admission":       { x: 770, y: 205 },
    "market":          { x: 645, y: 240 },
    "market-dep":      { x: 635, y: 160 },
    "george-prop":     { x: 795, y: 160 },
    "restroom-1":      { x: 850, y: 295 },

    // Stairs + Entrance
    "stairs-floor-1":  { x: 450, y: 110 },
    "main-entrance":   { x: 450, y: 500 },

    // Hallways (use SVG IDs directly)
    "hallway-main":    { x: 550, y: 300 },
    "hallway-vertical":{ x: 400, y: 300 }
  },

  graph: {
  // Rooms → hallways
  "sick-bay": ["hallway-vertical"],
  "george-mbarika": ["hallway-main"],
  "library": ["hallway-main"],
  "admission": ["hallway-main"],
  "market": ["hallway-main"],
  "market-dep": ["hallway-vertical"],
  "george-prop": ["hallway-vertical"],
  "restroom-1": ["hallway-main"],

  // Stairs + entrance
  "stairs-floor-1": ["hallway-vertical"],
  "main-entrance": ["hallway-main"],

  // Hallways → EVERYTHING THEY TOUCH
  "hallway-main": [
    "george-mbarika",
    "library",
    "admission",
    "market",
    "restroom-1",
    "main-entrance",
    "hallway-vertical"
  ],

  "hallway-vertical": [
    "sick-bay",
    "market-dep",
    "george-prop",
    "stairs-floor-1",
    "hallway-main"
  ]
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
      "restroom": ["hall-main-left"],
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
    // ===== ROOM DOORS =====
    "game-hall": { x: 200, y: 235 },
    "french-hall-1": { x: 500, y: 235 },
    "eric-hall": { x: 800, y: 235 },
    "french-hall": { x: 775, y: 455 },

    "head-dep": { x: 160, y: 350 },
    "admin-ass": { x: 345, y: 350 },
    "dean-faculty": { x: 160, y: 445 },
    "BMS-faculty": { x: 345, y: 445 },

    "restroom-3": { x: 100, y: 305 },

    // ===== STAIRS =====
    "stairs-floor-3": { x: 500, y: 530 },

    // ===== MAIN HORIZONTAL HALL =====
    "hall-main-left": { x: 200, y: 300 },
    "hall-main-center": { x: 500, y: 300 },
    "hall-main-right": { x: 800, y: 300 },

    // ===== CENTER VERTICAL HALL =====
    "hall-vert-main-top": { x: 500, y: 350 },
    "hall-vert-main-mid": { x: 500, y: 420 },
    "hall-vert-main-bottom": { x: 500, y: 500 },

    // ===== LEFT VERTICAL HALL =====
    "hall-vert-left-top": { x: 252, y: 350 },
    "hall-vert-left-mid": { x: 252, y: 435 },
    "hall-vert-left-bottom": { x: 252, y: 510 }
  },

  graph: {
    // ===== ROOMS → HALLS =====
    "game-hall": ["hall-main-left"],
    "french-hall-1": ["hall-main-center"],
    "eric-hall": ["hall-main-right"],
    "french-hall": ["hall-vert-main-mid"],

    "head-dep": ["hall-vert-left-top"],
    "admin-ass": ["hall-vert-left-top"],
    "dean-faculty": ["hall-vert-left-mid"],
    "BMS-faculty": ["hall-vert-left-mid"],

    "restroom-3": ["hall-main-left"],
    "stairs-floor-3": ["hall-vert-main-bottom"],

    // ===== MAIN HALLWAY =====
    "hall-main-left": [
      "hall-main-center",
      "game-hall",
      "restroom-3",
      "hall-vert-left-top"
    ],

    "hall-main-center": [
      "hall-main-left",
      "hall-main-right",
      "french-hall-1",
      "hall-vert-main-top"
    ],

    "hall-main-right": [
      "hall-main-center",
      "eric-hall"
    ],

    // ===== CENTER VERTICAL =====
    "hall-vert-main-top": [
      "hall-main-center",
      "hall-vert-main-mid"
    ],

    "hall-vert-main-mid": [
      "hall-vert-main-top",
      "hall-vert-main-bottom",
      "french-hall"
    ],

    "hall-vert-main-bottom": [
      "hall-vert-main-mid",
      "stairs-floor-3"
    ],

    // ===== LEFT VERTICAL =====
    "hall-vert-left-top": [
      "hall-main-left",
      "hall-vert-left-mid",
      "head-dep",
      "admin-ass"
    ],

    "hall-vert-left-mid": [
      "hall-vert-left-top",
      "hall-vert-left-bottom",
      "dean-faculty",
      "BMS-faculty"
    ],

    "hall-vert-left-bottom": [
      "hall-vert-left-mid",
       "hall-main-left"
    ]
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
    "gym": { x: 250, y: 380 },
    "cantine": { x: 710, y: 235 },
    "pondi-hall": { x: 800, y: 455 },

    "door-gym": { x: 400, y: 380 },       // approximate left wall door
    "door-cantine": { x: 705, y: 165 },   // top wall door
    "door-pondi": { x: 705, y: 455 },     // left wall door

    "stairs-basement": { x: 850, y: 110 },

    // hallway waypoints
    "hall-basement-top": { x: 500, y: 120 },
    "hall-basement-main": { x: 780, y: 350 },
    "hall-basement-vertical": { x: 550, y: 430 },
    "hall-basement-left": { x: 250, y: 180 }
  },
graph: {
  // Rooms connect via their doors
  "gym": ["door-gym"],
  "cantine": ["door-cantine"],
  "pondi-hall": ["door-pondi"],

  // Doors connect to hallways
  "door-gym": ["gym", "hall-basement-left"],
  "door-cantine": ["cantine", "hall-basement-top"],
  "door-pondi": ["pondi-hall", "hall-basement-vertical"],

  // Stairs connect to top hallway
  "stairs-basement": ["hall-basement-top"],

  // Hallway connectivity
  "hall-basement-top": ["door-cantine", "stairs-basement", "hall-basement-main", "hall-basement-left"],
  "hall-basement-main": ["hall-basement-top", "hall-basement-vertical"],
  "hall-basement-vertical": ["hall-basement-main", "door-pondi"],
  "hall-basement-left": ["hall-basement-top", "door-gym"]
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

// ===== Floor helper functions =====
function getCurrentFloor() {
  return document.getElementById("floorSelect").value;
}

function setCurrentFloor(floorId) {
  document.getElementById("floorSelect").value = floorId;
  document.querySelectorAll("svg g.floor").forEach(f => {
    f.style.display = f.id === floorId ? "block" : "none";
  });
}

/*
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
  // Clear old drawings
  document.querySelectorAll(".nav-path, .nav-node").forEach(el => el.remove());
  if (!path || path.length < 2) return;

  const currentFloor = getCurrentFloor();
  const svgGroup = document.getElementById(currentFloor);
  if (!svgGroup) return;

  // Keep ONLY nodes that belong to the current floor
  const floorPath = path.filter(id => getNodeFloor(id) === currentFloor);

  if (floorPath.length < 2) {
    console.warn("Path exists, but not on this floor");
    return;
  }

  // Build polyline points
  const points = floorPath
    .map(id => {
      const node = floors[currentFloor].nodes[id];
      return node ? `${node.x},${node.y}` : null;
    })
    .filter(Boolean)
    .join(" ");

  if (points.split(" ").length < 2) return;

  // Draw path line
  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("class", "nav-path");
  svgGroup.appendChild(polyline);

  // Draw nodes
  floorPath.forEach(id => {
    const node = floors[currentFloor].nodes[id];
    if (!node) return;
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", node.x);
    c.setAttribute("cy", node.y);
    c.setAttribute("r", 4);
    c.setAttribute("class", "nav-node");
    svgGroup.appendChild(c);
  });
}
*/

function bfsMultiFloor(start, end) {
  const startFloor = getNodeFloor(start);
  const endFloor = getNodeFloor(end);

  if (!startFloor || !endFloor) return null;

  const queue = [[{ node: start, floor: startFloor }]];
  const visited = new Set();

  while (queue.length) {
    const path = queue.shift();
    const last = path[path.length - 1];
    const key = `${last.node}@${last.floor}`;

    if (visited.has(key)) continue;
    visited.add(key);

    // ✅ Reached destination on correct floor
    if (last.node === end && last.floor === endFloor) {
      return path;
    }

    // 🟢 Same-floor neighbors ONLY
    const graph = floors[last.floor].graph[last.node];
    if (graph) {
      for (const n of graph) {
        queue.push([...path, { node: n, floor: last.floor }]);
      }
    }

    // 🟣 Cross-floor (stairs ONLY)
    const cross = crossFloorGraph[last.node];
    if (cross) {
      for (const stair of cross) {
        const stairFloor = getNodeFloor(stair);
        if (stairFloor) {
          queue.push([...path, { node: stair, floor: stairFloor }]);
        }
      }
    }
  }

  return null;
}

function splitPathByFloor(path) {
  const segments = [];
  let current = [];

  for (const step of path) {
    if (!current.length || current[0].floor === step.floor) {
      current.push(step);
    } else {
      segments.push(current);
      current = [step];
    }
  }

  if (current.length) segments.push(current);
  return segments;
}

function drawPathMultiFloor(path) {
  if (!path || path.length < 2) return;

  const floorGroups = {};

  // Group path steps by floor
  path.forEach(step => {
    if (!floorGroups[step.floor]) floorGroups[step.floor] = [];
    floorGroups[step.floor].push(step);
  });

  for (const floorId in floorGroups) {
    const svgGroup = document.getElementById(floorId);
    if (!svgGroup) continue;

    // Clear only previous drawings on this floor
    svgGroup.querySelectorAll(".nav-path, .nav-node").forEach(el => el.remove());

    const steps = floorGroups[floorId];

    const points = steps
      .map(p => floors[floorId].nodes[p.node])
      .filter(Boolean)
      .map(n => `${n.x},${n.y}`)
      .join(" ");

    if (points.split(" ").length < 2) continue;

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", points);
    polyline.setAttribute("class", "nav-path");
    svgGroup.appendChild(polyline);

    // Draw nodes
    steps.forEach(p => {
      const n = floors[floorId].nodes[p.node];
      if (!n) return;
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", n.x);
      c.setAttribute("cy", n.y);
      c.setAttribute("r", 4);
      c.setAttribute("class", "nav-node");
      svgGroup.appendChild(c);
    });
  }
}

function playPath(path, delay = 3000) {
  if (!path || path.length < 2) return;

  const segments = splitPathByFloor(path);
  let segIndex = 0;

  function drawSegment() {
    if (segIndex >= segments.length) return;

    const segment = segments[segIndex];
    const floor = segment[0].floor;

    // Switch to floor first
    setCurrentFloor(floor);

    // Draw full segment at once
    drawPathMultiFloor(segment);

    segIndex++;
    if (segIndex < segments.length) {
      setTimeout(drawSegment, delay);
    }
  }

  drawSegment();
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
  "quality control": "quality-control",

//Basement
  "gym": "gym",
  "cantine": "cantine",
  "pondi hall": "pondi-hall",
  // … keep existing mappings

  // Floor 1
  "sick bay": "sick-bay",
  "george mbarika hall": "george-mbarika",
  "library": "library",
  "admission": "admission",
  "marketing": "market",
  "marketing department": "market-dep",
  "proprietor's rep": "george-prop",
  "restroom floor 1": "restroom-1",
  "stairs floor 1": "stairs-floor-1",
  "main entrance": "main-entrance",
  "hallway main": "hallway-main",
  "hallway vertical": "hallway-vertical",

  // Floor 3
"game hall": "game-hall",
"french hall 1": "french-hall-1",
"french hall 2": "french-hall",
"eric mbarika hall": "eric-hall",
"head of department": "head-dep",
"dean ict faculty": "dean-faculty",
"administrative assistant": "admin-ass",
"dean bms faculty": "BMS-faculty",
"restroom floor 3": "restroom-3"


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
  if (!input) return null;

  const key = input.trim().toLowerCase();

  // Handle stairs dynamically
  if (key === "stairs") {
    const curr = getCurrentFloor();
    if (curr === "basement") return "stairs-basement";
    return `stairs-${curr}`;
  }

  // 1️⃣ Room names
  if (roomMap[key]) return roomMap[key];

  // 2️⃣ Base aliases
  if (baseNameMap[key]) return baseNameMap[key];

  // 3️⃣ Hallways
  if (hallMap[key]) return hallMap[key];

  // 4️⃣ Assume user typed exact node ID
  return key;
}


// ========= Controls =========
document.getElementById("navigateBtn").addEventListener("click", () => {
  const start = normalize(document.getElementById("startRoom").value);
  const end = normalize(document.getElementById("endRoom").value);
/*
  const path = bfsMultiFloor(start, end);
  drawPathMultiFloor(path);
*/
const path = bfsMultiFloor(start, end);

if (!path) {
  console.warn("No path found", { start, end });
  return;
}

// Draw current floor immediately
playPath(path, 3000); // animate with automatic floor switching

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




/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

// function createGraph(edges){
//     const graph = {}

//     for (const edge of edges) {
//       const [a, b] = edge
//       if (!(a in graph)) {
//         graph[a] = []
//       }
//       if (!(b in graph)) {
//         graph[b] = []
//       }
//       graph[a].push(b)
//       graph[b].push(a)
//     }
//     return graph
//   }

function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

// find a path from start to dest-key
function hasPathRec(graph, start, dest, visted = new Set()) {
  if (start === dest) return true;
  if (visted.has(start)) return false;
  visted.add(start);
  for (const nebhiours of graph) {
    if (hasPathRec(graph, start, dest) === true) {
      return true;
    }
  }
  return false;
}

function finalFunctionBundel(edge, start, dest) {
  const graph = createGraph(edges);
  return hasPathRec(graph, start, dest);
}

console.log(createGraph(edges));

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function depthFSIterative(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited?.add(node);
      for (const neighbour of graph[node]) {
        // console.log(neighbour, "neighbourneighbour");
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

// console.log(depthFSIterative(graph, "a"));

function depthFSR(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    for (const neighboor of graph[start]) {
      depthFSR(graph, neighboor, visited);
    }
  }
}
console.log(depthFSR(graph, "a"));

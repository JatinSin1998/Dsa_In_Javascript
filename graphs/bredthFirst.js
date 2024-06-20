const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function breadthFS(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighboor of graph[node]) {
      if (!visited.has(neighboor)) {
        visited.add(neighboor);
        queue.push(neighboor);
      }
    }
  }
}

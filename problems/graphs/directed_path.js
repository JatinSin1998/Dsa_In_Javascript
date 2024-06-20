/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.



*/

function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visibile = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) return true;
    if (!visibile.has(node)) {
      visibile.add(node);
      for (const neighboor of graph[node]) {
        stack.push(neighboor);
      }
    }
  }
  return false;
}

function hasPathBFS(graph, start, dest) {
  const queue = [start];
  const visible = new Set();
  while (queue?.length > 0) {
    const node = queue.shift();
    // Having doubt first we want to check nebhiours
    if (node === dest) return true;
    if (!visible.has(node)) {
      visible.add(node);
      for (const neighboor of graph[node]) {
        queue.push(neighboor);
      }
    }
  }
  return false;
}

function hasPathRec(graph, start, dest, visted = new Set()) {
  if (start === dest) return true;
  if (!visted.has(start)) {
    visted.add(start);
  }
  for (const nebhiours of graph[start]) {
    if (hasPathRec(graph, nebhiours, dest)) return true;
  }
  return false;
}

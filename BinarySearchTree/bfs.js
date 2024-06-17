// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }
//  iterative approch
const breadthFirstSearch = (root) => {
  const value = [];
  const queue = [root];
  if (root === null) {
    return value;
  }
  while (queue?.length > 0) {
    const node = queue?.shift(); // point of optimization
    value?.push(node?.key);

    if (node.left !== null) {
      queue?.push(node.left);
    }

    if (node.right !== null) {
      queue?.push(node.left);
    }
  }
  return values;
};

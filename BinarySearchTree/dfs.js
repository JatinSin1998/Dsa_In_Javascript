// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

const depthFirstTraversal = (root) => {
  const value = [];
  if (root === null) {
    return value;
  }

  const stack = [root];

  while (stack?.length > 0) {
    const node = stack.pop();
    value.push(node.key);
    if (node?.right !== null) {
      stack?.push(node.right);
    }
    if (node?.left !== null) {
      stack?.push(node.left);
    }
  }
  return value;
};

const recursiveDepthFirstTraversal = (root) => {
  const value = [];
  if (root === null) {
    return [];
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValue = recursiveDepthFirstTraversal(root.right);

  return [root.key, ...leftValues, ...rightValue];
};

class BtsNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BtsNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  insterNode(node, newNode) {
    // node means root node
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insterNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insterNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    // node -> root
    if (node === null) {
      return null;
    }

    if (key < node.left) {
      node.left = this.deleteNode(node.left);
    } else if (key > node.right) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inorderTraversal() {
    const result = [];
    this.inorder(this.root, result);
    return result;
  }

  inorder() {
    if (node !== null) {
      this.inorder(node.left, result);
      result.push(node.key);
      this.inorder(node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this.preorder(this.root, result);
    return result;
  }

  preorder() {
    if (node !== null) {
      result.push(node.key);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this.postorder(this.root, result);
    return result;
  }

  postorder() {
    if (node !== null) {
      this.postorder(node.left, result);
      this.postorder(node.right, result);
      result.push(node.key);
    }
  }
}

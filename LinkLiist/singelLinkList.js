class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

//insert at given node

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("Given prv node can,t be null ");
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

// delete the first node

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

//   //delete last node (second last node)

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // nothing to delete if list is empty
  }

  if (!this.head.next) {
    this.head = null; // if there is only one node
    return;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
};

LinkedList.prototype.deleteByKey = function (key) {
  //if list is empty
  if (!this.head) {
    console.log("list is empty");
    return;
  }

  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }

  console.log("No node found with key: ", key);
};

//search operation

LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }

  return false;
};

//traversal

LinkedList.prototype.printList = function () {
  let current = this.head;

  let listValues = [];
  while (current) {
    listValues.push(current.data); // add data to list
    current = current.next; //move to next node
  }
  console.log(listValues.join(" -> "));
};

// little challenging
// reverse a linked list

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
};

const list = new LinkedList();

// Insert nodes at the beginning
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
console.log("After inserting at the beginning:");
list.printList(); // Output: 30 -> 20 -> 10 -> null

// Insert nodes at the end
list.insertAtEnd(40);
list.insertAtEnd(50);
console.log("After inserting at the end:");
list.printList(); // Output: 30 -> 20 -> 10 -> 40 -> 50 -> null

// Insert a node after a given node
list.insertAfter(list.head.next, 25); // Inserting after node with data 20
console.log("After inserting after a given node:");
list.printList(); // Output: 30 -> 20 -> 25 -> 10 -> 40 -> 50 -> null

// Delete the first node
list.deleteFirstNode();
console.log("After deleting the first node:");
list.printList(); // Output: 20 -> 25 -> 10 -> 40 -> 50 -> null

// Delete the last node
list.deleteLastNode();
console.log("After deleting the last node:");
list.printList(); // Output: 20 -> 25 -> 10 -> 40 -> null

// Delete a node by key
list.deleteByKey(25);
console.log("After deleting a node by key:");
list.printList(); // Output: 20 -> 10 -> 40 -> null

// Search for a node
console.log("Search for a node with data 10:", list.search(10)); // Output: true
console.log("Search for a node with data 50:", list.search(50)); // Output: false

// Reverse the list
list.reverse();
console.log("After reversing the list:");
list.printList(); // Output: 40 -> 10 -> 20 -> null

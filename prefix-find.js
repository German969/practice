const nums = [];

// O(1)
function add(num) {
  nums.push(num); // 1
}

// O(N * M)
function countWithPrefix(prefix) {
  return nums.reduce((total, current) => {
    return current.startsWith(prefix) ? total + 1 : total;
  }, 0);
}

// add(number: string) -> null
// countWithPrefix(prefix: string) -> int

add('1231');
add('12');
add('11133');
add('312122');

console.log(countWithPrefix('1')); // 3
console.log(countWithPrefix('12')); // 2
console.log(countWithPrefix('3128731298')); // 0

class Node {
  constructor(key) {
    this.key = key;
    this.children = [];
  }

  addChild(childNode) {
    this.children = [...this.children, childNode];
  }
}

// const node1 = new Node("121");

// 121
class Tree {
  constructor() {
    this.root = { key: '', children: [] };
  }

  // 121, root
  addNode(key, currentNode) {
    if (!key) {
      return;
    }

    if (key[0] === currentNode.key || currentNode.key === '') {
      // --------------------------------------------
      // We have an array of 10 elements, we can use the index to determine the position

      let insertionPoint = currentNode.children.find(
        (node) => node.key === key[1]
      );

      if (!insertionPoint) {
        const newNode = { key: key[1], children: [] };
        currentNode.children.push(newNode);
        this.addNode(key.substring(1), newNode);
      } else {
        this.addNode(key.substring(1), insertionPoint);
      }
    }
  }
}

const tree = new Tree();

tree.addNode('121', tree.root);

tree.addNode(node1, 1);

//  ("1")
// [("12"),             ("13")]
// [("121"), ("122")]     [("131")]
//                                       ()
//                                       /
//            (1)                      (1)
//     /   \                     /
//   (2)    (3)                (2)
//  /  \                      /  \
// (1) (2)                  (1)   (2)

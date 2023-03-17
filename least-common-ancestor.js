// - Find the least common ancestor of two nodes in a binary tree. Follow up: efficient solution if this is a BST with distinct keys.

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }
}

let root;

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

/*
     1
   /   \
  2     3
 / \   / \
4   5 6   7
*/

// Solution 1: Find common path and traverse arrays

// Finds the path from root node to given root of the tree
const findPath = (root, n, path) => {
  // base case
  if (root == null) {
    return false;
  }

  // Store this node. The node will be removed if not in path from root to n.
  path.push(root.data);

  // When we find n the path is completed
  if (root.data == n) {
    return true;
  }

  // We do the search until we fint the node or reach the end of the branch

  // Search path to the left node first (recursively)
  if (root.left != null && findPath(root.left, n, path)) {
    return true;
  }

  // Repeat for the right node if no match in left side
  if (root.right != null && findPath(root.right, n, path)) {
    return true;
  }

  // Failure case. Node not found from root, Remove root and return
  path.pop();

  return false;
};

// let path = [];
// findPath(root, 6, path);
// console.log(path); // [ 1, 3, 6 ]

const findLCA = (root, n1, n2) => {
  let path1 = [];
  let path2 = [];

  let path1Present = findPath(root, n1, path1); // This also updates path1
  let path2Present = findPath(root, n2, path2); // This also updates path1

  // If some of the paths not found (invalid input)
  if (!path1Present || !path2Present) {
    console.log(path1.length > 0 ? 'n1 is present' : 'n1 is missing');
    console.log(path2.length > 0 ? 'n2 is present' : 'n2 is missing');
    return -1;
  }

  let i;

  // Traverse both paths
  for (i = 0; i < path1.length && i < path2.length; i++) {
    // Until we find a missmatch
    if (path1[i] != path2[i]) break;
  }

  // Now i - 1 stores the least common ancestor
  return path1[i - 1];
};

// console.log(findLCA(root, 4, 3));
// console.log(findLCA(root, 6, 7));

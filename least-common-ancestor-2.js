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

// Solution 2: Traverse the tree one time

// Assuming n1 and n2 are present in the tree

// If any of the given keys (n1 and n2) matches with the root, then the root is LCA (assuming that both keys are present).
// If the root doesn’t match with any of the keys, we recur for the left and right subtree.

const findLCA = (node, n1, n2) => {
  // Base case
  if (node == null) {
    return null;
  }

  // If n1 or n2 are the root, report it as LCA
  if (node.data == n1 || node.data == n2) {
    return node;
  }

  // Look for LCA in left and right subtrees (above statement returns founded key)
  let leftLCA = findLCA(node.left, n1, n2);

  let rightLCA = findLCA(node.right, n1, n2);

  // If both of the above calls return Non-NULL, one node is in the left subtree and the other in the right
  // So this is the LCA
  if (leftLCA != null && rightLCA != null) {
    return node;
  }

  // Otherwise one of the nodes are the root and LCA
  return leftLCA != null ? leftLCA : rightLCA;
};

// console.log(findLCA(root, 4, 3)?.data);
// console.log(findLCA(root, 6, 7)?.data);

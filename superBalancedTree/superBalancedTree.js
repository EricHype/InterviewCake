class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

class NodeDepthPair {
  constructor(node, depth) {
      this.node = node;
      this.depth = depth;
  }
}


function isTreeSuperBalanced(treeRoot) {

  if (treeRoot == null) {
    return true;
  }

  const depths = [];
  const nodes = [];

  nodes.push(new NodeDepthPair(treeRoot, 0));
  
  while (nodes.length > 0) {
    const nodeDepthPair = nodes.pop();
    const node = nodeDepthPair.node;
    const depth = nodeDepthPair.depth;

    console.log(`evaluating NodeDeptPair: ${JSON.stringify(nodeDepthPair)}`)
    // case: we found a leaf
    if (node.left == null && node.right == null) {
       // we only care if it's a new depth
       if (!depths.includes(depth)) {
        depths.push(depth);
       }

        // two ways we might now have an unbalanced tree:
        //   1) more than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (depths.length > 2 || (depths.length == 2
                && Math.abs(depths[0] - depths[1]) > 1)) {
            return false;
        }
    } else {
      if (node.left != null) {
        nodes.push(new NodeDepthPair(node.left, depth + 1));
      }
      if (node.right != null) {
        nodes.push(new NodeDepthPair(node.right, depth + 1));
      }
    }
  }

  return true;
}

// console.log(`isTreeSuperBalanced null: ${isTreeSuperBalanced(null)}`)

// const tree1 = new BinaryTreeNode(1)
// console.log(`isTreeSuperBalanced root node only: ${isTreeSuperBalanced(tree1)}`)

// const tree2 = new BinaryTreeNode(1)
// tree2.insertLeft(new BinaryTreeNode(2))
// tree2.insertRight(new BinaryTreeNode(3))

// console.log(`isTreeSuperBalanced 3 node balanced: ${isTreeSuperBalanced(tree2)}`)


const tree3 = new BinaryTreeNode(1)
const tree3_d1L = tree3.insertLeft(2)
const tree3_d1R = tree3.insertRight(3)
const tree3_d2L = tree3_d1L.insertLeft(7)
const tree3_d3L = tree3_d2L.insertLeft(9)

console.log(`isTreeSuperBalanced unalanced: ${isTreeSuperBalanced(tree3)}`)

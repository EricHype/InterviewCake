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

class NodeAndBounds {
  constructor(node, lowerBound, upperBound) {
    this.node = node
    this.lowerBound = lowerBound
    this.upperBound = upperBound
  }
}

//valid binary search tree, left is always less than right, 
//l/r values are more than current value

function isValidBinaryTree(rootNode) {

    if(rootNode == null) {
      return true;
    }

    if(rootNode.left == null && rootNode.right == null) {
      return true
    }

    const nodeAndBoundsStack = [new NodeAndBounds(rootNode, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)]

    while(nodeAndBoundsStack.length > 0) {

      const nodeAndBounds = nodeAndBoundsStack.pop()
      const node = nodeAndBounds.node
      const lowerBound = nodeAndBounds.lowerBound
      const upperBound = nodeAndBounds.upperBound

      console.log(`testing ${JSON.stringify(nodeAndBounds)}`)
      if(node.value <= lowerBound || node.value >= upperBound) {
        return false
      }

      if(node.left) {
        nodeAndBoundsStack.push(new NodeAndBounds(node.left, lowerBound, node.value))
      }

      if(node.right) {
        nodeAndBoundsStack.push(new NodeAndBounds(node.right, node.value, upperBound))
      }
    }

    return true
}

// console.log(`isValidBinaryTree null: ${isValidBinaryTree(null)}`)

// const tree1 = new BinaryTreeNode(1)
// console.log(`isValidBinaryTree root node only: ${isValidBinaryTree(tree1)}`)

// const tree2 = new BinaryTreeNode(5)
// tree2.insertLeft(7)
// tree2.insertRight(3)

// console.log(`isValidBinaryTree 3 nodes not balanced, should be false: ${isValidBinaryTree(tree2)}`)

// const tree3 = new BinaryTreeNode(5)
// tree3.insertLeft(1)

// console.log(`isValidBinaryTree 2 node balanced, should be true: ${isValidBinaryTree(tree3)}`)

const tree4 = new BinaryTreeNode(5)
tree4.insertRight(2)

console.log(`isValidBinaryTree right node is less, should be false ${isValidBinaryTree(tree4)}`)


// const tree5 = new BinaryTreeNode(1)
// tree5.insertRight(2)
// tree5.insertRight(3)

// console.log(`isValidBinaryTree 2 node not balanced: ${isValidBinaryTree(tree4)}`)

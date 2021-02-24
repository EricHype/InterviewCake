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

//this check every element, works but not ideal
function findSecondLargestElement(rootNode) {

  if(rootNode == null) {
    return null;
  }

  let largestValue = null
  let secondLargestValue = null

  let nodeStack = [rootNode]

  while(nodeStack.length > 0) {

    const node = nodeStack.pop()

    if(largestValue == null || node.value > largestValue) {
      secondLargestValue = largestValue
      largestValue = node.value
    } else if(secondLargestValue == null || node.value > secondLargestValue) {
      secondLargestValue = node.value
    }

    if(node.left) {
      nodeStack.push(node.left)
    }

    if(node.right) {
      nodeStack.push(node.right)
    }
  }

  return secondLargestValue;
}

const tree = new BinaryTreeNode(50)
const d1L = tree.insertLeft(30)
const d1R = tree.insertRight(60)

console.log(`simple test, answer should be 50, is: ${findSecondLargestElement(tree)}`)


function findLargest(rootNode) {
  if (rootNode == null) {
    return null;
  }
  
  let largest = null
  let current = rootNode

  while (current != null) {
    if (current.right == null) {
        largest = current;
    }
    current = current.right;
  }
  return largest.value;
}

function findSecondLargest(rootNode) {
  if (rootNode == null) {
    return null;
  }

  if(rootNode.left == null && rootNode.right == null) {
    return null;
  }

  let current = rootNode;

  while (true) {
    // case: we're currently at largest, and largest has a left subtree,
    // so 2nd largest is largest in said subtree
    if (current.left != null && current.right == null) {
      return findLargest(current.left);
    }

    // case: we're at parent of largest, and largest has no left subtree,
    // so 2nd largest must be current node
    if (current.right != null
      && current.right.left == null
      && current.right.right == null) {
        return current.value;
    }

    // otherwise: step right
    current = current.right;
  }
}

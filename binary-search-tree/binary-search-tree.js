class TreeNode {
  constructor(
    left,
    right,
    value
  ) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

const treeInsert = (tree, value) => {
  const newNode = new TreeNode(null, null, value);

  let node = tree;
  const checkNode = () => {
    if (value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        node = node.left;
        checkNode()
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        node = node.right;
        checkNode();
      }
    }
  }
  checkNode();

  return tree
}

const treeDelete = () => {

}

module.exports = {
  TreeNode,
  treeInsert
}
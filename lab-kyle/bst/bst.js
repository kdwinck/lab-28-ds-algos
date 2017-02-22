const Node = require('./node')

exports = module.exports = {}

exports.BST = function() {
  this.root = null
}

exports.insert = function(bst, val) {
  let newNode = new Node(val)

  if (!bst.root) {
    bst.root = newNode
    return newNode
  }

  let treeNode = bst.root

  find(treeNode, newNode)

  function find(treeNode, newNode) {
    if (newNode.val < treeNode.val) {
      if (treeNode.left) {
        find(treeNode.left, newNode)
      } else {
        treeNode.left = newNode
        return newNode
      }
    } else {
      if (treeNode.right) {
        find(treeNode.right, newNode)
      } else {
        treeNode.right = newNode
        return newNode
      }
    }
  }
  return newNode
}

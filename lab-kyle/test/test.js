const expect = require('chai').expect
const bst = require('../bst/bst')

describe('binary search tree', function() {

  describe('insert()', () => {
    beforeEach((done) => {
      this.BST = new bst.BST()
      done()
    })

    it('should create a new node if the tree is empty', done => {
      expect(this.BST.root).to.equal(null)
      bst.insert(this.BST, 3)
      expect(this.BST.root.val).to.equal(3)
      done()
    })

    it('should add a larger node to the right', done => {
      bst.insert(this.BST, 3)
      expect(this.BST.root.val).to.equal(3)
      let node = bst.insert(this.BST, 5)
      expect(this.BST.root.right).to.equal(node)
      done()
    })

    it('should add a smaller node to the left', done => {
      bst.insert(this.BST, 3)
      let node = bst.insert(this.BST, 1)
      expect(this.BST.root.left).to.equal(node)
      done()
    })

    it('should add a node between a smaller and larger value', done => {
      bst.insert(this.BST, 3)
      bst.insert(this.BST, 5)
      let node = bst.insert(this.BST, 4)
      expect(this.BST.root.right.left).to.equal(node)
      done()
    })
  })
})

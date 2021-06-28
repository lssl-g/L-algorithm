/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {

  function f (root) {
    if (!root) return 0
    let l = f(root.left)
    let r = f(root.right)
    return Math.max(l, r) + 1
  }

  return f (root)
}

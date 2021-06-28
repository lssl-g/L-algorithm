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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  const arr = []
  function f (root, curr) {
    if (!root) return
    if (root.left === null && root.right === null) {
      arr.push(curr + root.val)
    }
    f (root.left, curr + root.val)
    f (root.right, curr + root.val)
  }
  f (root, 0)
  return arr.indexOf(targetSum) > -1
}

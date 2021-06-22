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
 * @return {number[]}
 */
// 方法一： 递归
/* const preorderTraversal = function(root) {
  const res = []
  function tr (root) {
    if (!root) return 
    res.push(root.val)
    tr(root.left)
    tr(root.right)
  }
  tr(root)
  return res
} */
// 方法二： 迭代
const preorderTraversal = function(root) { 
  const res = []
  const stk = []
  while (stk.length || root) {
    while (root) {
      res.push(root.val)
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    root = root.right
  }
  return res
}

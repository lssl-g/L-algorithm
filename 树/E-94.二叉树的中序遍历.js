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
// 方法一： 迭代
/* const inorderTraversal = function(root) {
  let res = []
  function tr (root) {
    if (!root) return
    tr(root.left)
    res.push(root.val)
    tr(root.right)
  }
  tr(root)
  return res
} */
// 方法二： 遍历
const inorderTraversal = function(root) { 
  const res = []
  const stk = []
  while (root || stk.length) {
    while(root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const res = []
  if (!root) return res
  const queue = [root]
  while(queue.length) {
    const length = queue.length
    let arr = []
    for (let i = 0; i < length; i++) {
      const curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
      res.push(arr)
  }
  return res
}

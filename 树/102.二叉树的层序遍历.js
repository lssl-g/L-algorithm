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
  if (!root) return null
  const res = []
  const queue = [[root]]
  while (queue.length) {
    let t = queue[0]
    if (!t.length) break
    let arr = []
    let c = []
    for (let i = 0; i < t.length; i++) {
      arr.push(t[i].val)
      if (t[i].left) c.push(t[i].left)
      if (t[i].right) c.push(t[i].right)
    }
    if (arr.length) res.push(arr)
    if (c.length) queue.push(c)
    queue.shift()
  }
  return res
}

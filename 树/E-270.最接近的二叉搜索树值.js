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
 * @param {number} target
 * @return {number}
 */
// 方法一:递归+线性查找
const closestValue = function (root, target) {
  const arr = []
  function inorder (root) {
    if (!root) return
    inorder(root.left, arr)
    arr.push(root.val)
    inorder(root.right, arr)
  }

  inorder(root)

  let abs = Infinity
  let res = null
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - target) < abs) {
      abs = Math.abs(arr[i] - target)
      res = arr[i]
    } else {
      break
    }
  }
  return res
}
const r = closestValue (null, 3.714286)
console.log(r)

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
 * @return {boolean}
 */

// 题解 一：
const isSymmetric = function (root) { 

  function f (l, r) {
    if (l === null && r === null) return true
    if (l === null || r === null) return  false
    return l.val === r.val && f(l.left, r.right) && f(l.right, r.left)
  }
  return f (root.left, root.right)
}

// own
/* const isSymmetric = function (root) {
  const res = [root]
  while (res.length) {
    const length = res.length
    let currArr = []
    for (let i = 0; i < length; i++) {
      let curr = res.shift()
      currArr.push(curr && curr.val)
      if (curr) {
        res.push(curr.left)
        res.push(curr.right)
      }
    }
    let l = 0
    let r = currArr.length - 1
    while (l < r) {
      if (currArr[l] === currArr[r]) {
        l++
        r--
        continue
      }
      return false
    }
  }
  return true
} */

const isSymmetric = function(root) {
  function f (left, right) {
    if (left === null && right === null) return true
    else if (left === null || right === null) return false
    else return left.val === right.val && f(left.left, right.right) && f(left.right, right.left)
  }
  return f(root.left, root.right)
}

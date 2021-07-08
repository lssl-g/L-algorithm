const sumNumbers = function(root) {
  const arr = []
  function f (root, num) {
    if (!root) return 
    if (root.left === null && root.right === null) {
      return arr.push(num * 10 + parseInt(root.val))
    }
    f(root.left, num * 10 + parseInt(root.val))
    f(root.right, num * 10 + parseInt(root.val))
  }
  f(root, 0)
  return arr.reduce((p, c) => {
    return p + c
  }, 0)
}

const minDepth = function(root) {
  if (!root) {
    return 0
  }
  if (root.left === null && root.right === null) {
    return 1
  }
  let min = Infinity
  if (root.left) {
    min = Math.min(minDepth(root.left), min)
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min)
  }
  return min + 1
}

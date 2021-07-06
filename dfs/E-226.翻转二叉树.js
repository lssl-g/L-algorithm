const invertTree = function (root) {
  if (root === null) return null
  if (root.left === null && root.right === null) return root
  const temp = root.left
  root.left = root.right
  root.right = temp
  if (root.left) invertTree (root.left)
  if (root.right) invertTree (root.right)
  return root
}

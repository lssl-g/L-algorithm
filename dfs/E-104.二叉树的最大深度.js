const maxDepth = function (root) {
  let res = 0
  function dfs (root, num) {
    if (!root) {
      return res = Math.max(num, res)
    }
    dfs(root.left, num + 1)
    dfs(root.right, num + 1)
  }
  dfs (root, 0)
  return res
}
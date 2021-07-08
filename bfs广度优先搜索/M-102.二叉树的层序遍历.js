const levelOrder = function (root) { 
  const res = []
  if (!root) return res
  const queue = [root]
  while (queue.length > 0) {
    const length = queue.length
    const curr = []
    for (let i = 0; i < length; i++) {
      const cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
      curr.push(cur.val)
    }
    res.push(curr)
  }
  return res
}

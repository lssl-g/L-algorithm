const levelOrderBottom = function (root) {
  const res = []
  if (!root) return res
  const queue = [root]
  while (queue.length > 0) {
    const length = queue.length
    const arr = []
    for (let i = 0; i < length;i ++) {
      const item = queue.shift()
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
      arr.push(item.val)
    }
    res.unshift(arr)
  }
  return res
}

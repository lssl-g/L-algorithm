const zigzagLevelOrder = function (root) {
  const res = []
  if (!root) return res
  const queue = [root]
  let flag = true
  while (queue.length > 0) {
    const length = queue.length
    const arr = []
    for (let i = 0; i < length; i++) {
      const item = queue.shift()
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
      if (flag) arr.push(item.val)
      else arr.unshift(item.val)
    }
    res.push(arr)
    flag = !flag
  }
  return res
}

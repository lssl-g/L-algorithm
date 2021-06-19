/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  let res = 0
  for (let i = 0; i < heights.length; i++) {
    let width = 1
    let left = i - 1
    let right = i + 1
    while (left >= 0 && heights[left] >= heights[i]) {
      width++
      left--
    }
    while (right < heights.length && heights[right] >= heights[i]) {
      width++
      right++
    }
    const area = width * heights[i]
    res = area > res ? area : res
  }
  return res
}
// 方法二： 栈
/* const largestRectangleArea = function (heights) {
  const stack = [-1]
  let max = 0
  function getTopVal () {
    return stack[stack.length - 1] > -1 ? heights[stack[stack.length - 1]] : -1
  }
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] >= getTopVal()) stack.push(i)
    else {
      while (heights[i] < getTopVal()) {
        const top = stack.pop()
        const width = i - stack[stack.length - 1] - 1
        const height = heights[top]
        const area = width * height
        max = area > max ? area : max
      }
      stack.push(i)
    }
  }
  // 遍历完剩余的heights
  while (stack.length > 1) {
    const top = stack.pop()
    const width = heights.length - 1 - stack[stack.length - 1]
    const height = heights[top]
    const area = width * height
    max = area > max ? area : max
  }
  return max
} */
const r = largestRectangleArea([2, 1, 5, 6, 2, 3])
console.log(r)

// 方法一 暴力法 (超出时间限制)
/* const maxArea = function (height) {
  let max = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const h = height[i] > height[j] ? height[j] : height[i]
      const w = j - i
      const area = h * w
      if (max < area) {
        max = area
      }
    }
  }
  return max
} */
// 方法二 双指针
const maxArea = function (height) {
  let res = 0
  let start = 0
  let end = height.length - 1
  while (start < end) {
    const area = (end - start) * (height[start] > height[end] ? height[end] : height[start])
    if (area > res) res = area
    if (height[start] < height[end]) start++
    else end--
  }
  return res
}
/* const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
console.log(res) */
const res = maxArea([4, 3, 2, 1, 4])
console.log(res)
/* const res = maxArea([1, 2, 1])
console.log(res) */

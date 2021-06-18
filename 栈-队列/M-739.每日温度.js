/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 方法一： 暴力法 O(n2)
/* const dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i
        break
      }
    }
  }
  return res
} */
// 方法2 暴力优化 ）=O(mn) m为100
/* const dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0)
  const arr = new Array(101).fill(Infinity)
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let index = Infinity
    for (let j = temperatures[i] + 1; j <= 100; j++) {
      if (arr[j] < index) {
        index = arr[j]
      }
    }
    if (index < Infinity) {
      res[i] = index - i
    }
    arr[temperatures[i]] = i
  }
  return res
} */
// 方法3 单调栈
const dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0)
  const stack = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }
  return res
}
// [73, 74, 75, 71, 69, 72, 76, 73]
const res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(res)

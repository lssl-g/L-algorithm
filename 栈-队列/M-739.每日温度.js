/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 方法一： 暴力法
const dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i
        break
      }
    }
  }
  return res
}
// [73, 74, 75, 71, 69, 72, 76, 73]
const res = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(res)
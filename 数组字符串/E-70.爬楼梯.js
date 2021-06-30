// 方法一： 空间复杂度 O(n)
/* const climbStairs = function (n) {
  const initArr = [1, 1]
  if (n <= 0) return 0
  if (n === 1) return 1
  for (let i = 2; i <= n; i++) {
    initArr[i] = initArr[i - 1] + initArr[i - 2]
  }
  return initArr[n]
} */
// 方法二： 滚动数组 O(1)
const climbStairs = function (n) {
  let p = 0
  let q = 0
  let r = 1
  for (let i = 1; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}

const res = climbStairs(2)
console.log(res)

// 方法一： 暴力枚举
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}
// 方法二： 哈希表
/* const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // 计算和当前值相加等于target的值
    const v = target - nums[i]
    if (map.has(v)) {
      return [i, map.get(v)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
} */

// 测试
/* const res = twoSum([2, 7, 11, 15], 9)
console.log(res) */
/* const res = twoSum([3, 2, 4], 6)
console.log(res) */
const res = twoSum([3, 3], 6)
console.log(res)

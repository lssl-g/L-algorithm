/**
 * @param {number[]} nums
 * @return {number}
 */
// 空间 O(1) 解法
const majorityElement = function (nums) {

}
/* const majorityElement = function (nums) {
  let map = new Map()
  const n = Math.floor(nums.length / 2)
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  for (const e of map.entries()) {
    if (e[1] > n) return e[0]
  }
} */

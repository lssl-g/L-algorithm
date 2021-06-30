/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let slow = 2
  let fast = 2
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  // console.log(nums)
  return slow
}
const r = removeDuplicates([1, 1, 1, 2, 2, 3])
console.log(r)

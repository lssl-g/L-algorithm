/**
 * @param {number[]} nums
 * @return {number}
 */
/* const removeDuplicates = function (nums) {
  let begin = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[begin++] = nums[i]
    } 
  }
  return begin
} */
const removeDuplicates = function (nums) {
  let slow = 1
  let fast = 1
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}

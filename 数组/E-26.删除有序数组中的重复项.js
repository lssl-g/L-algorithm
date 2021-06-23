/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let begin = 0
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue
    } else {
      nums[begin++] = nums[i]
    }
  }
  return begin
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* const removeElement = function (nums, val) {
  let left = 0
  let right = 0
  while(right < nums.length) {
    if (nums[right] !== val) {
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
      left++
    } 
    right++
  }
  return left
} */
var removeElement = function(nums, val) {
  let left = 0, right = nums.length;
  while (left < right) {
      if (nums[left] === val) {
          nums[left] = nums[right - 1];
          right--;
      } else {
          left++;
      }
  }
  return left;
};
const r = removeElement([3, 2, 2, 2], 3)
console.log(r)

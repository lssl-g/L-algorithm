// 方法一： 找到非0 提前 后边补0
const moveZeroes = function (nums) {
  let start = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (start !== i) nums[start] = nums[i]
      start++
    }
  }
  for (let i = start; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}

const nums = moveZeroes([0, 1, 0, 3, 12])
console.log(nums)

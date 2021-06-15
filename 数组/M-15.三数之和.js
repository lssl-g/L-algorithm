const threeSum = function (nums) {
  const res = []
  nums.sort((x, y) => x - y)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      const r = nums[i] + nums[start] + nums[end]
      if (r === 0) {
        res.push([nums[start], nums[end], nums[i]])
        do { start++ } while (nums[start] === nums[start - 1])
        do { end-- } while (nums[end] === nums[end + 1])
      } else if (r < 0) {
        start++
      } else if (r > 0) {
        end--
      }
    }
  }
  return res
}

// const res = threeSum([-1, 0, 1, 2, -1, -4])
// const res = threeSum([-1, 0, 1, 2, -1, -4])
const res = threeSum([-2, 0, 0, 2, 2])
console.log(res)

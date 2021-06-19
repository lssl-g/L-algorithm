/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const res = []
  const queue = []
  for (let i = 0; i < k; i++) {
    while (queue.length !== 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
  }
  res.push(nums[queue[0]])
  for (let i = k; i < nums.length; i++) {
    while (queue[0] <= i - k) {
      queue.shift()
    }
    while (queue.length !== 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    queue.push(i)
    res.push(nums[queue[0]])
  }
  return res
}
const res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(res)

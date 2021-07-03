/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = []
  function addOrNot (nums, arr, index) {
    if (index === nums.length) {
      res.push(arr)
      return
    }
    addOrNot(nums, arr.slice(), index + 1)
    arr.push(nums[index])
    addOrNot(nums, arr.slice(), index + 1)
  }
  addOrNot(nums, [], 0)
  return res
}
const r = subsets([1, 2, 3])
console.log(r)

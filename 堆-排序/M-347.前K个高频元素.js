/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], [map.get(nums[i])[0] + 1, nums[i]])
    } else {
      map.set(nums[i], [1, nums[i]])
    }
  }
  const values = map.values()
  const arr = Array.from(values)
  arr.sort((a, b) => b[0] - a[0])
  return arr.slice(0, k).map(item => {
    return item[1]
  })
}
topKFrequent([1, 1, 1, 2, 2, 3], 2)

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  this.k = k
  nums.sort((a, b) => b - a)
  this.nums = nums.slice(0, k)
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length < this.k) {
    this.nums.push(val)
    this.nums.sort((a, b) => b - a)
  } else if (val <= this.nums[this.nums.length - 1]) {
    return this.nums[this.nums.length - 1]
  } else {
    let flag = true
    for (let i = this.nums.length - 1; i >= 0; i--) {
      if (this.nums[i] < val) continue
      else {
        this.nums.splice(i + 1, 0, val)
        flag = false
        break
      }
    }
    if (flag) this.nums.unshift(val)
    if (this.nums.length > this.k) this.nums.pop()
  }
  return this.nums[this.nums.length - 1]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
const k = new KthLargest(3, [5, -1])
console.log(k.add(2))
console.log(k.add(1))
console.log(k.add(-1))
console.log(k.add(3))
console.log(k.add(4))

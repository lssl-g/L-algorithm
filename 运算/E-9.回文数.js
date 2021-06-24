/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false
  if (x % 10 === 0 && x !== 0) return false
  let reverseValue = 0
  while (x > reverseValue) {
    let v = x % 10
    reverseValue = reverseValue * 10 + v
    x = Math.floor(x / 10)
  }
  return x === reverseValue || x === Math.floor(reverseValue / 10)
}
isPalindrome(10)
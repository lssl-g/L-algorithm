/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let max = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    max = Math.max(max, i - j + 1)
  }
  return max
}
// abcabcbb
const r = lengthOfLongestSubstring('abba')
console.log(r)

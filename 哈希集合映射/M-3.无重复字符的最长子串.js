/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
 let max = 0
 let start = -1
 let set = new Set()
 for (let i = 0; i < s.length; i++) {
     if (!set.has(s[i])) {
         set.add(s[i])
         max = Math.max(max, i - start)
     } else {
         while(s[++start] !== s[i]) {
          set.delete(s[start])
         }
         set.add(s[i])
         max = Math.max(max, i - start)
     }
 }
 return max
}


/* const lengthOfLongestSubstring = function(s) {
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
} */
// abcabcbb
const r = lengthOfLongestSubstring('tmmzuxt')
console.log(r)

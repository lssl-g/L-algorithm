/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const map = new Map()
  for (const c of s) {
    if (map.has(c)) {
      const v = map.get(c)
      map.set(c, v + 1)
    } else {
      map.set(c, 1)
    }
  }
  for (const c of t) {
    if (map.has(c)) {
      const v = map.get(c)
      if (v > 1) {
        map.set(c, v - 1)
      } else map.delete(c)
    } else {
      return false
    }
  }
  return map.size === 0
}
const r = isAnagram('anagram', 'nagaram')
console.log(r)

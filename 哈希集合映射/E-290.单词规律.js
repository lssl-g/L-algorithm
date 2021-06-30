/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const map = new Map()
  const arr = s.split(' ')
  if (pattern.length !== arr.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) === arr[i]) continue
      return false
    } else {
      for (const v of map.values()) {
        if (v === arr[i]) return false
      }
      map.set(pattern[i], arr[i])
    }
  }
  return true
}

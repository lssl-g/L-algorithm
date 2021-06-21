/**
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function (s) {
  let map = new Map()
  for(const c of s) {
    if (map.has(c)) {
      const v = map.get(c)
      map.set(c, v + 1)
    } else {
      map.set(c, 1)
    }
  }
  for (const c of s) {
    const v = map.get(c)
    if (v == 1) return c
  }
  return ' '
}

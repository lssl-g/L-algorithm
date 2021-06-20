/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map()
  const res = []
  for (const c of strs) {
    const key = c.split('').sort().join('')
    if (map.has(key)) map.get(key).push(c)
    else map.set(key, [c])
  }
  for (const c of map.values()) {
    res.push(c)
  }
  return res
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const map = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ])
  const res = []
  function f (digits, index, curr) {
    if (index === digits.length) {
      res.push(curr)
      return
    }
    const arr = map.get(digits[index])
    for (const c of arr) {
      f(digits, index + 1, curr + c)
    }
  }
  if (digits === '') return res
  f(digits, 0, '')
  return res
}
const res = letterCombinations('')
console.log(res)

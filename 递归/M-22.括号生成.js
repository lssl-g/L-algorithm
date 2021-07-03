/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const res = []
  function f (curr, k, toRightNum, toLeftNum) {
    curr += k
    if (toLeftNum > toRightNum || toRightNum > n) return
    if (k === '(') toRightNum++
    if (k === ')') toLeftNum++
    if (curr.length === 2 * n) {
      if (toRightNum === toLeftNum) res.push(curr)
      else return
    }
    f(curr, '(', toRightNum, toLeftNum)
    f(curr, ')', toRightNum, toLeftNum)
  }
  f('', '(', 0, 0)
  return res
}

const res = generateParenthesis(3)
console.log(res)

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const res = []
  function f (curr, toRightNum, toLeftNum) {
    if (curr.length === 2 * n) {
      if (toRightNum === toLeftNum) res.push(curr)
      else return
    }
    if (toLeftNum > toRightNum || toRightNum > n) return
    f(curr + '(', toRightNum + 1, toLeftNum)
    f(curr + ')', toRightNum, toLeftNum + 1)
  }
  f('', 0, 0)
  return res
}

const res = generateParenthesis(2)
console.log(res)

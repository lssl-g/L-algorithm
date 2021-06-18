/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const obj = {
    '(': ')', '{': '}', '[': ']'
  }
  let stack = []
  for (const i of s) {
    switch (i) {
      case '(':
      case '{':
      case '[':
        stack.push(i)
        break
      case ')':
      case '}':
      case ']':
        const r = stack.pop()
        if (obj[r] !== i) return false
    }

  }
  return stack.length === 0 ? true : false
}
const r = isValid('()[]{}')
console.log(r)
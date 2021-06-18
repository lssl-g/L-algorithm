/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const obj = {
    '(': ')', '{': '}', '[': ']'
  }
  const stack = []
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
        if (obj[stack.pop()] !== i) return false
    }
  }
  return stack.length === 0
}
const r = isValid('()[]{}')
console.log(r)

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const set = new Set(['+', '-', '*', '/'])
  const countStack = []
  function computed (a, b, c) {
    switch (c) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b)
    }
  }
  for (let i = 0; i < tokens.length; i++) {
    if (!set.has(tokens[i])) {
      countStack.push(parseInt(tokens[i]))
    } else {
      const oneComputed = countStack.pop()
      const twoComputed = countStack.pop()
      countStack.push(computed(twoComputed, oneComputed, tokens[i]))
    }
  }
  return countStack[0]
}
// ["2","1","+","3","*"]
const r = evalRPN(
  ['10', '6', '9',
    '3', '+', '-11',
    '*', '/', '*',
    '17', '+', '5',
    '+'])
console.log(r)

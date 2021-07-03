/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  function f (x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n < 0) {
      n = -n
      x = 1 / x
    }
    if (f.n) return f.n
    const r = f(x, Math.floor(n / 2))
    const res = n % 2 === 0 ? r * r : x * r * r
    f.n = res
    return res
  }
  return f(x, n)
}
const res = myPow(2.1, 3)
console.log(res)

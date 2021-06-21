/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 方法一： 内存占用大
/**
 * set用来存公牛 还可以在遍历guess跳过公牛的index
 * map用来存非公牛
 * @param {*} secret 
 * @param {*} guess 
 * @returns 
 */
/* const getHint = function(secret, guess) {
  let set = new Set()
  let map = new Map()
  for (let i = 0; i < secret.length; i++) {
    if (!(secret[i] === guess[i])) {
      if (map.has(secret[i])) {
        const v = map.get(secret[i])
        map.set(secret[i], v + 1)
      } else {
        map.set(secret[i], 1)
      }
    } else {
      set.add(i)
    }
  }
  let count = 0
  for (let i = 0; i < guess.length; i++) {
    if (set.has(i)) continue
    if (map.has(guess[i])) {
      count++
      const v = map.get(guess[i])
      if (v === 1) map.delete(guess[i])
      else {
        map.set(guess[i], v - 1)
      }
    }
  }
  return set.size + 'A' + count + 'B'
} */

// 方法二：
const getHint = function(secret, guess) { 
  const one = new Array(10).fill(0)
  const two = new Array(10).fill(0)
  let A = 0
  for (let i = 0; i < secret.length; i++) {
    let secretV = parseInt(secret[i])
    let guessV = parseInt(guess[i])
    if (secretV === guessV) {
      A++
    } else {
      one[secretV]++
      two[guessV]++
    }
  }
  let B = 0
  for (let i = 0; i < one.length; i++) {
    B+= Math.min(one[i], two[i])
  }
  return A + 'A' + B + 'B'
}

//  secret = "1807", guess = "7810"
const str = getHint('1807', '7810')
console.log(str)
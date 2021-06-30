var dailyTemperatures = function(temperatures) {
  const temperaIndex = new Array(101).fill(Infinity)
  const res = new Array(temperatures.length).fill(0)
  for (let i = temperatures.length - 1; i >= 0; i--) {
      let t = temperatures[i]
      let flagNum = Infinity
      for (let j = t + 1; j < 101; j++) {
          if (temperaIndex[j] < flagNum) {
              flagNum = temperaIndex[j]
          }
        }
          if (flagNum < Infinity) {
              res[i] = flagNum - i
          }
          temperaIndex[temperatures[i]] = i
      
  }
  return res
}
dailyTemperatures([89,62,70,58,47,47,46,76,100,70])
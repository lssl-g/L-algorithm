// 方法一 愚蠢的数组
/* function printNumbers (rows, columns) {
  const tempRes = []
  const total = rows * columns
  let mRows = 0
  let mColumns = 0
  let status = true
  for (let i = 1; i <= total; i++) {
    if (mRows < rows && mRows >= 0) {
      if (!Array.isArray(tempRes[mRows])) {
        tempRes[mRows] = []
      }
    } else {
      status = !status
      mColumns++
      if (mRows < 0) mRows++
      if (mRows >= rows) mRows--
    }
    tempRes[mRows][mColumns] = i
    if (status) mRows++
    else mRows--
  }
  return tempRes
} */
// 方法二： 公式
function printNumbers (rows, columns) {
  const res = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!res[i]) res[i] = []
      if (j % 2 === 0) res[i][j] = rows * j + 1 + i
      else res[i][j] = rows * (j + 1) - i
    }
  }
  return res
}
console.log(printNumbers(4, 5))
console.log(0 % 2)
console.log(2 % 2)

'use strict'

function countNeighborhood(configuration, rowIndex, columnIndex) {
  let count = 0
  for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
    for (let j = columnIndex - 1; j <= columnIndex + 1; j++) {
      if (configuration[i] && configuration[i][j]) {
        count += configuration[i][j]
      }
    }
  }
  return count - configuration[rowIndex][columnIndex]
}
function nextConfiguration(configuration) {
  const next = JSON.parse(JSON.stringify(configuration))
  configuration.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const count = countNeighborhood(configuration, rowIndex, columnIndex)
      switch (true) {
      case count < 2:
        next[rowIndex][columnIndex] = 0
        break
      case count === 3:
        next[rowIndex][columnIndex] = 1
        break
      case count > 3:
        next[rowIndex][columnIndex] = 0
        break
      default:
        break
      }
    })
  })
  return next
}
function matrixGeneration(configuration, iteration) {
  if (iteration === 0) {
    return configuration
  }
  return matrixGeneration(nextConfiguration(configuration), iteration - 1)
}
module.exports = matrixGeneration

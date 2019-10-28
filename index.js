/* eslint-disable no-console */
'use strict'

function countNeighborhood(configuration, rowIndex, columnIndex) {
  let count = 0
  for (let i = rowIndex - 1; i <= (rowIndex + 1); i++) {
    for (let j = columnIndex - 1; j <= columnIndex + 1; j++) {
      if (configuration[i] && configuration[i][j]) {
        count += configuration[i][j]
      }
    }
  }
  return count - configuration[rowIndex][columnIndex]
}
function iterate(configuration) {
  const nextConfiguration = JSON.parse(JSON.stringify(configuration))
  configuration.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column) {
        if (countNeighborhood(configuration, rowIndex, columnIndex) <= 2) {
          nextConfiguration[rowIndex][columnIndex] = 0
        }
      }
    })
  })
  return nextConfiguration
}
module.exports = iterate

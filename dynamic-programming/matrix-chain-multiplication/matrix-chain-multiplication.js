// A1 A2 A3
// dimension [10, 100, 5, 50]
function recursive(dimensions, startMatrix, endMatrix) {
  if (endMatrix - startMatrix === 1) {
    return dimensions[startMatrix - 1] * dimensions[startMatrix] * dimensions[startMatrix + 1]
  }
  if (startMatrix === endMatrix) {
    return 0
  }

  let minScalarMultiplication = Infinity;

  // i is the divider so that we will multiply (A1...Ai)(Ai+1...An)
  for (let i=startMatrix; i<endMatrix; i++) {
    minScalarMultiplication = Math.min(
      minScalarMultiplication,
      recursive(dimensions, startMatrix, i) +
      recursive(dimensions, i+1, endMatrix) +
      dimensions[startMatrix-1]*dimensions[i]*dimensions[endMatrix]
    )
  }
  return minScalarMultiplication
}

module.exports = {
  recursive
}
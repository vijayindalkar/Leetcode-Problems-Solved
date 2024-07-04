/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let sum = 0
//   console.log(sum)
  for (let rowNo = 0; rowNo < rows; rowNo++) {
    let primaryDiagonal = mat[rowNo][rowNo];
    let secondaryDiagonal = mat[rowNo][cols - 1 - rowNo];
    sum += primaryDiagonal;
    // console.log("inside MFL " + sum)
    if (rowNo != [cols - 1 - rowNo]) {
      sum += secondaryDiagonal;
    //   console.log("inside SD " + sum)
    }
    }
return sum
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
// console.log(mat)

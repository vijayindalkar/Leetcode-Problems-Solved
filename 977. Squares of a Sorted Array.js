let nums = [1, 9, 4, 8, 6, 2];
var sortedSquares = function (nums) {
  let sortsquare = nums.map(function (x) {
    return x * x;
  });
  sortsquare.sort((a, b) => a - b);
  return sortsquare;
};

console.log(sortedSquares(nums));

// Approach 1 
// Time Complexity: NlogN

const res = require("express/lib/response");

// const { compileFunction } = require("vm");


// let nums = [1, 9, 4, 8, 6, 2];
// var sortedSquares = function (nums) {
//   let sortsquare = nums.map(function (x) {
//     return x * x;
//   });
//   sortsquare.sort((a, b) => a - b);
//   return sortsquare;
// };

// console.log(sortedSquares(nums));



// Approach 2 
// Time complexity: O(N) 

var sortedSquares = function (nums) {
  let arrLength = nums.length;
  const updatedArray = []
  let index = n - 1;
  let right = n-1 
  let left = 0

  while(left <= right){
    let sqrleft = nums[left] * nums[left];
    let sqrright =  nums[right] * nums[right];
    if(sqrright > sqrleft){
      updatedArray[index] = sqrright;
      r--
    }
    else{
      res[index] = sqrleft
      l++
    }
    ind--
  }
  return res;
};
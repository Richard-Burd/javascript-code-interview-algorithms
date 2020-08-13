/*
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.
*/

set1 = [1,2, false, 0,1,0,1,0,3,0,1]
set2 = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
set3 = [false,1,0,1,2,0,1,3,"a"]

var moveZeros = function (arr) {
  let value = [];
  let zeros = [];
  for(elem of arr){
    if(elem !== 0){
      value.push(elem)
    } else {
      zeros.push(elem)
    }
  }
  return value.concat(zeros)
}

// console.log(moveZeros(set1));
// console.log(moveZeros(set2));
// console.log(moveZeros(set3));

// Better solution
var moveZerosTurbo = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

console.log(moveZerosTurbo(set1));

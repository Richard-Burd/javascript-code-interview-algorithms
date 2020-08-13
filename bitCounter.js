// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-3.php
// https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript
var countBits = function(n) {
  // let binaryValue = parseInt(parseInt(n, 10).toString(2)); <= is an integer
  let binaryValue = parseInt(n, 10).toString(2); // <= is a string
  let bitValue = 0;
  for(elem of binaryValue) {
    if(elem == 1) {
      bitValue++
    }
  }
  return bitValue
};

console.log(countBits(1234));

// 10 - 01 - 10 - 10 - 01 - 0    <= this is the binary value of the 10 digit "1234"
//    1    1    1    1    1      <= the bit value of this is "5" because there are 5 "1's"

// Better Solutions:
countBits = n => n.toString(2).split('0').join('').length;

function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}

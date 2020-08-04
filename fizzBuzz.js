/*
Write a program that prints the numbers from 1 to 100, but for multiples of 3 print "Fizz" instead of the number and for multiples of five print "Buzz" - for numbers which are multiples of both 3 and 5 print "FizzBuzz"
*/

function fizzy(){
  for(i = 0; i <= 15; i++) {
    if(i % 15 == 0) {
      console.log("FizzBuzz")
    } else if (i % 3 == 0) {
      console.log("Fizz")
    } else if (i % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}
fizzy()

// NOTE TO SELF:
// left off here:
// https://www.youtube.com/watch?v=MMztCtbhtd4&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=4


// https://www.youtube.com/watch?v=6Wzj7kxfRdI

var myArray = [1, 2, 3, 4];
// arrays
myArray.push("end")
myArray.unshift("start")

// spread operator
myArray = ["Zaza",...myArray, "Sugar"]
console.log(myArray)

const [z, x, ...rest] = myArray;
console.log(rest)

// How do you create a private variable in JavaScript?
function secretVariable(){
  let private = "super secret code";
  return function(){
    return private
  }
}

let getPrivateVariable = secretVariable()

console.log(getPrivateVariable())

// Find the character that appears the most and total number of times it appears.
// https://www.youtube.com/watch?v=qaVSOrlCQtQ&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=3

myString = "heLLLoo$$3p"

const maxChar = (theString) => {
  // not a 'const' b.c. it will constantly change
  let obj  = {};

  for(let character of theString)
    // Using the Ternary operator...
    // condition is that the character is NOT in that obj[index]
    (!obj[character]) ?

    // If it's NOT in that obj[index]...
    // the object[character] is set to one, otherwise...
    obj[character]=1 :

    // the object[character] is itself + 1
    obj[character]++;

    console.log(obj);

  // now we need to loop through and find the max value:
let maxNum = 0
let maximumChar = '';

for (let character in obj){
  if(obj[character] >= maxNum){
    maxNum = obj[character];
    maximumChar = character;
  }
}

console.log(`${maximumChar} appears ${maxNum} times`)
}

maxChar(myString)

// Algorithm to reverse an integer
// https://www.youtube.com/watch?v=MMztCtbhtd4&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=4

const reverseInt = (n) => {
  return n.toString().split('').reverse().join('')
}

console.log({
  testCase1: reverseInt(51),
  testCase2: reverseInt(100),
  testCase3: reverseInt(-15),
  testCase4: reverseInt(-900)
})

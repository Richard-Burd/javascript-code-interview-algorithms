// How to find the maximum character in a string and how many times it appears
// https://www.youtube.com/watch?v=qaVSOrlCQtQ

const maxChar = (str) => {
  let obj = {};

  for(let char of str)
    (!obj[char]) ? (obj[char] = 1) : (obj[char]++);
    // let's see what we get with this loop:
    // console.log(obj); //=> { a: 1, s: 2, e: 1, w: 1, f: 1, z: 3 }

  let maxNum = 0;
  let maximunChar = '';

  for(let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maximunChar = char;
    }
  }
  console.log(`${maximunChar} appears ${maxNum} times`);
}

maxChar("assennnnwfzzz")

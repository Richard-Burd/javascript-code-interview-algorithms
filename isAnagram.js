// https://www.youtube.com/watch?v=hx6yZNR59HQ&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=8
// Given two strings, write a method to decide if one is a permutation of the other
// Steps:
// 1.) Check and see if they are the same exact strings - else
// 2.) Check the lengths of both strings - else
// 3.) Create objects for each one
// 4.) Check if the objects character counts are equal - else
// 5.) return true

// First some variables:
const A = "kunle" //=> this is a permutation of "eunlk" below
const B = "eunlk" //=> this is a permutation of "kunle" above
const C = "boyds" //=> this has no permutation in our workspace

// Let's make a utility function for step 3: "Create objects for each one"
const IsObj = (str) => {
  let obj = {};
  for(let i of str)
    !obj[i] ? obj[i] = 1 : obj[i]++;
    return obj;
}
// when we call the function above, we get a key-value object of all the characters in the string
console.log(IsObj("kule")); //=> { k: 1, u: 1, l: 1, e: 1 }


// now for the main function:
const IsPermutation = (str1, str2) => {
  // 1.) Check and see if they are the same exact strings - else
  if(str1 === str2)
    return true;
  else {
    // 2.) Check the lengths of both strings - else
    if(str1.length !== str2.length)
      return false;
    else {
      // 3.) Create objects for each one
      const obj1 = IsObj(str1);
      const obj2 = IsObj(str2);
      // 4.) Check if the objects character counts are equal - else
      // This  "in" (as opposed to 'of') checks the character count instead of the character itself
      for(let i in obj1)
      {
        if(obj1[i] !== obj2[i])
          return false;
      }
    }
  }
  return true;
}

console.log({
  First: IsPermutation(A, A),   //=> Should be true
  Second: IsPermutation(A, B),  //=> Should be true
  Third: IsPermutation(A, C)    //=> Should not be true
});

// Here is a much simpler solution than the BabAcademy one above:
const BurdAnagram = (str1, str2) => {
  let firstString = str1.split('').sort().join('');
  let seconString = str2.split('').sort().join('');
  if(firstString === seconString)
    return "These are in fact anagrams"
  else
    return "these are not anagrams"
}

console.log(BurdAnagram("qwerty", "ywqter"));

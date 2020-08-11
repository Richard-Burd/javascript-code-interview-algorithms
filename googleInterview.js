// The video:
// https://www.youtube.com/watch?v=10WnvBk9sZc

// The answer:
// https://www.ics.uci.edu/~eppstein/161/960229.html

// https://stackoverflow.com/questions/59925509/javascript-longest-common-subsequence

/*
Write a function that takes two strings, s1 and s2 and returns the longest common
subsequence of s1 and s2... here are a few examples:

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"

...so you can delete extra characters in between but you want to find the longest
common set of sequences.
*/
//arr1 = ['a', 'b', 'd', 'c', 'e', 'f'];
//arr2 = ['b', 'z', 'a', 'p', 'a', 'g', 'b', 'j', 'c', 'b'];

arr1 = ['a', 'b', 'a', 'z', 'd', 'c']; // ABAZDC
arr2 = ['b', 'a', 'c', 'b', 'a', 'd']; // BACBAD
// Correct answer is "ABAD"
//=> [ 'a', 'a', 'b', 'b', 'a', 'a', 'd', 'c' ] <= has an extra 'c' at the end

arr3 = ['a', 'g', 'g', 't', 'a', 'b']; // AGGTAB
arr4 = ['g', 'x', 't', 'x', 'a', 'y', 'b']; // GXTXAYB
// Correct answer is "GTAB"
//=> [ 'a', 'g', 'g', 't', 'a', 'b' ] <= has an extra 'a' at the front

arr5 = ['a', 'a', 'a', 'a']; // aaaa
arr6 = ['a', 'a']; // aa
// Correct answer is "aa"
//=> [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ] <= has lots of a's

arr7 = ['a', 'a', 'c', 'a']; // aaca
arr8 = ['a', 'c']; // ac
// Correct answer is "ac"
//=> [ 'a', 'a', 'c', 'a' ] <= has extra a on front and end

function longestCommonSubSequence(arr1, arr2) {
  let newArray = [];
  for(let elem of arr1) {
    // console.log(elem);
    for (indx of arr2) {
      if (elem == indx) {
        //console.log(indx);
        newArray.push(indx);
      }
    }
  }
  console.log(newArray); //=> [ 'a', 'a', 'b', 'b', 'a', 'a', 'd', 'c' ]
}

longestCommonSubSequence(arr1, arr2)
////////////////////////////////////////////////////////////////////////////////////////////
let str1 = "rqvjtweyrttuyio";
let str2 = "qzxwevrtbyrw";

const findLongest = (s1, s2) => {
  const removeDistinct = (s1, s2) => s1.split("").filter(c => s2.includes(c)).join("");
  const findFirstSeq = (s1, s2) => {
    let seq = "", i, j = 0;
    for (i = 0; i < s1.length; i++) {
      const c = s1[i];
      while (j++ < s2.length) {
        if (seq.length + (s2.length - j - 2) < max) { return "" }
        if (c === s2[j - 1]) {
          seq += c;
          break;
        }
      }
    }
    return seq
  }
  const findSubseq = (s1, s2) => {
    if (s2.length <= max || s1.length <= max) { return maxSeq }
    while (s1.length && s1.length > max) {
      const seq = findFirstSeq(s1, s2);
      if (seq.length > max) {
        max = seq.length;
        s1 = s1.slice(max);
        maxSeq = seq;
      } else { s1 = s1.slice(1) }
    }
    return maxSeq;
  }
  let max = 0, maxSeq;
  if (s1 === s2) { return s1 }
  const s1D = removeDistinct(s1, s2);
  const s2D = removeDistinct(s2, s1);
  if (s1D === s2D) { return s1D }
  findSubseq(s1D, s2D);
  return findSubseq(s2D, s1D);
}

console.log(findLongest(str1, str2));

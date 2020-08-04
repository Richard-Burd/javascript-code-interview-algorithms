// Classical Chuncked Array Problem
// https://www.youtube.com/watch?v=cL1HB_IC9Fc&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=6
// Given:[1, 4, 12, 3, 2, 6, -9, 0], n=3
//// return: [[1, 4, 12], [3, 2, 6], [-9, 0]]
// Given:[1, 4, 12, 3, 2, 6, -9, 0], n=4
//// return: [[1, 4, 12, 3],[2, 6, -9, 0]]
const chunks = ((arr, n) => {
  const chunked = [];

  for(let elem of arr) {

    let last = chunked[chunked.length-1];
    if (!last || last.length === n)
      chunked.push([elem])
    else
      last.push(elem)

  }

  return chunked;
})([1, 4, 12, 3, 2, 6, -9, 0], 3)

console.log({
  chunks //=> [[1, 4, 12], [3, 2, 6], [-9, 0]]
})

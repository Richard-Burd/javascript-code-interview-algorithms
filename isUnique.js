// https://www.youtube.com/watch?v=lFtRizkzeOQ&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=7
// Steps:
// 1.) Take a string & turn it into an object
// 2.) Check and see if character in the string is unique or not:
//      a.) "kunle" = true       (no repeat letters)
//      b.) "babacademy" = false (3 a's & 2 b's)

const IsUnique = (str) => {
  const obj = {} // empty object
  for(let i of str)
    !obj[i] ? obj[i] = 1 : obj[i]++;
  for(let i in obj)
  {
    if(obj[i] > 1)
      return false;
  }
  return true;
}

console.log({
  IsUnique: IsUnique("kunle")
});

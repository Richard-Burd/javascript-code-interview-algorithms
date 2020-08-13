/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the
opportunity to go for a short walk. The city provides its citizens with a Walk
Generating App on their phones -- everytime you press the button it sends you an
array of one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter
(direction) and you know it takes you one minute to traverse one city block, so
create a function that will return true if the walk the app gives you will take
you exactly ten minutes (you don't want to be early or late!) and will, of
course, return you to your starting point. Return false otherwise.
*/

let walk1 = ['n','s','n','s','n','s','n','s','n','s'] //=>'should return true'
let walk2 = ['w','e','w','e','w','e','w','e','w','e','w','e'] //=> 'should return false'
let walk3 = ['w'] //=> 'should return false'
let walk4 = ['n','n','n','s','n','s','n','s','n','s'] //=> 'should return false'
let walk5 = ['n','s','n','s','e','w','n','s','w','e'] //=>'should return true'

function isValidWalk(walk) {
  const ocurCount = (val) => walk.reduce((x, y) => (y === val ? x + 1 : x), 0);
  if(walk.length === 10 && ocurCount('n') === ocurCount('s') && ocurCount('e') === ocurCount('w')){
    return true
  } else {
    return false
  }
}

console.log(isValidWalk(walk1));
console.log(isValidWalk(walk2));
console.log(isValidWalk(walk3));
console.log(isValidWalk(walk4));
console.log(isValidWalk(walk5));

// Better Solution
function isValidWalk(walk) {
  var res = {n:0, w:0, s:0, e:0};
  walk.forEach((c) => res[c]++);
  return walk.length === 10 && res.n == res.s && res.e == res.w;
}

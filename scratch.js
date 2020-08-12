let flatData = [
  [ 'q', [ 2 ] ],
  [ 'z', [ 10 ] ],
  [ 'w', [ 6 ] ],
  [ 'e', [ 7 ] ],
  [ 'v', [ 3 ] ],
  [ 'r', [ 1 ] ],
  [ 'r', [ 9 ] ],
  [ 't', [ 5 ] ],
  [ 't', [ 11 ] ],
  [ 'y', [ 8 ] ],
  [ 'y', [ 13 ] ],
  [ 'r', [ 1 ] ],
  [ 'r', [ 9 ] ],
  [ 'w', [ 6 ] ]
]


function allPossibleSequences(flatData){
  let sequences = [];
  sequences.push(flatData[0])
  for(element of flatData) {
    if(element[1][0] >= sequences.slice(-1)[0][1][0]){
      sequences.push(element)
    }
    //return sequences
    //return element[1][0]
  }
  return sequences
  // return sequences.slice(-1)[0][1][0]; //=> 2
  // return flatData[0][1][0]             //=> 2
}

console.log(allPossibleSequences(flatData));

// const days = ["Mon", "Tue", "Wed"];
//
// console.log(days.slice(-1)[0][0]); //=> W
[ [ 'q', [ 2 ] ],

  [ 'q', [ 2 ] ],
  [ 'z', [ 10 ] ],
  [ 't', [ 11 ] ],
  [ 'y', [ 13 ] ] ]

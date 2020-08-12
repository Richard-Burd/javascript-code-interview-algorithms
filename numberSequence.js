// https://medium.com/@jcenglish/given-an-array-of-integers-find-the-length-of-the-longest-increasing-subsequence-e9ca55e2add4
// https://codereview.stackexchange.com/questions/95455/longest-increasing-subsequence

// This code doesn't work.  None of the stackoverflow examples in JavaScript
// work properly; the pass sample1 below but fail on sample 2.
sample1 = [87, 88, 91, 10, 22, 9, 92, 94, 33, 21, 50, 41, 60, 80]
sample2 = [2, 10, 6, 7, 3, 1, 9, 5, 11, 8, 13, 1, 9, 6] //=> [ 6, 7, 9, 11, 13 ]
//                                       correct answer:   [2, 6, 7, 9, 11, 13]
function findLongestIncreasingSequence(array) {
  let sequence = [],
      fork = null;

  // Always add the first value to the sequence
  sequence.push(array[0]);

  // Reduce the array with. Since no initial accumulator is given,
  // the first value in the array is used
  array.reduce(function (previous, current, index) {

    // If the current value is larger than the last, add it to the
    // sequence and return (i.e. check the next value)
    if(current > previous) {
      sequence.push(current);
      return current;
    } console.log(sequence); // Burd added this to see the process

    // If, however, the value is smaller, and we haven't had a fork
    // before, make one now, starting at the current value's index
    if(!fork && current < previous) {
      fork = findLongestIncreasingSequence(array.slice(index));
    }

    // Return the previous value if the current one is less or equal
    return previous;
  });

  // Compare the current sequence's length to the fork's (if any) and
  // return whichever one is larger
  return fork && fork.length > sequence.length ? fork : sequence;
}

console.log(findLongestIncreasingSequence(sample2));

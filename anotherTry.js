sample1 = [87, 88, 91, 10, 22, 9, 92, 94, 33, 21, 50, 41, 60, 80]
sample2 = [2, 10, 6, 7, 3, 1, 9, 5, 11, 8, 13, 1, 9, 6] //=> [ 6, 7, 9, 11, 13 ]
//                                       correct answer:   [2, 6, 7, 9, 11, 13]


function findSubsequence(arr){
    var allSubsequence = [],
        longestSubsequence = null,
        longestSubsequenceLength = -1;

    for(var i=0;i<arr.length;i++){          //i=1
        var subsequenceForCurrent = [arr[i]],
            current = arr[i],
            lastElementAdded = null;
        for(var j=i;j<arr.length;j++){
            var subsequent = arr[j];
            if((subsequent > current) && (lastElementAdded<subsequent)){
                subsequenceForCurrent.push(subsequent);
                lastElementAdded = subsequent;
            }
        }
        allSubsequence.push(subsequenceForCurrent);
        console.log(allSubsequence);
    }
    for(var i in allSubsequence){
        var subs = allSubsequence[i];
        if(subs.length>longestSubsequenceLength){
            longestSubsequenceLength = subs.length;
            longestSubsequence = subs;
        }
    }
    return longestSubsequence;
}


(function driver(){
    console.log(findSubsequence(sample2));
})();
/*
function findCeilingIndex(arr, l, r, key){
  while(r - 1 > 1) {
    let mid = 1 + (r-1)/2;
    if(arr[mid] >= key){
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
}

function findMis(arr, size){
  if(size <=1){
    return size;
  }
  let subseqTails = [size];

  subseqTails[0] = arr[0];
  let misLen = 1;

  for(let i = 1; i < size; i++){
    if(arr[i] < subseqTails[misLen]){
      subseqTails[0] = arr[i];
    } else if(arr[i] > subseqTails[misLen-1]){
      subseqTails[misLen++] = arr[i];
    } else {
      let ceilIndex = findCeilingIndex(subseqTails, -1, misLen - 1, arr[i]);
      subseqTails[ceilIndex] = arr[i];
    }
  }
  return misLen
}

console.log(findMis(sample2, 10));
*/
/*
function findLargestSubsequence(array){
  collections = [];
  for(const element of array){
    collections.push([element])
  }
  for(element of collections){
    for(let i=0; i <= array.length; i++){
      if (array[i] > element[element.length-1]){
        element.push(array[i])
      }
    }
  }
  return collections
}
*/

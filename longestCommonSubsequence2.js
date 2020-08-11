const string1 = "rqvjtweyrztuyio";
const string2 = "qzxwevrtbyrw";

function flattenDuplicates(dataSet) {
  flatData = [];
  for(set of dataSet){
    if(set[1].length == 1){
      flatData.push(set)
    } else if (set[1].length > 1) {
      set[1].forEach(element => flatData.push([set[0], [element]]))
    }
  }
  return flatData;
}

function longestCommonSubsequence(string1, string2) {
  let matrix = [];
  let schedule = [];
  let dataSet = [];
  for(element in string2) {
    matrix.push(string1)
  }
  for(element in string2) {
    schedule.push([string2[element], matrix[element]])
  }
  // return schedule[0][1].includes("r")
  for(set of schedule) {
    if (set[1].includes(set[0])) {
      let indicies = [];
      for(let i=0; i < set[1].length; i++){
        if (set[1][i] === set[0]) {
          indicies.push(i+1);
        }
      }
      dataSet.push([set[0], indicies])
      // if the position of
    }
  }

  return flattenDuplicates(dataSet)
  //return [
  //  dataSet[0],
  //  dataSet[1],
  //  dataSet[2],
  //  dataSet[3],
  //  dataSet[4],
  //  dataSet[5],
  //  dataSet[6],
  //  dataSet[7],
  //  dataSet[8],
  //  dataSet[9]
  //]
}

console.log(longestCommonSubsequence(string1, string2))

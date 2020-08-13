let string1 = "Welcome"
let string2 = "Hey fellow warriors"
let string3 = "Just kidding there is still one more"
let string4 = "This is another test"

function spinWords(string){
  let array = string.split(' ')
  let answer = []
  for(const element of array) {
    if(element.length > 4) {
      let flipped = element.split('').reverse().join('')
      answer.push(flipped)
    } else {
      answer.push(element)
    }
  }
  return answer.toString().replace(/\,/g, ' ');
}

console.log(spinWords(string2));


// shorter
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// shorter yet
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// Shorter w/o regex
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}

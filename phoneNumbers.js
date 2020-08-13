phoneNumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(number){
  let string = ""
  for(let digit in number){
    string += number[digit]
  }
  return `(${string.substring(0, 3)}) ${string.substring(3, 6)}-${string.substring(6, 10)}`
}

console.log(createPhoneNumber(phoneNumber1));

// simpler:
function createPhoneNumber(numbers){
  return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}


var message = [
  'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'
]


function reverse(input) {
  //reverse everything
  reverseSubstring(0, input.length - 1, input)
  
  //reverse each word
  let start = 0;
  for(var i=0; i<= input.length; i++) {
    if(input[i] == ' ' || i == message.length) {
      reverseSubstring(start, i - 1, input)
      start = i + 1
    }
  }

  return input
}

function reverseSubstring(startIndex, endIndex, input) {
  while(startIndex < endIndex) {
    const temp = input[endIndex];
    input[endIndex] = input[startIndex];
    input[startIndex] = temp;
    startIndex++;
    endIndex--;  
  }
}

const noSpace = ['c', 'a', 'k', 'e']
console.log(`without spaces 'cake' should be 'ekac': ${reverse(noSpace)}`)


console.log(`should be 'steal pound cake': ${reverse(message)}`)
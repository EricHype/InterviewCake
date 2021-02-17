function findRotationPoint(input) {

  let lowIndex = 0
  let highIndex = input.length

  if(input[lowIndex] < input[highIndex - 1]) { //we're in order already
    return 0;
  }

  while(lowIndex < highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2)
    
    if(input[midIndex - 1] > input[midIndex]) {
      return midIndex
    }

    if(input[midIndex] > input[lowIndex]){
      lowIndex = midIndex
    } else {
      highIndex = midIndex
    }

    if(lowIndex + 1 == highIndex) {
      break; //we have converged
    }
  }

  return null
}


const words = [
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",  // <-- rotates here!
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
]

console.log(`findRotationPoint should be 5, is: ${findRotationPoint(words)}`)

const nonRotated = [
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage",
]

console.log(`nonRotated should be 0, is: ${findRotationPoint(nonRotated)}`)
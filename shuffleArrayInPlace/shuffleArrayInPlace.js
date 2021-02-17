
function getRandomBetween(low, high) {
  const diff = high - low

  return Math.floor(Math.random() * diff) + low
}

//naive solution, does not take in to account equal probability
// function shuffleArray(input) {
//   for(var i=0; i<input.length; i++){
//     const indexToSwitchWith = getRandomBetween(0, input.length)
//     const tmp = input[indexToSwitchWith]
//     input[indexToSwitchWith] = input[i]
//     input[i] = tmp
//   }

//   return input
// }

// console.log(`shuffle 123, ${shuffleArray([1,2,3])}`)

//Fischer-Yates algo version
function shuffleArray(input) {
  
  for(var i=0; i<input.length; i++){
    const indexToSwap = getRandomBetween(i, input.length)
  
    if (indexToSwap != i) {
      const tmp = input[indexToSwap]
      input[indexToSwap] = input[i]
      input[i] = tmp
    }
  }

  return input
}
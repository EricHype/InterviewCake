
function highest3(input) {
  let greatestProductOfTwo = input[0] * input[1]
  let greatestProductOfThree = greatestProductOfTwo * input[3]
  let lowestProductOfTwo = greatestProductOfTwo
  let highest = Math.max(input[0], input[1]);
  let lowest  = Math.min(input[0], input[1]);

  for(var i=2; i< input.length; i++) {
    let current = input[i];
    greatestProductOfThree = Math.max(Math.max(
      greatestProductOfThree,
      current * greatestProductOfTwo),
      current * lowestProductOfTwo);
      
    // do we have a new highest product of two?
    greatestProductOfTwo = Math.max(Math.max(
      greatestProductOfTwo,
      current * highest),
      current * lowest);

    // do we have a new lowest product of two?
    lowestProductOfTwo = Math.min(Math.min(
      lowestProductOfTwo,
        current * highest),
        current * lowest);

    // do we have a new highest?
    highest = Math.max(highest, current);

    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return greatestProductOfThree
}

// function highest3(input) {

//   let greatestOne = input[0]
//   let greatestTwo = input[1]
//   let greatestThree = input[2]

//   let greatestSoFar = greatestOne * greatestTwo * greatestThree
//   for(var i=3; i< input.length; i++) {
//     //test each combination
//     const combo12 = greatestOne * greatestTwo * input[i]
//     const combo13 = greatestOne * greatestThree * input[i]
//     const combo23 = greatestTwo * greatestThree * input[i]  
    
//     if(combo12 > greatestSoFar && combo12 > combo13 && combo12 > combo23) {
//       greatestThree = input[i] 
//     } else if(combo13 > greatestSoFar && combo13 > combo12 && combo13 > combo23) {
//       greatestTwo = input[i]
//     } else if(combo23 > greatestSoFar && combo23 > combo12 && combo23 > combo13){
//       greatestOne = input[i]
//     }

//     greatestSoFar = greatestOne * greatestTwo * greatestThree
//   }
  
//   return [greatestOne, greatestTwo, greatestThree]
// }


console.log(`highest 3 all positive should be 24 is: ${highest3([1,2,3,4])}`)

console.log(`highest 3 all negative should be -6, is: ${highest3([-5,-4,-3,-2,-1])}`)

console.log(`mixed neg and positive should be 10000, is: ${highest3([-50, -10, 1, 10, 20])}`)

//n lg n but it modifies the input, which is forbidden
// function findTheDuplicate(input) {
//   //we have to optimize for space, so we can do a sort and then run two 
//   //pointers through the list to see if they are the same

//   input.sort((a, b) => a - b);

//   for(let i=1; i<input.length; i++) {
//     if(input[i -1] == input[i]){
//       return input[i]
//     }
//   }

//   return null
// }


function findTheDuplicate(input) {
  let floor = 1;
  let ceiling = input.length - 1;

  while (floor < ceiling) {
    // divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    let midpoint = floor + Math.floor((ceiling - floor) / 2);
    let lowerRangeFloor   = floor;
    let lowerRangeCeiling = midpoint;
    let upperRangeFloor   = midpoint + 1;
    let upperRangeCeiling = ceiling;

    // count number of items in lower range
    let itemsInLowerRange = 0;
    for (item in input) {

      // is it in the lower range?
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        itemsInLowerRange += 1;
      }

      let distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
        // there must be a duplicate in the lower range
        // so use the same approach iteratively on that range
        floor   = lowerRangeFloor;
        ceiling = lowerRangeCeiling;
      } else {
          // there must be a duplicate in the upper range
          // so use the same approach iteratively on that range
          floor   = upperRangeFloor;
          ceiling = upperRangeCeiling;
      }
    }
  }

  return floor
}

//console.log(`no duplicate should be null: ${findTheDuplicate([1,4,3,2])}`)

console.log(`no one duplicate should be 2: ${findTheDuplicate([1,7,3,2,2])}`)
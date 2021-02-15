
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

function mergeArrays(arrayLeft, arrayRight) {
  

  // return array of two arrays joined and re-ordered 
  if(arrayLeft.length < 1){
    return arrayRight
  }
  if(arrayRight.length < 1) {
    return arrayLeft
  }
  
  let retVal = [] 
  let leftIndex =0;
  let rightIndex = 0;

  while(leftIndex < arrayLeft.length || rightIndex < arrayRight.length) {
    
    if(leftIndex < arrayLeft.length && 
        (
          leftIndex >= arrayRight.length || 
          arrayLeft[leftIndex] <= arrayRight[rightIndex]
        )
      ) {
      retVal.push(arrayLeft[leftIndex])
      leftIndex++
      continue
    }

    if(rightIndex < arrayRight.length && 
      (
        rightIndex <= arrayLeft.length || 
        arrayRight[rightIndex] <= arrayLeft[leftIndex]
      ) 
    ) {
      retVal.push(arrayRight[rightIndex])
      rightIndex++;
    }

  }

  return retVal;
}

// const test2Left = []
// const test2Right = []
// console.log(`test merge of two empty arrays, ${JSON.stringify(mergeArrays(test2Left, test2Right))}`)

// const test3Left = [1]
// const test3Right = [10]
// console.log(`test merge of two one element arrays, ${JSON.stringify(mergeArrays(test3Left, test3Right))}`)


console.log(`test of given test data, ${JSON.stringify(mergeArrays(myArray, alicesArray))}`)
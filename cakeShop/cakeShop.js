

function servedIsInOrder(takeout, dineIn, served) {
  let takeoutIndex = 0;
  let dineInIndex = 0;
  let servedIndex = 0;

  while(takeoutIndex < takeout.length || dineInIndex < dineIn.length) {
    if(takeout[takeoutIndex] == served[servedIndex]) {
      takeoutIndex++;
      servedIndex++;
      continue;
    }

    if(dineIn[dineInIndex] == served[servedIndex]) {
      dineInIndex++;
      servedIndex++;
      continue;
    }

    return false;
  }

  return true;
}

const failingTakeout = [1, 3, 5]
const failingDineIn = [2, 4, 6]
const failingServed = [1, 2, 4, 6, 5, 3]

console.log(`failed case 1 is: ${servedIsInOrder(failingTakeout, failingDineIn, failingServed)}`)

const successTakeout =[17, 8, 24]
const successDineIn = [12, 19, 2]
const successServed =  [17, 8, 12, 19, 24, 2]

console.log(`success case 1 is: ${servedIsInOrder(successTakeout, successDineIn, successServed)}`)

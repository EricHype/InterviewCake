


function getMaxProfit(stockPrices) {
  
  let lowestSoFar = stockPrices[0]
  let maxProfit = null 
  for(var i=1; i < stockPrices.length; i++) {
    let profit = stockPrices[i] - lowestSoFar
    if(maxProfit == null || profit > maxProfit) {
      maxProfit = profit
    }

    if(lowestSoFar > stockPrices[i]) {
      lowestSoFar = stockPrices[i]
    }
  }

  return maxProfit
}


const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(`profit should be 6, is: ${getMaxProfit(stockPrices)}`);

const downward = [10, 9, 8, 7, 5, 2]
console.log(`profit should be -1, is: ${getMaxProfit(downward)}`);
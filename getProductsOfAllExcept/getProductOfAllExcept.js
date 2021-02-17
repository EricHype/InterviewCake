function getProductOfAllExcept(input) {

  let productsOfAllIntsExceptAtIndex = []

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (var i = 0; i < input.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= input[i];
  }

  productSoFar = 1;
  for (var i = input.length - 1; i >= 0; i--) {
      productsOfAllIntsExceptAtIndex[i] *= productSoFar;
      productSoFar *= input[i];
  }

  console.log(productsOfAllIntsExceptAtIndex)

  return productsOfAllIntsExceptAtIndex;
}



getProductOfAllExcept([1,2,3])
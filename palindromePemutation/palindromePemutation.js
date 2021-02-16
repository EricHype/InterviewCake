function palindromePermutation(input) {
  const set = new Set()

  for(var i=0; i< input.length; i++) {
    if(set.has(input[i])) {
      set.delete(input[i])
    } else {
      set.add(input[i])
    }
  }

  return set.size <= 1
}

console.log(`should be true: ${palindromePermutation("civic")}`)
console.log(`should be true: ${palindromePermutation("ivicc")}`)
console.log(`should be false: ${palindromePermutation("civil")}`)
console.log(`should be false: ${palindromePermutation("livci")}`)

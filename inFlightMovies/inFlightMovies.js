
function findPairedMovies(flightLength, movieLengths) {

  let retVal = []
  const set = new Set()
  for(var i =0; i< movieLengths.length; i++) {

    const match = flightLength - movieLengths[i]
    if(set.has(match)) {
      retVal.push([movieLengths[i], match])
    } else {
      set.add(movieLengths[i])
    }

    // n^2 runtime
    // for(var j= i+1; j< movieLengths.length; j++) {
    //   if( (movieLengths[i] + movieLengths[j]) == flightLength) {
    //     retVal.push([movieLengths[i], movieLengths[j]])
    //   }
    // }
  }

  return retVal
}


//if there are no movies
console.log(`no movies: ${findPairedMovies(100, [])}`)

//if no pairs match
console.log(`no pairs match: ${findPairedMovies(100, [20, 40])}`)

//if there is one matching pair
console.log(`one match: ${findPairedMovies(100, [30, 70, 60, 20])}`)

//if there is more than one pair
console.log(`two matches: ${findPairedMovies(100, [30, 70, 60, 40])}`)

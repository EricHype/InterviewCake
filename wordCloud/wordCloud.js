
class WordCloud {

  constructor(input) {
    this.wordToCount = new Map()

    this.charactersThatAreLettersWhenSurrounded = new Set(
      ["'", "-"]
    )

    this.populateMap(input.toLowerCase())
  }

  populateMap(input) {
    let currentWord = ""

    for(var i=0; i<= input.length; i++){
      if(i < input.length && 
          (this.isLetter(input[i]) || this.isSurroundedChar(input[i], i, input))
        ) {
        currentWord += input[i]
      } else {
        this.addToMap(currentWord)
        currentWord = ""
      }
    }
  }

  isLetter(character) {
    if(character >= "a" && character <= 'z') {
      return true
    }

    return false
  }

  isSurroundedChar(character, characterIndex, input) {
    if(this.charactersThatAreLettersWhenSurrounded.has(character)) {
       const prevIndex = characterIndex -1
       const nextIndex = characterIndex +1
       
       if(prevIndex < 0 || nextIndex >= input.length) {
         return false;
       }
       
       return this.isLetter(input[prevIndex]) && this.isLetter(input[nextIndex])
    }

    return false;
  }

  addToMap(word) {
    if(word.length < 1){
      return 
    }

    if(this.wordToCount.has(word)) {
      this.wordToCount.set(word, this.wordToCount.get(word) + 1)
    } else {
      this.wordToCount.set(word, 1)
    }
  }
  
  toJson() {
    return JSON.stringify([...this.wordToCount])
  }
}

// function wordCloud(input) {
//   const map = new Map();

//   let currentWord = ""
//   const lowered = input.toLowerCase()
//   for(var i=0; i <= lowered.length; i++) {
//     if(
//         i < lowered.length && 
//         (
//           (lowered[i] >= "a" && lowered[i] <= 'z') ||
//           (lowered[i] == '-')
//         )
//       ) {
//       currentWord += lowered[i]
//     } else {
//       if(currentWord.length > 0) {
//         if(map.has(currentWord)) {
//           map.set(currentWord, map.get(currentWord) + 1)
//         } else {
//           map.set(currentWord, 1)
//         }

//         currentWord = ""
//       }
//     }
//   }

//   return map
// }

// console.log(`empty input: ${JSON.stringify([...wordCloud("")])}`)
// console.log(`one word: ${JSON.stringify([...wordCloud("Yes")])}`)

// console.log(`one word repeated: ${JSON.stringify([...wordCloud("Yes yes")])}`)

// console.log(`one word repeated with word in between: ${JSON.stringify([...wordCloud("Yes no yes")])}`)

//console.log(`hypenated words: ${JSON.stringify([...wordCloud("two-fold")])}`)

const wc4 = new WordCloud("The bill came to five dollars.")
console.log(`with punctuation: ${wc4.toJson()}`)

const wc5 = new WordCloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.")
console.log(`with mixed case and punctuation: ${wc5.toJson()}`)

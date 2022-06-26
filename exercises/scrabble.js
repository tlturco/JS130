//write a program that takes in a word
//and computes its scrabble score

//input = string
//output = number (the score)

//data structure: store a static property with
//a collection of all letters & their score


//create a variable for the score
//iterate through the letters of the word
//grab the score of each letter from the collection
//add it to the score variable
//return the score
class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    return Scrabble.score(this.word);
  }
  static LETTER_SCORES = {
    a: 1, b: 3,c: 3, d: 2, e: 1, f: 4, g: 2, h: 4,
    i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3,
    q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
    y: 4, z: 10
  }

  static score(word) {
    let result = 0;
    if (word) {
      word = word.toLowerCase().replace(/[^a-z]/g, '');
      for (let i = 0; i < word.length; i++) {
        result += Scrabble.LETTER_SCORES[word[i]];
      }
    }
    return result;
  }

}

let test1 = new Scrabble("");
console.log(test1.score()); //0

console.log(new Scrabble(" \t\n").score()); //0
console.log(new Scrabble(null).score()); //0
console.log(new Scrabble("a").score()); //1
console.log(new Scrabble("f").score()); //4
console.log(new Scrabble("street").score()); //6
console.log(new Scrabble("quirky").score()); //22
console.log(new Scrabble("OXYPHENBUTAZONE").score()); //41
console.log(new Scrabble("alacrity").score()); //13

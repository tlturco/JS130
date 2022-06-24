//input = number
//output = string

//while loop, iterate over all numbers less than the input
//check to see if it is a divisor of the number (% = 0)
//add it to a results variable
//compare the results variable to the input number
//return the string based on the comparison

class PerfectNumber {

  static classify(number) {
    if (number < 0) throw new Error("Invalid input: negative number");

    let aliquotSum = PerfectNumber.findAliquotSum(number);
    if (aliquotSum > number) {
      return 'abundant';
    } else if (aliquotSum === number) {
      return 'perfect';
    } else {
      return 'deficient';
    }
  }

  static findAliquotSum(number) {
    let aliquotSum = 0;
    let count = number - 1;
    while (count > 0) {
      if (number % count === 0) {
        aliquotSum += count;
      }
      count -= 1;
    }
    return aliquotSum;
  }
}

//console.log(PerfectNumber.classify(-1)); //throw an error

console.log(PerfectNumber.classify(13)); //deficient
console.log(PerfectNumber.classify(28)); //perfect
console.log(PerfectNumber.classify(12)); //abundant

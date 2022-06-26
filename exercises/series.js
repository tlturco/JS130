//take in a string of digits and return
//all possible consecutive number series of a specified length in that string

class Series {
  constructor(string) {
    this.string = string;
  }

  //iterate over string from 0 to string.length - length
  //declare an empty sub array
  //while subarray.length < length, iterate over the string
  //converting the current char into a number & pushing to a sub array
  //push the sub array to the result array
  //return the results array
  slices(length) {
    if (length > this.string.length) throw new Error ('Series length is longer than input string');
    let result = [];
    for (let i = 0; i <= this.string.length - length; i++) {
      let subArray = [];
      let currentSpot = i;
      while (subArray.length < length) {
        subArray.push(Number(this.string[currentSpot]));
        currentSpot += 1;
      }
      result.push(subArray);
    }
    return result;
  }
}

let test1 = new Series('01234');
console.log(test1.slices(1));
console.log(test1.slices(2));
console.log(test1.slices(3));
console.log(test1.slices(4));
console.log(test1.slices(5));

let test2 = new Series('98273463');
console.log(test1.slices(2));


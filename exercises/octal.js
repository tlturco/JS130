//an octal to decimal conversion
//input: an octal string
//output: a decimal
//treat invalid input as octal 0
  //valid octal numbers only include digits 0 through 7

class Octal {
  constructor(octalString) {
    this.octal = octalString;
  }

  toDecimal() {
    //for invalid octals, return 0
    if (this.isInvalid()) {
      return 0;
    }
    let decimalResult = 0;
    let arr = this.octal.split("");
    let powerCounter = 0;
    for (let index = arr.length - 1; index >= 0; index -= 1) {
      let num = arr[index];
      decimalResult += (num * (8 ** powerCounter));
      powerCounter += 1;
    }

    return decimalResult;

  }

  isInvalid() {
    //returns true if the octal includes any characters except 0-7
    let regex = new RegExp(/[^0-7]/);
    return regex.test(this.octal);
  }
}


//octal 1 is decimal 1
let test1 = new Octal('1');
console.log(test1.toDecimal()); //1

//octal 10 is decimal 8
let test2 = new Octal('10');
console.log(test2.toDecimal()); //8

//octal 17 is decimal 15
let test3 = new Octal('17');
console.log(test3.toDecimal()); //15

//octal 11 is decimal 9
let test4 = new Octal('11');
console.log(test4.toDecimal()); //9

//octal 130 is decimal 88
let test5 = new Octal('130');
console.log(test5.toDecimal()); //88

//octal 2047 is decimal 1063
let test6 = new Octal('2047');
console.log(test6.toDecimal()); //1063

//octal 7777 is decimal 4095
let test7 = new Octal('7777');
console.log(test7.toDecimal()); //4095

//octal 1234567 is decimal 342391
let test8 = new Octal('1234567');
console.log(test8.toDecimal()); //342391

//8 is seeen as invalid and returns 0
let test9 = new Octal('8');
console.log(test9.toDecimal()); //0

//9 is seeen as invalid and returns 0
let test10 = new Octal('9');
console.log(test10.toDecimal()); //0

//6789 is seeen as invalid and returns 0
let test11 = new Octal('6789');
console.log(test11.toDecimal()); //0

//abc1z is seeen as invalid and returns 0
let test12 = new Octal('abc1z');
console.log(test12.toDecimal()); //0

//234abc is seen as invalid and returns 0
let test14 = new Octal('234abc');
console.log(test14.toDecimal()); //0

//valid octal formatted string 011 is decimal 9
let test13 = new Octal('011');
console.log(test13.toDecimal()); //9


module.exports = Octal;
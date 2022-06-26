//Side Effects through Reassignment
let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}

//Side Effects through Mutation
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); //side effect: alters the array referenced by letters
}

//this example still shows a side effect, even though we are mutating
// a local variable array, because array serves as a pointer to the shared
//array letters
function removeLastWithArgument(array) {
  array.pop(); //side effect: alters the array referenced by letters
}

removeLastWithArgument(letters);

//Side Effects through Input/Output
let readline = require("readline-sync");

function getName() {
  let name = readline.question("Enter your name: "); //side effect: output & input
  console.log(`Hello, ${name}`); //side effect: output to the console
}


let date = new Date(); //side effect: access the system clock
let rand = Math.random(): //side effect: access the random number generator


//Side Effects through Execeptions 
function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero!"); //side effect: raises an exception that it doesn't catch & handle
  }

  return numerator / denominator;
}




//Practice Problems: 
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); //side effect: mutate a non-local object (qux)
  console.log(`popped ${value} from the array`); //side effect: logging to the console
  return value + bar + baz;
}

foo(qux);
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


getName();
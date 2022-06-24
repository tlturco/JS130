//What is hoisting?
//during the creation phase of JS operation,
// all functions, variables, and class declarations
//are recorded and their scope is designated
//when the engine begins the execution phase, it
//knows what variables exist & when theyre in scope
//this makes the program act as though global-scope is at the top of the program
//function scope & block scope vars are at the top of their block
//all the declarations get hoisted to the top of their defined scope

//How do var, let, and const interact with hosting?
//they all get hoisted to the top of their defined scope
//assuming they are declared (not created with an expression)
//but var gets an initial value of undefined until
//the var declaration gets executed
//let and const variables have no initial value at all
//an "unset" state in the temporal Dead Zone (TDZ)
//and you'll get an error if you try to access them


//How do functions and classes interact with hoisting?
//function declarations are hoisted to the top of the scope
//nested functions are hoisted to the top of the function block
//nested functions within a block (like an if statement)
//behave differently depending on the JS engine. Dont use them

//function expressions often involve assigning a function to a declared variable
//those variables obey the usual hosting rules for variables
//namely that they do not have a value until the initialization part
//of the code is run

//classes have their name hoisted, but not the rest of the definition
//they behave similarly to let and const variables
//so, you cannot access a class ahead of where it is declared
//this is true for both class declarations & class expressions

//If both a variable & a function have the same name,
//the variable declaration gets discarded during the hositing process
//you need to be careful then about variable declaration later
//because you may inadvertently reassign the function to a different
//value when you meant to create a new variable with the same name

//What part does hoisting play in the way a specific program works?

//How does hoisting really work?
//during the creation phase, all of the variables/functions/classses
//are saved in memory in the appropriate scope
//then when they are accessed during the execution phase,
//JS just looks them up in memory


//best practices
//use let & const instead of var

//if you use var, declare all of the variables at the top of the scope

//when you use let & const, declare them
//as close to their first usage as possible

//declare functions before calling them



//if a variabled declared with var
//has the same name as a function
//the var is discarded in the hoisting phase
//then during the execution phase, foo is
//reassigned to the top function
//the last line logs Bye
// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo(); //Bye



//Example 2
// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo); 
// console.log(index);

//Undefined (from first lap in for loop)
//Hello (from second lap in for loop)
//Bye (from line 92)
//2 (from line 93)

// The equivalent hoisted code: 
//because they are declared with var, they have function scope
//available before the declaration on line 4 and in the code after the for loop
// var index; 
// var foo;

// for (index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);



// //EXAMPLE 3
// bar();

// /* Function expressions cannot be hoisted
// var bar = function() {
//   console.log("foo!");
// };
// */

// //change into a declaration
// function bar() {
//   console.log("foo!");
// }


//Example 4
// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo(); //NaN

//bar within the function
//and var outside of the function are different
//the bar within the function is treated like it's undefined
//undefined - 42 is NaN


//Example 5
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
// undefined
// 3.1415
// 42
foo(false);
// undefined
// 0.5772
// 2.7183
// undefined
// 42



//Example 6
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};
catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);


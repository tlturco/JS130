//var


// old code may still contain variables declared with var
// you'll need to understand how var differs from let and const

//there is no way to create constants with var (you can always change the value)


//************************************************************
// Use the Node REPL for this example.
// Type the commands one at a time - don't use copy and paste.
//when you run the code within a file rather than in a REPL,
//node raps the program file in a function and all the var declarations
//are created with function scope instead of as properties on the global obj
//************************************************************

var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43

let foo = 86;
console.log(global.foo); // undefined


//POINT: variables declared with var
//get added as properties to the global object


//when you place var inside a function, the variable is
//NOT stored as a property on the global object

function foot() {
  var bar = 42;
  console.log(global.bar); //undefined
}

foot();



//let is block-scoped
//(only visible within the block it was declared)

//var is function-scoped

function blockScopeVfuncionScope() {
  if (true) {
    var a = 1; //a has function scope & is available anywhere in the funciton
    let b = 2; //b has block scope and is only available within the conditional block
  }

  console.log(a); //1
  console.log(b); //ReferenceError: b is not defined
}

//blockScopeVfuncionScope();


function moreWierdBehavior() {
  if (false) {
    var a = 1; //a has function scope & is available anywhere in the function
    //but because the condition is false, the code never runs
    //so a is not initialized to a value of 1
  }

  console.log(a); //undefined
  //a is available but not set to the proper value
}

moreWierdBehavior();
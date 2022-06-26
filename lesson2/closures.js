"use strict";

function addBreak(msg = "") {
  addVerticalSpace(2);
  console.log(msg);
}

function addVerticalSpace(numSpaces = 1) {
  while (numSpaces > 0) {
    console.log("");
    numSpaces -= 1;
  }
}
//EXAMPLE 1
// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //2

// incrementCounter = makeCounter(); //redefining the incrementCounter function to a new version of makeCounter
// console.log(incrementCounter()); //BUT counter is a global variable & never gets reassigned so 3
// console.log(incrementCounter()); //4


//EXAMPLE 2
// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
// }

// //a new counter local variable is created
// //every time that incrementCounter is invoked
// let incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //1

// incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //1


//Example 3
// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //2

// incrementCounter = makeCounter(); //when you reassign the incrementCounter to a new version of makeCounter
// //you get a new local variable counter (initialized to 0)
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //2

addBreak("Example 4");
//Example 4
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}
//Same thing as example 3 but we're explicity assigning 2 different variables
//to the two different versions of makeCounter
let incrementCounter1 = makeCounter(); 
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); //1
console.log(incrementCounter1()); //2

console.log(incrementCounter2()); //1
console.log(incrementCounter2()); //2

addBreak("Example 5");
//Example 5
//create a function that you cal call with a number as an argument
//it returns a new function that logs every positive integer multiple
//of that number less that 100

function makeMultipleLister(number) {
  return function() {
    while (number < 100) {
      console.log(number);
      number += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

addBreak("Example 6");
//Example 6
//write a program that uses two functions
//to manipulate a running total

let example6Num = 0;

function add(num) {
  example6Num += num;
  console.log(example6Num);
}

function subtract(num) {
  example6Num -= num;
  console.log(example6Num);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10


addBreak("Example 7");
//Example 7

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); //create a new function
//where the starting value is 2
//and it gets multiplied by the argument supplied when bar is invoked

let result = bar(3); // prod = 3 * 2 = 6 & result = 6
result += bar(4); //prod = 6 * 4 = 24 & result = 6 + 24 = 30
result += bar(5); //prod = 24 * 5 = 130 & result = 30 + 120 = 150
console.log(result); //150


addBreak("Example 8");
//write a function that takes two arguments,
//a function an and argument for that function


function later(func, arg) {
  return func.bind(null, arg);
  //LS solution:
  //return () => func(argument);
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!


addBreak("Example 9");
function later2(func, arg1) {
  return (arg2) => func(arg1, arg2);
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


addBreak("Example 10");
//write a function that emulates Function.prototype.bind

function bind(context, func) {
  return () => func.apply(context);

  //this also works
  // return function() {
  //   return func.apply(context);
  // };
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }


console.log("-----------------USING CLOSURES FOR PRIVATE DATE-------------------");
addBreak("Private/Closures: Example 1");

function makeCounterLogger(start) {
  return (finish) => {
    let number;

    if (start > finish) {
      for (number = start; number >= finish; number -= 1) {
        console.log(number);
      }
    } else {
      for (number = start; number <= finish; number += 1) {
        console.log(number);
      }
    }
  };
}


let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2

addBreak("Private/Closures: Example 2");
//create a function that returns a todolist function

function makeList() {
  let list = [];
  return todo => {
    //if you don't pass a todo, print the list
    if (!todo) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        list.forEach(todoItem => {
          console.log(todoItem);
        })
      }
    }
    //if the list already contains the todo, remove it
    else if (list.includes(todo)) {
      console.log(`${todo} removed!`)
      let index = list.indexOf(todo);
      list.splice(index, 1);
    } else {
      console.log(`${todo} added!`)
      list.push(todo);
    }
  };
}

let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
//make breakfast removed!

list(); //read book



addBreak("Private/Closures: Example 3");
// eslint-disable-next-line max-lines-per-function
function makeList2() {
  let items = []; //moving the items outside of the returned objects makes it only
  //accessible from your interface (ie the methods that you provide)
  //prevents other coders from mucking up your data
  //super fun!
  return {
    add(todo) {
      items.push(todo);
      console.log(`${todo} added!`);
    },
    remove(todo) {
      let index = items.indexOf(todo);
      items.splice(index, 1);
      console.log(`${todo} removed!`);
    },
    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(todoItem => {
          console.log(todoItem);
        });
      }
    }
  };
}

list = makeList2();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn
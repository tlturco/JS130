//Hoisting & var statement Practice Problems

//1
// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo(); //Bye

// //2
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

// //undefined
// //Hello
// //Bye
// //2


// //3
// bar();

// function bar() {
//   console.log("foo!");
// };


// //4
// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();
// //NaN


//5
// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

// //6
// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);


// //hoisted 
// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }
// var Image; 
// var catImage;
// var pudding;


// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);


//----------------------------------------------------
//----------------------------------------------------
//CLOSURE PRACTICE PROBS

//1

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

// incrementCounter = makeCounter();
// console.log(incrementCounter()); //3
// console.log(incrementCounter()); //4


//2
// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //1

// incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //1


//3
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

// incrementCounter = makeCounter();
// console.log(incrementCounter()); //1
// console.log(incrementCounter()); //2

//4
// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); //1
// console.log(incrementCounter1()); //2

// console.log(incrementCounter2()); //1
// console.log(incrementCounter2()); //2



// //5
// function makeMultipleLister(num) {
//   return function() {
//     for (let multiple = num; multiple < 100; multiple += num) {
//       console.log(multiple);
//     }
//     // let currentVal = num;
//     // while (currentVal < 100) {
//     //   console.log(currentVal);
//     //   currentVal += num;
//     // }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

//6
// let runningTotal = 0;

// function add(num) {
//   runningTotal += num;
//   console.log(runningTotal);
// }

// function subtract(num) {
//   runningTotal -= num;
//   console.log(runningTotal);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10


//7
// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); //a function where you multiply the prod (which starts at 2) by the value you pass in
// let result = bar(3); // 6 = 2 * 3
// result += bar(4); //30 = 6 + 6 * 4
// result += bar(5); //150 = 30 + 24 * 5
// console.log(result); //150

//8
// function later(func, argument) {
//   return () => func(argument);
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!


// //9
// function later2(func, argument1) {
//   return (argument2) => func(argument1, argument2);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


//10
// function bind(context, func) {
//   return () => func.call(context);
// }

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }


//Private Data with Closures Practice
//Example 1
// function makeCounterLogger(start) {
//   return function(end) {
//     let count = start;
//     if (start <= end) {
//       while (count <= end) {
//         console.log(count);
//         count += 1;
//       }
//     } else {
//       while (count > end) {
//         console.log(count);
//         count -= 1;
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);


// //Example 2
// function makeList() {
//   let list = [];

//   return function(todo) {
//     if (!todo) { //if you do not pass an argument, log all of the todos
//       if (list.length === 0) {
//         console.log('The list is empty.');
//       }

//       list.forEach(todo => {
//         console.log(todo);
//       });
//     } else if (list.includes(todo)) { //if the list already has the todo, remove it
//       list.splice(list.indexOf(todo), 1);
//       console.log(`${todo} removed!`);
//     } else {
//       list.push(todo);
//       console.log(`${todo} added!`);
//     }
//   };
// }


// let list = makeList();
// list();
// //The list is empty.

// list("make breakfast");
// //make breakfast added!

// list("read book");
// //read book added!

// list();
// //make breakfast
// //read book

// list("make breakfast");
// //make breakfast removed!

// list();
// //read book



//Example 3
// eslint-disable-next-line max-lines-per-function
// function makeList() {
//   let list = [];

//   return {
//     add(newItem) {
//       if (list.includes(newItem)) throw Error("Todo already in  list");
//       list.push(newItem);
//       console.log(`${newItem} added!`);
//     },
//     remove(oldItem) {
//       if (!list.includes(oldItem)) throw Error("Todo not in list");
//       list.splice(list.indexOf(oldItem), 1);
//       console.log(`${oldItem} removed!`);
//     },
//     list() {
//       if (list.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         list.forEach(todo => console.log(todo));
//       }
//     }
//   };
// }

// let list = makeList();
// list.add("peas");
// //peas added!

// list.list();
// //peas

// list.add("corn");
// //corn added!

// list.list();
// //peas
// //corn

// list.remove("peas");
// //peas removed!

// list.list();
// //corn


// //IIEF Practice Problems
// //1 and 2
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// //3
// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);


// (start => {
//   for (let count = start; count >= 0; count -= 1) {
//     console.log(count);
//   }
// })(7);


// bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);


// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);



//Shorthand Notation Practice Problem

//1
//shorthand
// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

//long version
// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }


//2
//shorthand
// function foo() {
//   return {
//     bar() {
//       console.log("bar");
//     },
//     qux(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// //long version
// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }


//3
//shorthand
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// //long version
// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let bar = obj.bar;
// let baz = obj.baz;
// let quz = obj.quz;


//4
//shorthand
// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

// //long version
// function foo(one, three) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array[0], array[2]);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// setTimeout(function() {
//   console.log('!');
// }, 3000);

// setTimeout(function() {
//   console.log('World');
// }, 1000);

// console.log('Hello');
//Hello
//World
//!


//weird subtlety
//this code runs in a strange order
//(comment out above code before running)
// setTimeout(function() {
//   console.log('!');
// }, 0);

// setTimeout(function() {
//   console.log('World');
// }, 0);

// console.log('Hello');
//Hello
//!
//World

//any code executed by setTimeout will not run until
//the rest of your program has no more code to run
//you finish executing the rest of your code before running the setTimeout stuff


// function timeoutLog (num) {
//   return setTimeout(function() {
//     console.log(num);
//   }, num * 1000);
// }
// function delayLog() {
//   for (let i = 1; i <= 10; i++) {
//     timeoutLog(i);
//   }
// }
//LS Solution: 
function delayLog() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}
delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10



setTimeout(function() {   //1
  console.log('Once');    //5
}, 1000);

setTimeout(function() {   //2
  console.log('upon');    //7
}, 3000);

setTimeout(function() {   //3
  console.log('a');       //6
}, 2000);

setTimeout(function() {   //4
  console.log('time');    //8
}, 4000);



setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();


//g, f, d, s, n, q
// function foo(bar, qux, baz) {
//   return {
//     bar,
//     baz,
//     qux,
//   };
// }

// // rewritten without shortand
// // function foo(bar, qux, baz) {
// //   return {
// //     bar: bar,
// //     baz: baz,
// //     qux: qux,
// //   };
// // }



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

// //rewritten without shorthand
// // function foo() {
// //   return {
// //     bar: function () {
// //       console.log("bar");
// //     },
// //     qux: function (arg1) {
// //       console.log("qux");
// //       console.log(arg1);
// //     },
// //     baz: function (arg1, arg2) {
// //       console.log("baz");
// //       console.log(arg1);
// //       console.log(arg2);
// //     },
// //   };
// // }



// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let { baz, qux, bar } = foo(1, 2, 3);

// //rewritten without shorthand
// // function foo(one, two, three) {
// //   return {
// //     bar: one,
// //     baz: two,
// //     qux: three,
// //   };
// // }

// // let obj = foo(1, 2, 3);
// // let baz = obj.baz;
// // let qux = obj.qux;
// // let bar = obj.bar;


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

//rewritten without shorthand
// function foo(one, three) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array[0], array[2]);
// let bar = resut[0];
// let qux = result[1];
// let baz = result[2];

//Launch School Solution
// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];


// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(...array);

//Rewritten without shorthand
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product.apply(null, array);

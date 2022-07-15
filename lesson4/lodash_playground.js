// //Loads in ALL lodash functions
// const _ = require('lodash');

// console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
// // logs [[1, 2], [3, 4], [5, 6], [7, 8]]


//Loads in only the chunk function
const chunk = require('lodash/chunk');

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
// logs [[1, 2], [3, 4], [5, 6], [7, 8]]
//Emulate the Array.prototype.filter functionality
function filter(array, callback, thisArg) {
  let filteredItems = [];
  for (let index = 0; index < array.length; index++) {
    if (callback.call(thisArg, array[index])) {
      filteredItems.push(array[index]);
    }
  }
  return filteredItems;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]


//Emulate Array.prototype.map
function map(array, callback, thisArg) {
  let transformedItems = [];
  for (let index = 0; index < array.length; index++) {
    transformedItems.push(callback.call(thisArg, array[index]));
  }

  return transformedItems;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


//Emulate Array.prototype.reduce
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  while (index < array.length) {
    accumulator = callback(accumulator, array[index]);
    index += 1;
  }

  return accumulator;
}

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]


//Use Array.prototype.reduce to emulate the filter method
function filter2(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}

//Use Array.prototype.reduce to emulate the map method
function map2(array, callback) {
  return array.reduce((transformedItems, value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  });
}


//forEach that operates on object
function objForEach(object, callback) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      callback(property, object[property]);
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});
function addVerticalSpace(numberOfSpaces) {
  while (numberOfSpaces > 0) {
    console.log(""); //add vertical space
    numberOfSpaces -= 1;
  }
}


function addBreak(message = "") {
  console.log('-----------------------------------------------------------------');
  addVerticalSpace(2);
  console.log(message);
}


//creating a function that mimics the Array.prototype.forEach method
function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

//test regular iteration over an array
let arr = [1, 2, 3, 4];
forEach(arr, value => console.log(value * value));


class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

//test setting the execution context
let foo = new Foo("Item: ");
forEach([1, 2, 3], foo.showItem, foo);

//forEach([4, 5, 6], foo.showItem); //throws an error
//because the property prefix doesn't exist on the global object

//test using the optional index and array arguments to the callback
// ["a", "b", "c"].forEach(function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });
forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

//---------------------------------------------------------------------------
addBreak("Emulate Array.prototype.filter method");

function filter(array, callback) {
  let filteredItems = [];

  for (let index = 0; index < array.length; index += 1) {
    //if the result of the callback function is truthy,
    //add the element to the result array
    if (callback(array[index])) {
      filteredItems.push(array[index]);
    }
  }

  return filteredItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


//---------------------------------------------------------------------------
addBreak("Emulate Array.prototype.map method");

function map(array, callback) {
  let mappedItems = [];

  for (let index = 0; index < array.length; index += 1) {
    mappedItems.push(callback(array[index]));
  }

  return mappedItems;
}

let numbers2 = [1, 2, 3, 4, 5];
console.log(map(numbers2, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers2, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers2, () => false));
// => [ false, false, false, false, false ]

let values2 = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values2, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


//---------------------------------------------------------------------------
addBreak("Emulate the Array.prototype.reduce method");

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


let numbers3 = [1, 2, 3, 4, 5];
console.log(reduce(numbers3, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers3, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers3, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


//---------------------------------------------------------------------------
addBreak("Emulate the Filter & Map methods using Array.prototype.reduce");


//call the reduce method on an array
//accumulator = an empty array
//check if the current element passes the callback function, if so:
//return [..accumulator, current element]


function filterUsingReduce(array, callback) {
  return array.reduce((filteredItems, currentElement) => {
    if (callback(currentElement)) {
      filteredItems.push(currentElement);
    }
    return filteredItems;
  }, []);
}


function mapUsingReduce(array, callback) {
  return array.reduce((transformedItems, currentElement) => {
    transformedItems.push(callback(currentElement));
    return transformedItems;
  }, []);
}
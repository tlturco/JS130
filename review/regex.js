//write a method that returns true/false
//if the input looks like a url
function isUrl(str) {
  let urlRegex = /^https?:\/\/\S+$/;
  return !!(str.match(urlRegex)); //using double bang to convert truthy value to boolean
}

console.log(isUrl('http://launchschool.com')); //true
console.log(isUrl('https://example.com')); //true
console.log(isUrl('https://example.com hello')); //false
console.log(isUrl('   https://example.com')); //false


//write a method that returns all of the fields
//split at tabs, spaces, and commas
function fields(text) {
  return text.split(/[ \t,]+/);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']



//write a method that changes the first aritmetic operator
//to a ? and returns the resulting string
//do not modify the original string

function mysteryMath(equationString) {
  return equationString.replace(/[/+\-*]/, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2')); // -> '4 ? 3 - 5 = 2'
console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 + 2) / 7 - 1 = 1'



//write a method changes EVERY arithemtic operator

function mysteriousMath(equationString) {
  return equationString.replace(/[/+\-*]/g, '?');
}

console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'



//change the first occurance of the word apple, blueberry or cherry
//to danish

function danish(text) {
  return text.replace(/\b(apple|cherry|blueberry)\b/, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'));
console.log(danish('My favorite is blueberry pie'));
console.log(danish('The cherry of my eye'));
console.log(danish('apple. cherry. blueberry.'));
console.log(danish('I love pineapple'));


//change the date format
function formatDate(dateString) {
  return dateString.replace(/^(\d\d\d\d)(-|\/)(\d\d)\2(\d\d)$/, '$4.$3.$1');
}

console.log(formatDate('2016-06-17')); //'17.06.2016'
console.log(formatDate('2017/05/03')); //'03.05.2017'
console.log(formatDate('2015/01-31')); //no change
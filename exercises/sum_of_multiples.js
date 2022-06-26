class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples : [3, 5];
  }

  //create an empty array to store the products
  //iterate over my array of multiples
    //create a loop that multiplies the number by a counter
    //adding the product to the empty array
    //then increments the counter
    //and keeps going until the product is bigger than the limit
  //reduce the product array to get the sum of all products
  //return this value

  to(limit) {
    let productsOfMultiples = [];
    this.multiples.forEach(num => {
      let product = num;
      while (product < limit) {x
        if (!productsOfMultiples.includes(product)) {
          productsOfMultiples.push(product);
        }
        product += num;
      }
    });
    return productsOfMultiples.reduce((accum, product) => accum + product, 0);
  }

  static to(limit) {
    //utilize the instance method (with no multiples specified)
    //for the static method
    let instance = new SumOfMultiples();
    return instance.to(limit);
  }
}

console.log(SumOfMultiples.to(1)); //0
console.log(SumOfMultiples.to(4)); //3
console.log(SumOfMultiples.to(10)); //23
console.log(SumOfMultiples.to(100)); //2318

let test1 = new SumOfMultiples(7, 13, 17);
console.log(test1.to(20)); //51

let test2 = new SumOfMultiples(4, 6);
console.log(test2.to(15)); //30

let test3 = new SumOfMultiples(5, 6, 8);
console.log(test3.to(150)); //4419

let test4 = new SumOfMultiples(43, 47);
console.log(test4.to(10000)); //2203160

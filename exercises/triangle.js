//Exercise 1
//Triangles
//Problem: Determine whether a triangle is equilateral, isosceles, or scalene
//Input: numbers
//Output: a string value with the kind of triangle
//data: 
  //create a class for Triangle
  //a method for kind
  //an an array to store the side lengths


class Triangle {
  constructor(side1, side2, side3) {
    Triangle.validateSides(side1, side2, side3);
    this.sides = [side1, side2, side3];
  }


  kind() {
    let numEqualSides = this.calculateEqualSides();
    if (numEqualSides === 3) return 'equilateral';
    else if (numEqualSides === 1) return 'isosceles';
    else return 'scalene';
  }

  calculateEqualSides() {
    let count = 0;
    if (this.sides[0] === this.sides[1]) {
      count += 1;
    }
    if (this.sides[0] === this.sides[2]) {
      count += 1;
    }
    if (this.sides[1] === this.sides[2]) {
      count += 1;
    }
    return count;
  }
  static validateSides(side1, side2, side3) {
    if ( side1 < 0 || side2 < 0 || side3 < 0) {
      throw new Error("Invalid Triangle: All side lengths must be greater than 0");
    } else if (
      (side1 + side2 < side3) ||
      (side1 + side3 < side2) ||
      (side2 + side3 < side1)
    ) {
      throw new Error("Invalid triangle lengths");
    }
  }

}

module.exports = Triangle;

//Test cases
// const equilateral = new Triangle(2, 2, 2);
// const isosceles = new Triangle(3, 4, 3);
// const scalene = new Triangle(3, 4, 5);
//const invalidTriangle1 = new Triangle(2, 5, 2);
//const invalidTriangle2 = new Triangle(2, 2, -2);
// console.log(equilateral.kind());
// console.log(isosceles.kind());
// console.log(scalene.kind());



//Exercise 2
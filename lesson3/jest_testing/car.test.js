const Car = require ("./car");

// eslint-disable-next-line max-lines-per-function
describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  })
  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });

  //skip a test that you don't want to run
  //can also use xtest to skip instead of test.skip
  test.skip("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });

  //show toEqual
  test('two new cars are equal objects', () => {
    let car2 = new Car();

    expect(car).toEqual(car2);
  });

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raises an TypeError when called drive on it', () => {

    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no milage info', () => {
    expect(car.milleageInfo).toBeNull();
  });

  test('wheels is truty', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  //can also invert a matcher with not
  test('car has wheels', () => {
    expect(car.wheels).not.toBeUndefined();
  });
});
const solve = require("./solve");

test("solve should not return null", () => {
  expect(solve(1)).not.toBe(null);
});

test("numbers divisible by 3 should be replaced by Fizz.", () => {
  let array = [1, 2, "Fizz"];
  expect(solve(3)).toStrictEqual(array);
});

test("Numbers divisible by 5 should be replaced by Buzz.", () => {
  let array = [1, 2, "Fizz", 4, "Buzz"];
  expect(solve(5)[4]).toBe("Buzz");
});

test("Numbers divisible by 3 AND 5 should be replaced by FizzBuzz.", () => {
  let array = [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz"
  ];
  expect(solve(15)).toStrictEqual(array);
});

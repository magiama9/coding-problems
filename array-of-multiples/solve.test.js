const solve = require("./solve");

test("Solve should not return null", () => {
  expect(solve(7, 5)).not.toBe(null);
});

test("Solve should return an array containing the original number", () => {
  expect(solve(7, 1)).toStrictEqual([7]);
});

test("Solve should return an array of the length specified", () => {
  let length = solve(7, 5).length;
  expect(length).toBe(5);
});

test("Solve should return an array of multiples of the specified number and length.", () => {
  expect(solve(8, 4)).toStrictEqual([8, 16, 24, 32]);
});

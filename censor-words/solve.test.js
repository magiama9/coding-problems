const solve = require("./solve");

test("solve should not return null", () => {
  expect(solve("A String")).not.toBe(null);
});

test("Solve should return the original string if no words are longer than 4 characters", () => {
  expect(solve("This is a list")).toBe("This is a list");
});

test("Solve should replace words longer than four characters with *", () => {
  expect(solve("These are even more words")).toBe("***** are even more *****");
});

test("Solve should work with a mix of numbers and letters.", () => {
  expect(solve("12345 is a cool number")).toBe("***** is a cool ******");
});

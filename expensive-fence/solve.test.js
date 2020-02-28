const solve = require("./solve");

test("solve should not return null", () => {
  expect(solve("$100,000")).not.toBe(null);
});

test("Solve should return 10 fences given a price of $100,000", () => {
  expect(solve("$100,000")).toBe("HHHHHHHHHH");
});

test("Solve should return 4 fences given a price of $250,000", () => {
  expect(solve("$250,000")).toBe("HHHH");
});

test("Solve should return 1 fence given a price of $1,000,000", () => {
  expect(solve("$1,000,000")).toBe("H");
});

test("Solve should return no fence if the price is greater than $1,000,000", () => {
  expect(solve("$5,000,000")).toBe("");
});

test("Solve should return the greatest number of possible fences if the price doesn't divide evenly into $1,000,000", () => {
  expect(solve("$250,001")).toBe("HHH");
});

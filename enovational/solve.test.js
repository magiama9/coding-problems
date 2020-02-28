const solve = require("./solve");

test("solve should not return null", () => {
  expect(solve()).not.toBe(null);
});

test("solve should return a restaurant", () => {
  let restaurants = [
    { name: "Pot Hot", cuisine: "Hot Pot", price: 1 },
    { name: "Hut Pizza", cuisine: "Pizza", price: 3 },
    { name: "Sourgreen", cuisine: "Salads", price: 2 }
  ];
  expect(restaurants).toContain(solve(restaurants, []));
});

test("solve should return the best restaurant for the group of people", () => {
  let bestRestaurant = { name: "Pot Hot", cuisine: "Hot Pot", price: 1 };
  let restaurants = [
    bestRestaurant,
    { name: "Hut Pizza", cuisine: "Pizza", price: 3 },
    { name: "Sourgreen", cuisine: "Salads", price: 2 }
  ];
  let people = [
    { name: "Jon", preferences: ["Hot Pot"], budget: 3 },
    { name: "Sam", preferences: ["Pizza", "Hot Pot"], budget: 2 },
    { name: "Dan", preferences: ["Salads", "Pizza"], budget: 1 }
  ];
  expect(solve(restaurants, people)).toBe(bestRestaurant);
});

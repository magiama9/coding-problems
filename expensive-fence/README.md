# Expensive Fence Problem

## The Problem

Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

Create a function which constructs this expensive fence, using the letter "H" to build.

``` js
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"

constructFence("$100,001") ➞ "HHHHHHHHH" 

constructFence("$1,000,000") ➞ "H"
```

Notes
You are ordered to spend all of your $1,000,000 budget, but these are "Price is Right" rules. Return the greatest number of fences possible without going over the budget.

Look at the examples above and make sure you take note of how the price is formatted when given as an argument.


## The Code

Run `npm install` or `yarn` once you have downloaded the repo.

I have included tests written in Jest that you can run with `npm run test` or `yarn test`.

A complete solution should have all of the test cases pass. If you get stuck thinking about the problem, look at how the tests are set up.

## The Solution

If you would like to run the solution, copy `/solution/solve.js` into your main directory and run `yarn test` or `npm run test`.

My solution is just one way to approach the problem. Your solution might be better!

## What Now

Your code passes the tests...awesome! You have achieved your MVP! Think about why your solution works and why other solutions might run into problems.
tests might fail. Try to tailor your solution to the tests rather than the tests to your solution.

TDD, baby.

## Adding Problems

If you have problems you would like to add, feel free to open a pull request after following these steps.

1. Make sure the lesson it's teaching is not already duplicated in the included problems.
2. Name the directory the name of the problem or company where you encountered it (or both!)
3. As much as possible, strive to include a clear and concise problem statement/readme, a well-commented solution, and unit tests.

Thank you for your contribution!

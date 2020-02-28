# Expensive Fence Problem

## The Problem

Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

Create a function which constructs this expensive fence, using the letter "H" to build.

``` js
solve("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
solve("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"

solve("$100,001") ➞ "HHHHHHHHH" 

solve("$1,000,000") ➞ "H"
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

Your code passes the tests...awesome! You have achieved your MVP! Think about why your solution works and why other solutions might run into problems. Think about how you would approach the problem if you didn't know the exact format the prices are in. E.g. if you didn't know that the first character of the string will be a $, or the input might be either a string or a number.

Try to tailor your solution to the tests rather than the tests to your solution.

TDD, baby.
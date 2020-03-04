# Word Censorship Problem

## The Problem

Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

### Examples

``` js
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
```

### Notes

Notice that num is also included in the returned array.

## The Code

Run `npm install` or `yarn` once you have downloaded the repo.

I have included tests written in Jest that you can run with `npm run test` or `yarn test`.

A complete solution should have all of the test cases pass. If you get stuck thinking about the problem, look at how the tests are set up.

## The Solution

If you would like to run the solution, copy `/solution/solve.js` into your main directory and run `yarn test` or `npm run test`.

My solution is just one way to approach the problem. Your solution might be better!

## What Now

Your code passes the tests...awesome! You have achieved your MVP! Think about why your solution works and why other solutions might run into problems.

If you were to iterate on your solution, how would you improve it? How would you handle punctuation? How would you handle only censoring words beginning with or containing a certain letter instead of by word length?

Try to tailor your solution to the tests rather than the tests to your solution.

TDD, baby.

# Word Censorship Problem

## The Problem

Create a function that takes a string and censors words over four characters with `*`.

### Examples

```js
solve("The code is fourty") ➞ "The code is ******"

solve("Two plus three is five") ➞ "Two plus ***** is five"

solve("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
```

### Notes

Don't censor words with exactly four characters.
Assume there won't be any punctuation in the words.
Treat numbers the same way as words.
If all words have four characters or less, return the original string.
The amount of * returned should be the same as the length of the word.

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

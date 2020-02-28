const solve = number => {
  // Initialize a storage array
  let array = [];

  // Run a loop starting from 1 to number, inclusive, iterating by 1
  for (let i = 1; i <= number; i++) {
    
    // To think about
    // =========================
    // * How would you make this a switch statement?
    // * Why does the order of the statements matter?
    // =========================

    // % (modulo) operator returns the remainder. If it returns 0, the number is evenly divisible
    if (i % 3 === 0 && i % 5 === 0) {
      // If the number is divisible by 3 AND 5, push "FizzBuzz"
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // If the number is divisible by 3 but NOT 5, push "Fizz"
      array.push("Fizz");
    } else if (i % 5 === 0) {
      // If the number is divisible by 5 but NOT 3, push "Buzz"
      array.push("Buzz");
    } else {
      // Otherwise, push the number to the array
      array.push(i);
    }
  }

  // Return the resultant array from the function.
  return array;
};

module.exports = solve;

const solve = price => {
  // N.B. YOU CAN COMBINE THE FOLLOWING OPERATIONS INTO A SINGLE LINE AS FOLLOWS
  // let priceNum = parseInt(price.substr(1).replace(/,/g, ""));
  // THEY ARE SEPARATED HERE FOR LEGIBILITY

  // When only one argument is passed into sring.prototype.substr(), it returns a new string from that index to the end of the string
  let noDollarSign = price.substr(1); // Remove the first character of the price(which is a $)

  // We want to globally remove the commas in case the price contains more than one.
  let noCommas = noDollarSign.replace(/,/g, ""); // Replaces all instances of a comma with nothing.

  // We need the price to be a number to do math on it
  let priceNumber = +noCommas; // Using type coercion to force noCommas from a string to a number. You could also parseInt() or parseFloat()

  // Now let's find how many H characters we need to build our fence by dividing 1 million by our number
  let hCount = 1000000 / priceNumber;

  let h = "H"; // this is the string we're going to repeat

  // Output our fence
  // N.B. repeat() automatically rounds down to the nearest integer.
  return h.repeat(hCount); // repeat returns a single string that repeats the given string a given number of times.
};

module.exports = solve;
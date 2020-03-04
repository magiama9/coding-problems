const solve = (num, length) => {

  // Initialize an empty array
  let arr = [];
  
  // Loop through length number of times
  // Push each result to the array, starting with the number itself
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }

  // Return the array
  return arr;
};

module.exports = solve;

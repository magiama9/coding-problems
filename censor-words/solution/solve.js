const solve = str => {

  // Create an array out of the words
  let wordArray = str.split(" "); // Splits on spaces

  // Maps over the word array
  // Map creates a new array
  let newArray = wordArray.map(word => {
    // If the word length is higher than 4, returns "*" equivalent to the word length
    if (word.length > 4) {
      return (word = "*".repeat(word.length)); 
    }

    // Otherwise returns the original word
    return word;
  });
  
  // Joins the array back into a string separated by spaces
  // Returns it
  return newArray.join(" ");
};

module.exports = solve;

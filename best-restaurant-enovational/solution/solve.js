const solve = (restaurants, people) => {
  // Make sure restaurants exist
  // Why doesn't it matter if people exist?
  // Think about what would happen if restaurants are passed in, but people aren't. What gets returned?
  if (restaurants && restaurants.length !== 0) {
    // Initializes a highScore to track best restaurant
    let highScore = 0;

    // Initializes a bestRestaurant which will store our best restaurant object
    let bestRestaurant;

    // Loops through each restaurant
    restaurants.forEach(restaurant => {
      // Sets initial score to 0
      let score = 0;

      // Inside of the loop for each restaurant
      // We need to loop through each person
      people.forEach(person => {
        // If the restaurant's cuisine is in the person's preferences
        // Add one to the score
        if (person.preferences.includes(restaurant.cuisine)) {
          score += 1;
        }

        // If the restaurant's price is less than or equal to the person's budget
        // Add one to the score
        // N.B. I treated the budgets and prices as integers for easier comparisons
        if (person.budget >= restaurant.price) {
          score += 1;
        }
      });

      // If the score is higher than or equal to the current best score
      // Set the new high score
      // Set the best restaurant to the current restaurant
      if (score >= highScore) {
        highScore = score;
        bestRestaurant = restaurant;
      }
    });

    // Return out the best restaurant
    return bestRestaurant;
  }

  // If there aren't any restaurants, we return an empty array.
  return [];
};

module.exports = solve;

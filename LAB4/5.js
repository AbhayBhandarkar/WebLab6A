function sum(numbers) {
    // Method 1: Using a loop
    // let total = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   total += numbers[i];
    // }
    // return total;
  
    // Method 2: Using Array.reduce() (more functional approach)
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return 0; // Return 0 for empty or invalid input
    }
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  function multiply(numbers) {
    // Method 1: Using a loop
    // let product = 1;
    // // Handle empty array edge case
    // if (numbers.length === 0) return 0; // Or 1 depending on definition
    // for (let i = 0; i < numbers.length; i++) {
    //   product *= numbers[i];
    // }
    // return product;
  
    // Method 2: Using Array.reduce()
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return 1; // Typically, product of empty set is 1 (multiplicative identity)
                // Or return 0 if specified.
    }
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
  
  // Example Usage:
  const nums = [1, 2, 3, 4];
  console.log(sum(nums));      // Output: 10
  console.log(multiply(nums)); // Output: 24
  
  console.log(sum([10, -2, 5])); // Output: 13
  console.log(multiply([10, -2, 5]));// Output: -100
  
  console.log(sum([]));       // Output: 0
  console.log(multiply([]));  // Output: 1
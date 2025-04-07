function maxOfThree(num1, num2, num3) {
    // Method 1: Using nested Math.max() or if/else
    // let largest = num1;
    // if (num2 > largest) {
    //   largest = num2;
    // }
    // if (num3 > largest) {
    //   largest = num3;
    // }
    // return largest;
  
    // Method 2: Using Math.max() directly (more concise)
    return Math.max(num1, num2, num3);
  }
  
  // Example Usage:
  console.log(maxOfThree(5, 10, 2));    // Output: 10
  console.log(maxOfThree(-1, -5, 0));   // Output: 0
  console.log(maxOfThree(7, 7, 7));     // Output: 7
  console.log(maxOfThree(100, 50, 99)); // Output: 100
function max(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
    // Alternatively, using a ternary operator:
    // return (num1 > num2) ? num1 : num2;
  }
  
  // Example Usage:
  console.log(max(5, 10));   // Output: 10
  console.log(max(-1, -5));  // Output: -1
  console.log(max(7, 7));    // Output: 7
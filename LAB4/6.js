function reverse(str) {
    // Method 1: Using split, reverse, join (common and concise)
    if (typeof str !== 'string') {
        return ''; // Handle non-string input
    }
    return str.split('').reverse().join('');
  
    // Method 2: Using a loop
    // let reversedString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversedString += str[i];
    // }
    // return reversedString;
  }
  
  // Example Usage:
  console.log(reverse("jag testar")); // Output: "ratset gaj"
  console.log(reverse("hello"));    // Output: "olleh"
  console.log(reverse(""));         // Output: ""
  console.log(reverse("a"));        // Output: "a"
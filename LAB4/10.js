function charFreq(str) {
    if (typeof str !== 'string') {
        return {}; // Return empty object for non-string input
    }
  
    const frequency = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      // If the character is already a key in frequency, increment its value
      // Otherwise, initialize its value to 1
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
  }
  
  // Example Usage:
  console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
  // Output: { a: 7, b: 14, c: 3, d: 3 }
  
  console.log(charFreq("Hello World"));
  // Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
  
  console.log(charFreq(""));
  // Output: {}
function isVowel(char) {
    // Ensure it's a single character string
    if (typeof char !== 'string' || char.length !== 1) {
      return false; // Or throw an error, depending on requirements
    }
  
    const lowerChar = char.toLowerCase();
    const vowels = "aeiou";
  
    return vowels.includes(lowerChar);
  
    // Alternatively using an array:
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // return vowels.includes(lowerChar);
  
    // Alternatively using regex:
    // return /^[aeiou]$/i.test(char);
  }
  
  // Example Usage:
  console.log(isVowel('a')); // Output: true
  console.log(isVowel('E')); // Output: true
  console.log(isVowel('b')); // Output: false
  console.log(isVowel('Z')); // Output: false
  console.log(isVowel(' ')); // Output: false
  console.log(isVowel('ae'));// Output: false (not a single character)
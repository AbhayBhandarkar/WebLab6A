function filterLongWords(words, minLength) {
    if (!Array.isArray(words)) {
        return []; // Return empty array for invalid input
    }
  
    // Method 1: Using a loop
    // const longWords = [];
    // for (let i = 0; i < words.length; i++) {
    //   if (typeof words[i] === 'string' && words[i].length > minLength) {
    //     longWords.push(words[i]);
    //   }
    // }
    // return longWords;
  
    // Method 2: Using Array.filter() (more concise)
    return words.filter(word => typeof word === 'string' && word.length > minLength);
  }
  
  // Example Usage:
  const wordList2 = ["apple", "banana", "strawberry", "kiwi", "grape"];
  console.log(filterLongWords(wordList2, 5)); // Output: ["banana", "strawberry"]
  
  console.log(filterLongWords(wordList2, 8)); // Output: ["strawberry"]
  
  console.log(filterLongWords(wordList2, 10)); // Output: []
  
  const mixedList2 = ["short", "longer", 123, "longestWord", null];
  console.log(filterLongWords(mixedList2, 6)); // Output: ["longestWord"] (ignores non-strings)
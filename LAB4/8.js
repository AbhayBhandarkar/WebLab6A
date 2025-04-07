function findLongestWord(words) {
    if (!Array.isArray(words) || words.length === 0) {
      return 0; // No words, longest length is 0
    }
  
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (typeof words[i] === 'string' && words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  
    // Alternative using Math.max and map:
    // if (!Array.isArray(words) || words.length === 0) return 0;
    // return Math.max(...words.map(word => (typeof word === 'string' ? word.length : 0)));
  }
  
  // Example Usage:
  const wordList = ["apple", "banana", "strawberry", "kiwi"];
  console.log(findLongestWord(wordList)); // Output: 10 (from "strawberry")
  
  const emptyList = [];
  console.log(findLongestWord(emptyList)); // Output: 0
  
  const mixedList = ["short", "longer", 123, "longestWord"];
  console.log(findLongestWord(mixedList)); // Output: 11 (ignores non-string)
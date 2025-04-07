function isConsonant(char) {
    // Helper function to check if a character is a consonant
    if (typeof char !== 'string' || char.length !== 1) {
       return false;
    }
    // Check if it's a letter and not a vowel (case-insensitive)
    return /^[a-z]$/i.test(char) && !/^[aeiou]$/i.test(char);
   }
   
   function translate(text) {
     let translatedText = "";
     for (let i = 0; i < text.length; i++) {
       const char = text[i];
       if (isConsonant(char)) {
         translatedText += char + "o" + char;
       } else {
         translatedText += char; // Append vowels, spaces, punctuation, etc. as is
       }
     }
     return translatedText;
   }
   
   // Example Usage:
   console.log(translate("this is fun")); // Output: "tothohisos isos fofunon"
   console.log(translate("JavaScript")); // Output: "JojavovaSoscocroripoptot"
   console.log(translate(" "));          // Output: " "
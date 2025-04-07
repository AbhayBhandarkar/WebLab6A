const swedishLexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
  };
  
  function translateChristmasCard(englishText, lexicon) {
    const words = englishText.toLowerCase().split(/\s+/); // Split by spaces, handle multiple spaces
    const translatedWords = words.map(word => {
      // Remove potential punctuation for lookup, but keep track if it existed
      let punctuation = '';
      const punctuationMatch = word.match(/[.,!?;:]$/); // Match common punctuation at the end
      if (punctuationMatch) {
          punctuation = punctuationMatch[0];
          word = word.slice(0, -punctuation.length); // Remove punctuation for lookup
      }
  
      // Look up the cleaned word in the lexicon
      const translation = lexicon[word];
  
      // Return the translation (or original word if not found) + punctuation
      return (translation ? translation : word) + punctuation;
    });
  
    // Join the translated words back into a sentence, capitalize first word
    let translatedSentence = translatedWords.join(" ");
    if (translatedSentence.length > 0) {
        translatedSentence = translatedSentence.charAt(0).toUpperCase() + translatedSentence.slice(1);
    }
    return translatedSentence;
  }
  
  // Example Usage:
  const cardText = "Merry Christmas and Happy New Year!";
  console.log(translateChristmasCard(cardText, swedishLexicon));
  // Output: "God jul och gott nytt år!"
  
  const anotherText = "Have a merry new year";
  console.log(translateChristmasCard(anotherText, swedishLexicon));
  // Output: "Have a god nytt år" (Keeps words not in lexicon)
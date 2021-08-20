// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // alphabet array
  const alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // returns the encoded or decoded value
  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet || // If there is no provided alphabet it will return false
      new Set(alphabet).size != alphabet.length || // If the alphabet is not fully unique, then return false
      alphabet.length != 26 // If the alphabet is not equal to 26 in length,
    ) {
      return false;
    } else {
      return encode === true
        ? encoding(input, alphabet)
        : decoding(input, alphabet);
    }
  }
  // function that runs when encoding flag is true
  function encoding(input, alphabet) {
    // loops over the alphabet Array and creates an object with the real alphabet as the key and the passed in alphabet as the value
    const encodedAlphabet = alphabetArray.reduce((acc, value, i) => {
      acc[value] = alphabet.charAt(i);
      return acc;
    }, {});

    let encodedMessage = "";
    // Loops over the input message
    for (i in input) {
      let letter = input[i];
      // if the letter is equal to a space then return a space as the encoded character, otherwise return the corresponding encodedAlphabet character.
      let encodedCharacter = letter === " " ? " " : encodedAlphabet[letter];
      encodedMessage += encodedCharacter;
    }
    return encodedMessage;
  }
  // function that runs when encoding flag is false
  function decoding(input, alphabet) {
    const decodedAlphabet = alphabetArray.reduce((acc, value, i) => {
      acc[alphabet.charAt(i)] = value;
      return acc;
    }, {});

    let decodedMessage = "";

    for (i in input) {
      let letter = input[i];
      let decodedCharacter = letter === " " ? " " : decodedAlphabet[letter];
      decodedMessage += decodedCharacter;
    }
    return decodedMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

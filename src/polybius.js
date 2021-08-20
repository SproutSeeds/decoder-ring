// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Decoding Matrix that is accessed via ROW then COLUMN
  const alphabetMatrix = [
    ["a", "f", "l", "q", "v"],
    ["b", "g", "m", "r", "w"],
    ["c", "h", "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k", "p", "u", "z"],
  ];
  // Encoding dictionary object to use when encoding.
  const alphabetNum = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    // This will run either the encoding or decoding portion based on the passed encoding value.
    return encode === true ? encodingPolybius(input) : decodingPolybius(input);
  }
  // This is the encoding function that will return the encoded value
  function encodingPolybius(input) {
    input = input.toLowerCase();

    let encodedValue = "";
    // This for loop constructs the encoded value by looping through the input, accessing the alphabetNum dictionary and returning the corresponding letter.
    for (i in input) {
      letter = input[i];
      if (letter === " ") {
        encodedValue += " ";
      } else {
        encodedValue += alphabetNum[letter];
      }
    }
    return encodedValue;
  }
  // This is the function that runs to decode the polybius.
  function decodingPolybius(input) {
    const inputNoSpaces = input.replace(/\s/g, "");
    if (inputNoSpaces.length % 2 != 0) {
      return false;
    } else {
      let decodedValue = "";
      // splits the input by the spaces
      const inputArray = input.split(" ");
      // loops through the amount of items that were split by " "
      inputArray.forEach((str) => {
        const stringArr = str.match(/.{1,2}/g);
        stringArr.forEach((numPair) => {
          const firstCharacter = +numPair.substring(0, 1);
          const secondCharacter = +numPair.substring(1, 2);
          decodedValue +=
            alphabetMatrix[firstCharacter - 1][secondCharacter - 1];
        });
        // adds a space after each word.
        decodedValue += " ";
      });
      // trims the spaces from the end and returns the decoded value
      return decodedValue.trim();
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

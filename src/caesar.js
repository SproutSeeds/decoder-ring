// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
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
  function caesar(input, shift, encode = true) {
    // if shift is 0, over 25 or under 25 return false.
    if (shift === 0 || shift > 25 || shift < -25) return false;
    // if encode is equal to false, return decode results
    if (encode === false) return decode(input, shift);
    // makes input lowercase
    input = input.toLowerCase();
    console.log(input);
    // Loops through the input string and stores alphabet places in an array, maintaining spaces separately.
    const placesArray = storeAlphabetPositions(input);
    console.log(placesArray);
    // Adding the shift to each place and returning an array with the updated places
    const placesArray2 = addshiftToEachPosition(placesArray, shift);
    console.log(placesArray2);
    // Loops through all positions, if it is negative it returns the position plus 26.
    const placesArray3 = makesPositionsPositive(placesArray2);
    console.log(placesArray3);

    // loops through targeted positions, finds them in the alphabet array and adds that targeted letter to the decoded message string.
    const encodedMessage = encodedMessageBuilder(placesArray3);
    console.log(encodedMessage);

    return encodedMessage;
  }
  function decode(input, shift) {
    input = input.toLowerCase();
    shift *= -1;
    // Loops through the input string and stores alphabet places in an array, maintaining spaces separately.
    const placesArray = storeAlphabetPositions(input);
    // Adding the shift to each place and returning an array with the updated places
    const placesArray2 = addshiftToEachPosition(placesArray, shift);
    // Loops through all positions, if it is negative it returns the position plus 26.
    const placesArray3 = makesPositionsPositive(placesArray2);
    // loops through targeted positions, finds them in the alphabet array and adds that targeted letter to the decoded message string.
    const decodedMessage = encodedMessageBuilder(placesArray3);
    return decodedMessage;
  }
  // Helpers
  function storeAlphabetPositions(input) {
    const placesArray = [];
    for (i in input) {
      if (/[a-z]/g.test(input[i])) {
        placesArray.push(alphabet.findIndex((letter) => input[i] === letter));
      } else {
        placesArray.push(input[i]);
      }
    }
    return placesArray;
  }
  function addshiftToEachPosition(positionArray, shift) {
    return positionArray.map((element) => {
      if (!isNaN(element) && typeof element != "string") {
        if (element + shift > 25) {
          return element + shift - 26;
        } else {
          return element + shift;
        }
      }
      return element;
    });
  }
  function makesPositionsPositive(positionArray) {
    return positionArray.map((position) => {
      return position < 0 && !isNaN(position) ? position + 26 : position;
    });
  }
  function encodedMessageBuilder(positionArray) {
    let encodedMessage = "";
    for (i in positionArray) {
      encodedMessage +=
        typeof positionArray[i] === "string"
          ? positionArray[i]
          : alphabet[positionArray[i]];
    }
    return encodedMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

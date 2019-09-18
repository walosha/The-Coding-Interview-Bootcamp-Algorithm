// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charMap = {};
  var max = 0;
  var maxChar = "";

  str.split("").forEach(el => {
    if (!charMap[el]) {
      charMap[el] = 1;
    } else {
      charMap[el]++;
    }
  });

  for (var char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

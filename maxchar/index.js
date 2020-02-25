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
    !charMap[el] ? (charMap[el] = 1) : charMap[el]++;
  });

  for (let char in charMap) {
    charMap[char] > max
      ? (max = charMap[char])
        ? (maxChar = char)
        : null
      : null;
  }

  return maxChar;
}

module.exports = maxChar;

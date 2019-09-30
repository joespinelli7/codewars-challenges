// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
// that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.
// Examples:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "aA11" -> 2 # 'a' and '1'

function duplicateCount(text){
  let count = 0;
  const textObj = {};


  for (let char of text.toLowerCase()) {
    !textObj[char] ? textObj[char] = 1 : textObj[char]++;
  }

  for (let char in textObj) {
    if (textObj[char] > 1) {
      count++;
    }
  }

  return count;
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is
// "(" if that character appears only once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// my solution:
function duplicateEncode(word){
  const wordArr = word.toLowerCase().split('');
  let characterCounter = {};
  let newStr = '';

  for (let char of wordArr) {
    (!characterCounter[char] ? characterCounter[char] = 1 : characterCounter[char]++);
  }

  for (let char of wordArr) {
    if (characterCounter[char] > 1) {
      newStr = newStr + ")";
    } else {
      newStr = newStr + "(";
    }
  }
  return newStr;
}

// efficient solution: (codewars)
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }

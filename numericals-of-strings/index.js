// Given an input string. For each symbol in the string if it's the first character occurence, replace it with a
// '1', else replace it with the amount of times you've already seen it.
// Examples:
// numericals("Hello, World!") => "1112111121311"
// numericals("aaaaaaaaaaaa") => "123456789101112"

function numericals(str){
  const strObj = {};
  let numStr = '';

  for (let char of str) {
    strObj[char] ? strObj[char]++ : strObj[char] = 1;
    numStr = numStr + strObj[char];
  }

  return numStr;
}

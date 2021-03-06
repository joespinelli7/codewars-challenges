// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and
// an array with words. You should return an array of all the anagrams or an empty array if there are none.
// Examples:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  const anagramArr = [];
  const mainWord = cleanStr(word);

  for (let str of words) {
    if (cleanStr(str) === mainWord) {
      anagramArr.push(str);
    }
  }

  return anagramArr;
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

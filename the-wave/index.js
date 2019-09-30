// Your task is to create a function that turns a string into a Mexican Wave. You will be
// passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// The input string will always be lower case but maybe empty. If the character in the string is whitespace then
// pass over it as if it was an empty seat.
// Example:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  const waveArr = [];

  for (let i = 0; i < str.length; i++) {
    newStr = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
    waveArr.push(newStr);
  }

  // removes element if it matches the exact string passed in b/c then I know it's where a space occurs and
  // don't want to include it in the array. Otherwise, no spaces present so just return the first wave array.
  if (waveArr.includes(str)) {
    const finalWaveArr = waveArr.filter((element) => element !== str);
    return finalWaveArr;
  } else {
    return waveArr;
  }
}

// A friend of mine takes a sequence of numbers from 1 to n (where n > 0). Within that sequence, he chooses two
// numbers, a and b. He says that the product of a and b should be equal to the sum of all numbers in the sequence,
// excluding a and b. Given a number n, could you tell me the numbers he excluded from the sequence? The function
// takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the
// language) of the form: [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...] with all (a, b)
// which are the possible removed numbers in the sequence 1 to n. [(a, b), ...] or [[a, b], ...] or {{a, b}, ...}
// or ...will be sorted in increasing order of the "a". It happens that there are several possible (a, b). The
// function returns an empty array (or an empty string) if no possible numbers are found which will prove that my
// friend has not told the truth!
// Examples:
// removNb(26) should return [ (15, 21), (21, 15) ]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"

// Solutions works. However, inefficient code, takes too long to execute.
function removeNb (n) {
  const outerArr = [];
  const array = [...Array(n+1).keys()];
  const innerArr1 = [];
  const innerArr2 = [];

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let additionArr = removeElements(array, i, j);
      const total = additionArr.reduce((total, num) => total += num);
      if (i * j === total) {
        innerArr1.push(i);
        innerArr1.push(j);
        innerArr2.push(j);
        innerArr2.push(i);
      }
    }
  }

  if (innerArr1.length === 0) {
    return outerArr;
  } else {
    return outerArr.concat([innerArr1], [innerArr2]);
  }
}

function removeElements(array, i, j) {
  let indexI = array.indexOf(i);
  let indexJ = array.indexOf(j);
  const returnArr = array.filter(num => num !== i && num !== j)
  return returnArr;
}

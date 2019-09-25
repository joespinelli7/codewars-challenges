// Write a program that among the given numbers  finds one that is different in evenness, and return a position
// of this number. Keep in mind that your task is to help solve a real IQ test, which means indexes of the elements
// start from 1 (not 0).
// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
​
function iqTest(numbers){
  const numArr = numbers.split(' ').map(Number);
  const evenArr = [];
  const negArr = [];

  for (let num of numArr) {
    if (num % 2 === 0) {
      evenArr.push(num);
    } else {
      negArr.push(num);
    }
  }

  if (evenArr.length === 1) {
    return numArr.indexOf(evenArr[0]) + 1;
  } else {
    return numArr.indexOf(negArr[0]) + 1;
  }
}

// efficient solution:

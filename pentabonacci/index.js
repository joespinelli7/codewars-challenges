// We have the following sequence: (follow this sequence in your code)
// f(0) = 0
// f(1) = 1
// f(2) = 1
// f(3) = 2
// f(4) = 4;
// f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5);
// Your task is to give the number of total values for the odd terms of the sequence up to the n-th term (included).
// (The number n (of n-th term) will be given as a positive integer). The values 1 (one) is the only that is
// duplicated in the sequence and should be counted only once.\
// Examples:
// count_odd_pentaFib(5) => 1, because the terms up to 5 are: 0, 1, 1, 2, 4, 8 (only 1 is odd and counted once)
// count_odd_pentaFib(10) => 3

function countOddPentaFib(n) {
  const fibArr = [0, 1];
  let oddNumCounter = 0;

  for (let i = 2; i <= n; i++) {
    if (i > 5) {
      let newArr = fibArr.slice(i - 5);
      let newValue = newArr.reduce((total, num) => total + num);
      fibArr.push(newValue);
    } else {
      let newValue = fibArr.reduce((total, num) => total + num);
      fibArr.push(newValue);
    }
  }

  for (let num of fibArr) {
    num % 2 !== 0 ? oddNumCounter++ : null;
  }

  return oddNumCounter - 1;
}

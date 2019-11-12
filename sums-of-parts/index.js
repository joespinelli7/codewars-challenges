// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// Its following parts:
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]. The function partsSums will
// take as parameter a list ls and return a list of the sums of its parts as defined above.

// my solution:
function partsSums(ls) {
  const sumsArr = [];
  let total = ls.reduce((total, num) => total + num, 0);

  for (let i = 0; i < ls.length; i++) {
    sumsArr.push(total);
    total = total - ls[i];
  }

  sumsArr.push(0);
  return sumsArr;
}

// good solution:
// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((p, c) => p + c, 0);
//   return ls.map(v => sum = sum - v);
// }

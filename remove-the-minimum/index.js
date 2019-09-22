// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are
// multiple elements with the same value, remove the one with a lower index. If you get an empty array/list,
// return an empty array/list. Don't change the order of the elements that are left.
// Examples:
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// my solution:
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return numbers;
  }

  let smallestNum = Math.min(...numbers);
  let smallestCounter = 0;

  const firstArray = numbers.map(num => {
    if (num !== smallestNum) {
      return num;
    } else if (smallestCounter < 1 && num === smallestNum) {
      smallestCounter++;
      return num = 'x';
    } else {
      smallestCounter++;
      return num;
    }
  })

  const finalArray = firstArray.filter(num => num !== 'x');

  return finalArray;
}

// efficient solution (codewars):
// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are
// multiple elements with the same value, remove the one with a lower index. If you get an empty array/list,
// return an empty array/list. Don't change the order of the elements that are left.
// Examples:
// removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// removeSmallest([5,3,2,1,4]) = [5,3,2,4]
// removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// my solution:
function removeSmallest(numbers) {
  // returns back empty array if passed in empty array.
  if (numbers.length === 0) {
    return numbers;
  }

  // sets the smallest value in array and create counter to tell where value that should be removed is.
  const smallestNum = Math.min(...numbers);
  let smallestCounter = 0;

  // create firstArray to hold the array value except with 1 value being 'x' (the value to remove)
  // increments smallestCounter by one so if we find another value matching the smallest value,
  // we won't hit 2nd else if statement and instead just return the number.
  const firstArray = numbers.map(num => {
    if (num !== smallestNum || smallestCounter > 0) {
      return num;
    } else {
      smallestCounter++;
      return num = 'x';
    }
  })

  // finally, filter out whatever element is 'x' b/c thats element to remove
  const finalArray = firstArray.filter(num => num !== 'x');

  return finalArray;
}

// efficient solution (codewars):
// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
// }

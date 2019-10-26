// Create a global flatten method. The method takes in any number of arguments and flattens them into a single
// array. If any of the arguments passed in are an array then the individual objects within the array will be
// flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep,
// should be flattened into the single array result.
// Examples:
// flatten(1, [2, 3], 4, 5, [6, [7]]) => [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) => ['a', 'b', 2, 3, null, 4, 'c']

function flatten(...args) {
  return [...args].flat(Infinity);
}

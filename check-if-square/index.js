// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words,
// it is the product of some integer with itself. The tests will always use some integral number, so don't worry
// about that in dynamic typed languages.
// Examples:
// isSquare(-1) =>  false
// isSquare(0) =>   true
// isSquare(3) =>   false
// isSquare(4) =>   true
// isSquare(25) =>  true
// isSquare(26) =>  false

function isSquare(n) {
  const num = Math.sqrt(n);
  if (Number.isInteger(num)) {
    return true
  }

  return false;
}

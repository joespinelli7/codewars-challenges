// Write a function called strictEquals(a, b) that returns the same value as a === b.
// Your implementation must not use the === or !== operators.
// Remember:
// NaN === NaN is always false
// -0 === 0 and 0 === -0 are always true

function strictEquals(a, b) {
  if (!Object.is(typeof(a), typeof(b))) {
    return false;
  }

  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if ((a + '').includes(0) && (b + '').includes(0)) {
    if ((Math.abs(a) + '').length < 2 && (Math.abs(b) + '').length < 2) {
      return true;
    }
  }

  return Object.is(a, b);
}

// To test:

// const runTest = (a, b) => {
//     console.log(`${((a === b) === strictEquals(a, b)) ? 'PASS' : 'FAIL'}`)
// }

// runTest(-0, -0)
// runTest(-0, 0)
// runTest(-0, -00)
// runTest(-0, '-0')
// runTest(505, -0)
// runTest('505', -0)
// runTest(-0, null)
// runTest(-0, false)
// runTest([], [])

// runTest(NaN, NaN)
// runTest(NaN, 'NaN')
// runTest(NaN, 0)
// runTest(NaN, false)
// runTest(NaN, null)
// runTest(NaN, -0)

// runTest(1, 1)
// runTest(1, -0)
// runTest(1, '1')
// runTest(1, null)
// runTest(1, true)
// runTest(1, false)

// runTest('hola', 'hola')
// runTest('hola', -0)
// runTest('hola', '1')
// runTest('hola', null)
// runTest('hola', true)
// runTest('hola', false)

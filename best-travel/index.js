// The function chooseBestSum will take as parameters t (maximum sum of distances, integer >= 0), k (number of
// towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list
// has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less
// than or equal to the given limit t, if that sum exists, or otherwise null.
// Examples:
// ts = [50, 55, 56, 57, 58] chooseBestSum(163, 3, ts) => 163
// xs = [50] chooseBestSum(163, 3, xs) => null
// ys = [91, 74, 73, 85, 73, 81, 87] chooseBestSum(230, 3, ys) => 228

// helper find all subarrays
function subArrays(arr){
  let kLengths = [];
  if (arr.length === 1) return [arr];
  else {
  	subarr = subArrays(arr.slice(1));
  	return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
  }
}

// subArrays([1,2,3,4,5])

// helper to find all subarrays of length N within an array of arrays
function filterByLength(arr, n) {
  const result = arr.filter(a => a.length === n);
  return result;
}

function chooseBestSum(maxDist, towns, arr) {
    let subsets = filterByLength(subArrays(arr), towns);
    let trip = [];
    let myDist = 0;

    for(let arr of subsets){
      let sum = arr.reduce((a,b) => a+b);
      if (sum <= maxDist && sum >= myDist) {
        myDist = sum;
      }
    }
  return myDist;
}

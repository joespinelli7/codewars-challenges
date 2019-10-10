// write a function that returns the positions and the values of the "peaks" of a numeric array. For example, the
// array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5). The output
// will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If
// there is no peak in the given array, then the output should be {pos: [], peaks: []}. All input arrays will be
// valid integer arrays (although it could still be empty), so you won't need to validate the input. The first and
// last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't
// know what is after and before and therefore, we don't know if it is a peak or not). Also, beware of plateaus!!!
// [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the
// position and value of the beginning of the plateau.
// Examples:
// pickPeaks([1, 2, 2, 2, 1]) => {pos: [1], peaks: [2]}
// pickPeaks([2,1,3,2,2,2,2,1]) => {pos:[2], peaks:[3]}
// pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) => {pos: [3, 7], peaks: [6, 3]}

function pickPeaks(arr){
  const peaksObj = {pos: [], peaks: []};
  const copyOfArr = [...arr];
  const peakIndexes = [];

  for (let i = 0; i < copyOfArr.length; i++) {
    if (copyOfArr[i] > copyOfArr[i - 1] && copyOfArr[i] > copyOfArr[i + 1] ) {
      if (peakIndexes.length > 1) {
        peaksObj.pos.push(Math.min(...peakIndexes));
        peaksObj.peaks.push(copyOfArr[i]);
      } else {
        peaksObj.pos.push(i);
        peaksObj.peaks.push(copyOfArr[i]);
      }
    } else if (copyOfArr[i] > copyOfArr[i - 1] && copyOfArr[i] === copyOfArr[i + 1]) {
      peakIndexes.push(i)
      copyOfArr[i] = copyOfArr[i - 1];
    }
  }

  return peaksObj;
}

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of
// smiling faces. Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned. In case of an empty array return 0. You will
// not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth)
// elements will always be the same
// Examples:
// countSmileys([':)', ';(', ';}', ':-D']);       should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); should return 1;

function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let smileysCounter = 0;
  const validEyes = [':', ';'];
  const validNoses = ['-', '~']
  const validMouths = [')', 'D'];

  // b/c we know the order of the smiley will always be the same. Check if the eyes, nose, and mouth
//   are valid inputs in the corresponding index they should be located in.
  for (let smiley of arr) {
    if (validEyes.includes(smiley[0]) && validNoses.includes(smiley[1]) && validMouths.includes(smiley[2])) {
      smileysCounter++;
    } else if (validEyes.includes(smiley[0]) && validMouths.includes(smiley[1])) {
      smileysCounter++;
    }
  }

  return smileysCounter;
}

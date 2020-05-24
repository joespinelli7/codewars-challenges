// Write a method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be
// symbols or strings. The method should return an array of sentences declaring the state or country and its capital.
// Examples:
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] => "The capital of Maine is Augusta"
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0] => "The capital of Spain is Madrid"
// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] => "The capital of Spain is Madrid"

// my solution:
function capital(capitals){
  let sentenceArr = [];
  let place = "";
  let capital = "";

  for (let value of Object.values(capitals)) {
    value.country ? place = value.country : place = value.state;
    capital = value.capital;
    sentenceArr.push(`The capital of ${place} is ${capital}`);
  }

  return sentenceArr;
}

// improved solution:
// function capital(capitals) {
//   return capitals.map(function(e) {
//     return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
//   })
// }

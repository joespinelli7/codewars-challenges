// Write a method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be
// symbols or strings. The method should return an array of sentences declaring the state or country and its capital.
// Examples:
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] => "The capital of Maine is Augusta"
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0] => "The capital of Spain is Madrid"
// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] => "The capital of Spain is Madrid"

function capital(capitals){
  let sentenceArr = [];
  if (capitals.length < 2) {
    let place = Object.values(capitals[0])[0];
    let capital = Object.values(capitals[0])[1];
    sentenceArr.push(`The capital of ${place} is ${capital}`);
  } else {

  }

  return sentence;
}

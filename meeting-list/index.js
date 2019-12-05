// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Make a program that, makes this string uppercase and gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the
// result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(str) {
  // start by splitting str wherever signifies a new name: ; symbol
  const namesArr = str.toUpperCase().split(";");
  // create variables first and last name to switch the order of last name then first name
  let firstName = "";
  let lastName = "";

  const formattedNames = namesArr.map(name => {
    let switchOrderArr = name.split(":");
    firstName = switchOrderArr[0];
    lastName = switchOrderArr[1];
    // here is the actual switching of the first and last name then returning it into an array of all correctly formatted names
    return "("+ lastName + ", " + firstName + ")";
  })
  .sort()
  .join("");
  // finally sort array alphabetically and join them all together to return as a string.

  return formattedNames;
}

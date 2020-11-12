'use strict';

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// FUNCTION DECLARATION - function that can be used before it's declared 
function calcAge1(birthYear1) {
  return 2037 - birthYear1;
}

// FUNCTION EXPRESSION - essentially a function value stored in a variable
const calcAge2 = function (birthYear2) {
  return 2037 - birthYear2;
}

// ARROW FUNCTION - (The are also function expressions but special once) Great for a quick one-line function, where we don't need to use explicitly use the return keyword and no curly braces either. I also said that this one has no this keyword, but more about that in one of the future lectures.
const calcAge3 = birthYear3 => 2037 - birthYear3;

// Three different ways of writting functions, but they all work in a similar way receive input date, transform data and then output data.


function calcAge4(birthYear4, firstName4) {
  const age4 = 2020 - birthYear4;
  console.log(`${firstName4} is ${age4} years old.`);
  return age4;
}
const age4 = calcAge4(1989, 'James')
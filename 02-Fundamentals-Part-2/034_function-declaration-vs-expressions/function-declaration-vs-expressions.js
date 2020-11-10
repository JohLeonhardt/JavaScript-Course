'use strict';

//Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear; // this is an expression that will produce a value
}
const age2 = calcAge2(1991);

console.log(age1, age2);

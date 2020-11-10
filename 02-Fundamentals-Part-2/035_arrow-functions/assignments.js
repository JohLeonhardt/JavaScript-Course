'use strict';
//-----------035 Arrow Functions  ---------------------
// LECTURE: Arrow Functions

// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = population => (population / 7900) * 100;
const Australia = percentageOfWorld3(25);
const China = percentageOfWorld3(1141);
const Germany = percentageOfWorld3(83);
console.log(Australia, China, Germany);


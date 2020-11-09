//-----------033 FUNCTIONS ---------------------
// LECTURE: Functions 

// 1.	Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// 2.	Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console 

'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
const differentCountry1 = describeCountry('Australia', 25, 'Cambera');
console.log(differentCountry1);

const differentCountry2 = describeCountry('China', 170, 'Bejing');
console.log(differentCountry2);

const differentCountry3 = describeCountry('Germany', 85, 'Berlin');
console.log(differentCountry3);
'use strict';
//-----------034 Function Declarations vs. Expressions  ---------------------
// LECTURE: Function Declarations vs. Expressions 

// 1.	The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population 

// 2.	To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100 

// 3.	Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console 

// 4.	Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) 

//1 + 2
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
//3
const Australia = percentageOfWorld1(25);
const China = percentageOfWorld1(1441);
const Germany = percentageOfWorld1(83);
console.log(Australia, China, Germany);

//4
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}
const Australia1 = percentageOfWorld2(25);
const China1 = percentageOfWorld2(1441);
const Germany1 = percentageOfWorld2(83);
console.log(Australia1, China1, Germany1);


//-----------026 The switch Statement ---------------------
// LECTURE: The Conditional(Ternary) Operator

// 1.	If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'.Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences! 

// 2.	After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original 

//1.____________________
const population = 25;
const aboveAverage = population >= 33 ? `1. Australia's population is above average.` : `1. Australia's population is below average.`;
console.log(aboveAverage);

//RESULT:
// Australia's population is below average.

//2.1____________________
const population1 = 13;
const aboveAverage1 = population1 >= 33 ? `2.1 Australia's population is above average.` : `2.1 Australia's population is below average.`;
console.log(aboveAverage1);

//RESULT:
// Australia's population is below average.

//2.2____________________
const population2 = 130;
const aboveAverage2 = population2 >= 33 ? `2.2 Australia's population is above average.` : `2.2 Australia's population is below average.`;
console.log(aboveAverage2);

//RESULT:
// Australia's population is above average.
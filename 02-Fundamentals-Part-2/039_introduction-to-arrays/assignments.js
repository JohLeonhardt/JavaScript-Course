'use strict';
//-----------039 Introduction to Arrays   ---------------------

// LECTURE: Introduction to Arrays 

// 1.	Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations' 

// 2.	Log to the console whether the array has 4 elements or not (true or false) 

// 3.	Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values 

//------ ANSWEAR --------
//1
const populations = [1141, 25, 83, 5];
//2
console.log(populations < 4);
//3
const percentages = function (percentageOfWorld1) {
  return (percentageOfWorld1 / 7900) * 100;
}
const china = percentages(populations[0]);
const australia = percentages(populations[1]);
const germany = percentages(populations[2]);
const newZealand = percentages(populations[3]);
console.log(china, australia, germany, newZealand);
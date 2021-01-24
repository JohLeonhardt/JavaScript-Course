'use strict';
//----------- 047 LECTURE: Looping Arrays, Breaking and Continuing    ---------------------

// LECTURE: Looping Arrays, Breaking and Continuing 

// 1.	Let's bring back the 'populations' array from a previous assignment 

// 2.	Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier 

// 3.	Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is 

//1
// const populations = [1141, 25, 83, 5];
// const percentages2 = [];
// //2
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push((populations[i] / 7900) * 100);
// }
// console.log(percentages2)
//3
// (4) [14.443037974683545, 0.31645569620253167, 1.0506329113924051, 0.06329113924050633]


// const populations = [1141, 25, 83, 5];
// console.log(populations < 4);
// const percentages = function (percentageOfWorld1) {
//   return (percentageOfWorld1 / 7900) * 100;
// }
// const china = percentages(populations[0]);
// const australia = percentages(populations[1]);
// const germany = percentages(populations[2]);
// const newZealand = percentages(populations[3]);
// console.log(china, australia, germany, newZealand);

//Results:
//false
// 14.443037974683545 0.31645569620253167 1.0506329113924051 0.06329113924050633
// index.html:81 

// HIS SOLUTION:
const populations = [10, 1441, 332, 83]; const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);
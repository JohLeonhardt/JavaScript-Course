// ------- JavaScript Fundamentals – Part 2 -----------
// -------------  Coding Challenge #1 -----------------

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 

// Your tasks: 
// 1.	Create an arrow function 'calcAverage' to calculate the average of 3 scores 

// 2.	Use the function to calculate the average for both teams 

// 3.	Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)" 

// 4.	Use the 'checkWinner' function to determine the winner for both Data1 and Data 2 

// 5.	Ignore draws this time 

// Test data: 
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 

// Hints: 
// § To calculate average of 3 values, add them all together and divide by 3

// § To check if number A is at least double number B, check for A >= 2 * B. 

// Apply this to the team's average scores 😉 

'use strict';


// Test data: 
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 

//1
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5)); // test console.log only

//2 - Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); // testing to see if it works

//3
const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})!`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})!`);
  } else {
    console.log(`No team wins!`);
  }
}
checkWinner(scoreDolphins, scoreKoalas); // this is a stand alone function

checkWinner(576, 111); // another test





// Test data: 
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 

// In order to re-assign he changed the const to let (but I also changed the names to ...1, now all this below is basically like the above block of code but becaue he didn't commanded it out we are basiclly duplicting it and then using this to do the changes he did)

// Duplicate + ...1 from above + the changes he made
// Test 1
let calcAverage1 = (a, b, c) => (a + b + c) / 3; // change const to let
let scoreDolphins1 = calcAverage1(44, 23, 71); // change const to let
let scoreKoalas1 = calcAverage1(65, 54, 49); // change const to let
const checkWinner1 = function (avgDolhins1, avgKoalas1) {
  if (avgDolhins1 >= 2 * avgKoalas1) {
    console.log(`Dolphins win (${avgDolhins1} vs. ${avgKoalas1})!`);
  } else if (avgKoalas1 >= 2 * avgDolhins1) {
    console.log(`Koalas win (${avgKoalas1} vs. ${avgDolhins1})!`);
  } else {
    console.log(`No team wins!`);
  }
}
checkWinner1(scoreDolphins1, scoreKoalas1);
checkWinner1(576, 111);

//Test 2
scoreDolphins1 = calcAverage1(85, 54, 41);
scoreKoalas1 = calcAverage1(23, 34, 27);
console.log(scoreDolphins1, scoreKoalas1);
checkWinner1(scoreDolphins1, scoreKoalas1);
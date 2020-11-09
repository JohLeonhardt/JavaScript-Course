// ------- JavaScript Fundamentals – Part 1 -----------
// -------------  HIS RESULTS: Coding Challenge #1 -----------------
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 
// (FYI - Body Mass Index is a simple calculation using a person's height and weight. The formula is BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared. A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.)
// Your tasks: 
// 1.	Store Mark's and John's mass and height in variables 
// 2.	Calculate both their BMIs using the formula (you can even implement both versions) 
// 3.	Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 
// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 

// BMI = kg/m2

// HIS RESULTS:

// He said I could also you LET here instead of CONST :)


// ------- JavaScript Fundamentals – Part 1 --------------------
// -------------  Coding Challenge #2 -----------------
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 

// Your tasks: 
// 1. Print a nice out-put to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 

// 2. Use a template literal to include the BMI values in the out puts. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement 😉 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`Joh's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`)
// };





// ------- JavaScript Fundamentals – Part 1 --------------------
// -------------  Coding Challenge #3 -----------------

// Coding Challenge #3 

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 

// Your tasks: 
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 

// 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy. 

// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 

// HIS ANSWEAR:
// ----- Question 1 - Data 1 -- ANSWEAR ------------------
// 1. Calculate the average score for each team, using the test data below
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// console.log(`--- Question 1 - Data 1 ---------`);
// const scoreDolphins = (96 + 108 + 89) / 3; // 97.66666666666667 
// const scoreKoalas = (88 + 91 + 110) / 3; // 96.33333333333333
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphnis win the trophy.`); // Dolphnis win the trophy.
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy.`);
// }
// console.log(`                                 `);
// //RESULT in Console:
// // --- Question 1 - Data 1 ---------
// // 97.66666666666667 96.33333333333333
// // Dolphnis win the trophy.



// //-- Question 1 --- TESTTING OPPOSITE ------

// // He change some numbers to check out what changes (change Koalas second number from 91 to 100)
// console.log(`--- Question 2 - TESTTING OPPOSITE ---------`);

// const scoreDolphins1 = (96 + 108 + 89) / 3; // 97.66666666666667
// const scoreKoalas1 = (88 + 100 + 110) / 3; // 99.33333333333333
// console.log(scoreDolphins1, scoreKoalas1);

// if (scoreDolphins1 > scoreKoalas1) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalas1 > scoreDolphins1) {
//   console.log(`Koalas win the trophy.`); // Koalas win the trophy.
// } else if (scoreDolphins1 === scoreKoalas1) {
//   console.log(`Both win the trophy.`);
// }
// console.log(`                                 `);
// //RESULT in Console:
// // --- Question 1 - TESTTING OPPOSITE ---------
// // 97.66666666666667 99.33333333333333
// // Koalas win the trophy.



// // HIS ANSWEAR:
// // ----- Question 2 - Data Bonus 1 -- ANSWEAR ------------------

// // 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// console.log(`--- Question 2 - Data Bonus 1 ---------`);

// const scoreDolphinsB1 = (97 + 112 + 101) / 3; // 103.33333333333333
// const scoreKoalasB1 = (109 + 95 + 123) / 3; // 109
// console.log(scoreDolphinsB1, scoreKoalasB1);

// if (scoreDolphinsB1 > scoreKoalasB1 && scoreDolphinsB1 >= 100) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalasB1 > scoreDolphinsB1 && scoreKoalasB1 >= 100) {
//   console.log(`Koalas win the trophy.`);  // Koalas win the trophy.
// } else if (scoreDolphinsB1 === scoreKoalasB1) {
//   console.log(`Both win the trophy.`);
// }
// console.log(`                                 `);
// // --- Question 2 - Data Bonus 1 ---------
// // 103.33333333333333 109
// // Koalas win the trophy.



// // HIS ANSWEAR:
// // ----- Question 3 - Data Bonus 2 -- ANSWEAR ------------------

// // 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉 

// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
// console.log(`--- Question 3 - Data Bonus 2 ---------`);

// const scoreDolphinsB2 = (97 + 112 + 101) / 3; // 103.33333333333333 
// const scoreKoalasB2 = (109 + 95 + 106) / 3; // 103.33333333333333
// console.log(scoreDolphinsB2, scoreKoalasB2);

// if (scoreDolphinsB2 > scoreKoalasB2 && scoreDolphinsB2 >= 100) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalasB2 > scoreDolphinsB2 && scoreKoalasB2 >= 100) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphinsB2 === scoreKoalasB2) {
//   console.log(`Both win the trophy.`);  // Both win the trophy.
// }
// console.log(`                                 `);
// // --- Question 3 - Data Bonus 2 ---------
// // 103.33333333333333 103.33333333333333
// // Both win the trophy.



// //-- Question 4 --- Playing around with different options ------

// // 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy. 

// // Changed Dolphins changed 89 to 81 & Koalas changed 110 to 86
// console.log(`--- Question 3 - TESTTING UNDER 100 Data ---------`);

// const scoreDolphinsT1 = (97 + 112 + 81) / 3; // 96.66666666666667 
// const scoreKoalasT1 = (109 + 95 + 86) / 3; // 96.66666666666667
// console.log(scoreDolphinsT1, scoreKoalasT1);

// if (scoreDolphinsT1 > scoreKoalasT1) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalasT1 > scoreDolphinsT1) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphinsT1 === scoreKoalasT1) {
//   console.log(`Both win the trophy.`); // Both win the trophy.
// }
// console.log(`                                 `);
// //RESULT in Console:
// // --- Question 4 - TESTTING UNDER 100 Data ---------
// // 96.66666666666667 96.66666666666667
// // Both win the trophy.




// //-- Question 4 --- Playing around with different options ------

// // 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy. 

// // Changed Dolphins changed 89 to 81 & Koalas changed 110 to 86
// console.log(`--- Question 4 - with tha changed data from Question 3 ---------`);

// const scoreDolphins4 = (97 + 112 + 81) / 3; // 96.66666666666667 
// const scoreKoalas4 = (109 + 95 + 86) / 3; // 96.66666666666667 
// console.log(scoreDolphins4, scoreKoalas4);

// if (scoreDolphins4 > scoreKoalas4) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalas4 > scoreDolphins4) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphins4 === scoreKoalas4 && scoreDolphins4 >= 100 && scoreKoalas4 >= 100) {
//   console.log(`Both win the trophy.`);
// } else {
//   console.log(`No one wins the trophy.`) // No one wins the trophy.
// }
// console.log(`                                 `);
// //RESULT in Console:
// // --- Question 4  with tha changed data from Question 3 ---------
// // 96.66666666666667 96.66666666666667
// // No one wins the trophy.



// //-- Question 4 --- With original numbers -----------------------

// // 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy. 

// console.log(`--- Question 4 - With original numbers ---------`);

// const scoreDolphins5 = (97 + 112 + 101) / 3; // 103.33333333333333 
// const scoreKoalas5 = (109 + 95 + 106) / 3; // 103.33333333333333 
// console.log(scoreDolphins5, scoreKoalas5);

// if (scoreDolphins5 > scoreKoalas5 && scoreDolphins5 >= 100) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalas5 > scoreDolphins5 && scoreKoalas5 >= 100) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphins5 === scoreKoalas5 && scoreDolphins5 >= 100 && scoreKoalas5 >= 100) {
//   console.log(`Both win the trophy.`); // Both win the trophy.
// } else {
//   console.log(`No one wins the trophy.`);
// }
// console.log(`                                 `);
// //RESULT in Console:
// // --- Question 4  With original numbers ---------
// // 103.33333333333333 103.33333333333333
// // Both win the trophy.



// //--  More Testing -----------------------


// console.log(`--- More Testing ------------------`);

// // Changed the Koala from 106 to 50 & Dolphin from 101 to 80
// const scoreDolphins6 = (97 + 112 + 80) / 3; // 96.33333333333333
// const scoreKoalas6 = (109 + 95 + 50) / 3; // 84.66666666666667
// console.log(scoreDolphins6, scoreKoalas6);

// if (scoreDolphins6 > scoreKoalas6 && scoreDolphins6 >= 100) {
//   console.log(`Dolphnis win the trophy.`);
// } else if (scoreKoalas6 > scoreDolphins6 && scoreKoalas6 >= 100) {
//   console.log(`Koalas win the trophy.`);
// } else if (scoreDolphins6 === scoreKoalas6 && scoreDolphins6 >= 100 && scoreKoalas6 >= 100) {
//   console.log(`Both win the trophy.`);
// } else {
//   console.log(`No one wins the trophy.`); // No one wins the trophy.
// }
// console.log(`                                 `);
//RESULT in Console:
// --- More Testing ------------------
// 96.33333333333333 84.66666666666667
// No one wins the trophy.









// ------- JavaScript Fundamentals – Part 1 --------------------
// -------------  Coding Challenge #4 -----------------

// Coding Challenge #4 

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 

// Your tasks: 

// 1.	Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 

// 2.	Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 

// Your tasks: 

// 1.	Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 

// 2.	Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 

// Test data: 
// § Data 1: Test for bill values 275, 40 and 430

// Hints: 
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 

// § Value X is between 50 and 300, if it's>= 50 && <= 300😉 

// Test data: 
// § Data 1: Test for bill values 275, 40 and 430

// Hints: 
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 

// § Value X is between 50 and 300, if it's>= 50 && <= 300😉 

//1 with 275
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//2 with 275 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//RESULT:
//The bill was 275, the tip was 41.25, and the total value 316.25


//2 with 40 
const bill1 = 40;
const tip1 = bill1 <= 300 && bill1 >= 50 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);
//RESULT:
//The bill was 40, the tip was 8, and the total value 48


//2 with 430 
const bill2 = 430;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);
//RESULT:
//The bill was 430, the tip was 86, and the total value 516
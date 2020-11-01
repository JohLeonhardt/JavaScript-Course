// ------- JavaScript Fundamentals – Part 1 -----------
// -------------  Coding Challenge #1 -----------------
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

// //Data set 1
// let massMark1 = 78;
// let heightMark1 = 1.69;
// let massJohn1 = 92;
// let heightJohn1 = 1.95;

// // //Data set 2
// let massMark2 = 95;
// let heightMark2 = 1.88;
// let massJohn2 = 85;
// let heightJohn2 = 1.76;

// console.log(massMark1 / (heightMark1 ** 2), massMark2 / (heightMark2 ** 2));
// // (1. Mark BMI) = 78/(1.69*1.69=2.8561) so 78 devided by 2.8561 = 27.309968138370508
// // (2. Mark BMI) = 95/(1.88*1.88=3.5344) so 95 devided by 3.5344 = 26.87867813490267
// // (1. Mark BMI) = 27.309968138370508 & (2. Mark BMI) = 26.87867813490267

// console.log(massJohn1 / (heightJohn1 ** 2), massJohn2 / (heightJohn2 ** 2));
// // (1. John BMI) = 92/(1.95*1.95=3.8025) so 92 devided by 3.8025 = 24.194608809993426
// // (2. John BMI) = 85/(1.76*1.76=3.0976) so 85 devided by 3.0976 = 27.44059917355372
// // (1. John BMI) = 24.194608809993426 & (2. John BMI) = 27.44059917355372

// let markHigherBMI1 = (massMark1 / (heightMark1 ** 2)) > (massJohn1 / (heightJohn1 ** 2));
// console.log(markHigherBMI1);
// // // 27.309968138370508 > 24.194608809993426 = true

// let markHigherBMI2 = (massMark2 / (heightMark2 ** 2)) > (massJohn2 / (heightJohn2 ** 2));
// console.log(markHigherBMI2);
// 26.87867813490267 > 27.44059917355372 = false


// ------- JavaScript Fundamentals – Part 1 ---------------=====
// -------------  Coding Challenge #2 -----------------

// Coding Challenge #1 - DATA

//Data set 1
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

//Data set 1
const BMIMark1 = massMark1 / (heightMark1 ** 2);
const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);
const markHigherBMI1 = BMIMark1 > BMIJohn1;

console.log(BMIMark1, BMIJohn1, markHigherBMI1);

//Data set 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

//Data set 2
const BMIMark2 = massMark2 / (heightMark2 ** 2);
const BMIJohn2 = massJohn2 / (heightJohn2 ** 2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark2, BMIJohn2, markHigherBMI2);

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 

// Your tasks: 
// 1. Print a nice out-put to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 

// 2. Use a template literal to include the BMI values in the out puts. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement 😉 

//Data set 1
let highestBMI1;
if (BMIMark1 > BMIJohn1) {
  console.log(`Mark's BMI is higher than John's!`)
} else {
  highestBMI1 = BMIJohn1 > BMIMark1;
  console.log(`John's BMI is higher than Mark's!`)
}
console.log(`Mark's BMI (${BMIMark1}) is higher than John's (${BMIJohn1})!`)

//Data set 2
let highestBMI2;
if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI is higher than John's!`)
} else {
  highestBMI2 = BMIJohn2 > BMIMark2;
  console.log(`John's BMI is higher than Mark's!`)
}
console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`)



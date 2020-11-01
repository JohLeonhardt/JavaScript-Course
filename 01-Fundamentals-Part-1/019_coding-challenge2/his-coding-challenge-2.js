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

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark})is higher than John's (${BMIJohn})!`)
} else {
  console.log(`Joh's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`)
};
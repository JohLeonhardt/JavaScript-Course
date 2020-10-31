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

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);




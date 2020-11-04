//-----------024 Logical Operators ---------------------
// LECTURE: Logical Operators 


//----------------------------------------------
// 1.	Comment out the previous code so the prompt doesn't get in the way 
//----------------------------------------------
// ANSWER:

// const hasDriverLicense = true;  // A
// const hasGoodVision = true;    // B

// console.log(hasDriverLicense && hasGoodVision); // = true
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// // */if (hasDriverLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive.'); // THIS PRINTS
// // } else {
// //   console.log('Someone else should drive ...');
// // }/*

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired); // = true

// if (hasDriverLicense && hasGoodVision && !isTired) { // !isTired = (false) making this => true && true && flase = false
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }


//----------------------------------------------
//2.	Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island. 
//----------------------------------------------
// ANSWER:

const newCountrySpeakEnglish = true;
const newCountryLess50Million = true;
const newCountryIsNotIsland = true;

console.log(newCountrySpeakEnglish && newCountryLess50Million && newCountryIsNotIsland); // true


//----------------------------------------------
// 3.	Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary. 
//----------------------------------------------
// ANSWER:

const newCountrySpeakEnglish = true;
const newCountryLess50Million = true;
const newCountryIsNotIsland = true;

if (newCountrySpeakEnglish && newCountryLess50Million && newCountryIsNotIsland) {
  console.log(`Sarah's critria are all met for Australia.`)
} else {
  console.log(`Sarah's critria are not met.`)
};



//----------------------------------------------
// 4.	If yours is the right country, log a string like this: 'You should live in Portugal:)'. If not, log 'Portugal does not meet your criteria :(' 
//----------------------------------------------
// ANSWER:

const newCountrySpeakEnglish = true;
const newCountryLess50Million = true;
const newCountryIsNotIsland = true;

if (newCountrySpeakEnglish && newCountryLess50Million && newCountryIsNotIsland) {
  console.log(`You should live in Australia.`)
} else {
  console.log(`Australia does not meet your criteria`)
};



//----------------------------------------------
// 5.	Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
//----------------------------------------------
// ANSWER:

const newCountrySpeakEnglish = true;
const newCountryLess50Million = true;
const newCountryIsNotIsland = false;

if (newCountrySpeakEnglish && newCountryLess50Million && newCountryIsNotIsland) {
  console.log(`You should live in Australia.`)
} else {
  console.log(`Australia does not meet your criteria`)
};



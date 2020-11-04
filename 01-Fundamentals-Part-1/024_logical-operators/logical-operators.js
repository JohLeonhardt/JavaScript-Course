//-------------------------1-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = true;     // B
// console.log(hasDriverLicense && hasGoodVision); // = ture

// RESULT:
// true


//-------------------------2-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = false;    // B
// console.log(hasDriverLicense && hasGoodVision); // = false

// RESULT:
// false


//-------------------------3-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = false;    // B

// console.log(hasDriverLicense && hasGoodVision); // = false
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive.');
// } else {
//   console.log('Someone else should drive ...');
// }

// RESULT:
// false
// true
// false
// Someone else should drive ...



//-------------------------4-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = false;    // B

// console.log(hasDriverLicense && hasGoodVision); // = false
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.');
// } else {
//   console.log('Someone else should drive ...'); // THIS PRINTS
// }


// RESULT:
// false
// true
// false
// Someone else should drive ...



//-------------------------5-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = true;    // B

// console.log(hasDriverLicense && hasGoodVision); // = true
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }

// RESULT:
// true
// true
// false
// Sarah is able to drive.


//-------------------------6-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = true;    // B

// console.log(hasDriverLicense && hasGoodVision); // = true
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }

// const isTired = true; // C
// console.log(hasDriverLicense || hasGoodVision || isTired); // = true

// RESULT:
// true
// true
// false
// Sarah is able to drive.
// true


//-------------------------7-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = true;    // B

// console.log(hasDriverLicense && hasGoodVision); // = true
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }

// const isTired = true; // C
// console.log(hasDriverLicense && hasGoodVision && isTired); // = true


// RESULT:
// true
// true
// false
// Sarah is able to drive.
// ture

//-------------------------8-------------------------------//
// const hasDriverLicense = true;  // A
// const hasGoodVision = true;    // B

// console.log(hasDriverLicense && hasGoodVision); // = true
// console.log(hasDriverLicense || hasGoodVision); // = true
// console.log(!hasDriverLicense); // = false (because of the ! 

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired); // = false

// RESULT:
// true
// true
// false
// Sarah is able to drive.
// false

//-------------------------9-------------------------------//
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

// const isTired = true; // C
// console.log(hasDriverLicense && hasGoodVision && isTired); // = true

// if (hasDriverLicense && hasGoodVision && !isTired) { // !isTired = (false) making this => true && true && flase = false
//   console.log('Sarah is able to drive.');
// } else {
//   console.log('Someone else should drive ...'); // THIS PRINTS
// }

// RESULT:
// true
// true
// false
// true
// Someone else should drive ...


//-------------------------10------------------------------//
const hasDriverLicense = true;  // A
const hasGoodVision = true;    // B

console.log(hasDriverLicense && hasGoodVision); // = true
console.log(hasDriverLicense || hasGoodVision); // = true
console.log(!hasDriverLicense); // = false (because of the ! 

// */if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is able to drive.'); // THIS PRINTS
// } else {
//   console.log('Someone else should drive ...');
// }/*

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired); // = true

if (hasDriverLicense && hasGoodVision && !isTired) { // !isTired = (false) making this => true && true && flase = false
  console.log('Sarah is able to drive.'); // THIS PRINTS
} else {
  console.log('Someone else should drive ...');
}

// RESULT:
// true
// true
// false
// false
// Sarah is able to drive.
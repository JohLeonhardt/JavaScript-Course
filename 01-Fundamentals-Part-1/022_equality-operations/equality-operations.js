// const age = 18;
// if (age === 18) console.log('You just become an adult');
// // result = You just become an adult

//--------------------------------------------------------------

// const age = 19;
// if (age === 18) console.log('You just become an adult');
// // NO result =

//--------------------------------------------------------------

// const age = 18;
// if (age === 18) console.log('You just become an adult');
// // result = You just become an adult

//--------------------------------------------------------------

// // 18 === 18 // true as (number) = (number) = true
// // 18 === 19 // false as (numbers are different) = so false
// // '18' === 19 // false as (string) = (number) = flase 
// // '18' == 19 // false as (string) = (number) = false
// '18' == 19   // false
// '18' === 19  // false
// 18 == 18     // true
// 19 == '19'   // true
// '1' == '1'   // true
// '1' == 1     // true

//--------------------------------------------------------------

// const age = 18;
// if (age === 18) console.log('You just become an adult! (strict)'); // will run
// if (age == 18) console.log('You just become an adult! (loose)'); // will run
//--------------------------------------------------------------
// const age = '18';
// if (age === 18) console.log('You just become an adult! (strict)'); // will NOT run
// if (age == 18) console.log('You just become an adult! (loose)'); // will run

//--------------------------------------------------------------
// ===== ===== ==== ==== ==== ==== ===== ===== ===== ====== ===== ===
// =====  RULE:  AVOID USING THE == OPERATOR (2x =) RULE: ===========
//  OPERATOR Double == will do type conversion
//  OPRATOR Tripple === won't do type conversion

//--------------------------------------------------------------

// prompt("What's your favourite number?"); // will bring up promt with this question

//--------------------------------------------------------------

// const favourite = prompt("What's your favourite number?");
// console.log(favourite); // this will print what ever number you input now
// console.log(typeof favourite); // will print the word: string
// if (favourite == 23) {
//   console.log('Cool 23 is a amazing number!') // will print: Cool 23 is a amazing number!

//--------------------------------------------------------------

// const favourite = prompt("What's your favourite number?");
// if (favourite == 22) {    // '22' == 22 --> TRUE
//   console.log('Cool 23 is a amazing number!')

//   //--------------------------------------------------------------

//   const favourite = Number(prompt("What's your favourite number?"));
//   if (favourite == 23) {    // '23' == 23 --> TRUE
//     console.log('Cool 23 is a amazing number!')

//--------------------------------------------------------------

//     const favourite = Number(prompt("What's your favourite number?"));
//     if (favourite === 23) {    // 23 === 23 --> TRUE // 23 is also a (number here)
//       console.log('Cool 23 is a amazing number!')

//--------------------------------------------------------------

//       const favourite = Number(prompt("What's your favourite number?"));
//       if (favourite === 23) {    // '23' === 23 --> FALSE
//         console.log('Cool 23 is a amazing number!')

//--------------------------------------------------------------

//         const favourite = Number(prompt("What's your favourite number?"));
//         if (favourite === 23) {    // 22 === 23 --> FALSE
//           console.log('Cool 23 is a amazing number!')

//--------------------------------------------------------------

const favourite = Number(prompt("What's your favourite number?"));
if (favourite === 23) {    // 22 === 23 --> FALSE
  console.log('Cool 23 is a amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number.')
} else if (favourite === 9) {
  console.log('9 is also a cool number.')
} else {
  console.log('This number is not 23 or 7 or 9.')
}

if (favourite !== 23) console.log('Why not 23?'); // !== is the lose version

// != is the strict version



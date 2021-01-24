'use strict';

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = []

// OLD WAY
// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
// jonas [5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array (SAME AS THE BELOW)
  // types[i] = typeof jonas[i];

  // Adding a elements to an array - PUSH addes element to the end of the array
  types.push(typeof jonas[i]);
};

// types[0] = 'string';

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
};
console.log(ages)

//CONTINUE AND BREAK

//CONTINUE is to EXIT the current iteration and continue to the next one

//BREAK is used to completly TERMINATE the whole loop

console.log('---- ONLY STRINGS ----')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; // CONTINUE

  console.log(jonas[i], typeof jonas[i]); // this line wont run as CONTINUE will exit iteration before it get to it
};

console.log('---- BREAK WITH NUMBER ----')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break; // CONTINUE

  console.log(jonas[i], typeof jonas[i]);
};
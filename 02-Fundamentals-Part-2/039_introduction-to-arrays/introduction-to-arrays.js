'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Basic Array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // (3) ["Michael", "Steven", "Peter"]

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

friends[2] = 'Jay';
console.log(friends); // (3) ["Michael", "Steven", "Jay"]
// friends = ['Bob', 'Alice']; // ilegal - ERROR

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas); // (5) ["Jonas", "Schmedtmann", 46, "teacher", Array(3)]

// -- OR --

// (5) ["Jonas", "Schmedtmann", 46, "teacher", Array(3)]
// 0: "Jonas"
// 1: "Schmedtmann"
// 2: 46
// 3: "teacher"
// 4: (3) ["Michael", "Steven", "Jay"]
// length: 5
// __proto__: Array(0)

console.log(jonas.length); // 5

// Exercise: -----------------------------------------------
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// NOT ILEGAL BUT WONT WORK:
// console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // 47 70 19

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); // (3) [47, 70, 19]

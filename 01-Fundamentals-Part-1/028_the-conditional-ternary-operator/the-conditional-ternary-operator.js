const age = 51;
// age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');

const drink = age >= 18 ? 'wine1' : 'water1';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine2';
} else {
  drink2 = 'water2';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine1' : 'water1'}`);


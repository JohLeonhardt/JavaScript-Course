'use strict';

const friends = ['Michael', 'Steven', 'Peter'];

//ADD ELEMENTS
//PUSH - adds element at the end of array
// friends.push('Jay'); // push is a method and technically a function - ah push function
const newLength = friends.push('Jay');
console.log(friends); // (4) ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); // 4

// UNSHIFT adds new element to beginning of array
friends.unshift('John');
console.log(friends); // (5) ["John", "Michael", "Steven", "Peter", "Jay"]

// ---- REMOVE ELEMENTS ------

// POP removes element from last array position
friends.pop();
console.log(friends); // (4) ["John", "Michael", "Steven", "Peter"]
const popped = friends.pop();
console.log(popped); // Peter
friends.pop();
console.log(friends); // (2)["John", "Michael"]

// .SHIFT - takes 1 value in array OUT 
friends.shift(); // FIRST
console.log(friends); // ["Michael"]

// .INDEXOF - shows at which positon a value sits (if it doesn't then it is a -1)
console.log(friends.indexOf('Michael')); // 0
console.log(friends.indexOf('Bob')); // -1

// .INCLUDES - show if something is in the array or not
friends.push(23);
console.log(friends.includes('Michael')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Michael')) {
  console.log('You have a friend called Michael.');
} // You have a friend called Michael.

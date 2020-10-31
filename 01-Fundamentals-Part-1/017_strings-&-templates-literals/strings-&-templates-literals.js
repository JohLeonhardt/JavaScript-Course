const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// NOW OUR FIRST TEMPLATE LITERALS - STRING
// backticks are typed by pressing the button ~ twice = ``
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// BACKTICK ``
console.log(`Just a regular string ...`);

//NORMAL ''
console.log('String with ... \n\
multiple ... \n\
lines');

// BACKTICK ``
console.log(`String ...
multiple ...
lines`)


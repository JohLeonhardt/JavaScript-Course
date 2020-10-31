const ageJoh = 2020 - 1981;
const ageDoris = 2020 - 1982;
console.log(ageJoh, ageDoris);

//Math operators
// So here NOW is replacing 2056
const now = 2000;
const ageJack = now - 1981;
const ageSarah = now - 2018;
console.log(ageJack, ageSarah);

// 4 ** 3 means - 4 to the power of 3  which is => 4*4*4 = 64
console.log(ageJack * 3, ageDoris / 2, 4 ** 3);

const firstName = 'James';
const lastName = 'Bond';
console.log(firstName + ' ' + lastName);

// Assigenment operators
let x = 10 + 5; // 15
x += 10;        // x = x + 10 = 25
x *= 4;         // x = x * 4 = 100
x++;            // x = x + 1 = 101
x--;            // x = x - 1 = 100
x--;            // x = x - 1 = 99
console.log(x);

//Comparison operators
console.log(ageJack > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

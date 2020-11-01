// type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // (number) 1991 "1991" (string)
console.log(Number(inputYear) + 18); // 2009 (number)

console.log(Number('Jonas'));  // we get NaN = Not a Number which means invalid number
console.log(typeof NaN); // number (string)

console.log(String(23), 23); // (string) 23 23 (number)

// type coercion
console.log('I am ' + 23 + ' years old.'); // I am 23 years old.
console.log('I am ' + '23' + ' years old.'); // I am 23 years old.
console.log('23' - '10' - 3); // 10 (number)
console.log('23' + '10' + 3); // 23103 (number)
console.log('23' * '2'); // 46 (number)
console.log('23' / '2'); // 11.5 (number)
console.log('23' > '18'); // true (number)

let n = '1' + 1; // 1 + 1 = 11 (string)
n = n - 1; // (string) 11 - 1 (number) = 10 (number)
console.log(n); // 10 (number)

// SO:   
//2 + 3 + 4 + '5' = "95" because 2 + 3=5 & 5 + 4=9 so(number) 9 + (string) '5' = 9'5' so (string) "95"  
// or
// '10'-'4'-'3'-2+'5' = 10-4=6 & 6-3=3 & 3-2=1 & (number) 1 + (string) '5' = 1'5' so (string) "15"
// or
// 4+5+'5'-20*'4'/2 = 55
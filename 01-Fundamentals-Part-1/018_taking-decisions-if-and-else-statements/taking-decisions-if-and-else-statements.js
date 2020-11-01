const age = 15;
// CONTROLSTRUCTURE
if (age >= 18) {
  console.log('Sarah can start with her driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

// This below is called a - IF CONTROL STRUCTURE
// if () {

// } else {

// }

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //OBJECT METHOD VERSION 1
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  //OBJECT METHOD VERSION 2
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  //OBJECT METHOD VERSION 3 - storing a new property here "age" (creating a new property (age) on the current object (the object is calcAge here))
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  //NEW METHOD FROM CHALLENGE below
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} diver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// CHALLENGE
// "Jonas is a 46-year old teacher, and he has a driver's license."

//My try outcome: Jonas is a 46-year old teacher, and he has true driver's license.
// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense} driver's license.`);

console.log(jonas.getSummary());
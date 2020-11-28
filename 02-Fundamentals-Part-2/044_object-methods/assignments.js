'use strict';
//-----------044 LECTURE: Object Methods    ---------------------

// LECTURE: Object Methods 
// 1.	Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword. 

// 2.	Call the 'describe' method 

// 3.	Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property. 


const myCountry = {
  country: 'Australia',
  capital: 'Cambera',
  language: 'english',
  population: 25,
  neighbours: ['New Zealand', 'Papua New Guinea', 'Indonesia', 'East Timor', 'The Solomon Islands', 'Vanuatu'],
  //1 & 2
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  //3
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? 'true' : 'false';
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  }
};
myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);
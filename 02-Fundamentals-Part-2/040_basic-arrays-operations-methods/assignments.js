'use strict';
//-----------040 LECTURE: Basic Array Operations (Methods)  ---------------------
// LECTURE: Basic Array Operations (Methods) 

// 1.	Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours' 

// 2.	At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array 

// 3.	Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array 

// 4.	If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D' 

// 5.	Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. 

// ------- ANSWEAR ------- 
//1
const neighbours = ['Papua New Guinea', 'Indonesia', 'East Timor', 'The Solomon Islands', 'Vanuatu', 'New Zealand']
console.log(neighbours); // (6) ["Papua New Guinea", "Indonesia", "East Timor", "The Solomon Islands", "Vanuatu", "New Zealand"]
//2
const newLength = neighbours.push('Utopia');
console.log(neighbours); // (7) ["Papua New Guinea", "Indonesia", "East Timor", "The Solomon Islands", "Vanuatu", "New Zealand", "Utopia"]
//3
neighbours.pop();
console.log(neighbours); // (6) ["Papua New Guinea", "Indonesia", "East Timor", "The Solomon Islands", "Vanuatu", "New Zealand"]
//4
if (neighbours.includes('Germany')) {
  console.log('Your country is in central Europe.');
} else {
  console.log('Probably not a central European country. :D'); // Probably not a central European country. :D
}
//5
console.log(neighbours.indexOf('Papua New Guinea'));
neighbours.shift()
neighbours.unshift('Paradide Island of Papua New Guinea')
console.log(neighbours); //(6) ["Paradide Island of Papua New Guinea", "Indonesia", "East Timor", "The Solomon Islands", "Vanuatu", "New Zealand"]

//Wanted to try his last //5 solution after seeing it

neighbours[neighbours.indexOf('The Solomon Islands')] = 'Sovereign State - The Solomon Islands';
console.log(neighbours); // (6) ["Paradide Island of Papua New Guinea", "Indonesia", "East Timor", "Sovereign State - The Solomon Islands", "Vanuatu", "New Zealand"]
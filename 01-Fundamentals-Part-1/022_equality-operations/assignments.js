//-----------022 Equality Operators: == vs. ===  ---------------------
// LECTURE: Equality Operators: == vs. === 

// 1.	Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?'); 

// 2.	If there is only 1 neighbour, log to the console 'Only 1 border!'(use loose equality == for now) 

// 3.	Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1 

// 4.	Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value) 

// 5.	Test the code with different values of'numNeighbours', including 1 and 0. 

// 6.	Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening? 

// 7.	Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1 

// 8.	Reflect on why we should use the === operator and type conversion in this situation 

// ANSWER: ---------------------------------------------------
//1.)
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours)
//2.)
if (numNeighbours === 1) {
  console.log('Only 1 border!');
  //3.)
} else if (numNeighbours > 1) {
  console.log('More than 1 border.');
  //4.)
} else {
  console.log('No borders.');
}
// 5.) ---- see below:

34
More than 1 border.

1
Only 1 border!

0ss
No borders.

//6.)
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours)
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border.');
} else {
  console.log('No borders.');
}

//7.) OK I DON"T KNOW HOW TO DO THIS !!!!!!!!!
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours)
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border.');
} else {
  console.log('No borders.');
};
numNeighbours = 5;

// 8.	
Answer: Because === has less bug's then ==

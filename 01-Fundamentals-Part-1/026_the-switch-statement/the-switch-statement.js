// ----------- SWITCH STATEMENT ----------------

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday': // day === 'tuesday'
    console.log('Perpare theory videos');
    break;
  case 'wednesday': // day === 'wednesday'
  case 'thursday': // day === 'thursday'
    console.log('Write code examples');
    break;
  case 'friday': // day === 'friday'
    console.log('Record videos');
    break;
  case 'saturday': // day === 'saturday'
  case 'sunday': // day === 'sunday'
    console.log('Enjoy the weekend!');
    break;
  default:
    console.log('Not a valid day!')
}



// ----------- If/ELSE STATEMENT ----------------
let day = 'monday';
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Perpare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Not a valid day!');
} 

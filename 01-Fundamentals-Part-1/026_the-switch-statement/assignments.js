//-----------026 The switch Statement ---------------------
// LECTURE: The switch Statement 

// 1. Use a switch statement to log the following string for the given 'language': chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place' 
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D' 

const language = 'arabic';
switch (language) {
  case 'chinese or mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi': s
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D')
}
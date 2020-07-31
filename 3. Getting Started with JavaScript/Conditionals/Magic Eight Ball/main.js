const userName = 'jinho';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'how old are you?';
console.log(`${userName} ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'thank you';
    break;
  case 1:
    eightBall = 'thank you!';
    break;
  case 2:
    eightBall = 'thank you!!';
    break;
  case 3:
    eightBall = 'thank you!!!';
    break;
  case 4:
    eightBall = 'thank you!!!!';
    break;
  case 5:
    eightBall = 'thank you!!!!!';
    break;
  case 6:
    eightBall = 'thank you!!!!!!';
    break;
  case 7:
    eightBall = 'thank you!!!!!!!';
    break;
}

console.log(eightBall);
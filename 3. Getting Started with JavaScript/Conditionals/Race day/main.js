let raceNumber = Math.floor(Math.random() * 1000);

let registerdEarly = false;
const age = 23;

if (age > 18 && !registerdEarly) {
  raceNumber += 1000;
}

if (age > 18 && registerdEarly) {
  console.log(`you will race at 9:30 am, race number is ${raceNumber}`);
} else if (age > 18 && !registerdEarly) {
  console.log(`NOT register early. you will race at 11:00 am, race number is ${raceNumber}`);
} else if (age < 18 && registerdEarly) {
  console.log(`you will race at 12:30 pm, race number is ${raceNumber}`);
} else if (age < 18 && !registerdEarly) {
  console.log(`NOT register early. you will race at 12:30 pm, race number is ${raceNumber}`);
} else {
    console.log('Runners who are 18 years old!');
}
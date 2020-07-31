const myAge = 23; // my age

let earlyYears = 2; // will be change
earlyYears *= 10.5;
//earlyYears = earlyYears * 10.5;

let laterYears = myAge - 2; // will be change
laterYears *= 4;
//laterYears = laterYears * 4;

console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears; // my age in dog years

const myName = 'jinho'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
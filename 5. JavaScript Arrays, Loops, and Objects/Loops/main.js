//const input = 'turpentine and turtles'
//const input = 'Hi, Human'
const input = 'a whale of a deal!'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      }
      else if (input[i] === 'u') {
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[i]);
      }
    }
  }
}

const result = resultArray.join('').toUpperCase() 
console.log(result);
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    let a = 1;
    while (a < number) {
      a = a * 2;
    }
    results.push(a);
  }
  return results
}

console.log(smallestPowerOfTwo(numbers)) 

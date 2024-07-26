// q1: sum of all natural numbers from 1 to navigator

// sum of 1 to 5: 15

function sumOfNaturalNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
//   return num*(num +1)/2; shortcut 
}

console.log(sumOfNaturalNumber(2));

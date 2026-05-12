/*
Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below n.
*/
function primeSummation(n) {
  let isPrime = true;
  let sum = 0;
  for (let i = 2; i < n; i++) {
    isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && i != j) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

primeSummation(2000000);
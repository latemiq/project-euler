// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?



function largestPrimeFactor(number) {
    let x = 0;
    while (number > 1) {
        for (let i = 2; i <= number; i++) {
                while (number % i == 0) {
                    x = i;
                    number /= i;
            }
        }
    }
    return x;
  }
  
largestPrimeFactor(13195);
// Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  let c = 0;
  for (let i = 1; i <= sumOfabc; i++) {
    for (let j = 1; j <= sumOfabc; j++) {
      c = sumOfabc - i - j;
      if ((i ** 2 + j ** 2) === c ** 2 && c > 0) {
        return i * j * c;
      }
    }
  }
}

specialPythagoreanTriplet(24);

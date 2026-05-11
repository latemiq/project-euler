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

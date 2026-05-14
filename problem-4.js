// Problem 4: Largest palindrome product
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    const start = 10 ** (n - 1);
    const end = 10 ** n - 1;
    let largest = 0;

    for (let i = start; i <= end; i++) {
        for (let j = i; j <= end; j++) {
            const product = i * j;
            const text = product.toString();
            const reversed = text.split("").reverse().join("");

            if (text === reversed && product > largest) {
                largest = product;
            }
        }
    }

    return largest;
}

console.log(largestPalindromeProduct(3));

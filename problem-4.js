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

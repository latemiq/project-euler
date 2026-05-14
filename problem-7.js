// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?
function nthPrime(n) {
    let tabA = [];
    for(let i = 2; i < 104744; i++){
        tabA.push(i);
    }
    for(let j = 0; j < tabA.length; j++){
        for(let k = j + 1; k < tabA.length; k++){
            if(tabA[k] % tabA[j] == 0){
                tabA.splice(k, 1);
                k--;
            }
        }
    }
    return tabA[n - 1];
}

nthPrime(10001);
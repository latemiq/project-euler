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
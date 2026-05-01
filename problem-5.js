function smallestMult(n) {
    let number = 1;
    while (true) {
        let dobra = true;
        for (let i = 1; i <= n; i++) {
            if (number % i !== 0) {
                dobra = false;
                break;
            }
        }
        if (dobra) {
            return number;
        }
        number++;
    }
    return true;
}

smallestMult(20);


function isPrime(val) {
    let j = 0;
    for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i == 0) {
            return false
        }
    }
    return true;
};

function nPrime(n) {
    let primeNum = 0;
    let counter = 0;
    for (let i = 2; i >= 0; i++) {
        if (isPrime(i) == false) {
            continue;
        }
        else {
            primeNum = i;
            counter++;
            if (counter == n) {
                return primeNum;
            }
        }
    }
}
console.log(nPrime(10001));
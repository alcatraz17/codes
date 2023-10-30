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
    let primeSum = 0;
    let counter = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i) == false) {
            continue;
        }
        else {
            primeSum = primeSum + i;
        }
    }
    return primeSum;
}
console.time('log');
console.log(nPrime(2000000));
console.timeEnd('log');

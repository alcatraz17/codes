function isPrime(val) {
    // let j = 0;
    for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i == 0) {
            return false
        }
    }
    return true;
};

function checkPrime(val) {
    console.time('start');
    let primeNum = 0;
    for (let i = 2; i <= val;) {
        if (val % i != 0) {
            i++;
            continue;
        } else {
            val = val / i;
            if (isPrime(i) == true){
                primeNum = i;
            }
        }
    }
    console.timeEnd('start');
    return primeNum;
}
console.log(checkPrime(242688520421));
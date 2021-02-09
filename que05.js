// function primeFactors(num) {
//     let factorArray = []
//     for (let i = 1; i <= num; i++) {
//         if (isPrime(i) == true && num % i == 0) {
//             factorArray.push(i);
//         }
//     }
//     return factorArray;
// }
// function isPrime(val) {
//     let j = 0;
//     for (let i = 2; i < Math.sqrt(val); i++) {
//         if (val % i == 0) {
//             return false
//         }
//     }
//     return true;
// }

function smallestMultiple() {
    arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20,];
    let mod = 2;
    let smallestMul = 1;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % mod == 0) {
            for (let j = i + 1; j <= arr1.length; j++) {
                if (arr1[j] % mod == 0) {
                    arr1[j] = arr1[j] / mod;
                }
            }
            smallestMul = smallestMul * mod
            mod ++;
        }
        else if (arr1[i] % mod != 0) {
            for (let j = i + 1; j < arr1.length; j++) {
                if (arr1[j] % arr1[i] == 0) {
                    arr1[j] = arr1[j] / arr1[i];
                }
            }
            smallestMul = smallestMul * arr1[i];
        }
        else {
            smallestMul = smallestMul * mod;
            mod ++;

        }
    }
    return smallestMul;
}
console.log(smallestMultiple())
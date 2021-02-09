function pythagoreanTriplet(num) {
    let pythagorean = [];
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            for (let k = 1; k <= num; k++) {
                if ((k ** 2) + (j ** 2) == (i ** 2)) {
                    pythagorean = [k, j, i];
                    if (k + j + i == 1000){
                        return pythagorean;
                    }
                }
            }
        }
    }
}
console.log(pythagoreanTriplet(1000));
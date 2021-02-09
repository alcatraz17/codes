function squareSumDifference(n){
    sum = 0;
    squareSum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + (i * i);
        squareSum = squareSum + i;
    }
    squareSum = squareSum ** 2;
    return squareSum - sum;
}
console.log(squareSumDifference(100));
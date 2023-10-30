function mulSum(num){
    let sum = 0;
    for(let i = 0; i < num; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(mulSum(1000));
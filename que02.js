function fibo(term){
    let first = 0;
    let second = 1;
    let fibonum = 0;
    let evenFibo = 0;
    for (let i = 0; i < term; i++){
        fibonum = first + second;
        if(fibonum % 2 == 0 & fibonum < 4000000){
            evenFibo = evenFibo + fibonum;
        }
        first = second;
        second = fibonum;
    }
    return evenFibo;
}
console.log(fibo(10));
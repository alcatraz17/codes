function palindrome(num){
    let palindrome = 0;
    let product = 0;
    for(let a = 100; a <= num; a++){
        for (let b = 100; b <= num; b++){
            product = a*b;
            product = String(product);
            if (product == reverse(product)){
                palindrome = product;
            }
        }
    }
    return palindrome;
}
function reverse(str){
    let splitString = str.split('');
    let reversed = splitString.reverse()
    let join = reversed.join('');
    return join
}
console.time('log');
console.log(palindrome(9999));
console.timeEnd('log');
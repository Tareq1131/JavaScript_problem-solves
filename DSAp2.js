// q2: sum of digits of a numbers

// 1234: 1+2+3+4=10

function sumOfDigits(num) {
    let sum =0;
    
    while(num > 0){
        sum = sum + (num%10);
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sumOfDigits(1287))
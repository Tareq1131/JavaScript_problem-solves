// palindrome Number 

var isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;
    
    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum*10 +lastDigit;
        copyNum = Math.floor(copyNum/10)
    }
    return x === reverseNum
}

console.log(isPalindrome(121)) 


const isPalindrome = function (x) {
    // if(x<0) return false;
    
    // return x === +x.toString().split("").reverse().join('');

    return x <0 ? false : x === +x.toString().split("").reverse().join('')
}

const res = isPalindrome(121)
console.log(res)
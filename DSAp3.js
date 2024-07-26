// q3: counts a number of digits of a number
//   34521: 5 

function countDigits(num) {
    num = Math.abs(num);
    console.log(num)
    
    let count =0;
    do{
        count++;
        num = Math.floor(num /10)
    }while(num > 0)

        return count
    
}

console.log(countDigits(123456))


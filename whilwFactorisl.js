function factorial(numbber){
    let result = 1;
    let num = 1;
    while(num<= numbber){
        result = result* num;
        num++
    }
    return result;
}
let numbber =5;
let feb= factorial(numbber);
console.log("Factorial of",numbber,feb);
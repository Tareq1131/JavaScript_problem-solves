function fab(num){
let sum=0;
for(let i=0;i<=num;i++){
    sum = sum+i;
    console.log(i);
}
return sum;
}
let b=fab(4);
console.log('total sum',b);
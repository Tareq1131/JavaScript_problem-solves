// write a function findoddsum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numners

function getSum (numbers){
    console.log(numbers)
    let sum =0;
    for(let i=0;i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
       // console.log(sum);
    }
    return sum;
}

// const myNumbers =[2, 5, 3, 8];
// getSum(myNumbers);

function oddSum(numbers){
    let oddarr =[];
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 ===1){
            console.log(index,element);
          
            oddarr.push(element);
            sum = sum + element;
            console.log(sum);
            
        }

      
     
    }
    return oddarr;

}

const myNumbers =[2, 5, 3, 8];
 const number=oddSum(myNumbers);
 console.log(number);
//  console.log(sum);
//  const oddsum= getSum(number);
//  console.log('oddSum',oddsum);

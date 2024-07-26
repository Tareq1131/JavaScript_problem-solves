// Ques 1 - Second Largest Number
// Give an array Arr of Size NaN, Print second Largest
// distinct element from an array.

// Input : [12, 35, 1, 10, 34,1]---->>> output: 34
// Input: [10, 5,10]            ---->>> Output: 5

function secondLargest(arr) {
    // const uniqArr =  new Set(arr);
    const uniqeArr = Array.from( new Set(arr));
    
    uniqeArr.sort((a, b)=>{
        // return a-b assinding order [ 1, 10, 12, 34, 35 ]
        return b-a ;
    });
    if (uniqeArr.length >= 2){
        return uniqeArr[1];
    }else {
        return console.log('lenght is too short');
    }

    // console.log(uniqeArr)
    
}
// secondLargest([12, 35, 1, 10, 34, 1]) 
console.log(secondLargest([10, 5,10])) ;
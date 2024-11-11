// Ques 1 - Second Largest Number
// Give an array Arr of Size NaN, Print second Largest
// distinct element from an array.

// Input : [12, 35, 1, 10, 34,1]---->>> output: 34
// Input: [10, 5,10]            ---->>> Output: 5

// best solution here .....



function secondLargestgestOptimised (arr) {
    
    let largest = Number.NEGATIVE_INFINITY ;
    let secondLargest = Number.NEGATIVE_INFINITY ; 
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest
            largest = arr[i];
        }else if(arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}

console.log(secondLargestgestOptimised ([12, 35, 1, 10, 34,1]))
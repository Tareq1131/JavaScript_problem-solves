// var sortBy = function(arr, fn) {
//     return arr.sort((a, b)=> fn(a) - fn(b))
// };
// Example usage
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Sample data
const numbers = [5, 2, 9, 1, 3];
const sortedNumbers = sortBy(numbers, x => x);
console.log(sortedNumbers);  // Output: [1, 2, 3, 5, 9]
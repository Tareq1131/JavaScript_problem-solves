/**
 * Sum of Two Integers
 * 
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        // Calculate the carry bit
        let carry = a & b;
        
        // Sum the bits of a and b where at least one of the bits is not set
        a = a ^ b;
        
        // Carry is shifted by one so that adding it to a gives the required sum
        b = carry << 1;
    }
    return a;
};

// Example usage:
console.log(getSum(1, 2)); // Output: 3
console.log(getSum(2, 3)); // Output: 5
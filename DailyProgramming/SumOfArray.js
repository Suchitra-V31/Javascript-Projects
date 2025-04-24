// Problem: Print the sum of all numbers in an array.

// Example:
// Input: [1, 2, 3, 4]
// Output: 10

var s = [1,2,3,4]
var sum = 0;
for(let i=0;i<s.length;i++){
    sum+=s[i];
}
console.log("sum-->"+ sum);
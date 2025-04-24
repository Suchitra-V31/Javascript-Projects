// 💻 Day 2 Coding Task: Find the Maximum Number
// Problem:
// Given an array of numbers, print the largest one.

// Example:

// Input: [3, 7, 2, 9, 5]
// Output: 9

var s = [3, 7, 2, 9, 5];
var large = s[0];

for (let i = 1; i < s.length; i++) {
    if (s[i] > large) {
        large = s[i];
    }
}
console.log("Largest number is --> " + large);

// 💻 Day 2 Coding Task: Find the Minimum Number
// Problem:
// Given an array of numbers, print the smallest one.

// Example:
// Input: [3, 7, 2, 9, 5]
// Output: 2

var s = [3, 7, 2, 9, 5]
var small = s[0];
for(let i=1;i<s.length;i++){
    if(s[i]<small){
        small = s[i];
    }
}
console.log(small);
// 💻 Day 3 Task: Count Vowels in a String
// Problem:
// Given a string, count how many vowels (a, e, i, o, u) are in it.

// Example:

// Input: "hello world"
// Output: 3

var s = "hello world";
var count = 0;
var vowels = ["a","e","i","o","u"];
for(let i in s){
    if(vowels.includes(s[i])){
        count+=1;
    }
}


console.log("Count of vowels in "+ s+ " is--> "+ count);
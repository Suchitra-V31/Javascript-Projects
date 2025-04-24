// Problem:
// Write a program that takes a string and prints the reversed version of it.

var s = "hello world";
var reverseString = "";
for(let i=s.length-1;i>=0;i--){
    reverseString+=s[i];
}
console.log("Reversed String-->" + reverseString)
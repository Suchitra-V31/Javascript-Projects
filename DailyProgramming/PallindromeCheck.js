// Problem:
// Write a program that checks whether a string is a palindrome (a word that reads the same backward).

// Examples:

// "madam" → ✅ Palindrome

// "hello" → ❌ Not a palindrome

let s = "mom";
let toCheck = "";
for(let i=s.length-1;i>=0;i--){
    toCheck += s[i];
}
if(s == toCheck){
    console.log(s + " is a palindrome");
}
else{
        console.log(s + " is not a palindrome");

}
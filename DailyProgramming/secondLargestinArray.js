
// 🔍 Problem: Find the second largest number in an array.

// Example:

// Input: [10, 5, 20, 8]
// Output: 10
// First largest = 20,
// Second largest = 10
 
let n = [5, 3, 2, 1];
let largest = -Infinity;
let secLarge = -Infinity
for(let i=0;i<n.length;i++){
    if(n[i] > largest){
        secLarge = largest;
        largest = n[i];

    }
    else if(n[i]>secLarge && n[i]!=largest){
        secLarge = n[i]
    }
}
console.log("LArge--> "+ largest);
console.log("second Largest --> "+ secLarge)
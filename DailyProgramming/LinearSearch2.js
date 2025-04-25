// 🧪 Problem:
// Write a function that finds all the indices where a target value appears in an array.

// 👉 Example:

// Input: arr = [2, 5, 3, 5, 7, 5], target = 5  
// Output: [1, 3, 5]

function findAllOccurrences(arr,target){
    var indices = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            indices.push(i);
        }
    }
    return indices;
}

var arr = [2, 5, 3, 5, 7, 5];
var target = 5;
var s = findAllOccurrences(arr,target);
console.log(s)
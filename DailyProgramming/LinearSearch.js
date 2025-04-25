// 🔧 Problem: Write a function linearSearch(arr, target) that returns the index of the element if found, otherwise -1.

function linearSearch(arr,target){
    var isFound = false;
    for(let i=0;i<arr.length;i++){
        //console.log(i)
        if(arr[i] == target){
            isFound = true;
            return i;
        }
    }
    if(!isFound){
        return -1;
    }
}

var arr = [1,2,3,4,5];
var target = 0;
var s = linearSearch(arr,target);
console.log(s)
// Problem:
// Print numbers from 1 to n (say n = 20), but:
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz"
// For multiples of both 3 and 5, print "FizzBuzz"

let n = 20;
for(let i=1;i<=n;i++){
    if(i%3==0  && i%5==0){
         console.log("FIZZBUZZ");
    }
    else if(i%5==0){
        console.log("BUZZ");
    }
    else if(i%3==0){
        console.log("FIZZ");
    }
    else{
        console.log(i);
    }
}
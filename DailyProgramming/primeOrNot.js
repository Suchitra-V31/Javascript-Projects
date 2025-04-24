// Write a program to check if a given number is a prime number.

// A prime number is only divisible by 1 and itself.
// Examples:

// 5 → Prime ✅

// 4 → Not Prime ❌

// Input: let n = 7
// Output: 7 is a prime number.

var n = 4;
let isPrime = true
if (n <= 1) {
    console.log(n + " is not a prime number");
}
else {
    for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log(n + " is a prime number");
    }
    else {
        console.log(n + " is not a prime number");

    }
}
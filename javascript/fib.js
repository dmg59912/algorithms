// write a function fib(n) that takes in a number as an argument. 
// function should return the n-th number of the fibonacci sequence.
// first and second sequence is 1. to generate next sequence we sum the previous two 
// ex. n = 7 should return 13


// first approach is to try recursion 
// 2^n time complexity 0(n) space complexity or hight of the tree
const fib = (n) => {
    if ( n <= 2 ) return 1;

    return fib(n-1) + fib(n - 2);
}


// test 
console.log('Testing with good old recursive call ')
console.log(fib(4));
console.log(fib(7));
console.log(fib(46));

/*************************************************************************************************************************************
 * ***********************************************************************************************************************************
 * ***********************************************************************************************************************************
 */

// Different approach using dynamic memory using memoization to store duplicate values 
// need to use javascript object with keys as arguments to our function, value will be return 

// O(n) time and space complexity 
const fib2 = (n, memo = {}) => {
    // check to see if memo contains n value, if it does since it is already capture, we will return the value of the key or n
    if (n in memo) return memo[n];
    if(n <=2) return 1;
    //store result of n inside our memo if not in memo
    memo[n] =  fib2(n -1,memo) + fib2(n - 2, memo);
    return memo[n]; 
}

console.log('Testing with memoization')
console.log(fib2(7));
console.log(fib2(30));
console.log(fib2(46));
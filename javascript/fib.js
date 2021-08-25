// write a function fib(n) that takes in a number as an argument. 
// function should return the n-th number of the fibonacci sequence.
// first and second sequence is 1. to generate next sequence we sum the previous two 
// ex. n = 7 should return 13


// first approach is to try recursion 
const fib = (n) => {
    if ( n <= 2 ) return 1;

    return fib(n-1) + fib(n - 2);
}


// test 
console.log(fib(4));
console.log(fib(7));


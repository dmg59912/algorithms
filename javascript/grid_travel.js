//     Problem

//say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal
//is to travel to the bottom-right corner. You may only move down or right

//    IN  HOW MANY WAYS CAN YOU TRAVEL TO THE GOAL ON A GRID WITH DIMENSIONS M * N

    // ex grid(2,3) 2 rows by 3 columns  has 3 ways. S * *
    //                                               * * G
    //      1 way is right, down, right
    //      2nd way down, right, right
    //      3rd way right, right, down

// if we think about it a tree like, if it moves down we will branch to the left, else if move right, branch child to the right
    //subtracting row or column  we are not going to use anymore dependning if we move down or right
/*              EX                                         (2,3)
                                                        |          \
                                                    (1,3)         (2,2)
                                                    |    \         |    \
                                                (0,3)    (1,2)   (1,2)   (2,1)
                                                        |    \     |\     |   \
                                                    (0,2)    (1,1) ect..(1.1)     (2,0)


*/

///             code

// O(2^n + m) time
// O(n + m) space
const grid_travel = (m,n) =>{
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n ===  0) return 0;
    return grid_travel( m -1, n) + grid_travel(m, n -1);

}


// now with momoization 
// O(m * n) time 
// O(n + m) space
const grid_travel2 = ( m,n , memo = {}) => {
    //are the args in the memo
    const key = m + ',' + n; // use a space or else will only put one large value, ex key m = 12 and n = 3 would display 123 
    if(key in memo) return memo[key];
    if( m === 1 && n === 1) return 1;
    if ( m === 0 || n === 0) return 0;
    memo[key] = grid_travel2(m - 1,n, memo) + grid_travel2(m , n -1, memo);
    return memo[key];

}

console.log("Hello\n\n");
console.log(grid_travel(1,1));
console.log(grid_travel(3,2));
console.log(grid_travel(18,18));


console.log("\n\nNow using memoization\n\n");
console.log(grid_travel2(1,1));
console.log(grid_travel2(3,2));
console.log(grid_travel2(18,18));


const fib = (n, memo = {}) => { 
    if (n in memo) return memo[n]; //index memo using key n
    if (n<=2) return 1; //base case
    memo[n] = fib(n-1, memo) + fib(n-2, memo); //store results of every fib in memo for access in subsequent calls
    return memo[n]; //return the stored results indexed with n, the argument. 4th number is..
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(50));

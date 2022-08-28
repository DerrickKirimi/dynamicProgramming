const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum===0) return true; //base case.Remainder = 0
    if (targetSum in memo) return memo[targetSum];
    if (targetSum<0) {return false};
    for (let num of numbers) { 
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo)===true){ 
            memo[targetSum] = true; //Key-(Boolean)value
            return true;
        }
    }
memo[targetSum] = false;
return false;
};

console.log(canSum(7, [4,3]));
console.log(canSum(300, [7,14]));

//time complexity O(m*n)
//space complexity O(m)

//unmemoized
//time -> O(n^m)
//space -> O(m)
// 26-07-2025

// Recursion

// factorial of a number

function factorial(n){
    if(n<=0){
        return 0;
    }
    if(n==1){
        return n;
    }
    else{
        return n*(factorial(n-1))
    }
}

console.log(factorial(5))
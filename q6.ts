//6. Write a function that takes a number as input and returns the factorial of that number.

// function factorial(num : number):number{
//     if(num==0 || num==1){
//         return num;
//     }
//     let fact=1;
//     for(let i=2;i<=num;i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }

// console.log(factorial(5));



function factorial(num : number):number{
    if(num==0 || num==1){
        return 1;
    }
    return num*factorial(num-1);
}

console.log(factorial(5));


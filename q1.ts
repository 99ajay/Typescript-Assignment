//. Write a function to calculate the sum of all numbers in an array.

function calculateSum(array: number[]): number{
    let sum : number=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}


console.log(calculateSum([23,45,778,99,90,0,34]))


export{};
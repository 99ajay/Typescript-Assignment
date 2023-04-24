// Write a function that takes an array of numbers as input and returns a new array containing only the even numbers in the original array.

function isEven(n : number):boolean{
    return n%2===0;
}

 function evenArray(arr: number[]): number[]{
 const even :number[] = arr.filter(isEven);
 return even;
 }

 console.log(evenArray([1,2,3,4,5,6,7,8,9,10]));
 
// 3. Write a function that takes an array of numbers as input and returns the second largest number in the array.

function secondLargest(arr : number[]): number{
    let firstMax=arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstMax){
            firstMax=arr[i];
        }
    }
    let secondMax=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=firstMax){
        if(secondMax<arr[i]){
            secondMax=arr[i];
        }
        }
    }

    return secondMax;
}

console.log(secondLargest([1,2,3,4,5,6,7,8,9,0]));

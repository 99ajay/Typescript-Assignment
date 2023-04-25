// 3. Write a function that takes an array of numbers as input and returns the second largest number in the array.

// function secondLargest(arr : number[]): number{
//     let firstMax=arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>firstMax){
//             firstMax=arr[i];
//         }
//     }
//     let secondMax=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=firstMax){
//         if(secondMax<arr[i]){
//             secondMax=arr[i];
//         }
//         }
//     }

//     return secondMax;
// }

// console.log(secondLargest([1,2,3,4,5,6,7,8,9,0]));


// function secondLargest(arr : number[]): number{
//     arr.sort((a : number,b: number) => {return b-a});
//     return arr[1];
// }
// console.log(secondLargest([1,2,3,4,5,6,7,8,9,0]));


function secondLargest(arr : number[]) : number{
    let secondLargest = -1;
    let largest = 0;
    for(let i=1;i<arr.length ; i++){
        if(arr[i]>arr[largest]){
            secondLargest=largest;
            largest = i;


        }
        else if(arr[i]!=arr[largest]){
            if(secondLargest == -1 || arr[i]>arr[secondLargest])
            {
                secondLargest=i;
            }
        }
    }
    return arr[secondLargest];
}

console.log(secondLargest([1,2,3,4,5,6,7,8,9,0]))


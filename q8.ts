//8. Write a function that takes two arrays as input and returns a new array containing the elements that are common in both arrays.
function commonBoth(firstArray : number[],secondArray : number[]): number[]
{
    let arr : number[]=[];
     let myMap=new Map();
     for(let idx=0;idx<firstArray.length;idx++){
        myMap.set(firstArray[idx],0);
     }

     for(let idx=0;idx<secondArray.length;idx++){
        let n=secondArray[idx];
        if(myMap.has(n)){
            arr.push(n);
            myMap.delete(n);
        }
     }
     return arr;
}

console.log(commonBoth([5,5,9,8,5,5,8,0,3],[9,7,1,0,3,6,5,9,1,1,8,0,2,4,2,9,1,5]));
export{};
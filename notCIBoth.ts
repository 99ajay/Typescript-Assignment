function notCommonBoth(firstArray : number[],secondArray : number[]): number[]
{
   
     const maxLengthArray: number[] = (firstArray.length > secondArray.length) ? firstArray : secondArray;
     const minLengthArray: number[]=  (firstArray.length > secondArray.length) ? secondArray: firstArray;


     let arr : number[]=[];
     let myMap=new Map<number,number>();
     for(let idx=0;idx<maxLengthArray.length;idx++){
        myMap.set(maxLengthArray[idx],0);
     }

     for(let idx=0;idx<minLengthArray.length;idx++){
        let n=minLengthArray[idx];
        if(myMap.has(n)){
            arr.push(n);
            myMap.delete(n);
        }
     }

     
    let concatedArray: number[]=Array.from(new Set(firstArray.concat(secondArray)));
    console.log(concatedArray);
    let notCommon:number[]=[];
    for(let i=0;i<concatedArray.length;i++){
        if(!arr.includes(concatedArray[i])){
            notCommon.push(concatedArray[i]);
        }
    }
    
    return notCommon;
     
}
console.log(notCommonBoth([5,5,9,8,5,5,8,0,3],[9,7,1,0,3,6,5,9,1,1,8,0,2,4,2,9,1,5]));

export{}
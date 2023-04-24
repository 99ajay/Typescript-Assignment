//7. Write a function that takes an array of strings as input and returns the longest string in the array.


function longestString(array : string[]):string{
    let maxLength:number=array[0].length;
    let longeststring:string=array[0];

    for(let i=0;i<array.length;i++){
        if(array[i].length>maxLength){
            longeststring=array[i];
        }
    }
    return longeststring;
}

console.log(longestString(['ajay','verma','asdfgh','jaudjdd','asd']));
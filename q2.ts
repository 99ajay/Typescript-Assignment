//2. Write a function to reverse a string.

// function reverseString(str : string):string{
//     let reverseString: string="";
//     for(let i=(str.length-1);i>=0;i--){
//         reverseString=reverseString+str[i];
//     }
//     return reverseString;
// }

// console.log(reverseString("ajay verma"));







function reverseString(str : string):string{
   let start=0;
   let end=str.length-1;
   let newString=str.split("");
   while(start<end){
    let temp:any=newString[start];
    newString[start]=newString[end];
    newString[end]=temp;
    start++;
    end--;
   }

   return newString.join("");
     
    
}

console.log(reverseString("Hii! sam this is a good place for working "));


 
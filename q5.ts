//5. Write a function that takes two numbers as input and returns the product of those two numbers without using the multiplication operator (*).


function multiplication(firstNumber: number,secondNumber : number): number{
    let result=0;
    for(let i=1;i<=firstNumber;i++)
    {
        result=result+secondNumber;
    }
 return result;
}

console.log(multiplication(10,9));

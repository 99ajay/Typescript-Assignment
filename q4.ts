// 4. Write a function that takes a string as input and returns the count of each character in the string.

function countCharacter(str : string):object{
    let m =new Map();
    for(let idx=0;idx<str.length;idx++){
        let s=str.charAt(idx);
        if(m.has(s)){
            m.set(s,m.get(s)+1);
        }
        else{
            m.set(s,1);
        }
    }

    return m;

}

console.log(countCharacter("Aeroplane jet plane rocket"));

export{};





// let str="djsd";
// let s=str.charAt(0);
// console.log(typeof(s));



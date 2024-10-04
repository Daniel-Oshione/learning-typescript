//arrow function
const addNums = (a:number, b:number) => a + b
// console.log(addNums(3,6));


//callback function
const numAdd = ((a:number, b:number, c?:number) =>{
    if(c){
        return (a + b) / c;
    }
    return a + b
})
// console.log(numAdd(6, 6, 2));


const pi = (cal:number)=>{
    return Math.PI * cal
}
console.log(pi(5));

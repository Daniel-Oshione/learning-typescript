const Product = {
    name: 'phone',
    brand: 'Iphone',
    color: 'red',
    price: 150,
    isAvailable: true
}
console.log(Product);


//using interfaces
// interface User{
//     name: string,
// }

// interface User{
//     age: number
// }

// const userName: User = {
//     name: "Favour",
//     age: 20  
// };

// console.log(userName);

//using tyoes
// type Address = {
//     street: string;
//     city: string;
// };

// type User = {
//     name: string;
//     age: number;
// } & Address;

// const userDetails: User = {
//     name: "Favour",
//     age: 31,
//     street: "shelter",
//     city: "Lagos",
// };

// console.log(userDetails);


// strong typing with types

// type productItems = {
//     id: number;
//     name: string;
//     age: number;
//     city: string;
// }

// const userDetails: productItems = {
//     name: "Daniel",
//     age: 24,
//     id: 1,
//     city: "Uyo"
// }
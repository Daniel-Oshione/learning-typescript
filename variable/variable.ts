import { first } from "lodash";

`import _ from 'lodash';`

function hello() {
    return `world`;
}

//stongtyping in typescript
interface Attributes{
    first: string,
    last: string,
    age: number
}

const humanA : Attributes = {
    first: 'Dan',
    last: 'Might',
    age: 30
}
const humanB : Attributes = {
    first: 'Chick',
    last: 'Might',
    age: 25
}

console.log(humanA.age);

// array stongtyping
const arr: number[] = [];

arr.push(1);
arr.push(5);
arr.push(3);

console.log(arr);
//arrow function
var addNums = function (a, b) { return a + b; };
// console.log(addNums(3,6));
//callback function
var numAdd = (function (a, b, c) {
    if (c) {
        return (a + b) / c;
    }
    return a + b;
});
// console.log(numAdd(6, 6, 2));
var pi = function (cal) {
    return Math.PI * cal;
};
console.log(pi(5));

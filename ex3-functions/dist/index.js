"use strict";
// MARK: Regular function
function sum(num1, num2) {
    return num1 + num2;
}
// MARK: Arrow function
const sumArrow = (num1, num2) => num1 + num2;
// MARK: Anonymous function
const sumAnonymous = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(3, 2));
console.log(sumArrow(3, 2));
console.log(sumAnonymous(3, 2));

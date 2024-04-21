"use strict";
const rgb = [255, 0, 0];
function printRgb(rgb) {
    console.log(rgb);
}
function getRandomRgb() {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
}
printRgb(rgb);
console.log(getRandomRgb());
const userOne = {
    name: 'John',
    age: 30
};

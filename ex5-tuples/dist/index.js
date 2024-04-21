"use strict";
// Tuples is a way to declare a variable that take specific variables in a specific order
let tup;
tup = ["hello", 1];
// for example it is a good practice for RGB
let rgb;
rgb = [3, 200, 176];
function randomRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return [red, green, blue];
}
console.log(randomRGB());
console.log(randomRGB());
//We can also give names to the args of the tuple just that we know what are they refer for
const tup2 = [12, 21, 23];
console.log(tup2);

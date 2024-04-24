"use strict";
// Generics use to get a generic type for example for a function
// without generics
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBool(val) {
    console.log(val);
    return val;
}
// With generics
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
logAndReturnValue('Daniel');
logAndReturnValue(150);
logAndReturnValue(true);

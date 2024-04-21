"use strict";
// union types can make a variable take several types
let unionType;
unionType = "hello";
unionType = 23;
// MARK: Type gourds
// Type gourds => when union type is being used, typescript doesn't know the exact type of the variable,
// so we can use only functions that are available for both types, to solve that we can check the type of
// the variable and use the function that is available for that type only.
function convert(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const id = 23;
const id2 = '23';
console.log(convert(id));
console.log(convert(id2));
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.name);
    }
    else {
        console.log(value.email);
    }
}
const user = {
    type: "user",
    name: "John",
    age: 30
};
logDetails(user);

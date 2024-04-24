"use strict";
// Generics can also be used to create type-safe interfaces.
const collectionOne = {
    data: ['a', 'b', 'c'],
    name: 'collection one'
};
const collectionTwo = {
    data: [23, 34246, 123, 31],
    name: 'collection one'
};
function printCollection(collection) {
    console.log(collection.data);
}
printCollection(collectionOne);
printCollection(collectionTwo); // No need to specify the type of the collection because typescript inferring the type itself.

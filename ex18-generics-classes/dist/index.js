"use strict";
// Generics can also be used to create type-safe Classes.
class Stack {
    constructor(data) {
        this.data = data;
        this.data = data;
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
const numberStack = new Stack([16, 47, 12]);
numberStack.push(12);
numberStack.pop();
numberStack.push(14);
console.log(numberStack);

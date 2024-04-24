// Generics can also be used to create type-safe Classes.

class Stack<T> {
    constructor(private data: T[]) {
        this.data = data;
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.pop();
    }
}

const numberStack = new Stack<number>([16, 47, 12]);

numberStack.push(12);
numberStack.pop();
numberStack.push(14);
console.log(numberStack);

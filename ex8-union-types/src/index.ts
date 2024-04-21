// union types can make a variable take several types

let unionType: string | number;

unionType = "hello";
unionType = 23;



type Id = string | number;

// MARK: Type gourds
// Type gourds => when union type is being used, typescript doesn't know the exact type of the variable,
// so we can use only functions that are available for both types, to solve that we can check the type of
// the variable and use the function that is available for that type only.

function convert(id: Id): Id {
    if (typeof id === "string") {
        return parseInt(id)
    } else {
        return id.toString()
    }
}
const id: Id = 23
const id2: Id = '23'

console.log(convert(id));
console.log(convert(id2));

// MARK: Type gourds objects
// type gourds can also be used with objects

interface User {
    type: "user"
    name: string
    age: number
}

interface Admin {
    type: "admin"
    name: string
    email: string
    age: number
}

function logDetails(value: User | Admin): void {
    if (value.type === "user") {
        console.log(value.name);
    } else {
        console.log(value.email);
    }
}

const user: User = {
    type: "user",
    name: "John",
    age: 30
}

logDetails(user)


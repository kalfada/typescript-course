interface Author {
    name: string
    email: string
    url: string
    age: number
}

let dan: Author = {
    name: "Daniel Kalfa",
    email: "john@example.com",
    url: "https://example.com",
    age: 30
}

function print(author: Author): void {
    console.log(`${author.name} is writing this string right now, his email is ${author.email}`);
}

print(dan)
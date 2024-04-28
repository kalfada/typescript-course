// --------------------
// Sets in typescript
// --------------------

const names = new Set<string>();

names.add("John");
names.add("Jane");
names.add("daniel");
names.add("daniel");

console.log(names);

// -------------------------
// Sets with custom types
// -------------------------

interface User {
    email: string;
    score: number;
}

const user1: User = { email: 'example@gmail.com', score: 95 }
const user2: User = { email: 'example2@gmail.com', score: 100 }

const users = new Set<User>();

users.add(user1);
users.add(user2);
users.add(user1);

console.log(users);

// ------------------------------
// Sets as function arguments
// ------------------------------

function logUserEmails(users: Set<User>): void {
    users.forEach(user => console.log(user.email))
}

console.log(users);

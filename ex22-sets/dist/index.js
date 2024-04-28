"use strict";
// --------------------
// Sets in typescript
// --------------------
const names = new Set();
names.add("John");
names.add("Jane");
names.add("daniel");
names.add("daniel");
console.log(names);
const user1 = { email: 'example@gmail.com', score: 95 };
const user2 = { email: 'example2@gmail.com', score: 100 };
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1);
console.log(users);
// ------------------------------
// Sets as function arguments
// ------------------------------
function logUserEmails(users) {
    users.forEach(user => console.log(user.email));
}
console.log(users);

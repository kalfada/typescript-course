"use strict";
// We can extend also type aliases like interfaces
function format(person) {
    console.log(`This man is ${person.age} old and his name is ${person.name}`);
}
function formatEmployee(employee) {
    console.log(`This man is ${employee.age} old and his name is ${employee.name}, he is working has a ${employee.jobTitle}`);
}
const person = {
    name: 'John',
    age: 25
};
const employee = {
    name: 'Daniel',
    age: 26,
    jobTitle: 'Developer'
};
format(person);
format(employee);
formatEmployee(employee);

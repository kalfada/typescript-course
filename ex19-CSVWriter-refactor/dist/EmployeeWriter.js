"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const employeeWriter = new index_1.CSVWriter(['id', 'name', 'role', 'salary']);
employeeWriter.addRows([
    { id: 1, name: 'John Doe', role: 'Manager', salary: 50000 },
    { id: 2, name: 'Jane Doe', role: 'Developer', salary: 60000 },
    { id: 3, name: 'Bob Smith', role: 'Sales', salary: 40000 }
]);
employeeWriter.save('./data/employees.csv');

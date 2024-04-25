import { CSVWriter } from "./index";

interface Employee {
    id: number;
    name: string;
    role: string;
    salary: number;
}

const employeeWriter = new CSVWriter<Employee>(['id', 'name', 'role', 'salary'])

employeeWriter.addRows([
    { id: 1, name: 'John Doe', role: 'Manager', salary: 50000 },
    { id: 2, name: 'Jane Doe', role: 'Developer', salary: 60000 },
    { id: 3, name: 'Bob Smith', role: 'Sales', salary: 40000 }
])

employeeWriter.save('./data/employees.csv')
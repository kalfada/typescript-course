"use strict";
// ----------
// CSV Writer project
// ----------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to ' + filename);
    }
    addRows(values) {
        for (const value of values) {
            this.csv += this.formatRow(value) + '\n';
        }
        console.log(this.csv);
    }
    formatRow(pay) {
        return this.columns.map(column => pay[column]).join(', ');
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 100, to: 'John', notes: 'Thanks' },
    { id: 2, amount: 200, to: 'Mary', notes: 'Thanks' },
]);
writer.save('./data/payments.csv');

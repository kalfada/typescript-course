"use strict";
// ----------
// CSV Writer project refactor using generics
// ----------
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
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
    formatRow(value) {
        return this.columns.map(column => value[column]).join(', ');
    }
}
exports.CSVWriter = CSVWriter;

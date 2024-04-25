"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 100, to: 'John', notes: 'Thanks' },
    { id: 2, amount: 200, to: 'Mary', notes: 'Thanks' },
]);
paymentWriter.save('./data/payments.csv');

// ----------
// CSV Writer project
// ----------

import { appendFileSync } from 'fs'

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',') + '\n'
    }
    private csv: string

    save(filename: string): void {
        appendFileSync(filename, this.csv)
        this.csv = '\n'
        console.log('file saved to ' + filename);

    }

    addRows(values: Payment[]): void {
        for (const value of values) {
            this.csv += this.formatRow(value) + '\n'
        }
        console.log(this.csv);

    }

    private formatRow(pay: Payment): string {
        return this.columns.map(column => pay[column]).join(', ')
    }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
    { id: 1, amount: 100, to: 'John', notes: 'Thanks' },
    { id: 2, amount: 200, to: 'Mary', notes: 'Thanks' },
])

writer.save('./data/payments.csv')
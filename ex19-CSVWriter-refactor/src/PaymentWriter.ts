import { CSVWriter } from "./index"

interface Payment {
    id: number
    amount: number
    to: string
    notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])

paymentWriter.addRows([
    { id: 1, amount: 100, to: 'John', notes: 'Thanks' },
    { id: 2, amount: 200, to: 'Mary', notes: 'Thanks' },
])

paymentWriter.save('./data/payments.csv')
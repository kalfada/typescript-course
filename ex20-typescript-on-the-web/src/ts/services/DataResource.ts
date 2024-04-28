import axios from 'axios'

export class DataResource<T> {
    constructor(private endpoint: string) { }

    async loadAll(): Promise<T[]> {
        const { data } = await axios.get(this.endpoint)
        return data
    }
    async loadOne(id: number): Promise<T> {
        const { data } = await axios.get(`${this.endpoint}/${id}`)
        return data
    }
    async delete(id: number): Promise<Response> {
        const { data } = await axios.delete(`${this.endpoint}/${id}`)
        return data
    }
    async save(data: T) {
        const res = await axios.post(this.endpoint, data)
        return res
    }
}
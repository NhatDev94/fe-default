import { SpendingInterface } from "../interfaces/spending"

const spendingApi = {
    endpoint: 'http://localhost:1994/spending/',
    getAllSpending: async () => {
        try {
            const data = await fetch(spendingApi.endpoint)
            return data?.json()
        } catch (error) {
            return false
        }
    },
    getSpending: async (id: number) => {
        try {
            const data = await fetch(spendingApi.endpoint + `/${id}`)
            return data?.json()
        } catch (error) {
            return false
        }
    },
    createSpending: async (value: SpendingInterface) => {
        try {
            const data = await fetch(spendingApi.endpoint + 'create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value)
            })
            return data?.json()
        } catch (error) {
            return false
        }
    },
    update: async (id: number, values: object) => {
        try {
            const data = await fetch(spendingApi.endpoint + `/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
            return data?.json()
        } catch (error) {
            return false
        }
    }
}

export default spendingApi
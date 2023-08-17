export interface SpendingInterface {
    id: number,
    data: Date,
    account: string,
    category: string,
    amount: number,
    note?: string
}

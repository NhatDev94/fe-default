interface RuleInterface {
    required?: boolean,
    message?: string
}

export interface ColumnsItemInterface {
    title?: string,
    name: string,
    formItem?: {
        type?: string,
        rules?: RuleInterface[]
    }
}
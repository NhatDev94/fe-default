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

export interface UserInterface {
    name?: string,
    email: string,
    password: string
}
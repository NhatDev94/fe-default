import { SearchResultInterface } from "./FormInterface"

interface RuleInterface {
    required?: boolean,
    message?: string
}

export interface ColumnsItemInterface {
    title?: string,
    name: string,
    formItem?: {
        type?: string,
        rules?: RuleInterface[],
        multiple?: boolean,
        col?: number,
        placeholder?: string,
        optionList?: SearchResultInterface[],
        handleUpload?: () => void,
    }
}
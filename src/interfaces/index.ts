interface RuleInterface {
    required?: boolean,
    message?: string
}

export interface ImageInterface {
    url?: string
}

export interface ColumnsItemInterface {
    title?: string,
    name: string,
    formItem?: {
        type?: string,
        rules?: RuleInterface[],
        handleUpload?: any,
        multiple?: boolean
    }
}



export interface PostInterFace {
    description?: string,
    images?: ImageInterface[]
}
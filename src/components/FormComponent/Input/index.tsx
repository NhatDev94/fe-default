import { Input as InputAnd } from "antd"
import './index.css'

interface PropsInterface {
    value?: string,
    placeholder?: string,
    onChange?: () => void,
}

const Input = (props: PropsInterface) => {
    const { value, placeholder, onChange } = props

    return (
        <div className="custom-input">
            <InputAnd
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input

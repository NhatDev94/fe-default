import { Form } from "antd"
import { ButtonComponent, FormComponent } from ".."

interface PropsInterface {
    setIsLoading?: () => void
}

const ModalAddSpending = (props: PropsInterface) => {
    const { setIsLoading } = props
    const [form] = Form.useForm()

    const cols = [
        {
            title: 'Date',
            name: 'date',
            formItem: {
                type: 'date'
            }
        },
        {
            title: 'Account',
            name: 'account',
            formItem: {}
        },
        {
            title: 'Category',
            name: 'category',
            formItem: {}
        },
        {
            title: 'Amount',
            name: 'amount',
            formItem: {}
        },
        {
            title: 'Note',
            name: 'note',
            formItem: {}
        }
    ]

    const handleSubmit = async () => {
        const value = await form.validateFields()
        console.log(value);
        
    }

    return (
        <div className="">
            <FormComponent values={{ date: new Date() }} columns={cols} form={form} />

            <ButtonComponent moreClass="mt-5" onClick={handleSubmit}>Submit</ButtonComponent>
        </div>
    )
}

export default ModalAddSpending

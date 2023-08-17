import { FormInstance } from "antd"
import { ButtonComponent, FormComponent } from ".."

interface PropsInterface {
    setIsLoading?: (value: boolean) => void,
    submit?: () => void,
    form: FormInstance,
    textSubmit?: string,
}

const ModalAddSpending = (props: PropsInterface) => {
    const { submit, form, textSubmit = 'Submit' } = props

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
            formItem: {
                rules: [{ required: true }]
            }
        },
        {
            title: 'Category',
            name: 'category',
            formItem: {
                rules: [{ required: true }]
            }
        },
        {
            title: 'Amount',
            name: 'amount',
            formItem: {
                rules: [{ required: true }]
            }
        },
        {
            title: 'Note',
            name: 'note',
            formItem: {
                rules: [{ required: true }]
            }
        }
    ]

    const handleSubmit = async () => {
        submit && submit()
    }

    return (
        <div className="">
            <FormComponent columns={cols} form={form} />

            <ButtonComponent moreClass="mt-5" onClick={handleSubmit}>{textSubmit}</ButtonComponent>
        </div>
    )
}

export default ModalAddSpending

import { FormComponent, ButtonComponent } from '../../components'
import { Form } from 'antd'


const Auth = () => {
    const [form] = Form.useForm()

    const cols = [
        {
            title: 'Name',
            name: 'name',
            formItem: {
                rules: [{ required: true }]
            }
        },
        {
            title: 'Avatar',
            name: 'avatar',
            formItem: {
                rules: [{ required: true }],
                type: 'upload'
            }
        }
    ]

    const handleSubmit = async () => {
        const data = await form.validateFields()
        console.log(data);   
    }

    return (
        <div className='w-full h-[calc(100vh-88px)] bg-green-100 flex items-center justify-center'>
            <div className='w-72 rounded-md shadow-md bg-white p-4 max-h-[calc(100vh-140px)] overflow-scroll'>
                <h4 className='text-md font-bold w-full text-center'>Login</h4>
                <FormComponent form={form} columns={cols} values={{name: 'ay da'}}></FormComponent>
                <ButtonComponent onClick={handleSubmit}>Login</ButtonComponent>
            </div>
        </div>
    )
}

export default Auth

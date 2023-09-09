import { useState } from 'react'
import { FormComponent, ButtonComponent } from '../../components'
import { Form } from 'antd'
import authApi from '../../apis/authApi'


const Auth = () => {
    const [form] = Form.useForm()
    const [type, setType] = useState('sign_in')

    let cols = [
        {
            title: 'Email',
            name: 'email',
            formItem: {
                rules: [{ required: true }]
            }
        },
        {
            title: 'Password',
            name: 'password',
            formItem: {
                rules: [{ required: true }],
            }
        }
    ]

    if (type === 'sign_up'){
        cols = [
            {
                title: 'Name',
                name: 'name',
                formItem: {
                    rules: []
                }
            },
            ...cols
        ]
    }

    const handleSubmit = async () => {
        const value = await form.validateFields()
        if (type === 'sign_in') {
            const data = await authApi.signIn(value)
            console.log(data);
            return
        }
        const data = await authApi.signUp(value)
        console.log(data);
    }

    const toSignUp = () => {
        setType('sign_up')
        form.resetFields()
    }

    const toSignIn = () => {
        setType('sign_in')
        form.resetFields()
    }

    return (
        <div className='w-full h-[calc(100vh-88px)] flex items-center justify-center'>
            <div className='w-72 rounded-md shadow-md bg-white p-4 max-h-[calc(100vh-140px)] overflow-scroll border border-black/5'>
                <h4 className='text-md font-bold w-full text-center mb-5'>{type === 'sign_in' ? 'Sign In' : 'Sign Up'}</h4>
                <FormComponent form={form} columns={cols}></FormComponent>
                <ButtonComponent
                    onClick={handleSubmit}
                    moreClass='mt-4 font-semibold'
                >
                    {type === 'sign_in' ? 'Sign In' : 'Sign Up'}
                </ButtonComponent>
                <p className='w-full text-center mt-5 '>
                    {type === 'sign_in' ? 'No account? ' : 'Have account? '}
                    <span
                        className='text-xs font-semibold text-blue-500 cursor-pointer'
                        onClick={type === 'sign_in' ? toSignUp : toSignIn}
                    >{type === 'sign_in' ? 'Sign up' : 'Sign in'}</span>
                </p>
            </div>
        </div>
    )
}

export default Auth

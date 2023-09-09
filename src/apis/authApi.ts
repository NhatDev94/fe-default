import axios from 'axios'
import { UserInterface } from '../interfaces'

const authApi = {
    endpoint: 'http://localhost:1994/auth/',
    signUp: async (user: UserInterface) => {
        try {
            const data = await axios.post(authApi.endpoint + 'sign-up', user)
            return data?.data
        } catch (error) {
            return false
        }
    },
    signIn: async (user: UserInterface) => {
        try {
            const data = await axios.post(authApi.endpoint + 'sign-in', user)
            return data?.data
        } catch (error) {
            return false
        }
    },
}

export default authApi
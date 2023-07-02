import { useState, createContext } from 'react'

const useGlobal = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [lang, setLang] = useState<string>('vi')

    const GlobalContext = createContext({
        isLogin,
        lang
    })

    return {
        isLogin,
        lang,
        setIsLogin,
        setLang,
        GlobalContext
    }
}

export default useGlobal
import { useLocation, useNavigate } from "react-router-dom"

interface propsInterface {
    children: any
}

const Layout = (props: propsInterface) => {
    const location = useLocation()
    const navigate = useNavigate()

    const menu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Profile',
            path: '/profile'
        },
        {
            title: 'Auth',
            path: '/auth'
        }
    ]

    return (
        <div className='relative w-screen bg-white'>

            <div className='header w-full h-14 bg-cyan-600 px-10 text-white shadow-sm sticky top-0 left-0 flex items-center justify-between'>
                <div className=''>Default</div>
                <div className='flex items-center justify-center'>
                    {
                        menu?.map(item => {
                            const isActive = location?.pathname === item?.path
                            return (
                                <div
                                    key={item?.path}
                                    className={`px-2 mx-2 capitalize text-white text-sm font-semibold cursor-pointer ${isActive ? 'underline' : ''}`}
                                    onClick={() => navigate(item?.path)}
                                >
                                    {item?.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Main */}
            <div className="w-full p-4">
                {props?.children}
            </div>
        </div>
    )
}

export default Layout

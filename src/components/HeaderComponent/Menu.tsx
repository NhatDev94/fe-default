import { useLocation, useNavigate } from "react-router-dom"

const Menu = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const items = [
        {
            path: '/',
            icon: 'Home',
        },
        {
            path: '/friends',
            icon: 'Friends',
        },
        {
            path: '/marketplace',
            icon: 'MarketPlace',
        },
        {
            path: '/groups',
            icon: 'Groups',
        },
    ]

    return (
        <div className="flex items-center justify-center h-full">
            {
                items?.map((item: any, index: number) => (
                    <div key={index} className={`h-[calc(100%-3px)] border-b-[3px] flex items-center justify-center ${location?.pathname === item?.path ? 'text-primary border-primary' : 'border-transparent'}`}>
                        <div
                            className='w-24 h-[calc(100%-4px)] mx-1 flex items-center justify-center cursor-pointer hover:bg-hover rounded-md'
                            onClick={() => navigate(item?.path)}
                        >
                            {item?.icon}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu

import { useLocation, useNavigate } from "react-router-dom"
import { faFileIcon, faRightFromBracketIcon, faUserGearIcon, faUserIcon } from "../../assets/icons"

import './index.css'

interface MenuInterface {
    title: string,
    path: string,
    icon?: any
}

const Menu = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const menus = [
        {
            title: 'Portfolio',
            path: '/portfolio',
            icon: faUserIcon
        },
        {
            title: 'My CV',
            path: '/my-cv',
            icon: faFileIcon
        },
        {
            title: 'Auth',
            path: '/auth',
            icon: faRightFromBracketIcon
        },
        {
            title: 'Admin',
            path: '/admin',
            icon: faUserGearIcon
        },
    ]

    const handleNavigate = (path: string) => {
        navigate(path)
    }

    return (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-[#272829] px-4 pt-6 pb-2 rounded-lg">
            <div
                className={`
                menu relative       
                flex items-center bg-white rounded-md h-12 w-fit shadow-lg
            `}
            >
                {
                    menus?.map((item: MenuInterface, i: number) => {
                        const isActive: boolean = item?.path === location?.pathname
                        return (
                            <div
                                key={i}
                                className={`mx-4 menu-item relative w-14 h-full flex flex-col items-center justify-center cursor-pointer hover:text-[#61677A]  ${isActive && 'menu-active'}`}
                                onClick={() => handleNavigate(item?.path)}
                            >
                                <p
                                    className="menu-icon relative z-50"
                                >
                                    {item?.icon}
                                </p>
                                <p
                                    className="menu-name text-black font-semibold text-xs"
                                >
                                    {item?.title}
                                </p>
                            </div>
                        )
                    })
                }
                <div className="indicator"></div>
            </div>
        </div>
    )
}

export default Menu
import { useNavigate, useLocation } from "react-router-dom"
import { faChart, faList, faUser } from "../../assets/icons"

const MobileMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const menus = [
        {
            name: 'Spending',
            icon: faList('white'),
            iconActive: faList(),
            path: '/'
        },
        {
            name: 'Statistical',
            icon: faChart('white'),
            iconActive: faChart(),
            path: '/statistical'
        },
        {
            name: '',
            icon: faUser('white'),
            iconActive: faUser(),
            path: '/account'
        }
    ]

    const handleClick = (path: string) => {
        navigate(path)
    }

    return (
        <div className="w-full h-14 fixed bottom-0 left-0 z-50 bg-slate-950 flex items-center justify-between">
            {
                menus?.map((item: any, i: number) => {
                    const active = location?.pathname === item?.path
                    return (
                        <div
                            key={i}
                            className={`h-full flex items-center justify-center cursor-pointer ${active && 'bg-white'}`}
                            style={{ width: (100 / 3) + '%' }}
                            onClick={() => handleClick(item?.path)}
                        >
                            {active ? item?.iconActive : item?.icon}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MobileMenu

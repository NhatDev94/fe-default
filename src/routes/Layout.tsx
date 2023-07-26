import { useLocation, useNavigate } from "react-router-dom"
import MobileMenu from "../components/Menu/MobileMenu"

interface propsInterface {
    children: any
}

const Layout = (props: propsInterface) => {
    const location = useLocation()
    const navigate = useNavigate()


    return (
        <div className='relative w-screen bg-white'>

            {/* <div className='header w-full h-14 bg-cyan-600 px-10 text-white shadow-sm sticky top-0 left-0 flex items-center justify-between'>
                <div className=''>Default</div>
            </div> */}

            {/* Main */}
            <div className="w-full">
                {props?.children}
            </div>

            {/* Menu */}
            <MobileMenu />
        </div>
    )
}

export default Layout

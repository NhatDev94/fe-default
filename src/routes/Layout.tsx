import { Menu } from "../components"

interface propsInterface {
    children: any
}

const Layout = (props: propsInterface) => {

    return (
        <div className='relative w-screen h-screen bg-white'>

            <Menu />

            {/* Main */}
            <div className="w-full p-4">
                {props?.children}
            </div>
        </div>
    )
}

export default Layout

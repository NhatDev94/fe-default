import { HeaderComponent, SideLeftComponent, SideRightComponent } from "../components"

interface propsInterface {
    children: any
}

const Layout = (props: propsInterface) => {

    return (
        <div className='relative w-screen'>

            <div className="sticky top-0 left-0 z-50">
                <HeaderComponent />
            </div>

            {/* Main */}
            <div className="w-full relative">
                <div className="fixed top-0 left-0 z-40">
                    <SideLeftComponent />
                </div>
                <div className="px-64">
                    {props?.children}
                </div>
                <div className="fixed top-0 right-0 z-40">
                    <SideRightComponent />
                </div>
            </div>
        </div>
    )
}

export default Layout

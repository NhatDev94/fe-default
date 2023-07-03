import { Header } from "../components"

interface propsInterface {
    children: any
}

const Layout = (props: propsInterface) => {

    return (
        <div className='relative w-screen'>

            <div className="sticky top-0 left-0">
                <Header />
            </div>

            {/* Main */}
            <div className="w-full p-4">
                {props?.children}
            </div>
        </div>
    )
}

export default Layout

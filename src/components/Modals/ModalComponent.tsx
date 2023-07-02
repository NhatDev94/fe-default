import { MouseEventHandler } from 'react'

interface PropsInterface {
    children: JSX.Element,
    handleClose: MouseEventHandler,
    title?: string | undefined,
}

const ModalComponent = (props: PropsInterface) => {
    const { children, handleClose, title } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-[99]'>
            <div className='w-full h-full relative'>
                <div className='w-full h-full z-10 bg-black/20 absolute top-0 left-0' onClick={handleClose}></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-md py-2 px-4 w-2/5 min-w-[240px] min-h-[20%]'>
                    <div className={`w-full flex items-center justify-between min-h-14 mb-2 ${title ? 'mb-4' : ''}`}>
                        <h4 className='text-sm font-semibold text-black'>{title || ''}</h4>
                        <div className='w-fit h-fit' onClick={handleClose}>{''}</div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalComponent

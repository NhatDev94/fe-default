import { MouseEventHandler } from 'react'
import { faXmarkIcon } from '../../assets/icons'

interface PropsInterface {
    children: JSX.Element,
    handleClose: MouseEventHandler,
    title?: string | undefined,
    isTitleCenter?: boolean,
    isLoading: boolean,
    values?: object
}

const ModalComponent = (props: PropsInterface) => {
    const { children, handleClose, title, isTitleCenter = true, isLoading = false } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-[99]'>
            <div className='w-full h-full relative'>
                {isLoading && <div className='absolute top-0 left-0 z-50 bg-slate-950/60 text-white w-full h-full flex items-center justify-center'>...loading</div>}
                <div className='w-full h-full z-40 bg-slate-950/80 absolute top-0 left-0' onClick={handleClose}></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-md py-2 px-4 w-11/12 sm:min-w-[240px] sm:min-h-[20%]'>
                    <div className='w-full h-full relative'>
                        <div className='bg-white w-full h-full'>
                            <div className={`w-full flex items-center justify-between min-h-14 mb-2 ${title ? 'mb-4' : ''}`}>
                                <h4 className={`w-full text-sm font-semibold text-black ${isTitleCenter ? 'text-center' : ''}`} >{title || ''}</h4>
                                <div className='w-8 h-8 rounded-full flex items-center justify-center bg-second hover:bg-hover cursor-pointer' onClick={handleClose}>{faXmarkIcon}</div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent

import { useEffect, useState } from 'react'
import { ModalComponent } from '../components'

interface PropsInterface {
    isLoading: boolean,
    modalContent: JSX.Element,
    title?: string,
    isTitleCenter?: boolean,
}

const useModal = (props: PropsInterface) => {
    const { modalContent, title, isTitleCenter, isLoading } = props
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            window.document.body.style.overflow = 'hidden'
        }
        return () => {
            window.document.body.style.overflow = 'unset'
        }
    }, [open])

    return {
        open,
        handleOpen,
        handleClose,
        modal: () => open && (
            <ModalComponent
                handleClose={handleClose}
                title={title}
                isTitleCenter={isTitleCenter}
                isLoading={isLoading}
            >
                {modalContent}
            </ModalComponent>
        )
    }
}

export default useModal

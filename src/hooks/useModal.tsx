import { useState } from 'react'
import { ModalComponent } from '../components'

interface PropsInterface {
    modalContent: JSX.Element,
    title?: string,
    isTitleCenter?: boolean
}

const useModal = (props: PropsInterface) => {
    const { modalContent, title, isTitleCenter } = props
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return {
        open,
        handleOpen,
        handleClose,
        modal: () => open && (
            <ModalComponent
                handleClose={handleClose}
                title={title}
                isTitleCenter={isTitleCenter}
            >
                {modalContent}
            </ModalComponent>
        )
    }
}

export default useModal

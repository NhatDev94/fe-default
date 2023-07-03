import { useState } from 'react'
import { ModalComponent } from '../components'

interface PropsInterface {
    modalContent: JSX.Element,
    title?: string,
}

const useModal = (props: PropsInterface) => {
    const { modalContent, title } = props
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
        modal: () =>  open && <ModalComponent handleClose={handleClose} title={title}>{modalContent}</ModalComponent>
    }
}

export default useModal

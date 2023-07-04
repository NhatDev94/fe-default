import { faImagesIcon } from "../../assets/icons"
import { AvatarComponent } from "../../components"
import { useModal } from "../../hooks"
import useCreateAndEditPost from "../../hooks/useCreateAndEditPost"
import CreateAndEditPost from "./CreateAndEditPost"

const PostBegin = () => {

    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU'

    const createPostSuccess = () => {
        onChangeDescription && onChangeDescription('')
        setImages([])
        handleClose && handleClose()
    }

    const { isLoading, description, images, setImages, onChangeDescription, handleCreate } = useCreateAndEditPost({
        createPostSuccess
    })

    const { handleOpen, handleClose, modal } = useModal({
        isLoading: isLoading,
        modalContent: (
            <CreateAndEditPost
                description={description}
                images={images}
                setImages={setImages}
                onChangeDescription={onChangeDescription}
                handleCreate={handleCreate}
            />
        ),
        title: 'Tao bai viet'
    })

    return (
        <div className="w-full h-fit p-4 rounded-lg shadow-sm border border-black/5 bg-white">
            <div className="flex items-center justify-center w-full pb-4 border-b border-black/10">
                <AvatarComponent url={url} className='mr-2 cursor-pointer' />
                <input
                    className="bg-second outline-none border-none w-full py-2 px-4 rounded-[20px]"
                    placeholder="Nhat oi, ban dang nghi gi the?"
                    onClick={handleOpen}
                />
            </div>
            <div className="flex items-center mt-2">
                <p
                    className="text-xs font-semibold py-1.5 px-2 cursor-pointer hover:bg-hover rounded-md"
                    onClick={handleOpen}
                >{faImagesIcon} Anh/video</p>
            </div>

            {modal()}
        </div>
    )
}

export default PostBegin

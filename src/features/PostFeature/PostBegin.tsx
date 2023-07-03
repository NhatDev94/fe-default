import { AvatarComponent } from "../../components"
import { useModal } from "../../hooks"

const PostBegin = () => {

    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU'

    const { handleOpen, modal } = useModal({
        modalContent: <></>,
        title: 'Tao bai viet'
    })

    return (
        <div className="w-full h-fit p-4 rounded-lg shadow-sm border border-black/5 bg-white">
            <div className="flex items-center justify-center w-full pb-4 border-b border-black/10">
                <AvatarComponent url={url} className='mr-2' />
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
                >Anh/video</p>
            </div>

            {modal()}
        </div>
    )
}

export default PostBegin

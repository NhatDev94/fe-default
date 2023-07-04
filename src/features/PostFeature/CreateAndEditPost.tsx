import { AvatarComponent, ButtonComponent } from "../../components"

interface PropsInterface {
  type?: string
}

const CreateAndEditPost = (props: PropsInterface) => {
  const { type = 'create' } = props

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU'

  return (
    <div className="mb-2 border-t border-black/10 pt-4">
      <div className="flex items-center justify-between">
        <AvatarComponent url={url} className="mr-2" />
        <div className="w-full mb-4">
          <h4 className="text-sm font-bold text-black mb-1">Minh Nhat</h4>
          <div className="w-fit px-2 py-1 rounded-md bg-second text-black text-xs font-semibold cursor-pointer">Chi minh toi</div>
        </div>
      </div>
      <input
        className="p-2 outline-none border-none mb-10"
        placeholder="Nhat oi, ban dang nghi gi the?"
        autoFocus
      />
      <div className="flex items-center justify-between mb-2 p-4 shadow border border-black/20 rounded-md">
        <p className="text-sm font-semibold text-black">Them vao bai viet cua ban</p>
        <div className="flex items-center justify-center">
          <p className="text-xs font-semibold text-black mx-2 px-2 cursor-pointer">Anh</p>
          <p className="text-xs font-semibold text-black cursor-pointer">...</p>
        </div>
      </div>

      <ButtonComponent
        moreClass="bg-primary text-white mt-2"
      >
        {type === 'create' ? 'Dang' : 'Luu'}
      </ButtonComponent>
    </div>
  )
}

export default CreateAndEditPost

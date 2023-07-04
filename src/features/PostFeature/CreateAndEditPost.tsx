import { } from 'react'
import { Form } from "antd"
import { faEllipsisIcon, faImagesIcon, faLockIcon } from "../../assets/icons"
import { AvatarComponent, ButtonComponent, FormComponent } from "../../components"
import PostPreviewMedia from "./PostPreviewMedia"
import { ImageInterface } from "../../interfaces"

interface PropsInterface {
  type?: string,
  images?: ImageInterface[],
  description?: string,
  setImages: (value: any) => void,
  onChangeDescription: (des: string) => void,
  handleCreate: () => void
}

const CreateAndEditPost = (props: PropsInterface) => {
  const { type = 'create', images = [], description = '', setImages, onChangeDescription, handleCreate } = props
  const [form] = Form.useForm()

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU'

  const handleUpload = async (fileList: any) => {
    const values = fileList?.map((item: any) => ({ url: item?.url }))
    setImages(values)
  }

  const isDisable: boolean = description?.length === 0 && images && images?.length === 0

  const onChange = (e: any) => {
    onChangeDescription(e.target.value)
  }

  return (
    <div className="mb-2 border-t border-black/10 pt-4">
      <div className="flex items-center justify-between mb-4">
        <AvatarComponent url={url} className="mr-2" />
        <div className="w-full">
          <h4 className="text-sm font-bold text-black mb-1">Minh Nhat</h4>
          <div className="w-fit px-2 py-1 rounded-md bg-second text-black text-xs font-semibold cursor-pointer">{faLockIcon}<span className="ml-2">Chi minh toi</span></div>
        </div>
      </div>

      <div className="w-full max-h-[200px] overflow-y-scroll">
        <input
          className="p-2 outline-none border-none mb-10"
          placeholder="Nhat oi, ban dang nghi gi the?"
          autoFocus
          value={description}
          onChange={onChange}
        />

        {images && images?.length > 0 && (
          <div className=" rounded-lg border border-black/10 overflow-hidden p-2">
            <PostPreviewMedia images={images} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-2 mt-4 p-4 shadow border border-black/20 rounded-md">
        <p className="text-sm font-semibold text-black">Them vao bai viet cua ban</p>
        <div className="flex items-center justify-center">
          <div
            className="relative w-8 h-8 rounded-full bg-second hover:bg-hover text-xs font-semibold text-black mx-2 cursor-pointer overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">{faImagesIcon}</span>
            <div className=" opacity-0 w-full h-full">
              <FormComponent
                form={form}
                columns={[
                  {
                    title: '',
                    name: 'images',
                    formItem: {
                      type: 'upload',
                      multiple: true,
                      handleUpload: handleUpload
                    }
                  }
                ]}
                values={{}}
              />
            </div>
          </div>
          <p className="w-8 h-8 rounded-full flex items-center justify-center bg-second hover:bg-hover text-xs font-semibold text-black cursor-pointer">{faEllipsisIcon}</p>
        </div>
      </div>

      <ButtonComponent
        disabled={isDisable}
        moreClass="bg-primary text-white mt-2"
        onClick={handleCreate}
      >
        {type === 'create' ? 'Dang' : 'Luu'}
      </ButtonComponent>
    </div>
  )
}

export default CreateAndEditPost

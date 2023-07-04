import { faMessageIcon, faShareIcon, faThumbsUpBlueIcon, faThumbsUpIcon } from "../../assets/icons"

interface PropsInterface {
  likes?: string[],
  comments?: string[],
  shares?: string[]
}

const PostCardAction = (props: PropsInterface) => {
  const { likes, comments, shares } = props

  return (
    <div className="px-4">
      <div className="flex items-center justify-between py-2 border-b -border-black/10">
        <p className="text-xs cursor-pointer hover:underline">{faThumbsUpBlueIcon} {likes?.length}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs mr-4 cursor-pointer hover:underline">{comments?.length} {faMessageIcon}</p>
          <p className="text-xs cursor-pointer hover:underline">{shares?.length} {faShareIcon}</p>
        </div>
      </div>
      <div className="flex items-center justify-between py-1 gap-x-1">
        <div className="flex items-center justify-center w-40 h-8 hover:bg-hover rounded-md cursor-pointer">
          <p className="text-xs font-semibold">{faThumbsUpIcon} <span className="ml-1.5">Thich</span></p>
        </div>
        <div className="flex items-center justify-center w-40 h-8 hover:bg-hover rounded-md cursor-pointer">
          <p className="text-xs font-semibold">{faMessageIcon}<span className="ml-1.5">Binh luan</span></p>
        </div>
        <div className="flex items-center justify-center w-40 h-8 hover:bg-hover rounded-md cursor-pointer">
          <p className="text-xs font-semibold">{faShareIcon}<span className="ml-1.5">Chia se</span></p>
        </div>
      </div>
    </div>
  )
}

export default PostCardAction

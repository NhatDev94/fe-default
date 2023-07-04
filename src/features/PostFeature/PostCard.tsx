import { AvatarComponent } from "../../components"
import PostCardAction from "./PostCardAction"
import PostPreviewMedia from "./PostPreviewMedia"
import PostDescription from "./PostDescription"

import { faEarthAmericasIcon, faEllipsisIcon, faXmarkIcon } from "../../assets/icons"
import { PostInterFace } from "../../interfaces"

interface PropsInterface {
    type?: string,
    post: PostInterFace
}

const PostCard = (props: PropsInterface) => {
    // type: user, group, ads
    const { type = 'user', post } = props
    const url = 'https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg'

    const likes = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']
    const comments = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']
    const shares = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']

    return (
        <div className="w-full rounded-lg shadow-sm bg-white pt-4 mb-4">
            <div className="flex items-center justify-between mb-2 px-4">
                <div className="flex items-center">
                    <AvatarComponent url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aBDBxegoNFLLcyAuqXtCKFOdtjJ7p_3m0g&usqp=CAU'} className="mr-2 cursor-pointer" />
                    <div className="">
                        <h4 className="text-sm font-bold hover:underline cursor-pointer">VTV24</h4>
                        <p>
                            {type === 'group' && <span className="font-semibold text-xs hover:underline cursor-pointer">Nhat Minh</span>}
                            <span className="mr-2 text-xs cursor-pointer hover:underline">1 ngay truoc</span>
                            <span className="text-xs">{faEarthAmericasIcon}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mr-2 cursor-pointer w-6 h-6 rounded-full hover:bg-hover flex items-center justify-center">{faEllipsisIcon}</p>
                    <p className=" cursor-pointer w-6 h-6 rounded-full hover:bg-hover flex items-center justify-center">{faXmarkIcon}</p>
                </div>
            </div>

            <div className="px-4"><PostDescription description={post?.description} /></div>

            {
                post && post?.images && post?.images?.length > 0 && (
                    <div className="mt-2">
                        <PostPreviewMedia images={post?.images} />
                    </div>
                )
            }

            <div className="">
                <PostCardAction likes={likes} comments={comments} shares={shares} />
            </div>
        </div>
    )
}

export default PostCard

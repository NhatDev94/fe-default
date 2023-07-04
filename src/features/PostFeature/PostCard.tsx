import { AvatarComponent } from "../../components"
import PostCardAction from "./PostCardAction"
import PostCardMedia from "./PostCardMedia"
import PostDescription from "./PostDescription"

import { faEarthAmericasIcon, faEllipsisIcon, faXmarkIcon } from "../../assets/icons"

interface PropsInterface {
    type?: string
}

const PostCard = (props: PropsInterface) => {
    // type: user, group, ads
    const { type = 'user' } = props
    const url = 'https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg'

    const demo = `Chiều 2/7, Công an P.Nguyễn Thái Bình (Q.1, TP. Hồ Chí Minh) xác nhận đã tìm ra người đàn ông mặc áo tài 
    xế hãng xe công nghệ đập điện thoại sau khi nhặt được và đòi tiền chuộc không thành.
    Người đập điện thoại là ông P.N.T (42 tuổi, quê ở An Giang), từng làm tài xế công nghệ nhưng đã nghỉ việc cách đây vài tháng. 
    Trước đó, mạng xã hội chia sẻ bài đăng của một thanh niên làm rơi chiếc điện thoại ở chân cầu Calmette (Q.4) và người mặc 
    áo tài xế công nghệ nhặt được rồi tắt nguồn. Sau khi liên lạc, người này đòi tiền chuộc điện thoại 9 - 10 triệu đồng. 
    Anh H. - người đăng bài là sinh viên nên chỉ xoay đủ 2 triệu đồng và năn nỉ xin lại. Người đàn ông không đồng ý và nói 
    không cầm điện thoại rồi có ý định rời đi.`

    const likes = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']
    const comments = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']
    const shares = ['Nhat', 'Hue Em', 'Ngoc', 'Thien']

    return (
        <div className="w-full rounded-lg shadow-sm bg-white pt-4">
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

            <div className="px-4"><PostDescription description={demo} /></div>

            {
                url && (
                    <div className="mt-2">
                        <PostCardMedia medias={[{ url }]} />
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

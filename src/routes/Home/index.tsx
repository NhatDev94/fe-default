import { useCallback } from 'react'
import { useQuery } from "react-query"
import feedApi from "../../apis/feedApi"
import { PostBegin, PostCard } from "../../features";
import { PostInterFace } from "../../interfaces";

const Home = () => {
  const getFeed = useCallback(async () => {
    return await feedApi.getFeed(1, 10)
  }, [])

  const { data: listPost } = useQuery({
    queryKey: 'feed',
    queryFn: getFeed,
    cacheTime: 1 * 10 * 1000,
    staleTime: 1 * 10 * 1000
  })

  let posts: PostInterFace[] | never = []
  listPost && listPost?.forEach((item: PostInterFace) => {
    posts = [
      {
        description: item?.description,
        images: item?.images
      },
      ...posts
    ]
  })

  return (
    <div className=" px-32 py-6 bg-second">
      <div className="mb-4">
        <PostBegin />
      </div>

      <div className="">
        {
          posts && posts?.map((post: PostInterFace, index: number) => <PostCard post={post} key={index} />)
        }
      </div>
    </div>
  )
}

export default Home

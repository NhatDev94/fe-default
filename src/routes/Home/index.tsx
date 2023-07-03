import { useQuery } from "react-query"
import feedApi from "../../apis/feedApi"

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: 'feed',
    queryFn: feedApi.getFeed,
    cacheTime: 1 * 10 * 1000,
    staleTime: 1 * 10 * 1000
  })

  console.log('loading', isLoading);
  console.log('data', data);


  return (
    <div>
      {
        data && data?.map((post: any, index: number) => (
          <div className="border border-black/20 mb-8 p-2" key={index}>
            <span className="font-bold">{post?.id}. </span>
            <span className="text-black font-semibold mb-2">{post?.title}</span>
            <p className="">{post?.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home

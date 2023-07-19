import { useQuery } from "react-query"
import feedApi from "../../apis/feedApi"
import { FormComponent } from "../../components"
import { ColumnsItemInterface } from "../../interfaces/ColumnInterface"
import { SearchResultInterface } from '../../interfaces/FormInterface'
import { Form } from "antd"

const Home = () => {
  const [form] = Form.useForm()

  const { data, isLoading } = useQuery({
    queryKey: 'feed',
    queryFn: feedApi.getFeed,
    cacheTime: 1 * 10 * 1000,
    staleTime: 1 * 10 * 1000
  })

  const list: SearchResultInterface[] = [{ name: 'Aaaa' }, { name: 'Abbbb' }, { name: 'Acc' }, { name: 'Addd' }, { name: 'Aee' }, { name: 'Aff' }, { name: 'Agg' }, { name: 'Ahhhh' }, { name: 'Aiiiiii' }]

  const cols: ColumnsItemInterface[] = [
    {
      title: 'State',
      name: 'state',
      formItem: {
        type: 'custom-select',
        col: 8,
        optionList: list
      }
    }
  ]

  return (
    <div>
      <div className="p-4 w-full sm:w-60 border border-black mb-10 rounded-lg">
        <FormComponent
          form={form}
          columns={cols}
        />
      </div>


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

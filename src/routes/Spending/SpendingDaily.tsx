import { useState } from 'react'
import { ModalAddSpending } from "../../components"
import { useModal } from "../../hooks"
import { SpendingInterface } from "../../interfaces/spending"
import SpendingItem from "./SpendingItem"
import { Form } from 'antd'
import spendingApi from '../../apis/spendingApi'

interface PropsInterface {
  spendings: SpendingInterface[]
}

const SpendingDaily = (props: PropsInterface) => {
  const { spendings = [] } = props
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState<number>(0)

  const handleSubmit = async () => {
    const values = await form.validateFields()
    const data = await spendingApi.update(id, values)
    console.log(data);
    
  }

  const handleFillFormUpdateSpending = (values: SpendingInterface) => {
    setId(values?.id)
    form.setFieldsValue(values)
    handleOpen && handleOpen()
  }

  const { handleOpen, modal: modalEditSpending } = useModal({
    isLoading: isLoading,
    title: 'Update Spending',
    modalContent: <ModalAddSpending setIsLoading={setIsLoading} form={form} submit={handleSubmit} textSubmit='Update' />
  })

  return (
    <div className="bg-slate-200 pt-1">
      <div className="bg-white px-4">

        <div className="flex items-center justify-between py-2 border-b border-slate-200">
          <div className="w-3/5 flex items-center">
            <span className="text-base font-bold text-slate-950">27</span>
            <span className="text-xs font-normal px-2 py-0.5 rounded-sm mx-2 bg-slate-500 text-white">Tue</span>
            <span className="text-xs text-slate-500 font-normal">06/2023</span>
          </div>
          <div className="w-1/5 text-right text-green-500">0</div>
          <div className="w-1/5 text-right text-red-500">0</div>
        </div>

        <div className="">
          {
            spendings?.map((speding: SpendingInterface, i: number) => <SpendingItem key={i} spending={speding} handleOpen={handleFillFormUpdateSpending} />)
          }
        </div>
      </div>
      {modalEditSpending()}
    </div>
  )
}

export default SpendingDaily

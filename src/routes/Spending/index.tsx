import { useCallback, useEffect, useState } from 'react'
import { angleLeft, angleRight, faPlus } from "../../assets/icons"
import ModalAddSpending from "../../components/Modals/ModalAddSpending"
import { useModal } from "../../hooks"
import SpendingDaily from "./SpendingDaily"
import { Form, message } from 'antd'
import spendingApi from '../../apis/spendingApi'
import { SpendingInterface } from '../../interfaces/spending'

const Spending = () => {
  const [form] = Form.useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [spendings, setSpendings] = useState<SpendingInterface[]>([])

  const getSpending = useCallback(async () => {
    setIsLoading(true)
    const data = await spendingApi.getAllSpending()
    setIsLoading(false)
    console.log(data);
    setSpendings(data?.data)
  }, [])

  useEffect(() => {
    getSpending()
  }, [getSpending])

  const handleCreateSpending = async () => {
    const values = await form.validateFields()
    setIsLoading(true)
    const data = await spendingApi.createSpending(values)
    setIsLoading(false)
    if (data) {
      form.resetFields()
    } else {
      message.error('Them khong thanh cong')
    }
    handleClose && handleClose()
  }

  const { handleOpen, modal: modalAddSpending, handleClose } = useModal({
    title: 'Add Spending',
    isLoading: isLoading,
    modalContent: <ModalAddSpending setIsLoading={setIsLoading} submit={handleCreateSpending} form={form} />,
  })

  const handleBack = () => {
    //
  }

  return (
    <div className="w-full h-full">
      <div className="fixed top-0 left-0 w-full bg-white">
        <div className="w-full h-12 px-4 flex items-center justify-between">
          <span className="cursor-pointer" onClick={handleBack}>{angleLeft('black')}</span>
          <div className="flex items-center text-xs font-semibold text-slate-950">
            10/7 ~ 9/8/2023
          </div>
          <span className="cursor-pointer" onClick={handleBack}>{angleRight('black')}</span>
        </div>

        <div className="flex items-center justify-between w-full h-12 border-b border-slate-300 px-4">
          <div className="text-center">
            <p className="text-slate-950 text-xs font-semibold">Income</p>
            <p className="text-green-500 text-xs font-semibold">1.000.000</p>
          </div>
          <div className="text-center">
            <p className="text-slate-950 text-xs font-semibold">Expense</p>
            <p className="text-red-500 text-xs font-semibold">300.000</p>
          </div>
          <div className="text-center">
            <p className="text-slate-950 text-xs font-semibold">Saving</p>
            <p className="text-slate-950 text-xs font-semibold">700.000</p>
          </div>
        </div>
      </div>

      <div className="pb-20 pt-24">
        {
          [1]?.map((i: number) => {
            return <SpendingDaily key={i} spendings={spendings} />
          })
        }
      </div>

      <div
        className="fixed bottom-20 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-black"
        onClick={handleOpen}
      >{faPlus('white')}</div>

      {modalAddSpending()}
    </div>
  )
}

export default Spending

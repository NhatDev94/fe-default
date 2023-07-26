import { useState } from 'react'
import { angleLeft, angleRight, faPlus } from "../../assets/icons"
import ModalAddSpending from "../../components/Modals/ModalAddSpending"
import { useModal } from "../../hooks"
import SpendingDaily from "./SpendingDaily"

const Spending = () => {
  const [isLoading, setIsLoading] = useState(false)

  const spendings = [
    1, 2, 3, 4, 65, 5, 12,12312313,123121212,1232435
  ]

  const { handleOpen, modal: modalAddSpending } = useModal({
    title: 'Add Spending',
    isLoading: isLoading,
    modalContent: <ModalAddSpending />,
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
          spendings?.map((i: number) => {
            return <SpendingDaily key={i} />
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

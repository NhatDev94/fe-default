import SpendingItem from "./SpendingItem"

const SpendingDaily = () => {
  const spendingInDays = [1, 2, 3]

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
            spendingInDays?.map((i: number) => <SpendingItem key={i} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SpendingDaily

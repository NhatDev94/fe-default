import { SpendingInterface } from "../../interfaces/spending"
interface PropsInterface {
    spending: SpendingInterface,
    handleOpen?: (values: SpendingInterface) => void
}

const SpendingItem = (props: PropsInterface) => {
    const { spending, handleOpen } = props
    return (
        <div className="flex items-center justify-between py-1" onClick={() => handleOpen && handleOpen(spending)}>
            <div className="w-[30%] text-left text-xs font-normal text-slate-500">{spending?.category}</div>
            <div className="w-[30%] text-left ">
                <p className="text-xs font-semibold text-slate-950">{spending?.note}</p>
                <p className="text-xs font-normal text-slate-500">{spending?.account}t</p>
            </div>
            <div className="w-1/5 text-right text-green-500 font-semibold">0</div>
            <div className="w-1/5 text-right text-red-500 font-semibold">{spending?.amount}</div>
        </div>
    )
}

export default SpendingItem



const SpendingItem = () => {
    return (
        <div className="flex items-center justify-between py-1">
            <div className="w-[30%] text-left text-xs font-normal text-slate-500">Lang phi </div>
            <div className="w-[30%] text-left ">
                <p className="text-xs font-semibold text-slate-950">Pizza</p>
                <p className="text-xs font-normal text-slate-500">Tien mat</p>
            </div>
            <div className="w-1/5 text-right text-green-500 font-semibold">0</div>
            <div className="w-1/5 text-right text-red-500 font-semibold">0</div>
        </div>
    )
}

export default SpendingItem

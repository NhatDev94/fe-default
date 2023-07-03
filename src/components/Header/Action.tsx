
const Action = () => {

    const actions = [
        {
            title: 'message',
            icon: 'mes'
        },
        {
            title: 'inbox',
            icon: 'i'
        },
        {
            title: 'profile',
            icon: 'p'
        }
    ]

    return (
        <div className="w-fit h-full  flex items-center justify-center">
            {
                actions?.map((item, index: any) => (
                    <div
                        key={index}
                        className="w-10 h-10 rounded-full mx-2 flex items-center justify-center bg-second cursor-pointer hover:bg-hover"
                    >{item?.icon}</div>
                ))
            }
        </div>
    )
}

export default Action

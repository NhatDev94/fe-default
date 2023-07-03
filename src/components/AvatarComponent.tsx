import { MouseEventHandler } from 'react'

interface PropsInterface {
    url?: string,
    className?: string,
    onClick?: MouseEventHandler,
}

const AvatarComponent = (props: PropsInterface) => {
    const { url, className, onClick } = props

    return (
        <div
            className={`w-8 h-8 rounded-full overflow-hidden ${className || ''}`}
            onClick={onClick}
        >
            <img src={url || ''} alt='avatar' className="w-full h-full object-cover" />
        </div>
    )
}

export default AvatarComponent

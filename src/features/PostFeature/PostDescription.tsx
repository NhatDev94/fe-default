import { useState, useEffect } from 'react'

interface PropsInterface {
    description: string | undefined
}

const PostDescription = (props: PropsInterface) => {
    const { description = '' } = props

    const [showSeeMore, setShowSeeMore] = useState(false)

    useEffect(() => {
        if (description?.length > 140) setShowSeeMore(true)
    }, [description])


    return (
        <div>
            <div className={`text-sm text-black ${showSeeMore ? 'line-clamp-2 overflow-ellipsis' : ''}`}>{description}</div>
            {
                showSeeMore && (
                    <span
                        className='text-xs text-primary font-semibold cursor-pointer hover:underline'
                        onClick={() => setShowSeeMore(false)}
                    >
                        see more
                    </span>
                )
            }
        </div>
    )
}

export default PostDescription

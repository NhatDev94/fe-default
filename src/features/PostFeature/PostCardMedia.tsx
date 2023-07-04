interface MediaInterface {
    name?: string,
    url: string
}

interface PropsInterface {
    medias: MediaInterface[]
}

const PostCardMedia = (props: PropsInterface) => {
    const { medias } = props

    return (
        <div className="">
            <div className="">
                <img src={medias[0]?.url} alt='image' />
            </div>
        </div>
    )
}

export default PostCardMedia

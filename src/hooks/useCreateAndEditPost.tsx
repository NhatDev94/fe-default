import { useState, MouseEventHandler, ChangeEvent } from "react"
import { PostInterFace } from "../interfaces"
import feedApi from "../apis/feedApi"
import { useMutation, useQueryClient } from "react-query"

interface ImageInterface {
    url: string,
}

interface PropsInterface {
    createPostSuccess: () => void
}

const useCreateAndEditPost = (props: PropsInterface) => {
    const { createPostSuccess } = props

    const queryClient = useQueryClient()

    const [description, setDesciption] = useState<string>('')
    const [images, setImages] = useState<ImageInterface[]>([])

    const createPost = async () => {
        const newPost: PostInterFace = {
            description,
            images
        }
        await feedApi.createPost(newPost)
    }

    const { isLoading, mutate } = useMutation(createPost, {
        onSuccess: () => {
            createPostSuccess()
            queryClient.invalidateQueries('feed')
        },
    })

    const onChangeDescription = (value: string) => {
        setDesciption(value)
    }

    const handleCreate = async () => {
        mutate()
    }

    return {
        isLoading,
        description,
        images,
        onChangeDescription,
        setImages,
        handleCreate
    }
}

export default useCreateAndEditPost

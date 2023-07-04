import { PostInterFace } from "../interfaces";

const feedApi = {
    endpoint: 'https://6403f79280d9c5c7babe5f25.mockapi.io/feed',
    getFeed: async (page?: number | undefined, limit?: number | undefined) => {
        try {
            const res = await fetch(feedApi.endpoint + `?page=${page || 1}&limit=${limit || 10}`)
            return res.json()
        } catch (error) {
            console.log(error);

        }
    },
    createPost: async (post: PostInterFace) => {
        console.log(post);

        try {
            const res = await fetch(feedApi.endpoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            return res.json()
        } catch (error) {
            console.log(error);

        }
    },
}

export default feedApi
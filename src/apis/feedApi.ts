const feedApi = {
    endpoint: 'https://jsonplaceholder.typicode.com/posts',
    getFeed: async () => {
        try {
            const res = await fetch(feedApi.endpoint)
            return res.json()      
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default feedApi
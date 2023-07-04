const feedApi = {
    endpoint: 'https://6403f79280d9c5c7babe5f25.mockapi.io/feed',
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
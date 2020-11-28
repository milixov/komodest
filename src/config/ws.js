export default {
    getUser: (page, limit) => {
        return {
            url: `/user?page=${page}&limit=${limit}`,
            method: 'GET'
        }
    },
    getPost: (page, limit) => {
        return {
            url: `/post?page=${page}&limit=${limit}`,
            method: 'GET'
        }
    }
}
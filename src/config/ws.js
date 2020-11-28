export default {
    getUser: () => {
        return {
            url: '/user?page=1&limit=10',
            method: 'GET'
        }
    }
}
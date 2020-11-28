import T from './types'

export const fetchUser = request => ({
    type: T.GET_USER,
    request
})

export default T
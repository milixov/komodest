import T from './types'
import {CACHE_TIME} from '../../config/enums'

export const fetchUser = request => ({
    type: T.GET_USER,
    request,
    meta: {
        cache: CACHE_TIME
    }
})

export const fetchPosts = request => ({
    type: T.GET_POST,
    request,
    meta: {
        cache: CACHE_TIME
    }
})

export default T
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getQuery, resetRequests } from '@redux-requests/core';

import T, { fetchPosts, fetchPostById } from '../../store/actions'
import WS from '../../config/ws'

export const useGetPost = (page, limit) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const { data } = getQuery(state, { type: T.GET_POST });
    
    useEffect(()=> {
        dispatch(fetchPosts(WS.getPost(page, limit)))
    }, [])

    return data;
}

export const useGetPostById = (id) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const { data } = getQuery(state, { type: T.GET_POST_BY_ID });
    
    useEffect(()=> {
        if(id) {
            dispatch(fetchPostById(WS.getPostById(id)))
        }

        return () => {
            dispatch(resetRequests([T.GET_POST_BY_ID]))
        }
    }, [])

    return data; 

}
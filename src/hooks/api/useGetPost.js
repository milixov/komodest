import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from '@redux-requests/core';

import T, { fetchPosts } from '../../store/actions'
import WS from '../../config/ws'

const UseGetPost = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const { data } = getQuery(state, { type: T.GET_POST });
    
    useEffect(()=> {
        dispatch(fetchPosts(WS.getPost(1, 5)))
    }, [])

    return [data];
}

export default UseGetPost;
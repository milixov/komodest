import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from '@redux-requests/core';

import T, { fetchUser } from '../../store/actions'
import WS from '../../config/ws'

const UseGetUser = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const { data } = getQuery(state, { type: T.GET_USER });
    
    useEffect(()=> {
        dispatch(fetchUser(WS.getUser(1, 10)))
    }, [])

    return [data];
}

export default UseGetUser;
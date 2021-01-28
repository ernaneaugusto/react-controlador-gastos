import { useReducer, useEffect } from 'react';
import Axios from 'axios';

const initialState = {
    loading: true,
    data: {}
}

const reducer = (state, action) => {
    if (action.type === 'REQUEST') {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === 'SUCCESS') {
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }

    return state;
}

const useGet = (url) => {
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        dispatch({ type: 'REQUEST' });

        Axios.get(url)
            .then((res) => {
                dispatch({
                    type: 'SUCCESS',
                    data: res.data
                });
            });
    }, []);

    return data;
}

export default useGet;
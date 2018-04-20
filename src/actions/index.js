import { api } from '../utils/constants';
import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAIL } from './types'

export const fetchCoinData = () => {
    return dispatch => {
        dispatch({ type: FETCH_COIN_DATA })
        return api.get('v1/ticker/?limit=10').then(res => {
            dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: FETCH_COIN_DATA_FAIL, payload: err.data })
        });
    }
}
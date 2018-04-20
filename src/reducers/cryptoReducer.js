import { 
    FETCH_COIN_DATA,
    FETCH_COIN_DATA_SUCCESS,
    FETCH_COIN_DATA_FAIL
} from '../actions/types';

const initialState = {
    isLoading: false,
    error: false,
    errorMessage: null,
    data: null
};

const CryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COIN_DATA: {
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                errorMessage: null,
            })
        }
        case FETCH_COIN_DATA_SUCCESS: {
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                errorMessage: null,
                data: action.payload
            })
        }
        case FETCH_COIN_DATA_FAIL: {
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                errorMessage: action.err,
            })
        }
        default: {
            return state;
        }
    }
};
  
export default CryptoReducer;
import { combineReducers } from "redux";
import CryptoReducer from './cryptoReducer.js';

export default combineReducers({
    crypto: CryptoReducer
});
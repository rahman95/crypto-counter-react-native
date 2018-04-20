import axios from 'axios';

export const apiBaseUrl = 'https://api.coinmarketcap.com/';
export const coinImageBaseUrl = 'https://raw.githubusercontent.com/rahman95/cryptocurrency-icons/master/32/color/'

export const api = axios.create({
    baseURL: apiBaseUrl,
});
import axios from 'axios';

const apiBaseUrl = 'https://api.coinmarketcap.com/';
export const api = axios.create({
    baseURL: apiBaseUrl,
});
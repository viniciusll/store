import axios from 'axios';

const appHostApi = 'https://fakestoreapi.com/';

const api = axios.create({
    baseURL: appHostApi
});

export default api;
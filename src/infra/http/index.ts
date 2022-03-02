import axios from 'axios';

let appHostApi = process.env.APP_HOST_API as string;

let api = axios.create({
    baseURL: appHostApi
});
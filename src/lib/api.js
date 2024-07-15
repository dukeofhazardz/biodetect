import axios from "axios";

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    crossdomain: true,
});

export default api;
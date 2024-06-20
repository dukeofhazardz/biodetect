import axios from "axios";

//http://localhost:10000

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    crossdomain: true,
});

export default api;
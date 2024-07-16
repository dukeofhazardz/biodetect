import axios from "axios";

const api = axios.create({
    baseURL: 'https://biodetect-api.onrender.com',
    withCredentials: true,
    crossdomain: true,
});

export default api;
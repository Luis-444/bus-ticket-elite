import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://unova.fun/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
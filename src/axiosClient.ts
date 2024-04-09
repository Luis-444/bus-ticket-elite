import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://165.22.46.97:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
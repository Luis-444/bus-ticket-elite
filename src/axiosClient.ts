import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://unova.fun/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

//interceptor
axiosClient.interceptors.request.use(
    config => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if(user){
            const token = user.token;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosClient;
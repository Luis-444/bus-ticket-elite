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
        const user = localStorage.getItem('user');
        const jsonUser = JSON.parse(user || '{}');
        if(user){
            const token = jsonUser.token;
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
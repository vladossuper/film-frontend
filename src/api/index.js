import axios from 'axios';

const apiURL = 'http://localhost:5000';

const instance = axios.create({
    headers: {
        accept: 'application/json',
        'content-type': 'application/json'
    }
})

instance.interceptors.request.use(config => {
    config.params = {...config.params};
    return config;
    }, error => {
      return Promise.reject(error);
  });

export default {
    get: ({ params, path }) => instance.get(`${apiURL}/${path}`, { params }),
    post: ({ params, path }) => instance.post(`${apiURL}/${path}`, params)
};
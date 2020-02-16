import axios from 'axios';

const api = axios.create({
  baseURL: 'http://64.227.84.225:2222',
});

export default api;

import axios from 'axios';

const api = axios.create({
  baseURL: "https://cloudy-api.vercel.app",
});

export default api;
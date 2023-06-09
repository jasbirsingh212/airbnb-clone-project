import axios from 'axios';
console.log("url", import.meta.env.VITE_BACKEND_API_BASE_URL);
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API_BASE_URL;


export default axios;
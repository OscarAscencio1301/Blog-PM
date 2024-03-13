import axios from "axios";
const blogAPI = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
});

export default blogAPI;

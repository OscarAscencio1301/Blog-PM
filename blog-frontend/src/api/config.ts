import axios from "axios";
const blogAPI = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
});

blogAPI.interceptors.request.use(
  (config) => {
    config.headers["jwt"] = `${localStorage.getItem("jwt")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default blogAPI;

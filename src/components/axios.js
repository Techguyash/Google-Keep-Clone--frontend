import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/keep",
});

export default axiosInstance;

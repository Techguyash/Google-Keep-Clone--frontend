import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/keep",
  // baseURL: "https://gkeep.azurewebsites.net/keep",
});

export default axiosInstance;

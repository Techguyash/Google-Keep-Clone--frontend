import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/keep",
  // baseURL: "https://keepclone-keep.azuremicroservices.io/keep",
});

export default axiosInstance;

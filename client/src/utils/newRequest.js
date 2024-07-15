import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/", // Use a relative path without the domain and port
  withCredentials: true,
});

export default newRequest;
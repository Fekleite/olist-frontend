import axios from "axios";

const api = axios.create({
  baseURL: "http://larigr.pythonanywhere.com/api",
});

export default api;

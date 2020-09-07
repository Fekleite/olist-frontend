import axios from "axios";

const api = axios.create({
  baseURL: "https://larigr.pythonanywhere.com/api",
});

export default api;

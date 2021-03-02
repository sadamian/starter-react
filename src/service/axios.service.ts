import axios from "axios";
const apiUrl = process.env.REACT_APP_BACK_URL;

export const instanceAxios = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

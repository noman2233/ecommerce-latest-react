import axios from "axios";
const BASE_URL = "http://127.0.0.1:80/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `${TOKEN}` },
});

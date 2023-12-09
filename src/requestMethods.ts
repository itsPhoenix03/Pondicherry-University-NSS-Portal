import axios from "axios";

// const BASE_URL = "";
const LOCALHOST_URL = "http://localhost:8080/api/";

export const localRequest = axios.create({
  baseURL: LOCALHOST_URL,
});

export const publicRequest = axios.create({
  baseURL: LOCALHOST_URL,
});

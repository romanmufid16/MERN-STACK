import axios from "axios";

export const axiosProduct = axios.create({
  baseURL: "http://localhost:5000/api/products"
});

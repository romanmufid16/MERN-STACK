import axios from "axios";

export const axiosProduct = axios.create({
  baseURL: "https://product-mern-three.vercel.app/api/products"
});

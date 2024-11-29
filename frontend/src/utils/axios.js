import axios from "axios";

export const axiosProduct = axios.create({
  baseURL: "https://mern-stack-three-theta.vercel.app/api/products"
});

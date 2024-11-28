import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controller.js";

export const productRoute = express.Router();

productRoute.post('/', createProduct);
productRoute.delete('/:id', deleteProduct);
productRoute.get('/', getProducts);
productRoute.get('/:id', getProductById);
productRoute.put('/:id', updateProduct);
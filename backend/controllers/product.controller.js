import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Invalid Product ID' });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Invalid Product ID' });
  }
  
  try {
    const product = await Product.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Invalid Product ID' });
  }

  try {
    const data = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error : ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
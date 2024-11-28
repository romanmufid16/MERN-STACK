import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./config/mongo.js";
import { productRoute } from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  databaseConnection();
  console.log("Server started at http://localhost:5000");
});
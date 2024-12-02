import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { databaseConnection } from "./config/mongo.js";
import { productRoute } from "./routes/product.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
	origin: 'https://product-mern-three.vercel.app/'
}));
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use('/api/products', productRoute);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
  databaseConnection();
  console.log("Server started at http://localhost:" + PORT);
});
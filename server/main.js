import express from "express";
import dotenv from "dotenv";

import products from "#data/product.data.js";
import connectDB from "#config/db.config.js";

dotenv.config();

const port = process.env.PORT || 4000;
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});
app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.listen(port, () => {
  console.log(`Server is running on ${process.env.NODE_ENV} on port ${port}`);
});

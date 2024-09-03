import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";

import connectDB from "#config/db.config.js";
import productRoutes from "#routes/product.route.js";
import userRoutes from "#routes/user.route.js";
import { errorHandler } from "#middlewares/error.middleware.js";

dotenv.config();

const port = process.env.PORT || 4000;

connectDB();

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.NODE_ENV} on port ${port}`.bgYellow.bold
  );
});

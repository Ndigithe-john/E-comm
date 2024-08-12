import colors from "colors";
import dotenv from "dotenv";

import connectDB from "#config/db.config.js";
import products from "#data/product.data.js";
import users from "#data/users.data.js";
import OrderModel from "#models/order.model.js";
import UserModel from "#models/user.model.js";
import ProductModel from "#models/product.models.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();

    const createdUser = await UserModel.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await ProductModel.insertMany(sampleProducts);
    console.log("Data imported".green.inverse.bold);
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();

    console.log("Data Destroyed".red.inverse.bold);
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
// destroyData();
// importData();

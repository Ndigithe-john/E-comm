import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User full name is required"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: [true, "User email must be unique"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "User admin status is required"],
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);
userSchema.methods.matchPassword = async function (enteredPassowrd) {
  return await bcrypt.compare(enteredPassowrd, this.password);
};
const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

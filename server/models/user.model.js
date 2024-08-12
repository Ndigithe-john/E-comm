import mongoose from "mongoose";

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
const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

import express from "express";

import {
  deleteUser,
  getUserById,
  getUserProfile,
  loginUser,
  registerUser,
  getUsers,
  upadateUser,
  updateUserProfile,
  logoutUser,
} from "#controllers/user.controller.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).delete(deleteUser).put(upadateUser);

export default router;

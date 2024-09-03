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
import { adminProtect, protect } from "#middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, adminProtect, getUsers);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect, adminProtect, getUserById)
  .delete(protect, adminProtect, deleteUser)
  .put(protect, adminProtect, upadateUser);

export default router;

import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  isTokenBlacklisted,
} from "../controllers/userController.js";
import auth from "../middleware/auth.js"; // Middleware to check for valid token

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", auth, isTokenBlacklisted, logoutUser); // Protected logout route

export default router;

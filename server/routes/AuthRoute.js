import express from "express";
import { loginUser, registerUser, loginGoogle } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logingoogle", loginGoogle)

export default router;
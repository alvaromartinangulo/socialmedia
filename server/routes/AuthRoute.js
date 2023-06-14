import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/", loginUser);

export default router;
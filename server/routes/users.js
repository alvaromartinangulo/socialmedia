import express from "express";
import { loginUser, registerUser } from "../controllers/users.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/", loginUser);

export default router;
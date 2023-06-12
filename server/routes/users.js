import express from "express";
import { loginUser, registerUser } from "../controllers/users";

const router = express.Router();

router.post("/", registerUser);
router.post("/", loginUser);

export default router;
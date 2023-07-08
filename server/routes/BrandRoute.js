import express from "express";
import { getBrand, getBrandPosts } from "../controllers/BrandController.js";

const router = express.Router();

router.get('/:id', getBrand)
router.get('/:id/posts', getBrandPosts)

export default router;
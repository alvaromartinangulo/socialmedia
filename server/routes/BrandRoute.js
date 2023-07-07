import express from "express";
import { getBrand } from "../controllers/BrandController.js";

const router = express.Router();

router.get('/:id', getBrand)

export default router;
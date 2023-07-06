
import BrandModel from "../models/BrandModel.js";
import mongoose from "mongoose";

export const getBrand = async (req, res) => {
    const id = req.params.id;
  
    try {
      const brand = await BrandModel.findById(id);
      if (brand) {
        res.status(200).json(brand);
      } else {
        res.status(404).json("No such Brand");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
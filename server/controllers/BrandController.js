
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

  export const getBrandPosts = async (req, res) => {
    const brandId = req.params.id
    try {
      const brandPosts = await BrandModel.aggregate([
        { 
          $match: {
            _id: new mongoose.Types.ObjectId(brandId),
          }
        },
        {
          $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "store_ID",
            as: "brandPosts",
          }
        },
        {
          $project: {
            brandPosts: 1,
            _id: 0
          }
        },
      ]);
  
      res.status(200).json(
       brandPosts[0].brandPosts
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };
import UserModel from "../models/UserModel.js";
import BrandModel from "../models/BrandModel.js"
import mongoose from "mongoose";

// Get a user
export const getUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await UserModel.findById(id);
      if (user) {
        const { password, ...otherDetails } = user._doc;
  
        res.status(200).json(otherDetails);
      } else {
        res.status(404).json("No such User");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

// Get all users
export const getAllUsers = async (req, res) => {

try {
    let users = await UserModel.find();
    users = users.map((user)=>{
    const {password, ...otherDetails} = user._doc
    return otherDetails
    })
    res.status(200).json(users);
} catch (error) {
    res.status(500).json(error);
}
};

// Delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id;
  
    const { currentUserId, currentUserAdmin } = req.body;
  
    if (currentUserId == id || currentUserAdmin) {
      try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json("User Deleted Successfully!");
      } catch (error) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("Access Denied!");
    }
  };
  
// Follow a Brand
export const followBrand = async (req, res) => {
const id = req.params.id;
const { userId } = req.body;
try {
    const followBrand = await BrandModel.findById(id);
    const followingUser = await UserModel.findById(userId);

    if (!followBrand.followers.includes(new mongoose.Types.ObjectId(userId))) {
        await followBrand.updateOne({ $push: { followers: new mongoose.Types.ObjectId(userId) } });
        await followingUser.updateOne({ $push: { following: new mongoose.Types.ObjectId(id) } });
        res.status(200).json("Brand followed!");
    } else {
        res.status(403).json("you are already following this id");
    }
} catch (error) {
    res.status(500).json(userId);
}
};

// Unfollow a Brand
export const unfollowBrand = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
      const unFollowBrand = await BrandModel.findById(id)
      const unFollowingUser = await UserModel.findById(userId)
      if (unFollowBrand.followers.includes(new mongoose.Types.ObjectId(userId)))
      {
        await unFollowBrand.updateOne({$pull : {followers: new mongoose.Types.ObjectId(userId)}})
        await unFollowingUser.updateOne({$pull : {following: new mongoose.Types.ObjectId(id)}})
        res.status(200).json("Unfollowed Successfully!")
      }
      else{
        res.status(403).json("You are not following this User")
      }
    } catch (error) {
      res.status(500).json(userId)
    }
  };
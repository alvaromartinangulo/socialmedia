import PostModel from "../models/PostModel.js";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
    const id = req.params.id;
  
    try {
      const post = await PostModel.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };


export const likePost = async (req, res) => {
const id = req.params.id;
const {userId}  = req.body;
try {
    const post = await PostModel.findById(id);
    const user = await UserModel.findById(userId);
    if (post['likes'].includes(userId)) {
    await post.updateOne({ $pull: { likes: new mongoose.Types.ObjectId(userId) } });
    await user.updateOne({ $pull: { likedPosts: new mongoose.Types.ObjectId(id) } })
    res.status(200).json("Post disliked");
    } else {
    await post.updateOne({ $push: { likes: new mongoose.Types.ObjectId(userId) } });
    await user.updateOne({ $push: { likedPosts: new mongoose.Types.ObjectId(id) } })
    res.status(200).json("Post liked");
    }
} catch (error) {
    res.status(500).json(error);
}
};

// Get timeline posts
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id
  try {
    const followingPosts = await UserModel.aggregate([
      { 
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        }
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "store_ID",
          as: "followingPosts",
        }
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0
        }
      },
    ]);
    console.log(followingPosts[0].followingPosts)

    res.status(200).json(
     followingPosts[0].followingPosts
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getLikedPosts = async (req, res) => {
  const userId = req.params.id
  try {
    const likedPosts = await UserModel.aggregate([
      { 
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        }
      },
      {
        $lookup: {
          from: "posts",
          localField: "likedPosts",
          foreignField: "_id",
          as: "likedPostsRes",
        }
      },
      {
        $project: {
          likedPostsRes: 1,
          _id: 0
        }
      },
    ]);

    res.status(200).json(
     likedPosts[0].likedPostsRes
    );
  } catch (error) {
    res.status(500).json(error);
  }
};


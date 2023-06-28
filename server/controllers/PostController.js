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
const { userId } = req.body;
try {
    const post = await PostModel.findById(id);
    const user = await UserModel.findById(userId);
    if (post.likes.includes(userId)) {
    await post.updateOne({ $pull: { likes: userId } });
    await user.updateOne({ $pull: { likedPosts: id } })
    res.status(200).json("Post disliked");
    } else {
    await post.updateOne({ $push: { likes: userId } });
    await user.updateOne({ $push: { likedPosts: id } })
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
          foreignField: "source",
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

    res.status(200).json(
     followingPosts[0].followingPosts
    );
  } catch (error) {
    res.status(500).json(error);
  }
};


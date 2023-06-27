import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      username: {
        type: String,
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
      },
      firstname: String,
      lastname: String,
      profilePicture: String,
      about: String,
      country: String,
      followers: [],
      following: [],
      likedPosts:[],

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

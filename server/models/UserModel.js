import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      username: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      profilePicture: String,
      about: String,
      country: String,
      followers: [],
      following: [],

}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

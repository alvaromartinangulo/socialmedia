import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    name: String,
    displayName: String,
    posts: [],
    profilePic: String,
    banner: String,
    followers: [],
})

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
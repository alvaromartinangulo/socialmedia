import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    name: String,
    url: String,
    posts: [],
    profile_picture: String,
    banner: String,
    followers: [],
})

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
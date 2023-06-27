import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    name: String,
    displayName: String,
    posts: [],
})

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    price: String,
    link: String,
    desc: String,
    source: String,
    likes:[],
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const Post = mongoose.model('Post', postSchema);

export default Post;
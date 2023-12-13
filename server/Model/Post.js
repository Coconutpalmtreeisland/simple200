const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    postNum: Number,
    // 이미지 추가
    image: String,
}, { collection: "write" });

const Post = mongoose.model("Post", postSchema);


module.exports = { Post };